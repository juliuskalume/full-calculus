
window.FCProgress = {
  _syncTimer: null,

  _scheduleSync() {
    if (!window.FCAuth || !FCAuth.enabled || !FCAuth.getCurrentUser) return;
    if (!FCAuth.getCurrentUser()) return;
    if (this._syncTimer) return;
    this._syncTimer = setTimeout(() => {
      this._syncTimer = null;
      if (window.FCAuth?.syncToRemote) {
        FCAuth.syncToRemote().catch(() => {});
      }
    }, 250);
  },

  _todayKey() {
    return new Date().toISOString().slice(0, 10);
  },

  _default() {
    return {
      completed: [],
      current: "c1-prelim-functions-review",
      completedSections: [],
      currentSectionId: "c1-prelim-functions-review",
      completedTests: {},
      unlockedSectionIds: [],
      unlockedChapterIds: [],
      tagStats: {},
      mistakeItemIds: [],
      daily: { date: "", xp: 0 },
      dailyQuests: {
        date: this._todayKey(),
        lessonsCompleted: 0,
        correctStreak: 0,
        bestStreak: 0,
        claimed: {
          lesson_master: false,
          streak_master: false,
        },
      },
      version: "2026.1",
    };
  },

  _ensureDailyQuests(p) {
    const today = this._todayKey();
    if (!p.dailyQuests || typeof p.dailyQuests !== "object") {
      p.dailyQuests = {
        date: today,
        lessonsCompleted: 0,
        correctStreak: 0,
        bestStreak: 0,
        claimed: {
          lesson_master: false,
          streak_master: false,
        },
      };
      return p;
    }

    if (!p.dailyQuests.claimed || typeof p.dailyQuests.claimed !== "object") {
      p.dailyQuests.claimed = { lesson_master: false, streak_master: false };
    }
    if (typeof p.dailyQuests.lessonsCompleted !== "number") p.dailyQuests.lessonsCompleted = 0;
    if (typeof p.dailyQuests.correctStreak !== "number") p.dailyQuests.correctStreak = 0;
    if (typeof p.dailyQuests.bestStreak !== "number") p.dailyQuests.bestStreak = 0;
    if (typeof p.dailyQuests.claimed.lesson_master !== "boolean") p.dailyQuests.claimed.lesson_master = false;
    if (typeof p.dailyQuests.claimed.streak_master !== "boolean") p.dailyQuests.claimed.streak_master = false;

    if (p.dailyQuests.date !== today) {
      p.dailyQuests.date = today;
      p.dailyQuests.lessonsCompleted = 0;
      p.dailyQuests.correctStreak = 0;
      p.dailyQuests.bestStreak = 0;
      p.dailyQuests.claimed = {
        lesson_master: false,
        streak_master: false,
      };
    }

    return p;
  },

  _normalize(raw) {
    const p = raw && typeof raw === "object" ? raw : this._default();
    if (!Array.isArray(p.completed)) p.completed = [];
    if (!Array.isArray(p.completedSections)) p.completedSections = [];
    if (!p.currentSectionId) p.currentSectionId = p.current || "c1-limits-intro";
    if (!p.current) p.current = p.currentSectionId;
    if (!p.completedTests || typeof p.completedTests !== "object") p.completedTests = {};
    if (!Array.isArray(p.unlockedSectionIds)) p.unlockedSectionIds = [];
    if (!Array.isArray(p.unlockedChapterIds)) p.unlockedChapterIds = [];
    if (!p.tagStats || typeof p.tagStats !== "object") p.tagStats = {};
    if (!Array.isArray(p.mistakeItemIds)) p.mistakeItemIds = [];
    if (!p.daily || typeof p.daily !== "object") p.daily = { date: "", xp: 0 };

    // keep compatibility lists aligned
    p.completedSections.forEach((id) => {
      if (!p.completed.includes(id)) p.completed.push(id);
    });
    p.completed.forEach((id) => {
      if (!p.completedSections.includes(id)) p.completedSections.push(id);
    });

    this._ensureDailyQuests(p);
    return p;
  },

  get() {
    let raw = null;
    try {
      raw = JSON.parse(localStorage.getItem("fc_progress") || "null");
    } catch {
      raw = null;
    }
    const p = this._normalize(raw);
    this.set(p);
    return p;
  },

  set(data) {
    localStorage.setItem("fc_progress", JSON.stringify(this._normalize(data)));
  },

  setCurrentSection(sectionId) {
    const p = this.get();
    p.currentSectionId = sectionId;
    p.current = sectionId;
    this.set(p);
  },

  complete(lessonId) {
    this.completeSection(lessonId);
  },

  completeSection(sectionId) {
    const p = this.get();
    if (!p.completedSections.includes(sectionId)) {
      p.completedSections.push(sectionId);
    }
    if (!p.completed.includes(sectionId)) {
      p.completed.push(sectionId);
    }
    this.set(p);
    this._scheduleSync();
  },

  isCompleted(lessonId) {
    return this.isSectionCompleted(lessonId);
  },

  isSectionCompleted(sectionId) {
    return this.get().completedSections.includes(sectionId);
  },

  isSectionUnlocked(sectionId) {
    if (!window.FCContent) return true;
    const p = this.get();
    if (p.unlockedSectionIds.includes(sectionId)) return true;
    const section = window.FCContent.getSection(sectionId);
    if (!section) return true;
    const prereq = section.prerequisiteSectionIds || [];
    return prereq.every((id) => p.completedSections.includes(id));
  },

  recordItemResult(itemId, correct) {
    if (!window.FCContent) return;
    const p = this.get();
    const item = window.FCContent.getItem(itemId);
    if (!item || !item.tags) return;
    if (correct === null) return;

    item.tags.forEach((tag) => {
      if (!p.tagStats[tag]) p.tagStats[tag] = { correct: 0, total: 0 };
      p.tagStats[tag].total += 1;
      if (correct) p.tagStats[tag].correct += 1;
    });

    if (!correct) {
      if (!p.mistakeItemIds.includes(itemId)) p.mistakeItemIds.push(itemId);
    } else {
      p.mistakeItemIds = p.mistakeItemIds.filter((id) => id !== itemId);
    }

    this.recordDailyAnswer(correct, p);
    this.set(p);
  },

  recordTestResult(blueprintId, result) {
    const p = this.get();
    p.completedTests[blueprintId] = {
      score: result.score,
      passed: !!result.passed,
      submittedAt: result.submittedAt || new Date().toISOString(),
    };
    if (result.unlockSectionIds) {
      result.unlockSectionIds.forEach((id) => {
        if (!p.unlockedSectionIds.includes(id)) p.unlockedSectionIds.push(id);
      });
    }
    if (result.unlockChapterIds) {
      result.unlockChapterIds.forEach((id) => {
        if (!p.unlockedChapterIds.includes(id)) p.unlockedChapterIds.push(id);
      });
    }
    this.set(p);
    this._scheduleSync();
  },

  getTagMastery(tag) {
    const stats = this.get().tagStats[tag];
    if (!stats || !stats.total) return 0;
    return Math.round((stats.correct / stats.total) * 100);
  },

  addDailyXp(amount) {
    const p = this.get();
    const today = new Date().toISOString().slice(0, 10);
    if (p.daily.date !== today) {
      p.daily.date = today;
      p.daily.xp = 0;
    }
    p.daily.xp += Number(amount) || 0;
    this.set(p);
  },

  getDailyQuests() {
    const p = this.get();
    this._ensureDailyQuests(p);
    return p.dailyQuests;
  },

  recordDailyLessonComplete() {
    const p = this.get();
    this._ensureDailyQuests(p);
    p.dailyQuests.lessonsCompleted += 1;
    this.set(p);
    this._scheduleSync();
  },

  recordDailyAnswer(correct, existing) {
    if (correct !== true && correct !== false) return;
    const p = existing || this.get();
    this._ensureDailyQuests(p);
    if (correct) {
      p.dailyQuests.correctStreak += 1;
      if (p.dailyQuests.correctStreak > p.dailyQuests.bestStreak) {
        p.dailyQuests.bestStreak = p.dailyQuests.correctStreak;
      }
    } else {
      p.dailyQuests.correctStreak = 0;
    }
    if (!existing) this.set(p);
  },

  claimDailyQuest(questId) {
    const p = this.get();
    this._ensureDailyQuests(p);
    if (!p.dailyQuests.claimed) p.dailyQuests.claimed = {};
    if (p.dailyQuests.claimed[questId]) return false;
    p.dailyQuests.claimed[questId] = true;
    this.set(p);
    return true;
  },
};

if (!localStorage.getItem("fc_progress")) {
  FCProgress.set(FCProgress._default());
} else {
  FCProgress.get();
}
