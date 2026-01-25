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
      signOut: async () => {},
      onAuthStateChanged: () => {},
      getCurrentUser: () => null,
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
    const data = doc.data();
    if (data) {
      applyLocalState({
        onboarding: data.onboarding || {},
        progress: data.progress || {},
        meta: data.meta || {},
      });
    }
    return data;
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
    await auth.signOut();
  };

  const onAuthStateChanged = (cb) => {
    auth.onAuthStateChanged(cb);
  };

  const getCurrentUser = () => auth.currentUser;

  window.FCAuth = {
    enabled: true,
    ready: true,
    auth,
    db,
    signUpWithEmail,
    signInWithEmail,
    signInWithGoogle,
    signOut,
    onAuthStateChanged,
    getCurrentUser,
    syncFromRemote,
    syncToRemote,
    ensureUserDoc,
    exportLocalState,
    applyLocalState,
  };
})();
