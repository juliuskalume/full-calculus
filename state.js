const HEART_MAX = 5;
const HEART_REFILL_MIN = 5;

window.FC = {
  get() {
    const fallback = {
      xp: 450,
      streak: 3,
      lives: HEART_MAX,
      lastHeartTime: Date.now(),
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

    s = this._refillHearts(s);
    this.set(s);
    return s;
  },

  set(data) {
    localStorage.setItem("fc_meta", JSON.stringify(data));
  },

  addXP(amount) {
    const s = this.get();
    s.xp += Number(amount) || 0;
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
};

if (!localStorage.getItem("fc_meta")) {
  FC.set({ xp: 450, streak: 3, lives: HEART_MAX, lastHeartTime: Date.now() });
} else {
  FC.get();
}
