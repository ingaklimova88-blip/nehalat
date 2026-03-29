/*
 * ============================================
 *   КОНТЕНТ САЙТА НеХалат
 *   Редактируй этот файл или используй admin.html
 * ============================================
 */

const SITE_CONTENT = {

  /* --- ШАПКА --- */
  logo: 'images/logo.jpg',
  phone: '+7 (999) 123-45-67',
  navLinks: [
    { label: 'Футболки', filter: 'tshirt' },
    { label: 'Худи', filter: 'hoodie' },
    { label: 'Для медиков', filter: 'medical' },
    { label: 'Для ветеринаров', filter: 'vet' },
  ],

  /* --- БАННЕР (над каталогом) --- */
  banner: {
    show: true,
    text: 'Бесплатная доставка при заказе от 5 000 ₽',
  },

  /* --- КАТАЛОГ --- */
  catalogTitle: 'ОДЕЖДА С ПРИНТАМИ ДЛЯ МЕДИКОВ',
  catalogSubtitle: 'Футболки и худи с авторскими принтами для врачей и ветеринаров',

  products: [
    {
      name: 'Футболка «Сотворение хирургии»',
      price: 2900,
      oldPrice: null,
      type: 'tshirt',
      tags: ['medical'],
      colors: ['#ffffff', '#1a1a1a'],
      sizes: 'XS — XXL',
      badge: null,
      image: 'images/t-creation.jpg',
    },
    {
      name: 'Футболка «Стетоскоп»',
      price: 2900,
      oldPrice: null,
      type: 'tshirt',
      tags: ['medical'],
      colors: ['#ffffff', '#1a1a1a', '#1652a0'],
      sizes: 'XS — XXL',
      badge: null,
      image: null,
    },
    {
      name: 'Худи «Сотворение хирургии»',
      price: 4900,
      oldPrice: null,
      type: 'hoodie',
      tags: ['medical'],
      colors: ['#f0a890', '#1a1a1a', '#ffffff'],
      sizes: 'S — XXL',
      badge: 'NEW',
      image: 'images/hoodie-creation.jpg',
    },
    {
      name: 'Футболка «ЭКГ»',
      price: 2900,
      oldPrice: 3400,
      type: 'tshirt',
      tags: ['medical'],
      colors: ['#ffffff', '#1a1a1a'],
      sizes: 'XS — XXL',
      badge: 'SALE',
      image: null,
    },
    {
      name: 'Худи «Ветеринар»',
      price: 4900,
      oldPrice: null,
      type: 'hoodie',
      tags: ['vet'],
      colors: ['#e8ddd3', '#1a1a1a'],
      sizes: 'S — XXL',
      badge: null,
      image: null,
    },
    {
      name: 'Футболка «Анатомия»',
      price: 2900,
      oldPrice: null,
      type: 'tshirt',
      tags: ['medical'],
      colors: ['#ffffff', '#1a1a1a'],
      sizes: 'XS — XXL',
      badge: null,
      image: null,
    },
    {
      name: 'Худи «Лапки»',
      price: 4900,
      oldPrice: null,
      type: 'hoodie',
      tags: ['vet'],
      colors: ['#c8d8c4', '#ffffff'],
      sizes: 'S — XXL',
      badge: 'NEW',
      image: null,
    },
    {
      name: 'Футболка «Пульс»',
      price: 2900,
      oldPrice: null,
      type: 'tshirt',
      tags: ['medical'],
      colors: ['#1a1a1a', '#ffffff'],
      sizes: 'XS — XXL',
      badge: null,
      image: null,
    },
  ],

  /* --- ПРЕИМУЩЕСТВА (иконки под каталогом) --- */
  advantages: [
    { icon: 'truck', title: 'Бесплатная доставка', text: 'от 5 000 ₽' },
    { icon: 'shield', title: 'Гарантия возврата', text: '14 дней' },
    { icon: 'star', title: '100% хлопок', text: 'премиум качество' },
    { icon: 'clock', title: 'Быстрая отправка', text: '1–2 рабочих дня' },
  ],

  /* --- SEO-ТЕКСТ (внизу страницы, как у redplus) --- */
  seoTitle: 'Одежда с принтами для медиков и ветеринаров',
  seoText: 'Интернет-магазин НеХалат предлагает стильные футболки и худи с авторскими принтами для врачей, хирургов и ветеринаров. Мы используем 100% хлопок для футболок и качественную смесовую ткань для худи (80% хлопок, 20% полиэстер). Стойкая печать не выцветает после стирки. Доставка по всей России службами СДЭК и Почтой России.',

  /* --- ФУТЕР --- */
  footerAbout: 'Стильная одежда с принтами для тех, кто гордится своей профессией.',
  contactEmail: 'hello@nehalat.ru',
  contactPhone: '+7 (999) 123-45-67',
  instagramUrl: '#',
  whatsappUrl: '#',
  copyright: '© 2026 НеХалат. Все права защищены.',
};
