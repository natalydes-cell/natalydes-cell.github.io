/*
  Интерактивный тренажёр дыхательных упражнений.
  Схемы дыхания — в массиве BREATH_SCHEMES ниже. Чтобы добавить новую схему,
  добавь объект с уникальным id, названием, описанием и фазами (phases):
  каждая фаза — { key: "inhale" | "hold" | "exhale", label: "текст на круге", seconds: число }.
  seconds:0 — фаза пропускается (удобно, если в схеме нет второй задержки).
*/

var BREATH_SCHEMES = [
  {
    id: "box",
    name: "Квадратное дыхание",
    sub: "4-4-4-4",
    description: "Равные по длине вдох, задержка, выдох и снова задержка. Помогает успокоить ум и вернуть концентрацию.",
    phases: [
      { key: "inhale", label: "Вдох", seconds: 4 },
      { key: "hold", label: "Задержка", seconds: 4 },
      { key: "exhale", label: "Выдох", seconds: 4 },
      { key: "hold", label: "Задержка", seconds: 4 }
    ]
  },
  {
    id: "relax478",
    name: "4-7-8",
    sub: "4-7-8",
    description: "Короткий вдох, долгая задержка и медленный выдох. Популярная техника для быстрого расслабления и засыпания.",
    phases: [
      { key: "inhale", label: "Вдох", seconds: 4 },
      { key: "hold", label: "Задержка", seconds: 7 },
      { key: "exhale", label: "Выдох", seconds: 8 },
      { key: "hold", label: "Пауза", seconds: 0 }
    ]
  },
  {
    id: "coherent",
    name: "Когерентное дыхание",
    sub: "5-5",
    description: "Ровный вдох и выдох одинаковой длины без задержек. Мягко снижает уровень стресса при регулярной практике.",
    phases: [
      { key: "inhale", label: "Вдох", seconds: 5 },
      { key: "hold", label: "Пауза", seconds: 0 },
      { key: "exhale", label: "Выдох", seconds: 5 },
      { key: "hold", label: "Пауза", seconds: 0 }
    ]
  },
  {
    id: "calm46",
    name: "Успокаивающее дыхание",
    sub: "4-6",
    description: "Выдох длиннее вдоха — такой ритм включает парасимпатическую нервную систему и снимает тревожность.",
    phases: [
      { key: "inhale", label: "Вдох", seconds: 4 },
      { key: "hold", label: "Пауза", seconds: 0 },
      { key: "exhale", label: "Выдох", seconds: 6 },
      { key: "hold", label: "Пауза", seconds: 0 }
    ]
  },
  {
    id: "triangle",
    name: "Треугольное дыхание",
    sub: "4-4-4",
    description: "Вдох, одна задержка на пике и выдох одинаковой длины — простая схема для новичков.",
    phases: [
      { key: "inhale", label: "Вдох", seconds: 4 },
      { key: "hold", label: "Задержка", seconds: 4 },
      { key: "exhale", label: "Выдох", seconds: 4 },
      { key: "hold", label: "Пауза", seconds: 0 }
    ]
  }
];

