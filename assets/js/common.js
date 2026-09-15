/*
  Общий файл сайта Lumino: боковое меню, шапка, подвал, правая колонка с виджетами,
  мобильное меню, счётчик Яндекс.Метрики, рекламные блоки.

  Чтобы поменять пункты меню, название сайта или ID счётчика/рекламы — правь только
  блок SITE_CONFIG ниже. Дизайн (цвета, отступы) — в assets/css/style.css.

  Хлебные крошки и теги задаются на каждой странице отдельно (см. articles/_template.html) —
  это делает страница, а не common.js, ищи там window.PAGE_CRUMBS.
*/

var SITE_CONFIG = {
  siteName: "LUMINO",
  tagline: "Гармония · Знания · Вдохновение",
  baseUrl: "https://natalydes-cell.github.io", // поменять после покупки домена
  yandexMetrikaId: null,          // вписать номер счётчика после регистрации в Яндекс.Метрике
  yandexAdBlockId: null,          // вписать ID рекламного блока после подключения РСЯ
  nav: [
    { title: "Дыхание",              href: "/articles/dyhanie/",        icon: "ic-breath",     ready: false },
    { title: "Пульс планеты",        href: "/articles/puls-planety/",   icon: "ic-pulse",      ready: false },
    { title: "Нумерология",          href: "/articles/numerologiya/",   icon: "ic-numerology", ready: true  },
    { title: "Натальная карта",      href: "/articles/natalnaya-karta/",icon: "ic-natal",      ready: true  },
    { title: "Human Design",         href: "/articles/human-design/",   icon: "ic-hd",         ready: false },
    { title: "Хологенетика",         href: "/articles/hologenetika/",   icon: "ic-holo",       ready: false },
    { title: "Чакры",                href: "/articles/chakry/",         icon: "ic-chakra",     ready: false },
    { title: "Медитации",            href: "/articles/meditacii/",      icon: "ic-lotus",      ready: false },
    { title: "Камни",                href: "/articles/kamni/",          icon: "ic-crystal",    ready: false },
    { title: "Ароматерапия",         href: "/articles/aromaterapiya/",  icon: "ic-drop",       ready: false },
    { title: "Сакральная геометрия", href: "/articles/sakralnaya-geometriya/", icon: "ic-geometry", ready: false }
  ]
};

