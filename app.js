const steps = ["skill", "goal", "time", "notify", "account", "done"];

function getStep() {
  return document.body.getAttribute("data-step") || "skill";
}

function stepIndex(step) {
  const i = steps.indexOf(step);
  return i < 0 ? 0 : i;
}

function setProgress() {
  const idx = stepIndex(getStep());
  const pct = Math.round(((idx + 1) / steps.length) * 100);
  const fill = document.getElementById("progressFill");
  if (fill) fill.style.width = pct + "%";
}

function loadState() {
  try {
    const raw = localStorage.getItem("fc_state");
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveState(next) {
  try {
    localStorage.setItem("fc_state", JSON.stringify(next));
  } catch {
    // If storage fails (private mode / quota), just no-op
  }
}

function setContinueEnabled(enabled) {
  const btn = document.getElementById("continueBtn");
  if (!btn) return;

  if (!enabled) {
    btn.classList.add("opacity-50", "cursor-not-allowed", "shadow-none", "bg-gray-300", "text-gray-500");
    btn.classList.remove("bg-primary", "hover:bg-primary-dark", "text-text-main", "shadow-[0_4px_0_0_#0bbd54]");
    btn.disabled = true;
    return;
  }

  btn.classList.remove("opacity-50", "cursor-not-allowed", "shadow-none", "bg-gray-300", "text-gray-500");
  btn.classList.add("bg-primary", "hover:bg-primary-dark", "text-text-main", "shadow-[0_4px_0_0_#0bbd54]");
  btn.disabled = false;
}

function nextHref(step) {
  const map = {
    skill: "goal.html",
    goal: "time.html",
    time: "notify.html",
    notify: "account.html",
    account: "done.html",
    done: "path.html",
  };
  return map[step] || "goal.html";
}

function prevHref(step) {
  const map = {
    skill: null,
    goal: "index.html",
    time: "goal.html",
    notify: "time.html",
    account: "notify.html",
    done: "account.html",
  };
  return map[step] || null;
}

function setContinueLabel() {
  const label = document.getElementById("continueLabel");
  if (!label) return;
  label.textContent = getStep() === "done" ? "Start learning" : "Continue";
}

function initDarkToggle() {
  const toggle = document.getElementById("darkToggle");
  const html = document.documentElement;

  let prefs = {};
  try {
    prefs = JSON.parse(localStorage.getItem("fc_prefs") || "{}");
  } catch {
    prefs = {};
  }

  let darkPref = prefs?.darkMode;
  if (darkPref !== true && darkPref !== false) {
    const legacy = localStorage.getItem("fc_dark");
    if (legacy === "1" || legacy === "0") {
      darkPref = legacy === "1";
      prefs.darkMode = darkPref;
      try {
        localStorage.setItem("fc_prefs", JSON.stringify(prefs));
        localStorage.removeItem("fc_dark");
      } catch {
        // ignore
      }
    }
  }

  if (darkPref === true) {
    html.classList.add("dark");
    html.classList.remove("light");
  } else if (darkPref === false) {
    html.classList.remove("dark");
    html.classList.add("light");
  }

  if (toggle) toggle.remove();
}

function initNav() {
  const step = getStep();

  const backBtn = document.getElementById("backBtn");
  const prev = prevHref(step);

  if (backBtn) {
    backBtn.disabled = !prev;
    backBtn.addEventListener("click", () => {
      if (prev) location.href = prev;
    });
  }

  const continueBtn = document.getElementById("continueBtn");
  if (continueBtn && !continueBtn.dataset.authFlow) {
    continueBtn.addEventListener("click", () => {
      // Safety: if disabled, do nothing
      if (continueBtn.disabled) return;

      // Default notify to false if user never chose
      const s = loadState();
      if (step === "notify" && s.notifications == null) {
        s.notifications = false;
        saveState(s);
      }

      location.href = nextHref(step);
    });
  }

  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      location.href = "login.html";
    });
  }
}

/* --- Per-page initializers --- */

function initSkillPage() {
  const s = loadState();
  const radios = document.querySelectorAll('input[name="skill-level"]');

  radios.forEach((r) => {
    if (r.value === s.skill) r.checked = true;
  });

  setContinueEnabled(!!s.skill);

  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      const next = loadState();
      next.skill = radio.value;
      saveState(next);
      setContinueEnabled(true);
    });
  });
}

