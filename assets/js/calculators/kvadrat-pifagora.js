/*
  Калькулятор квадрата Пифагора (психоматрицы) по системе А.Ф. Александрова.
  Методика расчёта подробно объяснена в статье:
  /articles/numerologiya/chto-takoe-kvadrat-pifagora.html — если меняешь формулы,
  меняй и текст той статьи, чтобы сайт не противоречил сам себе.
*/

var CELLS = {
  1: {
    name: "Характер и сила воли",
    tiers: [
      "Слабо выраженный, податливый характер. Трудно отстаивать свою позицию, легко подстроиться под чужое мнение, избегать конфликтов даже там, где стоило бы настоять на своём.",
      "Мягкий характер: решения принимаются и мнение держится, но под давлением обстоятельств или сильной личности рядом может уступать. Легко находит общий язык с людьми.",
      "Норма, устойчивый характер: достаточно твёрдый, чтобы отстаивать своё, но не переходящий в упрямство. Умеет и настоять на своём, и услышать чужую точку зрения.",
      "Сильный характер: ярко выраженная воля, целеустремлённость, умение идти к своему несмотря на препятствия. Сложно уступать и признавать чужую правоту.",
      "Избыток — «квадратный» характер: избыточная концентрация воли, вплоть до деспотичности и стремления подавлять окружающих."
    ]
  },
  2: {
    name: "Энергетика",
    tiers: [
      "Своей энергии почти нет, человек питается энергией окружения и быстро устаёт от активности; важно беречь силы и не браться за всё сразу.",
      "Энергии немного ниже среднего, нужно распределять нагрузку осторожнее, чем другим.",
      "Нормальная работоспособность, обычный запас сил на день.",
      "Высокая энергичность, способность «заряжать» окружающих и вести за собой в делах.",
      "Избыток энергии, которому нужен выход: без применения такая энергия оборачивается раздражительностью или суетливостью."
    ]
  },
  3: {
    name: "Интерес к непознанному, интуиция",
    tiers: [
      "Практичный, приземлённый взгляд на вещи, мало интереса к загадочному и непроверяемому.",
      "Интерес присутствует, но слабо выражен.",
      "Здоровое любопытство к неизвестному без потери связи с реальностью.",
      "Выраженная тяга к тайнам, эзотерике, нестандартным областям знания.",
      "Риск слишком глубоко увлечься мистикой в ущерб повседневным делам."
    ]
  },
  4: {
    name: "Здоровье",
    tiers: [
      "По расчёту нет выраженного запаса здоровья — стоит уделять здоровью особое, сознательное внимание, не полагаться на то, что «само пройдёт».",
      "Здоровье ниже среднего, нужно следить за нагрузками и не запускать профилактику.",
      "Нормальное здоровье без выраженных особенностей.",
      "Крепкое здоровье, хороший запас прочности.",
      "Очень крепкое здоровье, но и такой запас не бесконечен при систематически плохом образе жизни."
    ]
  },
  5: {
    name: "Логика",
    tiers: [
      "Мышление интуитивное, решения принимаются по ощущению, а не по расчёту; точные науки и строгий анализ даются с трудом.",
      "Логика ниже среднего, нужны время и усилие для выстраивания сложных цепочек рассуждений.",
      "Нормальные аналитические способности.",
      "Сильный аналитический склад ума, легко даются точные науки и структурирование информации.",
      "Избыточная рационализация: сложно принимать решения «от сердца», риск заходить в анализ там, где нужнее интуиция."
    ]
  },
  6: {
    name: "Трудолюбие",
    tiers: [
      "Рутинный труд не привлекает, человек ищет более быстрые или творческие способы решить задачу, избегая монотонности.",
      "Трудится по необходимости, без особого удовольствия от процесса.",
      "Нормальное, ровное отношение к труду.",
      "Трудолюбивый человек, получает удовлетворение от сделанной руками работы.",
      "Склонность к трудоголизму, трудно даётся полноценный отдых без чувства вины."
    ]
  },
  7: {
    name: "Удача и талант",
    tiers: [
      "Рассчитывать приходится только на себя, удача редко помогает — но это же учит не надеяться на случай, а действовать.",
      "Удача случается нечасто, нужны собственные усилия.",
      "Обычная, «средняя» удачливость.",
      "Удачливый человек, обстоятельства часто складываются в его пользу.",
      "Риск переоценить свою удачу и перестать развивать собственные навыки, надеясь на «само получится»."
    ]
  },
  8: {
    name: "Чувство долга",
    tiers: [
      "Ответственность за других даётся тяжело, в приоритете собственные интересы.",
      "Чувство долга есть, но требует сознательного усилия.",
      "Нормальная, здоровая ответственность.",
      "Высокое чувство долга, на такого человека можно опереться.",
      "Риск чрезмерной жертвенности, забывания о собственных нуждах ради других."
    ]
  },
  9: {
    name: "Память",
    tiers: [
      "Память слабая, важно фиксировать информацию письменно и повторять.",
      "Память ниже среднего.",
      "Нормальная память.",
      "Хорошая память.",
      "Очень сильная, почти фотографическая память."
    ]
  }
};