/*
  Реестр статей — используется для страницы тегов (/tags/), чтобы собирать
  все статьи с одним тегом на одной странице без отдельного файла на каждый тег.

  ВАЖНО: при добавлении новой статьи добавляй её и сюда (иначе она не найдётся
  по тегам), и в index.html соответствующего раздела (карточка в списке).
*/
var ARTICLES = [
  { title: "Что такое квадрат Пифагора и как его построить по дате рождения", href: "/articles/numerologiya/chto-takoe-kvadrat-pifagora.html", cat: "Нумерология", excerpt: "Откуда взялась методика, как посчитать четыре рабочих числа и разместить цифры в квадрате 3×3 — с примером расчёта.", tags: ["нумерология", "квадрат Пифагора", "психоматрица", "дата рождения"] },
  { title: "Первое рабочее число: характер и сила воли", href: "/articles/numerologiya/pervoe-rabochee-chislo-harakter.html", cat: "Нумерология", excerpt: "Что означает количество единиц в квадрате — от нехватки характера до избытка упорства, и как это читать без крайностей.", tags: ["нумерология", "квадрат Пифагора", "характер", "психоматрица"] },
  { title: "Энергетика, здоровье и трудолюбие в квадрате", href: "/articles/numerologiya/energiya-zdorovie-trudolyubie.html", cat: "Нумерология", excerpt: "Три ячейки, которые отвечают за жизненный тонус, склонность к болезням и отношение к труду — разбираем по отдельности.", tags: ["нумерология", "квадрат Пифагора", "здоровье", "энергия", "трудолюбие"] },
  { title: "Логика, интуиция и удача: как читать оставшиеся ячейки", href: "/articles/numerologiya/logika-intuiciya-udacha.html", cat: "Нумерология", excerpt: "Логика, склонность к интуитивному познанию, удача, чувство долга и память — пять ячеек, которые редко разбирают подробно.", tags: ["нумерология", "квадрат Пифагора", "логика", "интуиция", "удача"] },
  { title: "Как использовать расчёт квадрата Пифагора на практике", href: "/articles/numerologiya/kak-ispolzovat-raschet-na-praktike.html", cat: "Нумерология", excerpt: "Собираем полную картину по всем девяти ячейкам, разбираем частые ошибки при самостоятельном расчёте и границы метода.", tags: ["нумерология", "квадрат Пифагора", "самопознание", "психоматрица"] },
  { title: "Что такое натальная карта и как её строят", href: "/articles/natalnaya-karta/chto-takoe-natalnaya-karta.html", cat: "Натальная карта", excerpt: "Какие данные нужны для расчёта, из чего состоит карта и в чём ключевое различие тропического и сидерического зодиака.", tags: ["натальная карта", "астрология", "зодиак", "джйотиш"] },
  { title: "Планеты в натальной карте: общее значение", href: "/articles/natalnaya-karta/planety-v-natalnoy-karte.html", cat: "Натальная карта", excerpt: "Что символизирует каждая планета — от Солнца до Сатурна — и где смысл совпадает в обеих традициях, а где расходится.", tags: ["натальная карта", "планеты", "астрология"] },
  { title: "Дома натальной карты: 12 сфер жизни", href: "/articles/natalnaya-karta/doma-natalnoy-karty.html", cat: "Натальная карта", excerpt: "За что отвечает каждый из 12 домов — от личности и денег до отношений и карьеры.", tags: ["натальная карта", "дома", "бхавы", "астрология"] },
  { title: "Знаки зодиака в западной астрологии", href: "/articles/natalnaya-karta/znaki-zodiaka-zapadnaya-astrologiya.html", cat: "Натальная карта", excerpt: "Стихии, качества и характеристики 12 знаков тропического зодиака.", tags: ["натальная карта", "знаки зодиака", "западная астрология"] },
  { title: "Аспекты между планетами", href: "/articles/natalnaya-karta/aspekty-mezhdu-planetami.html", cat: "Натальная карта", excerpt: "Соединения, квадраты, трины и оппозиции — как по углам между планетами читают напряжение и гармонию в карте.", tags: ["натальная карта", "аспекты", "западная астрология"] },
  { title: "Основы джйотиша: сидерический зодиак и накшатры", href: "/articles/natalnaya-karta/osnovy-dzhyotisha-nakshatry.html", cat: "Натальная карта", excerpt: "27 лунных стоянок и почему ведическая астрология смотрит на Луну там, где западная смотрит на Солнце.", tags: ["натальная карта", "джйотиш", "накшатры", "ведическая астрология"] },
  { title: "Раши, бхавы и даши в джйотише", href: "/articles/natalnaya-karta/rashi-bhavy-dashi-dzhyotish.html", cat: "Натальная карта", excerpt: "Дома и планетные периоды — то, что задаёт хронологию жизненных событий в ведической астрологии.", tags: ["натальная карта", "джйотиш", "даши", "ведическая астрология"] },
  { title: "Западная и ведическая астрология: в чём разница и как выбрать подход", href: "/articles/natalnaya-karta/zapadnaya-i-vedicheskaya-astrologiya-raznica.html", cat: "Натальная карта", excerpt: "Собираем всё вместе: почему знаки отличаются, что выбрать для практики и можно ли использовать обе традиции сразу.", tags: ["натальная карта", "астрология", "джйотиш", "сравнение"] }
];