function initGoalPage() {
  const s = loadState();
  const radios = document.querySelectorAll('input[name="goal"]');

  radios.forEach((r) => {
    if (r.value === s.goal) r.checked = true;
  });

  setContinueEnabled(!!s.goal);

  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      const next = loadState();
      next.goal = radio.value;
      saveState(next);
      setContinueEnabled(true);
    });
  });
}

function initTimePage() {
  const s = loadState();
  const radios = document.querySelectorAll('input[name="time"]');

  radios.forEach((r) => {
    if (String(r.value) === String(s.minutesPerDay)) r.checked = true;
  });

  setContinueEnabled(!!s.minutesPerDay);

  radios.forEach((radio) => {
    radio.addEventListener("change", () => {
      const next = loadState();
      next.minutesPerDay = Number(radio.value);
      saveState(next);
      setContinueEnabled(true);
    });
  });
}

function initNotifyPage() {
  const s = loadState();
  setContinueEnabled(true);

  const on = document.getElementById("notifyOn");
  const off = document.getElementById("notifyOff");
  const current = document.getElementById("notifyCurrent");

  const updateUI = (val) => {
    if (current) current.textContent = val ? "on" : "off";
  };

  updateUI(!!s.notifications);

  if (on) {
    on.addEventListener("click", () => {
      const next = loadState();
      next.notifications = true;
      saveState(next);
      updateUI(true);
    });
  }

  if (off) {
    off.addEventListener("click", () => {
      const next = loadState();
      next.notifications = false;
      saveState(next);
      updateUI(false);
    });
  }
}

function initAccountPage() {
  const s = loadState();
  const input = document.getElementById("nameInput");
  const dot = document.getElementById("nameDot");
  const continueBtn = document.getElementById("continueBtn");
  const manageButton = !(continueBtn && continueBtn.dataset.authFlow);

  // ✅ default avatar (used app-wide)
  const DEFAULT_AVATAR =
    "https://github.com/juliuskalume/full-calculus/blob/main/icons/icon-192.png?raw=true";

  // ✅ seed avatarUrl once if missing
  if (!s.avatarUrl) {
    s.avatarUrl = DEFAULT_AVATAR;
    saveState(s);
  }

  if (input) input.value = s.name || "";

  const validName = (v) => {
    const trimmed = (v || "").trim();
    if (!trimmed) return true;
    return trimmed.length >= 2;
  };

  const update = (v) => {
    const ok = validName(v);
    if (manageButton) setContinueEnabled(ok);

    if (dot) {
      dot.classList.toggle("bg-emerald-500", ok);
      dot.classList.toggle("bg-zinc-300", !ok);
      dot.classList.toggle("dark:bg-zinc-700", !ok);
    }
  };

  update(s.name || "");

  if (input) {
    input.addEventListener("input", (e) => {
      const v = e.target.value;
      const next = loadState();
      next.name = v;

      // keep avatarUrl stable
      if (!next.avatarUrl) next.avatarUrl = DEFAULT_AVATAR;

      saveState(next);
      update(v);
    });
  }
}

window.FCOnboarding = {
  setContinueEnabled,
  loadState,
  saveState,
  nextHref,
  prevHref,
};


function initDonePage() {
  const s = loadState();
  setContinueEnabled(true);

  const setText = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setText("sumSkill", s.skill || "—");
  setText("sumGoal", s.goal || "—");
  setText("sumTime", s.minutesPerDay ? `${s.minutesPerDay} min` : "—");
  setText("sumNotif", s.notifications ? "on" : "off");
  setText("sumName", s.name ? s.name.trim() : "—");
}

function initPage() {
  setProgress();
  setContinueLabel();
  initNav();
  initDarkToggle();

  const step = getStep();
  if (step === "skill") initSkillPage();
  if (step === "goal") initGoalPage();
  if (step === "time") initTimePage();
  if (step === "notify") initNotifyPage();
  if (step === "account") initAccountPage();
  if (step === "done") initDonePage();
}

document.addEventListener("DOMContentLoaded", initPage);
