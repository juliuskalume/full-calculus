const HEART_MAX = 5;
const HEART_REFILL_MIN = 5;
const DAY_MS = 24 * 60 * 60 * 1000;

window.FC = {
  _weekKey(date = new Date()) {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
    return `${d.getUTCFullYear()}-W${String(weekNo).padStart(2, "0")}`;
  },

  _todayKey() {
    return new Date().toISOString().slice(0, 10);
  },

  _dayDiff(fromKey, toKey) {
    if (!fromKey || !toKey) return null;
    const fromMs = Date.parse(fromKey);
    const toMs = Date.parse(toKey);
    if (!Number.isFinite(fromMs) || !Number.isFinite(toMs)) return null;
    return Math.floor((toMs - fromMs) / DAY_MS);
  },

  _ensureWeekly(s) {
    const currentWeek = this._weekKey();
    if (!s.weekKey) {
      s.weekKey = currentWeek;
      s.weeklyXp = Number(s.weeklyXp) || 0;
      return s;
    }
    if (s.weekKey !== currentWeek) {
      s.lastWeekKey = s.weekKey || "";
      s.lastWeekXp = Number(s.weeklyXp) || 0;
      s.weekKey = currentWeek;
      s.weeklyXp = 0;
    }
    if (typeof s.weeklyXp !== "number") s.weeklyXp = 0;
    if (typeof s.lastWeekXp !== "number") s.lastWeekXp = 0;
    if (typeof s.lastWeekKey !== "string") s.lastWeekKey = "";
    return s;
  },

  get() {
    const fallback = {
      xp: 450,
      streak: 0,
      lives: HEART_MAX,
      lastHeartTime: Date.now(),
      lastActiveDate: "",
      weekKey: "",
      weeklyXp: 0,
      lastWeekKey: "",
      lastWeekXp: 0,
    };

    let s;
    try {
      s = JSON.parse(localStorage.getItem("fc_meta")) || fallback;
    } catch {
      s = fallback;
    }

    if (typeof s.xp !== "number") s.xp = fallback.xp;
    if (typeof s.streak !== "number") s.streak = fallback.streak;
    if (typeof s.lives !== "number") s.lives = fallback.lives;
    if (typeof s.lastHeartTime !== "number") s.lastHeartTime = Date.now();
    if (typeof s.lastActiveDate !== "string") s.lastActiveDate = "";
    if (typeof s.weekKey !== "string") s.weekKey = "";
    if (typeof s.weeklyXp !== "number") s.weeklyXp = 0;
    if (typeof s.lastWeekKey !== "string") s.lastWeekKey = "";
    if (typeof s.lastWeekXp !== "number") s.lastWeekXp = 0;

    s = this._ensureWeekly(s);
    s = this._refillHearts(s);
    s = this._refreshStreak(s);
    this.set(s);
    return s;
  },

  set(data) {
    localStorage.setItem("fc_meta", JSON.stringify(data));
  },

  addXP(amount) {
    const s = this.get();
    this._ensureWeekly(s);
    s.xp += Number(amount) || 0;
    s.weeklyXp += Number(amount) || 0;
    this.set(s);
  },

  loseLife() {
    const s = this.get();
    if (s.lives > 0) {
      s.lives = Math.max(0, s.lives - 1);
      if (s.lives < HEART_MAX) s.lastHeartTime = Date.now();
      this.set(s);
    }
  },

  _refillHearts(s) {
    if (s.lives >= HEART_MAX) return s;
    const now = Date.now();
    const elapsedMin = Math.floor((now - s.lastHeartTime) / 60000);
    const heartsToAdd = Math.floor(elapsedMin / HEART_REFILL_MIN);
    if (heartsToAdd <= 0) return s;

    s.lives = Math.min(HEART_MAX, s.lives + heartsToAdd);
    s.lastHeartTime += heartsToAdd * HEART_REFILL_MIN * 60000;
    if (s.lives >= HEART_MAX) s.lastHeartTime = now;
    return s;
  },

  _refreshStreak(s) {
    const today = this._todayKey();
    const last = typeof s.lastActiveDate === "string" ? s.lastActiveDate : "";
    if (!last) return s;
    const diff = this._dayDiff(last, today);
    if (diff != null && diff > 1) {
      s.streak = 0;
    }
    if (diff != null && diff < 0) {
      s.lastActiveDate = today;
    }
    return s;
  },

  recordDailyActivity() {
    const s = this.get();
    const today = this._todayKey();
    const last = typeof s.lastActiveDate === "string" ? s.lastActiveDate : "";
    if (last === today) return s;

    const diff = this._dayDiff(last, today);
    if (!last || diff == null || diff > 1) {
      s.streak = 1;
    } else if (diff === 1) {
      s.streak = (Number(s.streak) || 0) + 1;
    }

    s.lastActiveDate = today;
    this.set(s);
    return s;
  },
};

if (!localStorage.getItem("fc_meta")) {
  FC.set({ xp: 450, streak: 0, lives: HEART_MAX, lastHeartTime: Date.now(), lastActiveDate: "" });
} else {
  FC.get();
}