var ICON_SPRITE =
  '<svg style="display:none">' +
  '<symbol id="ic-crest" viewBox="0 0 40 40"><path d="M20 4 L34 10V22C34 30 28 35 20 37C12 35 6 30 6 22V10Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M20 12 A8 8 0 1 0 20 28 A6.4 6.4 0 1 1 20 12Z" fill="currentColor"/></symbol>' +
  '<symbol id="ic-arch" viewBox="0 0 60 34"><path d="M4 30 A26 26 0 0 1 56 30" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="30" cy="4" r="1.6" fill="currentColor"/><circle cx="12" cy="14" r="1.2" fill="currentColor"/><circle cx="48" cy="14" r="1.2" fill="currentColor"/></symbol>' +
  '<symbol id="ic-home" viewBox="0 0 24 24"><path d="M4 11L12 4l8 7v8a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></symbol>' +
  '<symbol id="ic-breath" viewBox="0 0 24 24"><circle cx="12" cy="11" r="7.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M5 13.5Q8.5 8 12 13.5T19 13.5" fill="none" stroke="currentColor" stroke-width="1.5"/></symbol>' +
  '<symbol id="ic-pulse" viewBox="0 0 24 24"><circle cx="8.5" cy="15" r="3.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M13 10Q16.5 10 16.5 6.5M15 12Q19.5 12 19.5 7" fill="none" stroke="currentColor" stroke-width="1.5"/></symbol>' +
  '<symbol id="ic-numerology" viewBox="0 0 24 24"><rect x="5" y="5" width="14" height="14" rx="1" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M5 9.6H19M5 14.3H19M9.6 5V19M14.3 5V19" stroke="currentColor" stroke-width="1.2"/></symbol>' +
  '<symbol id="ic-natal" viewBox="0 0 24 24"><circle cx="12" cy="12" r="7.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M12 4.5V19.5M4.5 12H19.5" stroke="currentColor" stroke-width="1.2"/></symbol>' +
  '<symbol id="ic-hd" viewBox="0 0 24 24"><path d="M12 4L20 8V16L12 20L4 16V8Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="1.3"/></symbol>' +
  '<symbol id="ic-holo" viewBox="0 0 24 24"><circle cx="9.5" cy="12" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="14.5" cy="12" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/></symbol>' +
  '<symbol id="ic-chakra" viewBox="0 0 24 24"><path d="M12 4V20" stroke="currentColor" stroke-width="1.3"/><circle cx="12" cy="6" r="1.5" fill="currentColor"/><circle cx="12" cy="10.5" r="1.5" fill="currentColor"/><circle cx="12" cy="15" r="1.8" fill="currentColor"/><circle cx="12" cy="19" r="1.5" fill="currentColor"/></symbol>' +
  '<symbol id="ic-lotus" viewBox="0 0 24 24"><path d="M12 18C12 18 4 15.5 4 9C4 9 9.5 10.5 12 16C14.5 10.5 20 9 20 9C20 15.5 12 18 12 18Z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><circle cx="12" cy="6" r="1.4" fill="currentColor"/></symbol>' +
  '<symbol id="ic-crystal" viewBox="0 0 24 24"><path d="M8 4H16L20 10L12 20L4 10Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M8 4L12 10L16 4M4 10H20" stroke="currentColor" stroke-width="1.1"/></symbol>' +
  '<symbol id="ic-drop" viewBox="0 0 24 24"><path d="M12 4C12 4 6 13 6 17C6 20.3 8.7 22.5 12 22.5C15.3 22.5 18 20.3 18 17C18 13 12 4 12 4Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></symbol>' +
  '<symbol id="ic-geometry" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="12" cy="6.5" r="4" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="17" cy="9.3" r="4" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="17" cy="14.8" r="4" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="12" cy="17.5" r="4" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="7" cy="14.8" r="4" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="7" cy="9.3" r="4" fill="none" stroke="currentColor" stroke-width="1.2"/></symbol>' +
  '<symbol id="ic-gear" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 3v2.4M12 18.6V21M21 12h-2.4M5.4 12H3M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7M18.4 18.4l-1.7-1.7M7.3 7.3 5.6 5.6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></symbol>' +
  '<symbol id="ic-moon" viewBox="0 0 24 24"><path d="M20 13.5A8.5 8.5 0 1 1 10.5 4 6.8 6.8 0 0 0 20 13.5Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></symbol>' +
  '<symbol id="ic-wave" viewBox="0 0 24 24"><path d="M3 12Q6 6 9 12T15 12T21 12" stroke="currentColor" stroke-width="1.5" fill="none"/></symbol>' +
  '<symbol id="ic-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M12 2.5V5M12 19V21.5M2.5 12H5M19 12H21.5M5 5L6.8 6.8M17.2 17.2L19 19M19 5L17.2 6.8M6.8 17.2L5 19" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></symbol>' +
  '<symbol id="ic-tg" viewBox="0 0 24 24"><path d="M21 4L3 11.5l6 2M21 4L9 15M21 4l-4 17-6-6.5" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linejoin="round"/></symbol>' +
  '<symbol id="ic-vk" viewBox="0 0 24 24"><path d="M4 4c0 9 4 13 8 13M20 4c-.4 3-2 6-4 8M4 4h3.2c.6 3 2 6.8 3.8 8 0-2.7 0-6.8-1-8H8M20 4h-3l-2 5 4 8h3l-4-6z" stroke="currentColor" stroke-width="1.2" fill="none" stroke-linejoin="round" stroke-linecap="round"/></symbol>' +
  '<symbol id="ic-ig" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="17" cy="7" r="1" fill="currentColor"/></symbol>' +
  '<symbol id="ic-yt" viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="3" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M10.5 9.5L15 12l-4.5 2.5Z" fill="currentColor"/></symbol>' +
  "</svg>";

function icon(name, cls) {
  return '<svg class="icon' + (cls ? " " + cls : "") + '"><use href="#' + name + '"/></svg>';
}

function renderSprite() {
  if (document.getElementById("icon-sprite")) return;
  var wrap = document.createElement("div");
  wrap.id = "icon-sprite";
  wrap.innerHTML = ICON_SPRITE;
  document.body.insertBefore(wrap, document.body.firstChild);
}

