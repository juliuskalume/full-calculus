(function () {
  const DEFAULT_STATE_KEY = "fc_state";
  const DEFAULT_PROGRESS_KEY = "fc_progress";
  const DEFAULT_META_KEY = "fc_meta";

  const config = window.FC_FIREBASE_CONFIG || null;
  const enabledFlag = window.FC_FIREBASE_ENABLED !== false;

  const isConfigValid = (cfg) => {
    if (!cfg || typeof cfg !== "object") return false;
    const required = ["apiKey", "authDomain", "projectId", "appId"];
    return required.every((key) => {
      const value = String(cfg[key] || "");
      return value && !value.includes("YOUR_");
    });
  };


  const safeParse = (key, fallback) => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  };

  const safeSet = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Storage can fail in private mode; ignore.
    }
  };

  const LOCAL_UID_KEY = "fc_uid";

  const clearLocalData = () => {
    try {
      const keys = [];
      for (let i = 0; i < localStorage.length; i += 1) {
        const key = localStorage.key(i);
        if (key && key.startsWith("fc_")) keys.push(key);
      }
      keys.forEach((key) => localStorage.removeItem(key));
    } catch {
      try {
        localStorage.clear();
      } catch {
        // ignore
      }
    }

    try {
      sessionStorage.clear();
    } catch {
      // ignore
    }
  };

  const toObject = (value) =>
    value && typeof value === "object" && !Array.isArray(value) ? value : {};

  const toArray = (value) => (Array.isArray(value) ? value.filter((item) => item != null) : []);

  const mergeList = (primary, secondary) => {
    const out = Array.isArray(primary) ? primary.slice() : [];
    const extras = Array.isArray(secondary) ? secondary : [];
    extras.forEach((item) => {
      if (!out.includes(item)) out.push(item);
    });
    return out;
  };

  const mergeSparseObject = (remoteObj, localObj) => {
    const merged = { ...toObject(remoteObj) };
    const local = toObject(localObj);
    Object.keys(local).forEach((key) => {
      const val = local[key];
      if (val == null) return;
      if (typeof val === "string" && !val.trim()) return;
      merged[key] = val;
    });
    return merged;
  };

  const normalizeProgress = (raw) => {
    const p = toObject(raw);
    const daily = toObject(p.daily);
    const dailyQuests = toObject(p.dailyQuests);
    return {
      ...p,
      completed: toArray(p.completed),
      completedSections: toArray(p.completedSections),
      completedTests: toObject(p.completedTests),
      unlockedSectionIds: toArray(p.unlockedSectionIds),
      unlockedChapterIds: toArray(p.unlockedChapterIds),
      tagStats: toObject(p.tagStats),
      mistakeItemIds: toArray(p.mistakeItemIds),
      daily: {
        date: typeof daily.date === "string" ? daily.date : "",
        xp: Number(daily.xp) || 0,
      },
      dailyQuests: {
        date: typeof dailyQuests.date === "string" ? dailyQuests.date : "",
        lessonsCompleted: Number(dailyQuests.lessonsCompleted) || 0,
        correctStreak: Number(dailyQuests.correctStreak) || 0,
        bestStreak: Number(dailyQuests.bestStreak) || 0,
        claimed: {
          lesson_master: !!dailyQuests?.claimed?.lesson_master,
          streak_master: !!dailyQuests?.claimed?.streak_master,
        },
      },
      currentSectionId: p.currentSectionId || p.current || "",
      current: p.current || p.currentSectionId || "",
    };
  };

  const pickTestResult = (a, b) => {
    const aTime = Date.parse(a?.submittedAt || "");
    const bTime = Date.parse(b?.submittedAt || "");
    if (!Number.isNaN(aTime) && !Number.isNaN(bTime) && aTime !== bTime) {
      return bTime > aTime ? b : a;
    }
    if (b?.passed && !a?.passed) return b;
    if (a?.passed && !b?.passed) return a;
    const aScore = typeof a?.score === "number" ? a.score : null;
    const bScore = typeof b?.score === "number" ? b.score : null;
    if (aScore != null && bScore != null && aScore !== bScore) {
      return bScore > aScore ? b : a;
    }
    return a;
  };

  const mergeTests = (primary, secondary) => {
    const merged = { ...toObject(primary) };
    const extra = toObject(secondary);
    Object.keys(extra).forEach((id) => {
      if (!merged[id]) {
        merged[id] = extra[id];
        return;
      }
      merged[id] = pickTestResult(merged[id], extra[id]);
    });
    return merged;
  };

  const mergeTagStats = (primary, secondary) => {
    const merged = { ...toObject(primary) };
    const extra = toObject(secondary);
    Object.keys(extra).forEach((tag) => {
      const a = toObject(merged[tag]);
      const b = toObject(extra[tag]);
      const total = Math.max(Number(a.total) || 0, Number(b.total) || 0);
      const correct = Math.min(total, Math.max(Number(a.correct) || 0, Number(b.correct) || 0));
      merged[tag] = { correct, total };
    });
    return merged;
  };

  const mergeDaily = (primary, secondary) => {
    const a = toObject(primary);
    const b = toObject(secondary);
    const aDate = typeof a.date === "string" ? a.date : "";
    const bDate = typeof b.date === "string" ? b.date : "";
    if (aDate && bDate) {
      if (aDate === bDate) {
        return { date: aDate, xp: Math.max(Number(a.xp) || 0, Number(b.xp) || 0) };
      }
      return aDate > bDate
        ? { date: aDate, xp: Number(a.xp) || 0 }
        : { date: bDate, xp: Number(b.xp) || 0 };
    }
    if (aDate) return { date: aDate, xp: Number(a.xp) || 0 };
    if (bDate) return { date: bDate, xp: Number(b.xp) || 0 };
    return { date: "", xp: 0 };
  };

  const mergeDailyQuests = (primary, secondary) => {
    const a = normalizeProgress({ dailyQuests: primary }).dailyQuests;
    const b = normalizeProgress({ dailyQuests: secondary }).dailyQuests;
    if (a.date && b.date) {
      if (a.date === b.date) {
        return {
          date: a.date,
          lessonsCompleted: Math.max(a.lessonsCompleted, b.lessonsCompleted),
          correctStreak: Math.max(a.correctStreak, b.correctStreak),
          bestStreak: Math.max(a.bestStreak, b.bestStreak),
          claimed: {
            lesson_master: a.claimed.lesson_master || b.claimed.lesson_master,
            streak_master: a.claimed.streak_master || b.claimed.streak_master,
          },
        };
      }
      return a.date > b.date ? a : b;
    }
    return a.date ? a : b;
  };

  const pickCurrentSectionId = (primary, secondary, completedSections) => {
    const completed = new Set(Array.isArray(completedSections) ? completedSections : []);
    const primaryId = primary.currentSectionId || primary.current || "";
    const secondaryId = secondary.currentSectionId || secondary.current || "";
    if (primaryId && !completed.has(primaryId)) return primaryId;
    if (secondaryId && !completed.has(secondaryId)) return secondaryId;
    return primaryId || secondaryId || "";
  };

  const mergeProgress = (localRaw, remoteRaw) => {
    const local = normalizeProgress(localRaw);
    const remote = normalizeProgress(remoteRaw);
    const localScore = local.completedSections.length + Object.keys(local.completedTests).length;
    const remoteScore = remote.completedSections.length + Object.keys(remote.completedTests).length;
    const primary = localScore >= remoteScore ? local : remote;
    const secondary = primary === local ? remote : local;

    const merged = { ...secondary, ...primary };
    merged.completedSections = mergeList(primary.completedSections, secondary.completedSections);
    merged.completed = mergeList(primary.completed, secondary.completed);
    merged.unlockedSectionIds = mergeList(primary.unlockedSectionIds, secondary.unlockedSectionIds);
    merged.unlockedChapterIds = mergeList(primary.unlockedChapterIds, secondary.unlockedChapterIds);
    merged.completedTests = mergeTests(primary.completedTests, secondary.completedTests);
    merged.tagStats = mergeTagStats(primary.tagStats, secondary.tagStats);
    merged.mistakeItemIds = mergeList(primary.mistakeItemIds, secondary.mistakeItemIds);
    merged.daily = mergeDaily(primary.daily, secondary.daily);
    merged.dailyQuests = mergeDailyQuests(primary.dailyQuests, secondary.dailyQuests);

    merged.completedSections.forEach((id) => {
      if (!merged.completed.includes(id)) merged.completed.push(id);
    });
    merged.completed.forEach((id) => {
      if (!merged.completedSections.includes(id)) merged.completedSections.push(id);
    });

    merged.currentSectionId = pickCurrentSectionId(primary, secondary, merged.completedSections);
    merged.current = merged.currentSectionId || merged.current || "";
    merged.version = primary.version || secondary.version || merged.version || "";
    return merged;
  };

  const mergeMeta = (localMeta, remoteMeta) => {
    const local = toObject(localMeta);
    const remote = toObject(remoteMeta);
    const toNumber = (value) => (typeof value === "number" ? value : Number(value) || 0);
    return {
      xp: Math.max(toNumber(local.xp), toNumber(remote.xp)),
      streak: Math.max(toNumber(local.streak), toNumber(remote.streak)),
      lives: Math.max(toNumber(local.lives), toNumber(remote.lives)),
      lastHeartTime: Math.max(toNumber(local.lastHeartTime), toNumber(remote.lastHeartTime)),
    };
  };

  const mergeLocalAndRemoteState = (localState, remoteData) => ({
    onboarding: mergeSparseObject(remoteData?.onboarding, localState?.onboarding),
    progress: mergeProgress(localState?.progress, remoteData?.progress),
    meta: mergeMeta(localState?.meta, remoteData?.meta),
  });

  const needsRemoteUpdate = (merged, remoteData) => {
    const safeStringify = (value) => {
      try {
        return JSON.stringify(value || {});
      } catch {
        return "";
      }
    };
    return (
      safeStringify(merged?.onboarding) !== safeStringify(remoteData?.onboarding) ||
      safeStringify(merged?.progress) !== safeStringify(remoteData?.progress) ||
      safeStringify(merged?.meta) !== safeStringify(remoteData?.meta)
    );
  };

  const exportLocalState = () => ({
    onboarding: safeParse(DEFAULT_STATE_KEY, {}),
    progress: safeParse(DEFAULT_PROGRESS_KEY, {}),
    meta: safeParse(DEFAULT_META_KEY, {}),
  });

  const applyLocalState = (payload) => {
    if (!payload || typeof payload !== "object") return;
    if (payload.onboarding && typeof payload.onboarding === "object") {
      safeSet(DEFAULT_STATE_KEY, payload.onboarding);
    }
    if (payload.progress && typeof payload.progress === "object") {
      safeSet(DEFAULT_PROGRESS_KEY, payload.progress);
    }
    if (payload.meta && typeof payload.meta === "object") {
      safeSet(DEFAULT_META_KEY, payload.meta);
    }
  };

  const normalizeEmail = (value) => String(value || "").trim().toLowerCase();

  if (!enabledFlag || !window.firebase || !isConfigValid(config)) {
    window.FCAuth = {
      enabled: false,
      ready: false,
      signUpWithEmail: async () => {
        throw new Error("Firebase config missing.");
      },
      signInWithEmail: async () => {
        throw new Error("Firebase config missing.");
      },
      signInWithGoogle: async () => {
        throw new Error("Firebase config missing.");
      },
      signOut: async () => {
        clearLocalData();
      },
      onAuthStateChanged: () => {},
      getCurrentUser: () => null,
      resetPassword: async () => {
        throw new Error("Firebase config missing.");
      },
      syncFromRemote: async () => null,
      syncToRemote: async () => null,
    };
    return;
  }

  firebase.initializeApp(config);
  const auth = firebase.auth();
  const db = firebase.firestore();

  const buildUserDoc = (user, extra) => {
    const now = new Date().toISOString();
    const local = exportLocalState();
    const onboarding = { ...(local.onboarding || {}) };

    if (extra && typeof extra === "object") {
      if (extra.name) onboarding.name = extra.name;
      if (extra.avatarUrl) onboarding.avatarUrl = extra.avatarUrl;
      if (extra.age) onboarding.age = extra.age;
      if (extra.email) onboarding.email = extra.email;
    }

    if (!onboarding.email && user.email) onboarding.email = user.email;

    return {
      uid: user.uid,
      email: user.email || onboarding.email || "",
      displayName: user.displayName || onboarding.name || "",
      photoURL: user.photoURL || onboarding.avatarUrl || "",
      onboarding,
      progress: local.progress || {},
      meta: local.meta || {},
      createdAt: user.metadata?.creationTime || now,
      lastLoginAt: user.metadata?.lastSignInTime || now,
      updatedAt: now,
    };
  };

  const syncToRemote = async (extra) => {
    const user = auth.currentUser;
    if (!user) return null;
    const payload = buildUserDoc(user, extra);
    await db.collection("users").doc(user.uid).set(payload, { merge: true });
    return payload;
  };

  const syncFromRemote = async () => {
    const user = auth.currentUser;
    if (!user) return null;
    const doc = await db.collection("users").doc(user.uid).get();
    if (!doc.exists) return null;
    const data = doc.data() || {};
    const local = exportLocalState();
    const merged = mergeLocalAndRemoteState(local, data);
    applyLocalState(merged);
    if (needsRemoteUpdate(merged, data)) {
      await syncToRemote();
    }
    return { ...data, ...merged };
  };

  const ensureUserDoc = async (extra) => {
    const user = auth.currentUser;
    if (!user) return null;
    const doc = await db.collection("users").doc(user.uid).get();
    if (!doc.exists) {
      return syncToRemote(extra);
    }
    return doc.data();
  };

  const signUpWithEmail = async ({ email, password, name, age, avatarUrl }) => {
    const cleanEmail = normalizeEmail(email);
    const result = await auth.createUserWithEmailAndPassword(cleanEmail, password);
    if (name) {
      await result.user.updateProfile({ displayName: name });
    }
    const local = exportLocalState();
    local.onboarding = local.onboarding || {};
    if (name) local.onboarding.name = name;
    if (age) local.onboarding.age = age;
    if (avatarUrl) local.onboarding.avatarUrl = avatarUrl;
    if (cleanEmail) local.onboarding.email = cleanEmail;
    safeSet(DEFAULT_STATE_KEY, local.onboarding);
    await syncToRemote({ name, age, avatarUrl, email: cleanEmail });
    return result.user;
  };

  const signInWithEmail = async ({ email, password }) => {
    const cleanEmail = normalizeEmail(email);
    const result = await auth.signInWithEmailAndPassword(cleanEmail, password);
    const data = await syncFromRemote();
    if (!data) {
      await syncToRemote({ email: cleanEmail });
    }
    return result.user;
  };

  const resetPassword = async ({ email }) => {
    const cleanEmail = normalizeEmail(email);
    if (!cleanEmail) {
      throw new Error("Enter your email to reset your password.");
    }
    await auth.sendPasswordResetEmail(cleanEmail);
  };

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    const result = await auth.signInWithPopup(provider);
    const data = await syncFromRemote();
    if (!data) {
      await syncToRemote({
        email: result.user.email || "",
        name: result.user.displayName || "",
        avatarUrl: result.user.photoURL || "",
      });
    }
    return result.user;
  };

  const signOut = async () => {
    try {
      await auth.signOut();
    } finally {
      clearLocalData();
    }
  };

  const onAuthStateChanged = (cb) => auth.onAuthStateChanged(cb);

  const getCurrentUser = () => auth.currentUser;

  window.FCAuth = {
    enabled: true,
    ready: true,
    auth,
    db,
    signUpWithEmail,
    signInWithEmail,
    signInWithGoogle,
    resetPassword,
    signOut,
    onAuthStateChanged,
    getCurrentUser,
    syncFromRemote,
    syncToRemote,
    ensureUserDoc,
    exportLocalState,
    applyLocalState,
  };

  auth.onAuthStateChanged((user) => {
    const currentUid = user?.uid || "";
    let storedUid = "";
    try {
      storedUid = localStorage.getItem(LOCAL_UID_KEY) || "";
    } catch {
      storedUid = "";
    }

    if (!currentUid) {
      clearLocalData();
      return;
    }

    if (storedUid && storedUid !== currentUid) {
      clearLocalData();
    }

    try {
      localStorage.setItem(LOCAL_UID_KEY, currentUid);
    } catch {
      // ignore
    }

    syncFromRemote().catch(() => {});
  });
})();
