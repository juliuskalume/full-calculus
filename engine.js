window.FCEngine = (function () {
  const SESSION_KEY = "fc_session";
  const TEST_KEY = "fc_test_session";
  const LAST_TEST_KEY = "fc_last_test";
  const LAST_SESSION_KEY = "fc_last_session";

  function safeParse(raw, fallback) {
    try {
      return JSON.parse(raw || "") || fallback;
    } catch {
      return fallback;
    }
  }

  function nowIso() {
    return new Date().toISOString();
  }

  function shuffle(list) {
    const arr = [...list];
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function pickFromPool(pool, count, used) {
    const choices = pool.filter((item) => !used.has(item.id));
    const picked = [];
    const shuffled = shuffle(choices);
    for (let i = 0; i < shuffled.length && picked.length < count; i += 1) {
      picked.push(shuffled[i]);
      used.add(shuffled[i].id);
    }
    return picked;
  }

  function buildTestItems(blueprint) {
    if (!window.FCContent || !blueprint) return [];
    const used = new Set();
    const chosen = [];
    const rules = blueprint.blueprint?.distribution || [];

    rules.forEach((rule) => {
      const pool = window.FCContent
        .getItemsByTags(rule.tags, rule.difficulty)
        .filter((item) => item.type !== "free-response");
      const picked = pickFromPool(pool, rule.count || 0, used);
      chosen.push(...picked);
    });

    const remaining = Math.max(0, (blueprint.questionCount || 0) - chosen.length);
    if (remaining > 0) {
      const chapter = window.FCContent.getChapter(blueprint.chapterId);
      const chapterItems = (chapter
        ? window.FCContent
            .getChapterSections(chapter.id)
            .flatMap((section) => window.FCContent.getSectionItems(section.id))
        : window.FCContent.items
      ).filter((item) => item.type !== "free-response");
      const filler = pickFromPool(chapterItems, remaining, used);
      chosen.push(...filler);
    }

    return chosen.slice(0, blueprint.questionCount || chosen.length);
  }

  function createSession(opts) {
    const options = opts || {};
    const mode = options.mode || "lesson";
    const count = Math.max(1, options.count || 3);
    let pool = [];

    if (options.itemIds && window.FCContent) {
      pool = options.itemIds
        .map((id) => window.FCContent.getItem(id))
        .filter(Boolean);
    } else if (options.sectionId && window.FCContent) {
      pool = window.FCContent.getSectionItems(options.sectionId);
    } else if (options.tags && window.FCContent) {
      pool = window.FCContent.getItemsByTags(options.tags, options.difficulty);
    } else if (window.FCContent) {
      pool = window.FCContent.items;
    }

    let filtered = options.types?.length
      ? pool.filter((item) => options.types.includes(item.type))
      : pool;

    const hasSelection = !!(options.itemIds || options.sectionId || (options.tags && options.tags.length));
    if (!filtered.length && window.FCContent && !hasSelection) {
      filtered = window.FCContent.items;
    }

    const items = shuffle(filtered).slice(0, count);

    return {
      id: `sess_${Date.now()}`,
      mode,
      sectionId: options.sectionId || null,
      tags: options.tags || [],
      itemIds: items.map((item) => item.id),
      index: 0,
      correct: 0,
      responses: [],
      xpPerCorrect: options.xpPerCorrect || 10,
      startedAt: nowIso(),
    };
  }

  function saveSession(session) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }

  function getSession() {
    return safeParse(localStorage.getItem(SESSION_KEY), null);
  }

  function clearSession() {
    localStorage.removeItem(SESSION_KEY);
  }

  function createTestSession(blueprintId) {
    if (!window.FCContent) return null;
    const blueprint = window.FCContent.getTestBlueprint(blueprintId);
    if (!blueprint) return null;
    const items = buildTestItems(blueprint);
    return {
      id: `test_${Date.now()}`,
      blueprintId,
      itemIds: items.map((item) => item.id),
      index: 0,
      correct: 0,
      responses: [],
      startedAt: nowIso(),
    };
  }

  function saveTestSession(test) {
    localStorage.setItem(TEST_KEY, JSON.stringify(test));
  }

  function getTestSession() {
    return safeParse(localStorage.getItem(TEST_KEY), null);
  }

  function clearTestSession() {
    localStorage.removeItem(TEST_KEY);
  }

  function normalizeText(text) {
    return String(text || "").trim().toLowerCase();
  }

  function normalizeExpression(expr) {
    return String(expr || "")
      .replace(/\s+/g, "")
      .replace(/(\d)([a-zA-Z])/g, "$1*$2")
      .replace(/([a-zA-Z])(\d)/g, "$1*$2")
      .replace(/(\))([a-zA-Z0-9])/g, "$1*$2")
      .replace(/([a-zA-Z0-9])(\()/g, "$1*$2");
  }

  function evalExpression(expr, scope) {
    if (!window.math || !expr) return null;
    try {
      return window.math.evaluate(expr, scope || {});
    } catch {
      return null;
    }
  }

  function compareExpression(userExpr, correctExpr, tolerance) {
    const normUser = normalizeExpression(userExpr);
    const normCorrect = normalizeExpression(correctExpr);
    if (!window.math) return normUser === normCorrect;

    const samples = [-3, -2, -1, -0.5, 0.5, 1, 2, 3];
    let valid = 0;
    const tol = typeof tolerance === "number" ? tolerance : 1e-4;

    for (const x of samples) {
      const u = evalExpression(normUser, { x });
      const c = evalExpression(normCorrect, { x });
      if (!Number.isFinite(u) || !Number.isFinite(c)) continue;
      valid += 1;
      const scale = Math.max(1, Math.abs(c));
      if (Math.abs(u - c) > tol * scale) return false;
    }

    return valid > 0;
  }

  function gradeItem(item, response) {
    if (!item) return { correct: false, score: 0, mode: "unknown" };
    const mode = item.grading?.mode || item.type || "exact";
    const answer = item.answer?.value ?? item.answer ?? "";

    if (mode === "manual") {
      return { correct: null, score: 0, mode: "manual" };
    }

    if (item.type === "mcq") {
      const correct = normalizeText(response) === normalizeText(answer);
      return { correct, score: correct ? 1 : 0, mode: "mcq" };
    }

    if (item.type === "numeric") {
      const val = Number(response);
      const target = Number(answer);
      const tol = item.answer?.tolerance ?? item.grading?.tolerance ?? 0;
      const correct = Number.isFinite(val) && Math.abs(val - target) <= tol;
      return { correct, score: correct ? 1 : 0, mode: "numeric" };
    }

    if (item.type === "expression") {
      const tol = item.grading?.tolerance ?? item.answer?.tolerance ?? 1e-4;
      const equivalents = [answer, ...(item.answer?.equivalences || [])].filter(Boolean);
      const correct = equivalents.some((expr) => compareExpression(response, expr, tol));
      return { correct, score: correct ? 1 : 0, mode: "expression" };
    }

    const correct = normalizeText(response) === normalizeText(answer);
    return { correct, score: correct ? 1 : 0, mode: "exact" };
  }

  function buildTagBreakdown(results) {
    const breakdown = {};
    if (!window.FCContent) return breakdown;
    results.forEach((entry) => {
      const item = window.FCContent.getItem(entry.itemId);
      if (!item || !item.tags) return;
      item.tags.forEach((tag) => {
        if (!breakdown[tag]) breakdown[tag] = { correct: 0, total: 0 };
        breakdown[tag].total += 1;
        if (entry.correct) breakdown[tag].correct += 1;
      });
    });
    return breakdown;
  }

  function saveLastTest(result) {
    localStorage.setItem(LAST_TEST_KEY, JSON.stringify(result));
  }

  function saveLastSession(result) {
    localStorage.setItem(LAST_SESSION_KEY, JSON.stringify(result));
  }

  return {
    SESSION_KEY,
    TEST_KEY,
    LAST_TEST_KEY,
    LAST_SESSION_KEY,
    createSession,
    saveSession,
    getSession,
    clearSession,
    createTestSession,
    saveTestSession,
    getTestSession,
    clearTestSession,
    gradeItem,
    buildTagBreakdown,
    saveLastTest,
    saveLastSession,
  };
})();