function currentPath() {
  return window.location.pathname.replace(/index\.html$/, "");
}

function renderSidebar() {
  var el = document.getElementById("sidebar");
  if (!el) return;
  var path = currentPath();
  var homeActive = path === "/" || /\/index\.html$/.test(window.location.pathname) === false && path === "/";
  var items = SITE_CONFIG.nav.map(function (item) {
    var active = path.indexOf(item.href) === 0;
    return '<li><a href="' + item.href + '" class="' + (active ? "active" : "") + '">' +
      '<span class="sweep"></span>' + icon(item.icon) +
      '<span class="label">' + item.title + (item.ready ? "" : ' <span class="soon">скоро</span>') + "</span>" +
      "</a></li>";
  }).join("");
  el.innerHTML =
    '<div class="sidebar-head">' +
      '<button class="hamburger" id="closeNav" aria-label="Закрыть меню"><span></span><span></span><span></span></button>' +
      '<a class="brand" href="/">' + icon("ic-crest", "brand-crest") + '<div class="brand-word">' + SITE_CONFIG.siteName + "</div></a>" +
    "</div>" +
    '<nav class="side-nav">' +
      '<div class="nav-label">Разделы</div>' +
      '<ul><li><a href="/" class="' + (path === "/" ? "active" : "") + '"><span class="sweep"></span>' + icon("ic-home") + '<span class="label">Главная</span></a></li>' + items + "</ul>" +
    "</nav>";
}

function renderTopbar() {
  var el = document.getElementById("topbar");
  if (!el) return;
  el.innerHTML =
    '<button class="hamburger" id="openNav" aria-label="Открыть меню"><span></span><span></span><span></span></button>' +
    '<a class="topbar-brand" href="/">' + icon("ic-crest", "brand-crest-sm") +
    '<span class="topbar-brand-text"><span class="topbar-word">' + SITE_CONFIG.siteName + '</span>' +
    '<span class="topbar-tag">' + SITE_CONFIG.tagline + "</span></span></a>";
}

function renderCrumbs() {
  var el = document.getElementById("crumbs");
  if (!el) return;
  var crumbs = window.PAGE_CRUMBS || [{ title: "Главная", href: "/" }];
  el.innerHTML = crumbs.map(function (c, i) {
    var isLast = i === crumbs.length - 1;
    var label = (i === 0 ? icon("ic-home") + " " : "") + c.title;
    return isLast ? '<span class="crumb-current">' + label + "</span>" : '<a href="' + c.href + '">' + label + "</a>";
  }).join('<span class="crumb-sep">/</span>');
}

function renderTags(tags, linkable) {
  if (!tags || !tags.length) return "";
  return '<div class="tags">' + tags.map(function (t) {
    return linkable
      ? '<a class="tag" href="/tags/?tag=' + encodeURIComponent(t) + '">' + t + "</a>"
      : '<span class="tag">' + t + "</span>";
  }).join("") + "</div>";
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-tags]").forEach(function (el) {
    var tags = el.getAttribute("data-tags").split(",").map(function (t) { return t.trim(); });
    // Внутри карточки-ссылки (article-card) теги не делаем ссылками — вложенная
    // ссылка в ссылке ломает клик по карточке. На странице статьи (не внутри <a>) — кликабельны.
    var linkable = !el.closest("a");
    el.innerHTML = renderTags(tags, linkable);
  });
});

function renderTagPage() {
  var mount = document.getElementById("tag-page");
  if (!mount) return;
  var tag = new URLSearchParams(window.location.search).get("tag");

  if (!tag) {
    var counts = {};
    ARTICLES.forEach(function (a) {
      a.tags.forEach(function (t) { counts[t] = (counts[t] || 0) + 1; });
    });
    var allTags = Object.keys(counts).sort(function (a, b) { return a.localeCompare(b, "ru"); });
    mount.innerHTML =
      '<div class="article-list-head"><h1>Все теги</h1><p>Выберите тег, чтобы увидеть все статьи по этой теме.</p></div>' +
      '<div class="tags tag-cloud">' + allTags.map(function (t) {
        return '<a class="tag" href="/tags/?tag=' + encodeURIComponent(t) + '">' + t + ' <span class="tag-count">' + counts[t] + "</span></a>";
      }).join("") + "</div>";
    return;
  }

  var norm = tag.trim().toLowerCase();
  var matches = ARTICLES.filter(function (a) {
    return a.tags.some(function (t) { return t.toLowerCase() === norm; });
  });

  var head = '<div class="article-list-head"><h1>Тег: ' + tag + "</h1><p>" +
    matches.length + (matches.length === 1 ? " статья" : " статей") + " с этим тегом.</p></div>";

  var body = matches.length
    ? '<div class="article-grid">' + matches.map(function (a) {
        return '<a class="article-card" href="' + a.href + '">' +
          '<span class="article-cat">' + a.cat + "</span>" +
          '<p class="article-title">' + a.title + "</p>" +
          '<p class="article-excerpt">' + a.excerpt + "</p>" +
        "</a>";
      }).join("") + "</div>"
    : "<p>Пока нет статей с этим тегом.</p>";

  mount.innerHTML = head + body;
}

