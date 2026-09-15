/*
  Общий файл сайта: шапка, подвал, счётчик Яндекс.Метрики, рекламные блоки.
  Чтобы поменять дизайн шапки/футера — правь только этот файл, а не каждую страницу.
*/

var SITE_CONFIG = {
  siteName: "Название сайта",
  baseUrl: "https://example.com", // поменять после покупки домена
  yandexMetrikaId: null,          // вписать номер счётчика после регистрации в Яндекс.Метрике
  yandexAdBlockId: null,          // вписать ID рекламного блока после подключения РСЯ
  nav: [
    { title: "Главная", href: "/" },
    { title: "Статьи", href: "/articles/" }
    // сюда позже добавим разделы по темам
  ]
};

function renderHeader() {
  var el = document.getElementById("site-header");
  if (!el) return;
  el.classList.add("site-header");
  var links = SITE_CONFIG.nav.map(function (item) {
    return '<li><a href="' + item.href + '">' + item.title + "</a></li>";
  }).join("");
  el.innerHTML =
    '<div class="container">' +
      '<a class="site-logo" href="/">' + SITE_CONFIG.siteName + "</a>" +
      '<nav class="site-nav"><ul>' + links + "</ul></nav>" +
    "</div>";
}

function renderFooter() {
  var el = document.getElementById("site-footer");
  if (!el) return;
  el.classList.add("site-footer");
  var year = new Date().getFullYear();
  el.innerHTML =
    '<div class="container">' +
      "&copy; " + year + " " + SITE_CONFIG.siteName +
      '. <a href="/about.html">О сайте</a> &middot; ' +
      '<a href="/contacts.html">Контакты</a>' +
    "</div>";
}

function renderAdSlot(containerId) {
  var el = document.getElementById(containerId);
  if (!el) return;
  el.classList.add("ad-slot");
  if (!SITE_CONFIG.yandexAdBlockId) {
    el.textContent = "Рекламный блок (подключим после одобрения РСЯ)";
    return;
  }
  // Реальный код Яндекс РСЯ вставляется сюда после получения блока в кабинете.
  // Пример:
  // el.innerHTML = '<div id="yandex_rtb_' + SITE_CONFIG.yandexAdBlockId + '"></div>';
  // (function(w, d, n, s, t) { ... yandexContextAsyncCallbacks ... })(...)
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
  renderHeader();
  renderFooter();
  loadYandexMetrika();
  document.querySelectorAll("[data-ad-slot]").forEach(function (el) {
    renderAdSlot(el.id);
  });
});
