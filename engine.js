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

  function cloneItem(item) {
    try {
      return JSON.parse(JSON.stringify(item));
    } catch {
      return item ? { ...item } : item;
    }
  }

  function trimTrailingZeros(value) {
    return String(value)
      .replace(/(\.\d*?[1-9])0+$/g, "$1")
      .replace(/\.0+$/g, "")
      .replace(/^-0$/, "0");
  }

  function getDecimalPlaces(value) {
    const raw = String(value ?? "").trim();
    const match = raw.match(/\.(\d+)/);
    return match ? match[1].length : 0;
  }

  function formatNumericChoice(value, decimals) {
    if (!Number.isFinite(value)) return "0";
    if (!Number.isFinite(decimals) || decimals < 0) decimals = 0;
    const capped = Math.min(4, decimals);
    if (capped === 0) return String(Math.round(value));
    return trimTrailingZeros(value.toFixed(capped));
  }

  function uniqueNormalized(list) {
    const seen = new Set();
    return list.filter((entry) => {
      const key = normalizeText(entry);
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function buildNumericChoices(answerValue) {
    const correct = Number(answerValue);
    if (!Number.isFinite(correct)) return [];

    const rawDecimals = getDecimalPlaces(answerValue);
    const decimals = rawDecimals > 0 ? Math.min(4, rawDecimals + (Math.abs(correct) < 1 ? 1 : 0)) : 0;
    const step =
      rawDecimals > 0
        ? Math.pow(10, -rawDecimals)
        : Math.max(1, Math.round(Math.abs(correct) * 0.25) || 1);

    const candidates = [
      correct,
      correct + step,
      correct - step,
      correct + step * 2,
      correct - step * 2,
      correct === 0 ? 1 : -correct,
      correct + Math.max(1, Math.abs(correct)),
      correct - Math.max(1, Math.abs(correct)),
      0,
      1,
    ];

    const choices = uniqueNormalized(candidates.map((value) => formatNumericChoice(value, decimals)));
    const correctText = formatNumericChoice(correct, decimals);
    const distractors = choices.filter((choice) => normalizeText(choice) !== normalizeText(correctText));
    return shuffle([correctText, ...distractors.slice(0, 5)]).slice(0, 4);
  }

  function mutateExpression(expr) {
    const raw = String(expr || "").trim();
    if (!raw) return [];

    const out = [
      raw.startsWith("-") ? raw.slice(1) : `-${raw}`,
      `${raw}+1`,
      `${raw}-1`,
      `2*(${raw})`,
      `(${raw})/2`,
    ];

    if (raw.includes("sin")) out.push(raw.replace("sin", "cos"));
    if (raw.includes("cos")) {
      out.push(raw.replace("cos", "sin"));
      out.push(raw.replace("cos", "-sin"));
    }
    if (raw.includes("tan")) out.push(raw.replace("tan", "sec"));
    if (raw.includes("+")) out.push(raw.replace("+", "-"));
    if (raw.includes("-")) out.push(raw.replace("-", "+"));
    if (raw.includes("*")) out.push(raw.replace(/\*/g, ""));
    if (raw.includes("/")) out.push(raw.replace("/", "*"));
    if (raw.includes("^")) {
      out.push(raw.replace(/\^(\d+)/, (_, power) => `^${Math.max(1, Number(power) - 1)}`));
      out.push(raw.replace(/\^(\d+)/, (_, power) => `^${Number(power) + 1}`));
    }

    return uniqueNormalized(out);
  }

  function buildExpressionChoices(item) {
    const answer = String(item?.answer?.value ?? "").trim();
    if (!answer) return [];

    const numericEquivalent = Number(answer);
    if (answer !== "" && Number.isFinite(numericEquivalent) && /^-?\d+(\.\d+)?$/.test(answer)) {
      return buildNumericChoices(answer);
    }

    const correctSet = new Set(
      [answer, ...(item?.answer?.equivalences || [])]
        .map((entry) => normalizeExpression(entry))
        .filter(Boolean)
    );

    const pool = mutateExpression(answer).filter((entry) => !correctSet.has(normalizeExpression(entry)));
    const fallbackPool = ["0", "1", "x", "-x", "x^2", "2*x", "sin(x)", "cos(x)"].filter(
      (entry) => !correctSet.has(normalizeExpression(entry))
    );
    const distractors = uniqueNormalized([...pool, ...fallbackPool]).slice(0, 5);
    return shuffle([answer, ...distractors]).slice(0, 4);
  }

  function prepareItemForChoiceMode(item) {
    if (!item) return null;
    if (item.type === "free-response" || item.grading?.mode === "manual") return null;

    const next = cloneItem(item);
    const existingChoices = Array.isArray(next.choices) ? next.choices.filter(Boolean) : [];
    const generatedChoices =
      existingChoices.length > 1
        ? existingChoices
        : next.type === "numeric"
        ? buildNumericChoices(next.answer?.value)
        : buildExpressionChoices(next);

    if (!generatedChoices.length) return null;

    next.originalType = next.type;
    next.type = "mcq";
    next.choices = uniqueNormalized(generatedChoices);
    return next.choices.length >= 2 ? next : null;
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
      let chapterItems = [];
      if (blueprint.fallbackScope === "course" && blueprint.courseId && window.FCContent.getCourseModules) {
        const modules = window.FCContent.getCourseModules(blueprint.courseId);
        const chapterIds = modules.flatMap((m) => m.chapters || []);
        const sectionIds = chapterIds
          .map((id) => window.FCContent.getChapter(id))
          .filter(Boolean)
          .flatMap((ch) => ch.sections || []);
        chapterItems = sectionIds
          .map((id) => window.FCContent.getSection(id))
          .filter(Boolean)
          .flatMap((section) => window.FCContent.getSectionItems(section.id));
      } else {
        const chapter = window.FCContent.getChapter(blueprint.chapterId);
        chapterItems = (chapter
          ? window.FCContent
              .getChapterSections(chapter.id)
              .flatMap((section) => window.FCContent.getSectionItems(section.id))
          : window.FCContent.items
        );
      }
      const filtered = chapterItems.filter((item) => item.type !== "free-response");
      const filler = pickFromPool(filtered, remaining, used);
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

    filtered = filtered.filter((item) => item.type !== "free-response" && item.grading?.mode !== "manual");

    const hasSelection = !!(options.itemIds || options.sectionId || (options.tags && options.tags.length));
    if (!filtered.length && window.FCContent && !hasSelection) {
      filtered = window.FCContent.items.filter((item) => item.type !== "free-response" && item.grading?.mode !== "manual");
    }

    const ordered = options.preserveOrder ? [...filtered] : shuffle(filtered);
    const items = ordered.slice(0, count);

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
      preserveOrder: !!options.preserveOrder,
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
      const candidates = [answer, ...(item.answer?.equivalences || [])].map((v) => normalizeText(v)).filter(Boolean);
      const correct = candidates.includes(normalizeText(response));
      return { correct, score: correct ? 1 : 0, mode: "mcq" };
    }

    if (item.type === "numeric") {
      const val = Number(response);
      const target = Number(answer);
      const tol = item.answer?.tolerance ?? item.grading?.tolerance ?? 0;
      const alternatives = (item.answer?.equivalences || [])
        .map((entry) => Number(entry))
        .filter((entry) => Number.isFinite(entry));
      const candidates = [target, ...alternatives].filter((entry) => Number.isFinite(entry));
      const correct = Number.isFinite(val) && candidates.some((candidate) => Math.abs(val - candidate) <= tol);
      return { correct, score: correct ? 1 : 0, mode: "numeric" };
    }

    if (item.type === "expression") {
      const tol = item.grading?.tolerance ?? item.answer?.tolerance ?? 1e-4;
      const equivalents = [answer, ...(item.answer?.equivalences || [])].filter(Boolean);
      const correct = equivalents.some((expr) => compareExpression(response, expr, tol));
      return { correct, score: correct ? 1 : 0, mode: "expression" };
    }

    const candidates = [answer, ...(item.answer?.equivalences || [])].map((v) => normalizeText(v)).filter(Boolean);
    const correct = candidates.includes(normalizeText(response));
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
    prepareItemForChoiceMode,
    gradeItem,
    buildTagBreakdown,
    saveLastTest,
    saveLastSession,
  };
})();
