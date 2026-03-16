/*
 * ============================================
 *   КОНТЕНТ САЙТА НеХалат
 *   Редактируй этот файл или используй admin.html
 * ============================================
 */

const SITE_CONTENT = {

  /* --- ШАПКА САЙТА --- */
  logo: 'images/logo.jpg',

  /* --- ГЛАВНЫЙ ЭКРАН (Hero) --- */
  hero: {
    subtitle: 'Одежда с принтами для медиков и ветеринаров',
    buttonText: 'Смотреть каталог',
  },

  /* --- КАТАЛОГ --- */
  catalogTitle: 'Каталог',
  filterAll: 'Все',
  filterTshirts: 'Футболки',
  filterHoodies: 'Худи',

  products: [
    {
      name: 'Футболка «Сотворение хирургии»',
      price: 2900,
      oldPrice: null,        // старая цена (null = не показывать)
      type: 'tshirt',        // tshirt или hoodie
      colors: ['#ffffff', '#1a1a1a'],
      badge: null,           // NEW, SALE, ХИТ или null
      image: 'images/t-creation.jpg',
    },
    {
      name: 'Футболка «Стетоскоп»',
      price: 2900,
      oldPrice: null,
      type: 'tshirt',
      colors: ['#ffffff', '#1a1a1a', '#1652a0'],
      badge: null,
      image: null,           // null = автоматический плейсхолдер
    },
    {
      name: 'Худи «Сотворение хирургии»',
      price: 4900,
      oldPrice: null,
      type: 'hoodie',
      colors: ['#f0a890', '#1a1a1a', '#ffffff'],
      badge: 'NEW',
      image: 'images/hoodie-creation.jpg',
    },
    {
      name: 'Футболка «ЭКГ»',
      price: 2900,
      oldPrice: 3400,
      type: 'tshirt',
      colors: ['#ffffff', '#1a1a1a'],
      badge: 'SALE',
      image: null,
    },
    {
      name: 'Худи «Ветеринар»',
      price: 4900,
      oldPrice: null,
      type: 'hoodie',
      colors: ['#e8ddd3', '#1a1a1a'],
      badge: null,
      image: null,
    },
    {
      name: 'Футболка «Анатомия»',
      price: 2900,
      oldPrice: null,
      type: 'tshirt',
      colors: ['#ffffff', '#1a1a1a'],
      badge: null,
      image: null,
    },
    {
      name: 'Худи «Лапки»',
      price: 4900,
      oldPrice: null,
      type: 'hoodie',
      colors: ['#c8d8c4', '#ffffff'],
      badge: 'NEW',
      image: null,
    },
    {
      name: 'Футболка «Пульс»',
      price: 2900,
      oldPrice: null,
      type: 'tshirt',
      colors: ['#1a1a1a', '#ffffff'],
      badge: null,
      image: null,
    },
  ],

  /* --- О БРЕНДЕ --- */
  aboutTitle: 'О бренде',
  features: [
    { title: 'Авторские принты', text: 'Уникальные дизайны, созданные с любовью к медицине и ветеринарии' },
    { title: 'Качественные ткани', text: 'Футболки — 100% хлопок. Худи — 80% хлопок, 20% полиэстер. Стойкая печать' },
    { title: 'Доставка по России', text: 'Отправляем в любой город. Бесплатная доставка от 5 000 ₽' },
  ],

  /* --- ФУТЕР --- */
  footerText: 'Стильная одежда с принтами для тех, кто гордится своей профессией',
  contactEmail: 'hello@nehalat.ru',
  instagramUrl: '#',
  whatsappUrl: '#',
  copyright: '© 2026 НеХалат. Все права защищены.',
};
