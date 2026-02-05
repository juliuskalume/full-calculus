(function () {
  const DEFAULT_STATE_KEY = "fc_state";
  const DEFAULT_PROGRESS_KEY = "fc_progress";
  const DEFAULT_META_KEY = "fc_meta";
  const DEFAULT_PREFS_KEY = "fc_prefs";

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

  const clampDailyGoalXp = (value) => {
    const num = Number(value);
    if (!Number.isFinite(num)) return null;
    return Math.min(1000, Math.max(10, Math.round(num)));
  };

  const normalizeDailyGoalPrefs = (raw) => {
    const prefs = toObject(raw);
    return {
      dailyGoalXp: clampDailyGoalXp(prefs.dailyGoalXp),
      dailyGoalUpdatedAt: typeof prefs.dailyGoalUpdatedAt === "string" ? prefs.dailyGoalUpdatedAt : "",
    };
  };

  const ensureDailyGoalTimestamp = (prefs) => {
    if (Number.isFinite(prefs.dailyGoalXp) && !prefs.dailyGoalUpdatedAt) {
      prefs.dailyGoalUpdatedAt = new Date().toISOString();
    }
    return prefs;
  };

  const mergeDailyGoalPrefs = (localRaw, remoteRaw) => {
    const local = normalizeDailyGoalPrefs(localRaw);
    const remote = normalizeDailyGoalPrefs(remoteRaw);
    const hasLocal = Number.isFinite(local.dailyGoalXp);
    const hasRemote = Number.isFinite(remote.dailyGoalXp);

    if (!hasLocal && !hasRemote) {
      return { merged: null, source: "none" };
    }

    if (!hasLocal && hasRemote) {
      return { merged: remote, source: "remote" };
    }

    if (hasLocal && !hasRemote) {
      return { merged: local, source: "local" };
    }

    const localTs = Date.parse(local.dailyGoalUpdatedAt || "");
    const remoteTs = Date.parse(remote.dailyGoalUpdatedAt || "");
    if (!Number.isNaN(localTs) && !Number.isNaN(remoteTs)) {
      return localTs >= remoteTs ? { merged: local, source: "local" } : { merged: remote, source: "remote" };
    }
    if (!Number.isNaN(localTs)) return { merged: local, source: "local" };
    if (!Number.isNaN(remoteTs)) return { merged: remote, source: "remote" };
    return { merged: local, source: "local" };
  };

  const applyDailyGoalPrefs = (basePrefs, dailyPrefs) => {
    if (!dailyPrefs) return basePrefs;
    const next = { ...basePrefs };
    if (Number.isFinite(dailyPrefs.dailyGoalXp)) next.dailyGoalXp = dailyPrefs.dailyGoalXp;
    if (dailyPrefs.dailyGoalUpdatedAt) next.dailyGoalUpdatedAt = dailyPrefs.dailyGoalUpdatedAt;
    return next;
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
    onboarding: (() => {
      const remote = toObject(remoteData?.onboarding);
      const local = toObject(localState?.onboarding);
      const merged = mergeSparseObject(remote, local);
      const preferRemoteKeys = [
        "username",
        "fullName",
        "nationality",
        "email",
        "dob",
        "age",
        "avatarUrl",
        "leagueIndex",
        "leagueId",
        "leagueName",
      ];
      preferRemoteKeys.forEach((key) => {
        const value = remote[key];
        if (value == null) return;
        if (typeof value === "string" && !value.trim()) return;
        merged[key] = value;
      });
      return merged;
    })(),
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
  const PENDING_PROFILE_SYNC_KEY = "fc_pending_profile_sync";

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
    const rawPrefs = safeParse(DEFAULT_PREFS_KEY, {});
    const dailyPrefs = ensureDailyGoalTimestamp(normalizeDailyGoalPrefs(rawPrefs));
    if (dailyPrefs.dailyGoalXp != null && dailyPrefs.dailyGoalUpdatedAt) {
      const nextPrefs = applyDailyGoalPrefs(rawPrefs, dailyPrefs);
      safeSet(DEFAULT_PREFS_KEY, nextPrefs);
    }

    if (extra && typeof extra === "object") {
      if (extra.username) onboarding.username = extra.username;
      if (extra.fullName) onboarding.fullName = extra.fullName;
      if (extra.nationality) onboarding.nationality = extra.nationality;
      if (extra.avatarUrl) onboarding.avatarUrl = extra.avatarUrl;
      if (extra.skill) onboarding.skill = extra.skill;
      if (extra.goal) onboarding.goal = extra.goal;
      if (Number.isFinite(extra.minutesPerDay)) onboarding.minutesPerDay = extra.minutesPerDay;
      if (typeof extra.notifications === "boolean") onboarding.notifications = extra.notifications;
      if (extra.dob) onboarding.dob = extra.dob;
      if (extra.age) onboarding.age = extra.age;
      if (extra.email) onboarding.email = extra.email;
      if (Number.isFinite(extra.leagueIndex)) onboarding.leagueIndex = extra.leagueIndex;
      if (extra.leagueId) onboarding.leagueId = extra.leagueId;
      if (extra.leagueName) onboarding.leagueName = extra.leagueName;
    }

    if (!onboarding.email && user.email) onboarding.email = user.email;
    if (!onboarding.username && onboarding.name) onboarding.username = onboarding.name;

    const username = onboarding.username || user.displayName || "";
    const payload = {
      uid: user.uid,
      email: user.email || onboarding.email || "",
      displayName: username,
      username,
      usernameLower: String(username || "").toLowerCase(),
      fullName: onboarding.fullName || "",
      nationality: onboarding.nationality || "",
      dob: onboarding.dob || "",
      photoURL: user.photoURL || onboarding.avatarUrl || "",
      onboarding,
      progress: local.progress || {},
      meta: local.meta || {},
      createdAt: user.metadata?.creationTime || now,
      lastLoginAt: user.metadata?.lastSignInTime || now,
      updatedAt: now,
    };
    if (Number.isFinite(dailyPrefs.dailyGoalXp)) {
      payload.preferences = {
        dailyGoalXp: dailyPrefs.dailyGoalXp,
        dailyGoalUpdatedAt: dailyPrefs.dailyGoalUpdatedAt || now,
      };
    }
    return payload;
  };

  const buildLeaderboardEntry = (user, extra) => {
    const now = new Date().toISOString();
    const local = exportLocalState();
    const onboarding = { ...(local.onboarding || {}) };
    const meta = local.meta || {};
    const streakValue = Number(meta.streak) || 0;
    let leagueIndex = Number(extra?.leagueIndex ?? onboarding.leagueIndex);
    if (Number.isFinite(leagueIndex) && leagueIndex >= 0) {
      if (leagueIndex >= LEAGUES.length) leagueIndex = LEAGUES.length - 1;
    } else if (streakValue >= 1) {
      leagueIndex = 0;
    } else {
      leagueIndex = -1;
    }
    const league = leagueIndex >= 0 ? LEAGUES[leagueIndex] : null;
    const displayName =
      extra?.username ||
      onboarding.username ||
      user.displayName ||
      onboarding.name ||
      "Learner";
    const photoURL =
      user.photoURL ||
      extra?.avatarUrl ||
      onboarding.avatarUrl ||
      "";
    return {
      uid: user.uid,
      displayName,
      displayNameLower: String(displayName || "").toLowerCase(),
      username: displayName,
      photoURL,
      xp: Number(meta.xp) || 0,
      streak: streakValue,
      weeklyXp: Number(meta.weeklyXp) || 0,
      weekKey: typeof meta.weekKey === "string" ? meta.weekKey : "",
      lastWeekXp: Number(meta.lastWeekXp) || 0,
      lastWeekKey: typeof meta.lastWeekKey === "string" ? meta.lastWeekKey : "",
      leagueIndex,
      leagueId: league?.id || "",
      leagueName: league?.name || "",
      updatedAt: now,
    };
  };

  const buildPublicProfile = (user, extra, options = {}) => {
    const now = new Date().toISOString();
    if (options.presenceOnly) {
      return {
        uid: user.uid,
        lastActiveAt: now,
      };
    }

    const local = exportLocalState();
    const onboarding = { ...(local.onboarding || {}) };
    const progress = normalizeProgress(local.progress);
    const meta = local.meta || {};
    const displayName =
      extra?.username ||
      onboarding.username ||
      user.displayName ||
      onboarding.name ||
      "Learner";
    const photoURL =
      user.photoURL ||
      extra?.avatarUrl ||
      onboarding.avatarUrl ||
      "";

    const payload = {
      uid: user.uid,
      displayName,
      displayNameLower: String(displayName || "").toLowerCase(),
      username: displayName,
      usernameLower: String(displayName || "").toLowerCase(),
      photoURL,
      xp: Number(meta.xp) || 0,
      streak: Number(meta.streak) || 0,
      lessonsCompleted: Array.isArray(progress.completedSections)
        ? progress.completedSections.length
        : 0,
      joinedAt: user.metadata?.creationTime || now,
      lastActiveAt: now,
    };

    const allSections = Array.isArray(window.FCContent?.sections) ? window.FCContent.sections : null;
    if (allSections && Array.isArray(progress.completedSections)) {
      const totals = {
        c1: allSections.filter((section) => String(section.id).startsWith("c1-")).map((s) => s.id),
        c2: allSections.filter((section) => String(section.id).startsWith("c2-")).map((s) => s.id),
        c3: allSections.filter((section) => String(section.id).startsWith("c3-")).map((s) => s.id),
      };
      const completedSet = new Set(progress.completedSections.map((id) => String(id)));
      payload.achievements = {
        c1: totals.c1.length > 0 && totals.c1.every((id) => completedSet.has(id)),
        c2: totals.c2.length > 0 && totals.c2.every((id) => completedSet.has(id)),
        c3: totals.c3.length > 0 && totals.c3.every((id) => completedSet.has(id)),
      };
    }

    return payload;
  };

  const syncLeaderboard = async (extra) => {
    const user = auth.currentUser;
    if (!user) return null;
    const payload = buildLeaderboardEntry(user, extra);
    await db.collection("leaderboard").doc(user.uid).set(payload, { merge: true });
    return payload;
  };

  const syncPublicProfile = async (extra, options = {}) => {
    const user = auth.currentUser;
    if (!user) return null;
    const payload = buildPublicProfile(user, extra, options);
    await db.collection("public_profiles").doc(user.uid).set(payload, { merge: true });
    return payload;
  };

  const USERNAME_REGISTRY = "name_registry";
  const USERNAME_LOCAL_KEY = "fc_username_registry";

  const LEAGUES = [
    { id: "bronze", name: "Bronze League" },
    { id: "silver", name: "Silver League" },
    { id: "gold", name: "Gold League" },
    { id: "sapphire", name: "Sapphire League" },
    { id: "ruby", name: "Ruby League" },
    { id: "emerald", name: "Emerald League" },
    { id: "amethyst", name: "Amethyst League" },
    { id: "master", name: "Master League" },
    { id: "champion", name: "Champion League" },
    { id: "obsidian", name: "Obsidian League" },
  ];

  const normalizeUsername = (value) =>
    String(value || "")
      .trim()
      .replace(/\s+/g, "")
      .replace(/[^\w]/g, "");

  const generateUsername = () => {
    const num = Math.floor(Math.random() * 1000);
    return `Cal${String(num).padStart(3, "0")}`;
  };

  const reserveUsername = async (desired, options = {}) => {
    const user = auth.currentUser;
    if (!user) return { ok: false, message: "Not signed in." };
    const attempts = Number(options.attempts) || 25;
    let candidate = normalizeUsername(desired);
    if (candidate && (candidate.length < 3 || candidate.length > 20)) {
      return { ok: false, message: "Username must be 3-20 characters." };
    }
    let generated = !candidate;

    for (let i = 0; i < attempts; i += 1) {
      const name = candidate || generateUsername();
      const lower = name.toLowerCase();
      try {
        await db
          .collection(USERNAME_REGISTRY)
          .doc(lower)
          .set(
            {
              uid: user.uid,
              username: name,
              usernameLower: lower,
              name,
              nameLower: lower,
              updatedAt: new Date().toISOString(),
            },
            { merge: true }
          );

        try {
          const prev = localStorage.getItem(USERNAME_LOCAL_KEY);
          if (prev && prev !== lower) {
            db.collection(USERNAME_REGISTRY).doc(prev).delete().catch(() => {});
          }
          localStorage.setItem(USERNAME_LOCAL_KEY, lower);
        } catch {
          // ignore
        }

        return { ok: true, username: name };
      } catch (err) {
        const code = err?.code || "";
        if (code === "permission-denied" || code === "already-exists") {
          if (!generated && candidate) {
            return { ok: false, message: "That username is already taken." };
          }
          candidate = "";
          generated = true;
          continue;
        }
        return { ok: false, message: "Unable to save that username." };
      }
    }
    return { ok: false, message: "Unable to find an available username." };
  };

  const ensureUsername = async () => {
    const user = auth.currentUser;
    if (!user) return;
    const local = exportLocalState();
    const onboarding = toObject(local.onboarding);
    const existing = String(onboarding.username || user.displayName || "").trim();
    if (existing) return;
    const reserve = await reserveUsername("", { attempts: 30 });
    if (!reserve?.ok || !reserve.username) return;
    const finalUsername = reserve.username;
    try {
      await user.updateProfile({ displayName: finalUsername });
    } catch {
      // ignore
    }
    onboarding.username = finalUsername;
    safeSet(DEFAULT_STATE_KEY, onboarding);
    const payload = { username: finalUsername };
    try {
      await syncToRemote(payload);
    } catch {
      queueProfileSync(payload);
    }
  };

  const syncToRemote = async (extra) => {
    const user = auth.currentUser;
    if (!user) return null;
    const payload = buildUserDoc(user, extra);
    await db.collection("users").doc(user.uid).set(payload, { merge: true });
    await syncLeaderboard(extra);
    await syncPublicProfile(extra);
    return payload;
  };

  const queueProfileSync = (extra) => {
    if (!extra || typeof extra !== "object") return;
    const existing = safeParse(PENDING_PROFILE_SYNC_KEY, {});
    const merged = mergeSparseObject(existing, extra);
    safeSet(PENDING_PROFILE_SYNC_KEY, merged);
  };

  const flushQueuedProfileSync = async () => {
    const pending = safeParse(PENDING_PROFILE_SYNC_KEY, null);
    if (!pending || typeof pending !== "object") return false;
    if (!auth.currentUser) return false;
    try {
      await syncToRemote(pending);
      try {
        localStorage.removeItem(PENDING_PROFILE_SYNC_KEY);
      } catch {
        // ignore
      }
      return true;
    } catch {
      return false;
    }
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
    const rawPrefs = safeParse(DEFAULT_PREFS_KEY, {});
    const dailyMerge = mergeDailyGoalPrefs(rawPrefs, toObject(data.preferences));
    let prefsNeedRemoteUpdate = false;
    if (dailyMerge.merged) {
      const dailyWithStamp = ensureDailyGoalTimestamp({ ...dailyMerge.merged });
      const nextPrefs = applyDailyGoalPrefs(rawPrefs, dailyWithStamp);
      try {
        if (JSON.stringify(nextPrefs) !== JSON.stringify(rawPrefs)) {
          safeSet(DEFAULT_PREFS_KEY, nextPrefs);
        }
      } catch {
        // ignore
      }
      if (dailyMerge.source === "local") {
        const remoteNorm = normalizeDailyGoalPrefs(data.preferences);
        if (
          dailyWithStamp.dailyGoalXp !== remoteNorm.dailyGoalXp ||
          (dailyWithStamp.dailyGoalUpdatedAt &&
            dailyWithStamp.dailyGoalUpdatedAt !== remoteNorm.dailyGoalUpdatedAt)
        ) {
          prefsNeedRemoteUpdate = true;
        }
      }
    }
    if (needsRemoteUpdate(merged, data) || prefsNeedRemoteUpdate) {
      await syncToRemote();
    }
    await syncLeaderboard();
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

  const signUpWithEmail = async ({
    email,
    password,
    username,
    fullName,
    nationality,
    dob,
    age,
    avatarUrl,
    skill,
    goal,
    minutesPerDay,
    notifications,
  }) => {
    const cleanEmail = normalizeEmail(email);
    const result = await auth.createUserWithEmailAndPassword(cleanEmail, password);
    const usernameResult = await reserveUsername(username, { attempts: 30 });
    if (!usernameResult.ok) {
      throw new Error(usernameResult.message || "Username unavailable.");
    }
    const finalUsername = usernameResult.username || "";
    if (finalUsername) {
      await result.user.updateProfile({ displayName: finalUsername });
    }
    const local = exportLocalState();
    local.onboarding = local.onboarding || {};
    if (finalUsername) local.onboarding.username = finalUsername;
    if (fullName) local.onboarding.fullName = fullName;
    if (nationality) local.onboarding.nationality = nationality;
    if (skill) local.onboarding.skill = skill;
    if (goal) local.onboarding.goal = goal;
    if (Number.isFinite(minutesPerDay)) local.onboarding.minutesPerDay = minutesPerDay;
    if (typeof notifications === "boolean") local.onboarding.notifications = notifications;
    if (dob) local.onboarding.dob = dob;
    if (age) local.onboarding.age = age;
    if (avatarUrl) local.onboarding.avatarUrl = avatarUrl;
    if (cleanEmail) local.onboarding.email = cleanEmail;
    safeSet(DEFAULT_STATE_KEY, local.onboarding);
    await syncToRemote({
      username: finalUsername,
      fullName,
      nationality,
      skill,
      goal,
      minutesPerDay,
      notifications,
      dob,
      age,
      avatarUrl,
      email: cleanEmail,
    });
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
      let finalUsername = result.user.displayName || "";
      if (finalUsername) {
        const reserve = await reserveUsername(finalUsername, { attempts: 30 });
        if (reserve.ok && reserve.username) {
          finalUsername = reserve.username;
          await result.user.updateProfile({ displayName: finalUsername });
        }
      } else {
        const reserve = await reserveUsername("", { attempts: 30 });
        if (reserve.ok && reserve.username) {
          finalUsername = reserve.username;
          await result.user.updateProfile({ displayName: finalUsername });
        }
      }
      await syncToRemote({
        email: result.user.email || "",
        username: finalUsername,
        avatarUrl: result.user.photoURL || "",
      });
    }
    return result.user;
  };

  const signOut = async () => {
    try {
      await auth.signOut();
    } finally {
      if (window.FCPush?.disable) {
        try {
          await window.FCPush.disable();
        } catch {
          // ignore
        }
      }
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
    queueProfileSync,
    flushQueuedProfileSync,
    ensureUsername,
    syncPublicProfile,
    reserveUsername,
    ensureUserDoc,
    syncLeaderboard,
    exportLocalState,
    applyLocalState,
  };

  const PUSH_COLLECTION = "push_subscriptions";
  const PUSH_PUBLIC_KEY = window.FC_PUSH_PUBLIC_KEY || "";

  const hasPushSupport = () =>
    typeof window !== "undefined" &&
    "serviceWorker" in navigator &&
    "PushManager" in window &&
    "Notification" in window;

  const urlBase64ToUint8Array = (base64String) => {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
    const raw = atob(base64);
    const output = new Uint8Array(raw.length);
    for (let i = 0; i < raw.length; i += 1) output[i] = raw.charCodeAt(i);
    return output;
  };

  const getNotificationPref = () => {
    const s = safeParse(DEFAULT_STATE_KEY, {});
    return !!s.notifications;
  };

  const saveSubscription = async (user, sub) => {
    if (!user || !sub) return;
    const payload = {
      uid: user.uid,
      subscription: sub.toJSON ? sub.toJSON() : sub,
      updatedAt: new Date().toISOString(),
    };
    await db.collection(PUSH_COLLECTION).doc(user.uid).set(payload, { merge: true });
  };

  const ensurePushSubscription = async (user) => {
    if (!hasPushSupport() || !PUSH_PUBLIC_KEY || !user) return null;
    if (Notification.permission !== "granted") return null;
    const reg = await navigator.serviceWorker.ready;
    let sub = await reg.pushManager.getSubscription();
    if (!sub) {
      sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(PUSH_PUBLIC_KEY),
      });
    }
    await saveSubscription(user, sub);
    return sub;
  };

  const requestPermissionAndSubscribe = async () => {
    if (!hasPushSupport() || !PUSH_PUBLIC_KEY) return null;
    const permission = await Notification.requestPermission();
    if (permission !== "granted") return null;
    const user = auth.currentUser;
    if (!user) return null;
    return ensurePushSubscription(user);
  };

  const disablePush = async () => {
    if (!hasPushSupport()) return;
    try {
      const reg = await navigator.serviceWorker.ready;
      const sub = await reg.pushManager.getSubscription();
      if (sub) await sub.unsubscribe();
    } catch {
      // ignore
    }
    const user = auth.currentUser;
    if (user) {
      try {
        await db.collection(PUSH_COLLECTION).doc(user.uid).delete();
      } catch {
        // ignore
      }
    }
  };

  window.FCPush = {
    ensure: ensurePushSubscription,
    requestPermissionAndSubscribe,
    disable: disablePush,
  };

  let presenceTimer = null;
  const startPresenceTimer = () => {
    if (presenceTimer) return;
    presenceTimer = setInterval(() => {
      syncPublicProfile(null, { presenceOnly: true }).catch(() => {});
    }, 120000);
  };
  const stopPresenceTimer = () => {
    if (presenceTimer) {
      clearInterval(presenceTimer);
      presenceTimer = null;
    }
  };

  const handleVisibilityChange = () => {
    if (document.visibilityState === "visible") {
      syncPublicProfile(null, { presenceOnly: true }).catch(() => {});
    }
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
      stopPresenceTimer();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (storedUid) {
        clearLocalData();
        try {
          localStorage.removeItem(LOCAL_UID_KEY);
        } catch {
          // ignore
        }
      }
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
    ensureUsername().catch(() => {});
    flushQueuedProfileSync().catch(() => {});
    syncPublicProfile().catch(() => {});
    startPresenceTimer();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    if (user && getNotificationPref()) {
      ensurePushSubscription(user).catch(() => {});
    }
  });

  if (typeof window !== "undefined") {
    window.addEventListener("online", () => {
      flushQueuedProfileSync().catch(() => {});
    });
  }
})();