var GRID_ORDER = [1, 4, 7, 2, 5, 8, 3, 6, 9];

function digitSum(n) {
  return String(Math.abs(n)).split("").reduce(function (s, ch) { return s + parseInt(ch, 10); }, 0);
}

function computePifagoraSquare(dd, mm, yyyy) {
  var allDigits = (dd + mm + yyyy).split("").map(function (ch) { return parseInt(ch, 10); });
  var a = allDigits.reduce(function (s, d) { return s + d; }, 0);
  var b = digitSum(a);
  var firstDayDigit = parseInt(dd[0], 10);
  var c = a - 2 * firstDayDigit;
  var d = digitSum(c);

  var counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
  [dd, mm, yyyy, String(a), String(b), String(c), String(d)].forEach(function (group) {
    group.split("").forEach(function (ch) {
      var n = parseInt(ch, 10);
      if (n >= 1 && n <= 9) counts[n]++;
    });
  });

  return { a: a, b: b, c: c, d: d, counts: counts };
}

function tierFor(count) {
  return Math.min(count, 4);
}

function pluralRaz(n) {
  var mod10 = n % 10, mod100 = n % 100;
  if (mod100 >= 11 && mod100 <= 14) return "раз";
  if (mod10 === 1) return "раз";
  return "раза";
}

function renderPifagoraResult(result) {
  var el = document.getElementById("pifagora-result");
  if (!el) return;

  var totalDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce(function (s, n) { return s + result.counts[n]; }, 0);

  var numbersHtml =
    '<div class="calc-numbers">' +
    '<div class="calc-number">1-е рабочее число<b>' + result.a + "</b></div>" +
    '<div class="calc-number">2-е рабочее число<b>' + result.b + "</b></div>" +
    '<div class="calc-number">3-е рабочее число<b>' + result.c + "</b></div>" +
    '<div class="calc-number">4-е рабочее число<b>' + result.d + "</b></div>" +
    "</div>";

  var gridHtml = '<div class="psychomatrix">' + GRID_ORDER.map(function (digit) {
    var count = result.counts[digit];
    var filled = count > 0;
    var display = filled ? String(digit).repeat(count) : String(digit);
    return '<div class="psychomatrix-cell' + (filled ? " filled" : " empty") + '">' +
      '<span class="count">' + display + "</span>" +
      "</div>";
  }).join("") + "</div>";

  var readingsHtml = '<div class="cell-readings">' + GRID_ORDER.map(function (n) {
    var cell = CELLS[n];
    var count = result.counts[n];
    var text = cell.tiers[tierFor(count)];
    var lead = count > 0
      ? "Цифра " + n + " встречается " + count + " " + pluralRaz(count) + " из " + totalDigits + " — активна " + count + "/" + totalDigits + "."
      : "Цифра " + n + " не встречается ни разу из " + totalDigits + " — 0/" + totalDigits + ".";
    return '<div class="cell-reading' + (count > 0 ? " filled" : " empty") + '">' +
      '<div class="cell-heading"><span class="cell-digit">' + n + '</span><span class="cell-name">' + cell.name + "</span></div>" +
      '<p class="cell-lead">' + lead + "</p>" +
      "<p>" + text + "</p>" +
      "</div>";
  }).join("") + "</div>";

  el.innerHTML = numbersHtml + gridHtml + readingsHtml;
  el.hidden = false;
}

function pfPad(value, len) {
  value = String(value || "").replace(/\D/g, "");
  while (value.length < len) value = "0" + value;
  return value;
}

function fillDatalist(id, from, to) {
  var list = document.getElementById(id);
  if (!list) return;
  var html = "";
  var pad = to <= 31;
  for (var i = from; i <= to; i++) {
    var v = pad ? pfPad(i, 2) : String(i);
    html += '<option value="' + v + '"></option>';
  }
  list.innerHTML = html;
}

function initPifagoraCalculator() {
  var form = document.getElementById("pifagora-form");
  if (!form) return;
  var errorEl = document.getElementById("pifagora-error");

  var currentYear = new Date().getFullYear();
  fillDatalist("pf-day-options", 1, 31);
  fillDatalist("pf-month-options", 1, 12);
  fillDatalist("pf-year-options", currentYear - 100, currentYear);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var dd = pfPad(document.getElementById("pf-day").value, 2);
    var mm = pfPad(document.getElementById("pf-month").value, 2);
    var yyyy = document.getElementById("pf-year").value.replace(/\D/g, "");

    var dayNum = parseInt(dd, 10), monthNum = parseInt(mm, 10), yearNum = parseInt(yyyy, 10);
    var valid = yyyy.length === 4 && dayNum >= 1 && dayNum <= 31 && monthNum >= 1 && monthNum <= 12 && yearNum > 0;

    if (!valid) {
      if (errorEl) errorEl.hidden = false;
      var resultEl = document.getElementById("pifagora-result");
      if (resultEl) resultEl.hidden = true;
      return;
    }

    if (errorEl) errorEl.hidden = true;
    var result = computePifagoraSquare(dd, mm, String(yearNum));
    renderPifagoraResult(result);
  });
}

document.addEventListener("DOMContentLoaded", initPifagoraCalculator);
