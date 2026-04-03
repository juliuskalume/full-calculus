window.FCSolutionRequest = (function () {
  const REQUEST_KEY = "fc_detailed_solution_request_v1";
  const RESUME_KEY = "fc_detailed_solution_resume_v1";
  const TTL_MS = 1000 * 60 * 30;

  function safeParse(raw, fallback) {
    try {
      return JSON.parse(raw || "") || fallback;
    } catch {
      return fallback;
    }
  }

  function isFresh(payload) {
    const createdAt = Number(payload?.createdAt || 0);
    return createdAt > 0 && Date.now() - createdAt <= TTL_MS;
  }

  function write(key, value) {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  }

  function read(key) {
    try {
      return safeParse(sessionStorage.getItem(key), null);
    } catch {
      return null;
    }
  }

  function clear(key) {
    try {
      sessionStorage.removeItem(key);
    } catch {
      // ignore
    }
  }

  function setRequest(payload) {
    const next = {
      source: String(payload?.source || "").trim() || "active-lesson",
      sessionId: String(payload?.sessionId || "").trim(),
      itemId: String(payload?.itemId || "").trim(),
      userAnswer: String(payload?.userAnswer || "").slice(0, 1200),
      returnUrl: String(payload?.returnUrl || "active-lesson.html").trim(),
      createdAt: Date.now(),
      item: payload?.item ? JSON.parse(JSON.stringify(payload.item)) : null,
    };
    if (!next.itemId || !next.item || !next.item.prompt) return false;
    return write(REQUEST_KEY, next);
  }

  function getRequest() {
    const payload = read(REQUEST_KEY);
    if (!payload || !isFresh(payload)) {
      clear(REQUEST_KEY);
      return null;
    }
    return payload;
  }

  function clearRequest() {
    clear(REQUEST_KEY);
  }

  function setResume(payload) {
    const next = {
      source: String(payload?.source || "").trim() || "active-lesson",
      sessionId: String(payload?.sessionId || "").trim(),
      itemId: String(payload?.itemId || "").trim(),
      returnUrl: String(payload?.returnUrl || "active-lesson.html").trim(),
      createdAt: Date.now(),
      action: String(payload?.action || "advance").trim() || "advance",
    };
    if (!next.sessionId || !next.itemId) return false;
    return write(RESUME_KEY, next);
  }

  function consumeResume() {
    const payload = read(RESUME_KEY);
    clear(RESUME_KEY);
    if (!payload || !isFresh(payload)) return null;
    return payload;
  }

  return {
    setRequest,
    getRequest,
    clearRequest,
    setResume,
    consumeResume,
  };
})();
