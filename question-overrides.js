(function () {
  const LOCAL_CACHE_KEY = "fc_question_override_cache_v1";
  const LOCAL_CACHE_TTL_MS = 1000 * 60 * 5;
  const MAX_LOCAL_CACHE = 500;
  const ENDPOINT_NAME = "getQuestionOverride";
  const memCache = new Map();

  const normalizeItemId = (value) =>
    String(value || "")
      .trim()
      .replace(/[^\w.-]/g, "")
      .slice(0, 120);

  const trimText = (value, maxLen = 1200) =>
    String(value || "")
      .trim()
      .slice(0, maxLen);

  const normalizeLines = (value, maxItems = 20, maxLen = 400) => {
    const raw = Array.isArray(value)
      ? value
      : typeof value === "string"
      ? value.split(/\r?\n/)
      : [];
    return raw
      .map((entry) => trimText(entry, maxLen))
      .filter(Boolean)
      .slice(0, maxItems);
  };

  const normalizeOptionalNumber = (value) => {
    if (value == null || String(value).trim() === "") return null;
    const num = Number(value);
    if (!Number.isFinite(num)) return null;
    if (num < 0 || num > 1000) return null;
    return num;
  };

  const readCache = () => {
    try {
      const raw = localStorage.getItem(LOCAL_CACHE_KEY);
      if (!raw) return {};
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch {
      return {};
    }
  };

  const writeCache = (cache) => {
    try {
      localStorage.setItem(LOCAL_CACHE_KEY, JSON.stringify(cache));
    } catch {
      // ignore cache write failures
    }
  };

  const setCacheEntry = (itemId, value) => {
    const cache = readCache();
    const normalized = value
      ? {
          ...value,
          cachedAt: Date.now(),
        }
      : {
          missing: true,
          cachedAt: Date.now(),
        };
    cache[itemId] = normalized;

    const keys = Object.keys(cache);
    if (keys.length > MAX_LOCAL_CACHE) {
      keys
        .sort((a, b) => Number(cache[a]?.cachedAt || 0) - Number(cache[b]?.cachedAt || 0))
        .slice(0, keys.length - MAX_LOCAL_CACHE)
        .forEach((key) => {
          delete cache[key];
        });
    }
    writeCache(cache);
    memCache.set(itemId, normalized);
    return normalized;
  };

  const getCacheEntry = (itemId) => {
    const now = Date.now();
    const hit = memCache.get(itemId);
    if (hit && now - Number(hit.cachedAt || 0) < LOCAL_CACHE_TTL_MS) {
      return hit;
    }

    const cache = readCache();
    const entry = cache[itemId];
    if (!entry) return null;
    if (now - Number(entry.cachedAt || 0) >= LOCAL_CACHE_TTL_MS) return null;
    memCache.set(itemId, entry);
    return entry;
  };

  const normalizeOverride = (value, itemId) => {
    const src = value && typeof value === "object" ? value : {};
    return {
      itemId: normalizeItemId(src.itemId || itemId),
      active: src.active !== false,
      prompt: trimText(src.prompt, 2500),
      answerValue: trimText(src.answerValue, 1200),
      alternateAnswers: normalizeLines(src.alternateAnswers, 24, 600),
      tolerance: normalizeOptionalNumber(src.tolerance),
      wrongResponse: trimText(src.wrongResponse, 1200),
      solutionSteps: normalizeLines(src.solutionSteps, 12, 800),
      choices: normalizeLines(src.choices, 8, 400),
      updatedAt: trimText(src.updatedAt, 64),
    };
  };

  const applyOverrideToItem = (item, override) => {
    if (!item || !override || !override.active) return item;

    if (override.prompt) item.prompt = override.prompt;
    if (Array.isArray(override.choices) && override.choices.length && item.type === "mcq") {
      item.choices = [...override.choices];
    }

    const answerObj =
      item.answer && typeof item.answer === "object"
        ? item.answer
        : {
            value: item.answer == null ? "" : item.answer,
          };
    item.answer = answerObj;

    if (override.answerValue) {
      if (item.type === "numeric") {
        const numeric = Number(override.answerValue);
        answerObj.value = Number.isFinite(numeric) ? numeric : answerObj.value;
      } else {
        answerObj.value = override.answerValue;
      }
    }
    if (override.alternateAnswers.length) {
      answerObj.equivalences = [...override.alternateAnswers];
    }
    if (typeof override.tolerance === "number" && Number.isFinite(override.tolerance)) {
      answerObj.tolerance = override.tolerance;
      item.grading = {
        ...(item.grading || {}),
        tolerance: override.tolerance,
      };
    }
    if (override.wrongResponse) item.wrongResponse = override.wrongResponse;
    if (override.solutionSteps.length) item.solutionSteps = [...override.solutionSteps];

    item.__overrideApplied = true;
    item.__overrideUpdatedAt = override.updatedAt || "";
    return item;
  };

  const buildUrls = (name, itemId) => {
    const query = `itemId=${encodeURIComponent(itemId)}`;
    const local = `/api/${name}?${query}`;
    const projectId = String(window.FC_FIREBASE_CONFIG?.projectId || "full-calculus").trim();
    const remote = `https://us-central1-${projectId}.cloudfunctions.net/${name}?${query}`;
    return { local, remote };
  };

  const fetchFromEndpoint = async (itemId) => {
    const { local, remote } = buildUrls(ENDPOINT_NAME, itemId);
    let response;
    try {
      response = await fetch(local, { method: "GET" });
      if (!response.ok && [404, 502, 503].includes(response.status)) {
        throw new Error("local-proxy-miss");
      }
    } catch {
      response = await fetch(remote, { method: "GET" });
    }

    let data = null;
    try {
      data = await response.json();
    } catch {
      data = null;
    }
    if (!response.ok || !data?.ok) {
      throw new Error(data?.error || `Failed to load question override (${response.status})`);
    }
    if (!data.found || !data.override) return null;
    return normalizeOverride(data.override, itemId);
  };

  const getOverride = async (itemIdRaw) => {
    const itemId = normalizeItemId(itemIdRaw);
    if (!itemId) return null;

    const cached = getCacheEntry(itemId);
    if (cached) return cached.missing ? null : cached;

    try {
      const override = await fetchFromEndpoint(itemId);
      const saved = setCacheEntry(itemId, override);
      return saved.missing ? null : saved;
    } catch {
      return null;
    }
  };

  const prefetch = async (itemIds) => {
    const unique = Array.from(
      new Set(
        (Array.isArray(itemIds) ? itemIds : [])
          .map((id) => normalizeItemId(id))
          .filter(Boolean)
      )
    );
    if (!unique.length) return;
    await Promise.allSettled(unique.map((id) => getOverride(id)));
  };

  const applyToItem = async (item) => {
    if (!item?.id) return item;
    const override = await getOverride(item.id);
    if (!override) return item;
    return applyOverrideToItem(item, override);
  };

  window.FCQuestionOverrides = {
    getOverride,
    prefetch,
    applyToItem,
  };
})();