function initBreathingWidget() {
  var root = document.getElementById("breathing-widget");
  if (!root) return;

  var schemeListEl = root.querySelector("[data-breath-schemes]");
  var descEl = root.querySelector("[data-breath-desc]");
  var circleEl = root.querySelector("[data-breath-circle]");
  var phaseLabelEl = root.querySelector("[data-breath-phase]");
  var countEl = root.querySelector("[data-breath-count]");
  var cycleInfoEl = root.querySelector("[data-breath-cycle-info]");
  var cyclesInput = root.querySelector("[data-breath-cycles]");
  var soundToggle = root.querySelector("[data-breath-sound]");
  var startBtn = root.querySelector("[data-breath-start]");

  var currentScheme = BREATH_SCHEMES[0];
  var running = false;
  var timeoutId = null;
  var tickId = null;
  var audioCtx = null;
  var toneOsc = null;
  var toneGain = null;

  function renderSchemeList() {
    schemeListEl.innerHTML = BREATH_SCHEMES.map(function (s) {
      return '<button type="button" class="breath-scheme-btn' + (s.id === currentScheme.id ? " active" : "") + '" data-scheme-id="' + s.id + '">' +
        '<span class="breath-scheme-name">' + s.name + "</span>" +
        '<span class="breath-scheme-sub">' + s.sub + "</span>" +
        "</button>";
    }).join("");

    schemeListEl.querySelectorAll("[data-scheme-id]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (running) return;
        var id = btn.getAttribute("data-scheme-id");
        currentScheme = BREATH_SCHEMES.filter(function (s) { return s.id === id; })[0];
        renderSchemeList();
        descEl.textContent = currentScheme.description;
      });
    });
  }

  function getAudioCtx() {
    if (!audioCtx) {
      var Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      audioCtx = new Ctx();
    }
    if (audioCtx.state === "suspended") audioCtx.resume();
    return audioCtx;
  }

  function startTone() {
    if (!soundToggle.checked) return;
    var ctx = getAudioCtx();
    if (!ctx) return;
    toneOsc = ctx.createOscillator();
    toneGain = ctx.createGain();
    toneOsc.type = "sine";
    toneOsc.frequency.setValueAtTime(220, ctx.currentTime);
    toneGain.gain.setValueAtTime(0, ctx.currentTime);
    toneGain.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.3);
    toneOsc.connect(toneGain).connect(ctx.destination);
    toneOsc.start();
  }

  function stopTone() {
    if (!toneOsc || !toneGain || !audioCtx) return;
    var ctx = audioCtx;
    toneGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.3);
    var osc = toneOsc, gain = toneGain;
    setTimeout(function () {
      try { osc.stop(); osc.disconnect(); gain.disconnect(); } catch (e) {}
    }, 350);
    toneOsc = null;
    toneGain = null;
  }

  function tonePhase(phaseKey, seconds) {
    if (!toneOsc || !audioCtx) return;
    var now = audioCtx.currentTime;
    if (phaseKey === "inhale") {
      toneOsc.frequency.cancelScheduledValues(now);
      toneOsc.frequency.setValueAtTime(toneOsc.frequency.value, now);
      toneOsc.frequency.linearRampToValueAtTime(440, now + Math.max(seconds, 0.1));
    } else if (phaseKey === "exhale") {
      toneOsc.frequency.cancelScheduledValues(now);
      toneOsc.frequency.setValueAtTime(toneOsc.frequency.value, now);
      toneOsc.frequency.linearRampToValueAtTime(220, now + Math.max(seconds, 0.1));
    }
  }

  function setCircleScale(scale, seconds) {
    if (seconds > 0) {
      circleEl.style.transition = "transform " + seconds + "s ease-in-out";
    } else {
      circleEl.style.transition = "none";
    }
    requestAnimationFrame(function () {
      circleEl.style.transform = "scale(" + scale + ")";
    });
  }

  function resetVisuals() {
    clearInterval(tickId);
    circleEl.classList.remove("is-hold");
    circleEl.style.transition = "none";
    circleEl.style.transform = "scale(0.55)";
    phaseLabelEl.textContent = "Готовы?";
    countEl.textContent = "";
    cycleInfoEl.textContent = "";
  }

  function stopSession(finished) {
    running = false;
    clearTimeout(timeoutId);
    clearInterval(tickId);
    stopTone();
    startBtn.textContent = "Начать";
    circleEl.classList.remove("is-hold");
    if (finished) {
      phaseLabelEl.textContent = "Готово";
      countEl.textContent = "";
    } else {
      resetVisuals();
    }
  }

  function runPhase(cycleIndex, phaseIndex, totalCycles) {
    if (!running) return;

    if (phaseIndex >= currentScheme.phases.length) {
      cycleIndex++;
      phaseIndex = 0;
      if (cycleIndex >= totalCycles) {
        stopSession(true);
        return;
      }
    }

    var phase = currentScheme.phases[phaseIndex];
    if (phase.seconds <= 0) {
      runPhase(cycleIndex, phaseIndex + 1, totalCycles);
      return;
    }

    cycleInfoEl.textContent = "Цикл " + (cycleIndex + 1) + " из " + totalCycles;
    phaseLabelEl.textContent = phase.label;

    if (phase.key === "inhale") {
      circleEl.classList.remove("is-hold");
      setCircleScale(1, phase.seconds);
    } else if (phase.key === "exhale") {
      circleEl.classList.remove("is-hold");
      setCircleScale(0.55, phase.seconds);
    } else {
      circleEl.classList.add("is-hold");
    }
    tonePhase(phase.key, phase.seconds);

    var startedAt = Date.now();
    clearInterval(tickId);
    tickId = setInterval(function () {
      var left = Math.max(0, Math.ceil(phase.seconds - (Date.now() - startedAt) / 1000));
      countEl.textContent = left > 0 ? left : "";
    }, 100);

    timeoutId = setTimeout(function () {
      runPhase(cycleIndex, phaseIndex + 1, totalCycles);
    }, phase.seconds * 1000);
  }

  function startSession() {
    var cycles = parseInt(cyclesInput.value, 10);
    if (!cycles || cycles < 1) cycles = 1;
    if (cycles > 50) cycles = 50;
    cyclesInput.value = cycles;

    running = true;
    startBtn.textContent = "Остановить";
    circleEl.style.transform = "scale(0.55)";
    startTone();
    runPhase(0, 0, cycles);
  }

  startBtn.addEventListener("click", function () {
    if (running) {
      stopSession(false);
    } else {
      startSession();
    }
  });

  renderSchemeList();
  descEl.textContent = currentScheme.description;
  resetVisuals();
}

document.addEventListener("DOMContentLoaded", initBreathingWidget);
