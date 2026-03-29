<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { exit(0); }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

/* === НАСТРОЙКИ Т-БАНКА === */
$TERMINAL_KEY = '1761035548725';
$PASSWORD      = 'GghQLp4h*Fqw_3DV';
$TBANK_URL     = 'https://securepay.tinkoff.ru/v2/Init';
$SITE_URL      = 'https://xn--80aanzh8ar.xn--p1ai';

/* === ПОЛУЧАЕМ ДАННЫЕ ОТ ФРОНТЕНДА === */
$input = json_decode(file_get_contents('php://input'), true);

$product = isset($input['product']) ? trim($input['product']) : '';
$amount  = isset($input['amount'])  ? intval($input['amount'])  : 0;
$email   = isset($input['email'])   ? trim($input['email'])     : '';
$phone   = isset($input['phone'])   ? trim($input['phone'])     : '';
$size    = isset($input['size'])    ? trim($input['size'])       : '';
$color   = isset($input['color'])   ? trim($input['color'])     : '';

if (!$product || $amount < 100) {
    echo json_encode(['success' => false, 'error' => 'Не указан товар или сумма']);
    exit;
}

/* === ФОРМИРУЕМ ЗАКАЗ === */
$orderId = 'NH-' . time() . '-' . rand(1000, 9999);
$amountKopeks = $amount * 100; // Т-Банк принимает копейки

$description = $product;
if ($size) $description .= ', размер: ' . $size;
if ($color) $description .= ', цвет: ' . $color;

$params = [
    'TerminalKey' => $TERMINAL_KEY,
    'Amount'      => $amountKopeks,
    'OrderId'     => $orderId,
    'Description' => mb_substr($description, 0, 250),
    'SuccessURL'  => $SITE_URL . '/success.html?order=' . $orderId,
    'FailURL'     => $SITE_URL . '/fail.html?order=' . $orderId,
];

/* Данные покупателя */
$data = [];
if ($email) $data['Email'] = $email;
if ($phone) $data['Phone'] = $phone;
if (!empty($data)) {
    $params['DATA'] = $data;
}

/* Чек (Receipt) для 54-ФЗ */
if ($email || $phone) {
    $params['Receipt'] = [
        'Email'    => $email ?: 'nehalat@yandex.ru',
        'Phone'    => $phone ?: '',
        'Taxation' => 'usn_income', // УСН доходы, поменяй если другая система
        'Items'    => [[
            'Name'     => mb_substr($product, 0, 128),
            'Price'    => $amountKopeks,
            'Quantity' => 1.00,
            'Amount'   => $amountKopeks,
            'Tax'      => 'none', // без НДС
            'PaymentMethod' => 'full_payment',
            'PaymentObject' => 'commodity',
        ]],
    ];
}

/* === ГЕНЕРАЦИЯ ТОКЕНА === */
/* Берём все скалярные параметры (без Token, Receipt, DATA, Shops, Items) + Password */
$tokenParams = [];
$excludeKeys = ['Token', 'Receipt', 'DATA', 'Shops', 'Items'];
foreach ($params as $k => $v) {
    if (in_array($k, $excludeKeys)) continue;
    if (is_array($v) || is_object($v)) continue;
    $tokenParams[$k] = (string)$v;
}
$tokenParams['Password'] = $PASSWORD;
ksort($tokenParams);
$tokenStr = implode('', array_values($tokenParams));
$params['Token'] = hash('sha256', $tokenStr);

/* === ОТПРАВЛЯЕМ ЗАПРОС В Т-БАНК === */
$ch = curl_init($TBANK_URL);
curl_setopt_array($ch, [
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => json_encode($params),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
    CURLOPT_TIMEOUT        => 15,
]);
$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlErr  = curl_error($ch);
curl_close($ch);

if ($curlErr) {
    echo json_encode(['success' => false, 'error' => 'Ошибка соединения с банком: ' . $curlErr]);
    exit;
}

$result = json_decode($response, true);

if (isset($result['PaymentURL'])) {
    /* Сохраняем заказ в лог */
    $log = date('Y-m-d H:i:s') . " | $orderId | $product | {$amount}р | $email | $phone | $size | $color\n";
    file_put_contents(__DIR__ . '/orders.log', $log, FILE_APPEND | LOCK_EX);

    echo json_encode([
        'success'    => true,
        'paymentUrl' => $result['PaymentURL'],
        'orderId'    => $orderId,
    ]);
} else {
    $errMsg = isset($result['Message']) ? $result['Message'] : 'Неизвестная ошибка';
    $errDet = isset($result['Details']) ? $result['Details'] : '';
    echo json_encode([
        'success' => false,
        'error'   => $errMsg . ($errDet ? ': ' . $errDet : ''),
    ]);
}