function renderRightbar() {
  var el = document.getElementById("rightbar");
  if (!el) return;
  el.innerHTML =
    '<div class="profile">' +
      '<div class="avatar">Г</div>' +
      '<div class="profile-text"><div class="profile-hi">Привет, Гость</div><a class="profile-link" href="#">Мой профиль →</a></div>' +
      icon("ic-gear", "gear") +
    "</div>" +
    '<div class="widget">' +
      '<div class="widget-label">' + icon("ic-moon") + "Фаза луны" + '<span class="example-tag">пример</span></div>' +
      '<div class="moon-row"><div class="moon-disc"></div><div><div class="moon-name">Растущая луна</div><div class="moon-day">12 день</div></div></div>' +
      '<a class="widget-more" href="/articles/puls-planety/">Подробнее →</a>' +
    "</div>" +
    '<div class="widget">' +
      '<div class="widget-label">' + icon("ic-wave") + "К-индекс" + '<span class="example-tag">пример</span></div>' +
      '<div class="stat-num">3.7</div><div class="stat-sub">Спокойная обстановка</div>' +
      '<div class="bar"><span style="width:46%"></span></div>' +
    "</div>" +
    '<div class="widget-ad"><div class="widget-label">Реклама</div><div class="banner-ad-slot" style="text-align:left;">рекламный блок РСЯ · 300×250</div></div>';
}

function renderFooter() {
  var el = document.getElementById("footer");
  if (!el) return;
  el.innerHTML =
    '<div class="footer-brand">' + icon("ic-crest") + SITE_CONFIG.siteName + "</div>" +
    '<nav class="footer-links"><a href="/">Главная</a><a href="/about.html">О проекте</a><a href="/contacts.html">Контакты</a></nav>' +
    '<div class="footer-social">' +
      '<a href="#">' + icon("ic-tg") + "</a>" +
      '<a href="#">' + icon("ic-vk") + "</a>" +
      '<a href="#">' + icon("ic-ig") + "</a>" +
    "</div>";
}

function renderAdSlot(containerId) {
  var el = document.getElementById(containerId);
  if (!el) return;
  el.classList.add("banner-ad");
  el.innerHTML = '<span class="banner-ad-label">Реклама</span><div class="banner-ad-slot">рекламный блок РСЯ' +
    (SITE_CONFIG.yandexAdBlockId ? "" : " · подключим после одобрения РСЯ") + "</div>";
  // Реальный код Яндекс РСЯ вставляется сюда после получения блока в кабинете.
}

function initMobileNav() {
  var sidebar = document.getElementById("sidebar"), overlay = document.getElementById("overlay");
  if (!sidebar || !overlay) return;
  function openNav() { sidebar.classList.add("open"); overlay.classList.add("show"); }
  function closeNav() { sidebar.classList.remove("open"); overlay.classList.remove("show"); }
  document.addEventListener("click", function (e) {
    if (e.target.closest("#openNav")) openNav();
    if (e.target.closest("#closeNav")) closeNav();
    if (e.target === overlay) closeNav();
  });
}

function loadYandexMetrika() {
  if (!SITE_CONFIG.yandexMetrikaId) return;
  var id = SITE_CONFIG.yandexMetrikaId;
  (function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
    m[i].l = 1 * new Date();
    k = e.createElement(t); a = e.getElementsByTagName(t)[0];
    k.async = 1; k.src = r; a.parentNode.insertBefore(k, a);
  })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  ym(id, "init", { clickmap: true, trackLinks: true, accurateTrackBounce: true });
}

document.addEventListener("DOMContentLoaded", function () {
  renderSprite();
  renderSidebar();
  renderTopbar();
  renderCrumbs();
  renderRightbar();
  renderFooter();
  renderTagPage();
  initMobileNav();
  loadYandexMetrika();
  document.querySelectorAll("[data-ad-slot]").forEach(function (el) { renderAdSlot(el.id); });
});
