(function () {
  const ALLOWED_ADMIN_EMAIL = "skalmistjulius@gmail.com";
  const isAllowedAdminEmail = (email) => String(email || "").trim().toLowerCase() === ALLOWED_ADMIN_EMAIL.toLowerCase();

  const cfg = window.FC_FIREBASE_CONFIG || {};
  if (!firebase.apps.length) firebase.initializeApp(cfg);
  const auth = firebase.auth();
  const remoteBase = `https://us-central1-${cfg.projectId || "full-calculus"}.cloudfunctions.net`;
  const localBase = "/api";

  const el = (id) => document.getElementById(id);
  const state = {
    nextUsersPage: "",
    users: [],
    deletions: [],
    reports: [],
    notifications: [],
    confirmAction: null,
    activeReportId: "",
  };

  const setMsg = (id, text, tone) => {
    const node = el(id);
    if (!node) return;
    node.textContent = text || "";
    node.classList.remove("text-rose-600", "text-emerald-600");
    if (tone === "error") node.classList.add("text-rose-600");
    if (tone === "ok") node.classList.add("text-emerald-600");
  };

  const escapeHtml = (value) =>
    String(value == null ? "" : value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");

  const parseDateValue = (value) => {
    if (!value) return Number.NaN;
    if (value instanceof Date) return value.getTime();
    if (typeof value === "number" && Number.isFinite(value)) return value;
    if (typeof value === "object") {
      const seconds = Number(value._seconds ?? value.seconds);
      const nanos = Number(value._nanoseconds ?? value.nanoseconds ?? 0);
      if (Number.isFinite(seconds)) return seconds * 1000 + Math.floor(nanos / 1e6);
    }
    const dt = new Date(value);
    return dt.getTime();
  };

  const fmt = (value) => {
    if (!value) return "-";
    const ms = parseDateValue(value);
    return Number.isNaN(ms) ? String(value) : new Date(ms).toLocaleString();
  };

  const formatMathText = (value) => escapeHtml(value).replace(/\n/g, "<br>");

  const typesetMath = (targets) => {
    if (window.MathJax?.typesetPromise) {
      window.MathJax.typesetPromise(targets || undefined).catch(() => {});
    }
  };

  const getToken = async () => {
    const user = auth.currentUser;
    if (!user) throw new Error("Sign in required");
    return user.getIdToken(true);
  };

  const isLikelyNetworkError = (err) => {
    const msg = String(err?.message || "").toLowerCase();
    return msg.includes("failed to fetch") || msg.includes("networkerror") || msg.includes("network request failed");
  };

  const buildUrl = (base, name, query) => {
    const qs = new URLSearchParams();
    Object.keys(query || {}).forEach((key) => {
      const value = query[key];
      if (value != null && String(value) !== "") qs.set(key, String(value));
    });
    const suffix = qs.toString();
    return `${base.replace(/\/$/, "")}/${name}${suffix ? `?${suffix}` : ""}`;
  };

  const api = async (name, options = {}) => {
    const token = await getToken();
    const method = options.method || "GET";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const requestInit = {
      method,
      headers,
      body: method === "GET" ? undefined : JSON.stringify(options.body || {}),
    };
    const localUrl = buildUrl(localBase, name, options.query || {});
    const remoteUrl = buildUrl(remoteBase, name, options.query || {});

    let res;
    try {
      res = await fetch(localUrl, requestInit);
      if (res.status === 404 || res.status === 503 || res.status === 502) {
        throw new Error("local-proxy-miss");
      }
    } catch (err) {
      try {
        res = await fetch(remoteUrl, requestInit);
      } catch (remoteErr) {
        if (isLikelyNetworkError(remoteErr) || isLikelyNetworkError(err)) {
          throw new Error("Network/CORS error. Deploy both functions and hosting, then reload admin page.");
        }
        throw remoteErr;
      }
    }

    const text = await res.text();
    let data = null;
    try {
      data = text ? JSON.parse(text) : null;
    } catch {
      data = null;
    }
    if (!res.ok) {
      const err = new Error((data && data.message) || text || `Request failed (${res.status})`);
      err.status = res.status;
      throw err;
    }
    return data;
  };

  const setTab = (tabId) => {
    document.querySelectorAll(".tab").forEach((btn) => {
      const active = btn.dataset.tab === tabId;
      btn.classList.toggle("bg-sky-100", active);
      btn.classList.toggle("text-sky-700", active);
      btn.classList.toggle("font-bold", active);
    });
    document.querySelectorAll(".panel").forEach((panel) => {
      panel.classList.toggle("active", panel.id === tabId);
    });
  };

  const openConfirm = (title, text, action) => {
    el("confirmTitle").textContent = title;
    el("confirmText").textContent = text;
    state.confirmAction = action;
    el("confirmBox").classList.remove("hidden");
    el("confirmBox").classList.add("flex");
  };

  const closeConfirm = () => {
    el("confirmBox").classList.add("hidden");
    el("confirmBox").classList.remove("flex");
    state.confirmAction = null;
  };

  const csvOf = (rows, cols) => {
    const esc = (v) => `"${String(v ?? "").replaceAll('"', '""')}"`;
    const lines = rows.map((row) => cols.map((col) => esc(row[col])).join(","));
    return [cols.join(","), ...lines].join("\n");
  };

  const downloadCsv = (baseName, rows, cols) => {
    if (!rows.length) return;
    const blob = new Blob([csvOf(rows, cols)], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${baseName}-${new Date().toISOString().slice(0, 19).replaceAll(":", "-")}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const STATUS_META = {
    pending: {
      label: "Pending",
      badge: "bg-amber-100 text-amber-800 ring-amber-300",
      card: "border-amber-200 bg-amber-50/70",
    },
    in_review: {
      label: "In review",
      badge: "bg-sky-100 text-sky-800 ring-sky-300",
      card: "border-sky-200 bg-sky-50/70",
    },
    resolved: {
      label: "Resolved",
      badge: "bg-emerald-100 text-emerald-800 ring-emerald-300",
      card: "border-emerald-200 bg-emerald-50/70",
    },
    closed: {
      label: "Closed",
      badge: "bg-slate-200 text-slate-800 ring-slate-300",
      card: "border-slate-300 bg-slate-50",
    },
    denied: {
      label: "Denied",
      badge: "bg-rose-100 text-rose-800 ring-rose-300",
      card: "border-rose-200 bg-rose-50/70",
    },
    deleted: {
      label: "Deleted",
      badge: "bg-red-100 text-red-800 ring-red-300",
      card: "border-red-200 bg-red-50/70",
    },
    completed: {
      label: "Completed",
      badge: "bg-indigo-100 text-indigo-800 ring-indigo-300",
      card: "border-indigo-200 bg-indigo-50/70",
    },
    active: {
      label: "Active",
      badge: "bg-emerald-100 text-emerald-800 ring-emerald-300",
      card: "border-emerald-200 bg-emerald-50/70",
    },
    inactive: {
      label: "Inactive",
      badge: "bg-slate-200 text-slate-800 ring-slate-300",
      card: "border-slate-300 bg-slate-50",
    },
  };

  const statusKey = (value, fallback = "pending") =>
    String(value || fallback)
      .trim()
      .toLowerCase()
      .replace(/[\s-]+/g, "_");

  const statusLabel = (value, fallback = "pending") => {
    const key = statusKey(value, fallback);
    return STATUS_META[key]?.label || key.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const statusBadge = (value, fallback = "pending") => {
    const key = statusKey(value, fallback);
    const meta = STATUS_META[key] || STATUS_META.pending;
    return `<span class="inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide ring-1 ${meta.badge}">${escapeHtml(
      statusLabel(key, fallback)
    )}</span>`;
  };

  const statusCardClass = (value, fallback = "pending") => {
    const key = statusKey(value, fallback);
    return STATUS_META[key]?.card || STATUS_META.pending.card;
  };

  const renderDashboard = (stats) => {
    const cards = [
      ["Users", stats.users, "border-sky-100 from-white to-sky-50 text-sky-700"],
      ["Pending deletions", stats.pendingDeletionRequests, "border-amber-200 from-white to-amber-50 text-amber-700"],
      ["Pending reports", stats.pendingProblemReports, "border-rose-200 from-white to-rose-50 text-rose-700"],
      ["Total reports", stats.totalProblemReports, "border-violet-200 from-white to-violet-50 text-violet-700"],
      ["Web push subs", stats.pushSubscriptions, "border-emerald-200 from-white to-emerald-50 text-emerald-700"],
      ["FCM tokens", stats.fcmTokens, "border-indigo-200 from-white to-indigo-50 text-indigo-700"],
    ];
    el("dashboardCards").innerHTML = cards
      .map(
        ([label, value, tone]) => `
          <div class="rounded-2xl border bg-gradient-to-br p-3 shadow-sm ${tone}">
            <p class="text-xs text-slate-500">${escapeHtml(label)}</p>
            <p class="text-2xl font-extrabold text-current">${Number(value) || 0}</p>
          </div>
        `
      )
      .join("");
  };

  const loadDashboard = async () => {
    setMsg("dashboardMsg", "Loading...");
    try {
      const data = await api("adminDashboard");
      renderDashboard(data.stats || {});
      setMsg("dashboardMsg", "Updated.", "ok");
    } catch (err) {
      setMsg("dashboardMsg", err.message || "Could not load dashboard.", "error");
    }
  };

  const renderUsers = (items) => {
    state.users = Array.isArray(items) ? items : [];
    el("usersList").innerHTML = state.users
      .map((u) => {
        const statusText = `${u.emailVerified ? "Verified" : "Unverified"} | ${
          u.disabled ? "Disabled" : "Active"
        } | ${u.leagueName || "-"}`;
        return `
          <article class="rounded-2xl border border-sky-100 bg-white p-3 shadow-sm">
            <p class="font-bold">${escapeHtml(u.username || u.displayName || u.fullName || "Unnamed")}</p>
            <p class="text-xs text-slate-500 break-all">${escapeHtml(u.email || "-")}</p>
            <p class="text-[11px] text-slate-500 mt-1">UID: ${escapeHtml(u.uid || "-")}</p>
            <p class="text-xs text-slate-500 mt-1">${escapeHtml(statusText)} | XP ${Number(u.xp) || 0}</p>
            <div class="mt-2 flex flex-wrap gap-2">
              <button class="ua px-2.5 py-1.5 rounded-xl border border-sky-200 text-xs font-semibold bg-white hover:bg-sky-50" data-action="${
                u.disabled ? "enable" : "disable"
              }" data-uid="${escapeHtml(u.uid)}">${u.disabled ? "Enable" : "Disable"}</button>
              <button class="ua px-2.5 py-1.5 rounded-xl border border-sky-200 text-xs font-semibold bg-white hover:bg-sky-50" data-action="reset_password" data-uid="${escapeHtml(
                u.uid
              )}" data-email="${escapeHtml(u.email || "")}">Reset link</button>
              <button class="ua px-2.5 py-1.5 rounded-xl border border-sky-200 text-xs font-semibold bg-white hover:bg-sky-50" data-action="send_verification" data-uid="${escapeHtml(
                u.uid
              )}" data-email="${escapeHtml(u.email || "")}">Verify link</button>
              <button class="ua px-2.5 py-1.5 rounded-xl border border-sky-200 text-xs font-semibold bg-white hover:bg-sky-50" data-action="grant_admin" data-uid="${escapeHtml(
                u.uid
              )}">Grant admin</button>
              <button class="ua px-2.5 py-1.5 rounded-xl border border-sky-200 text-xs font-semibold bg-white hover:bg-sky-50" data-action="revoke_admin" data-uid="${escapeHtml(
                u.uid
              )}">Revoke admin</button>
              <button class="ua px-2.5 py-1.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold" data-action="delete" data-uid="${escapeHtml(
                u.uid
              )}">Delete</button>
            </div>
          </article>
        `;
      })
      .join("");
  };

  const loadUsers = async (resetPage) => {
    if (resetPage) state.nextUsersPage = "";
    setMsg("usersMsg", "Loading...");
    try {
      const data = await api("adminListUsers", {
        query: {
          q: el("userQuery").value.trim(),
          pageToken: state.nextUsersPage,
          limit: 60,
        },
      });
      renderUsers(data.items || []);
      state.nextUsersPage = data.nextPageToken || "";
      setMsg("usersMsg", state.nextUsersPage ? "Loaded. More pages available." : "Loaded.", "ok");
    } catch (err) {
      setMsg("usersMsg", err.message || "Could not load users.", "error");
    }
  };

  const runUserAction = async (action, uid, email) => {
    const execute = async () => {
      setMsg("usersMsg", "Applying action...");
      try {
        let data;
        try {
          data = await api("adminApplyUserAction", {
            method: "POST",
            body: { action, uid, email },
          });
        } catch {
          data = await api("adminUserAction", {
            method: "POST",
            body: { action, uid, email },
          });
        }
        if (data && data.link) {
          el("actionLink").textContent = data.link;
          el("actionLinkWrap").classList.remove("hidden");
        }
        setMsg("usersMsg", `Action "${action}" completed.`, "ok");
        await loadUsers(false);
        await loadDashboard();
      } catch (err) {
        setMsg("usersMsg", err.message || "Action failed.", "error");
      }
    };
    if (action === "delete") {
      openConfirm("Delete this user?", "Auth + app data will be deleted permanently.", execute);
      return;
    }
    await execute();
  };

  const renderDeletions = (items) => {
    state.deletions = Array.isArray(items) ? items : [];
    el("deletionsList").innerHTML = state.deletions
      .map(
        (r) => {
          const currentStatus = statusKey(r.status, "pending");
          return `
          <article class="rounded-2xl border p-3 shadow-sm ${statusCardClass(currentStatus)}">
            <div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div class="min-w-0">
                <p class="font-bold break-words">${escapeHtml(r.email || "-")}</p>
                <p class="text-xs text-slate-500 break-all">UID: ${escapeHtml(r.uid || "-")}</p>
              </div>
              ${statusBadge(currentStatus)}
            </div>
            <p class="mt-1 text-xs text-slate-500">${escapeHtml(fmt(r.createdAt))}</p>
            <p class="text-sm mt-1">Reason: <span class="text-slate-500">${escapeHtml(r.reason || "-")}</span></p>
            <p class="text-sm">Details: <span class="text-slate-500">${escapeHtml(r.details || "-")}</span></p>
            <div class="mt-3 grid gap-2 sm:flex sm:flex-wrap">
              <button class="dr px-2.5 py-1.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold" data-id="${escapeHtml(
                r.id || ""
              )}" data-action="approve_delete">Approve & delete</button>
              <button class="dr px-2.5 py-1.5 rounded-xl border border-sky-200 bg-white hover:bg-sky-50 text-xs font-semibold" data-id="${escapeHtml(
                r.id || ""
              )}" data-action="deny">Deny</button>
              <button class="dr px-2.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold" data-id="${escapeHtml(
                r.id || ""
              )}" data-action="complete">Complete</button>
            </div>
          </article>
        `;
        }
      )
      .join("");
  };

  const loadDeletions = async () => {
    setMsg("deletionsMsg", "Loading...");
    try {
      const data = await api("listAccountDeletionRequests", {
        query: { status: el("deletionsFilter").value },
      });
      renderDeletions(data.items || []);
      setMsg("deletionsMsg", "Loaded.", "ok");
    } catch (err) {
      setMsg("deletionsMsg", err.message || "Could not load requests.", "error");
    }
  };

  const runDeletionAction = async (requestId, action) => {
    const execute = async () => {
      setMsg("deletionsMsg", "Applying action...");
      try {
        await api("processAccountDeletion", {
          method: "POST",
          body: { requestId, action },
        });
        setMsg("deletionsMsg", "Action completed.", "ok");
        await loadDeletions();
        await loadDashboard();
      } catch (err) {
        setMsg("deletionsMsg", err.message || "Action failed.", "error");
      }
    };
    if (action === "approve_delete") {
      openConfirm("Approve and delete?", "This cannot be undone.", execute);
      return;
    }
    await execute();
  };

  const parseEditorLines = (value, maxItems = 20, maxLen = 400) =>
    String(value || "")
      .split(/\r?\n/)
      .map((line) => String(line || "").trim().slice(0, maxLen))
      .filter(Boolean)
      .slice(0, maxItems);

  const setOverrideMsg = (message, tone) => {
    const node = el("reportEditorMsg");
    if (!node) return;
    node.textContent = message || "";
    node.classList.remove("text-rose-600", "text-emerald-600", "text-slate-500");
    if (tone === "error") node.classList.add("text-rose-600");
    else if (tone === "ok") node.classList.add("text-emerald-600");
    else node.classList.add("text-slate-500");
  };

  const closeOverrideEditor = () => {
    state.activeReportId = "";
    el("reportEditorCard").classList.add("hidden");
    el("reportEditorTitle").textContent = "No report selected";
    el("reportEditorMeta").textContent = "";
    el("reportEditorItemId").textContent = "";
    el("reportEditorPrompt").value = "";
    el("reportEditorAnswer").value = "";
    el("reportEditorTolerance").value = "";
    el("reportEditorAlternates").value = "";
    el("reportEditorWrong").value = "";
    el("reportEditorSteps").value = "";
    el("reportEditorChoices").value = "";
    el("reportEditorActive").checked = true;
    setOverrideMsg("");
  };

  const fillOverrideEditor = (report, override) => {
    el("reportEditorItemId").textContent = report.itemId || "-";
    el("reportEditorPrompt").value = override?.prompt || report.prompt || "";
    el("reportEditorAnswer").value = override?.answerValue || report.expectedAnswer || "";
    el("reportEditorAlternates").value = Array.isArray(override?.alternateAnswers)
      ? override.alternateAnswers.join("\n")
      : "";
    el("reportEditorTolerance").value =
      override?.tolerance == null || override?.tolerance === "" ? "" : String(override.tolerance);
    el("reportEditorWrong").value = override?.wrongResponse || "";
    el("reportEditorSteps").value = Array.isArray(override?.solutionSteps)
      ? override.solutionSteps.join("\n")
      : "";
    el("reportEditorChoices").value = Array.isArray(override?.choices) ? override.choices.join("\n") : "";
    el("reportEditorActive").checked = override?.active !== false;
  };

  const loadOverrideEditor = async (reportId) => {
    const report = state.reports.find((entry) => String(entry.id) === String(reportId));
    if (!report) return;
    if (!report.itemId) {
      setOverrideMsg("This report does not include a question id.", "error");
      return;
    }
    state.activeReportId = String(reportId);
    el("reportEditorCard").classList.remove("hidden");
    el("reportEditorTitle").textContent = `Patch ${report.itemId}`;
    el("reportEditorMeta").textContent = `${report.issueType || "Issue"} · ${fmt(report.createdAt)} · ${report.page || "-"}`;
    el("reportEditorCard").scrollIntoView({ behavior: "smooth", block: "start" });
    setOverrideMsg("Loading question settings...");
    fillOverrideEditor(report, null);
    try {
      const data = await api("adminGetQuestionOverride", {
        query: { itemId: report.itemId },
      });
      fillOverrideEditor(report, data?.found ? data.override : null);
      setOverrideMsg("Edit fields and save.", "ok");
    } catch (err) {
      setOverrideMsg(err.message || "Could not load current question override.", "error");
    }
  };

  const saveQuestionOverride = async (reportId) => {
    const report = state.reports.find((entry) => String(entry.id) === String(reportId));
    if (!report || !report.itemId) {
      setOverrideMsg("Missing item id for this report.", "error");
      return;
    }

    const toleranceRaw = el("reportEditorTolerance").value.trim();
    const payload = {
      reportId,
      itemId: report.itemId,
      prompt: el("reportEditorPrompt").value.trim(),
      answerValue: el("reportEditorAnswer").value.trim(),
      alternateAnswers: parseEditorLines(el("reportEditorAlternates").value, 24, 600),
      tolerance: toleranceRaw || null,
      wrongResponse: el("reportEditorWrong").value.trim(),
      solutionSteps: parseEditorLines(el("reportEditorSteps").value, 12, 800),
      choices: parseEditorLines(el("reportEditorChoices").value, 8, 400),
      active: !!el("reportEditorActive").checked,
    };

    const saveBtn = el("reportEditorSave");
    if (saveBtn) saveBtn.disabled = true;
    setOverrideMsg("Saving question override...");
    try {
      await api("adminUpsertQuestionOverride", {
        method: "POST",
        body: payload,
      });
      setOverrideMsg("Question override saved.", "ok");
      setMsg("reportsMsg", `Question update saved for ${report.itemId}.`, "ok");
    } catch (err) {
      setOverrideMsg(err.message || "Could not save question override.", "error");
    } finally {
      if (saveBtn) saveBtn.disabled = false;
    }
  };

  const renderReports = (items) => {
    state.reports = Array.isArray(items) ? items : [];
    el("reportsList").innerHTML = state.reports
      .map((r) => {
        const hasItem = !!String(r.itemId || "").trim();
        const currentStatus = statusKey(r.status, "pending");
        return `
          <article class="rounded-2xl border p-3 shadow-sm ${statusCardClass(currentStatus)}">
            <div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <p class="font-bold">${escapeHtml(r.issueType || "Issue")}</p>
              ${statusBadge(currentStatus)}
            </div>
            <div class="mt-2 grid gap-1 text-xs text-slate-500 md:grid-cols-2">
              <p><span class="font-semibold text-slate-600">Reported:</span> ${escapeHtml(fmt(r.createdAt || r.clientCreatedAt))}</p>
              <p><span class="font-semibold text-slate-600">Page:</span> ${escapeHtml(r.page || "-")}</p>
              <p><span class="font-semibold text-slate-600">UID:</span> ${escapeHtml(r.uid || "-")}</p>
              <p><span class="font-semibold text-slate-600">Email:</span> ${escapeHtml(r.email || "-")}</p>
              <p><span class="font-semibold text-slate-600">Username:</span> ${escapeHtml(r.username || "-")}</p>
              <p><span class="font-semibold text-slate-600">Name:</span> ${escapeHtml(r.fullName || "-")}</p>
            </div>
            <p class="text-sm mt-2 whitespace-pre-wrap">${formatMathText(r.message || "-")}</p>
            <div class="mt-2 rounded-xl border border-slate-200 bg-slate-50 p-2 text-xs text-slate-600 space-y-1">
              <p><span class="font-semibold">Question ID:</span> ${escapeHtml(r.itemId || "-")}</p>
              <p><span class="font-semibold">Prompt:</span> ${formatMathText(r.prompt || "-")}</p>
              <p><span class="font-semibold">Expected:</span> ${formatMathText(r.expectedAnswer || "-")}</p>
              <p><span class="font-semibold">Student answer:</span> ${formatMathText(r.userResponse || "-")}</p>
            </div>
            <textarea class="report-note mt-2 w-full rounded-xl border border-slate-300 bg-white px-2 py-1.5 text-sm" data-id="${escapeHtml(
              r.id || ""
            )}" rows="2" placeholder="Admin note">${escapeHtml(r.adminNote || "")}</textarea>
            <div class="mt-3 grid gap-2 sm:flex sm:flex-wrap">
              <button class="report-action px-2.5 py-1.5 rounded-xl border border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-800 text-xs font-bold" data-id="${escapeHtml(
                r.id || ""
              )}" data-status="pending">Pending</button>
              <button class="report-action px-2.5 py-1.5 rounded-xl border border-sky-300 bg-sky-50 hover:bg-sky-100 text-sky-800 text-xs font-bold" data-id="${escapeHtml(
                r.id || ""
              )}" data-status="in_review">In review</button>
              <button class="report-action px-2.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold" data-id="${escapeHtml(
                r.id || ""
              )}" data-status="resolved">Resolved</button>
              <button class="report-action px-2.5 py-1.5 rounded-xl bg-slate-700 hover:bg-slate-800 text-white text-xs font-bold" data-id="${escapeHtml(
                r.id || ""
              )}" data-status="closed">Closed</button>
              <button class="report-open-editor px-2.5 py-1.5 rounded-xl border border-violet-200 bg-violet-50 hover:bg-violet-100 text-violet-700 text-xs font-semibold ${
                hasItem ? "" : "opacity-60 cursor-not-allowed"
              }" data-id="${escapeHtml(r.id || "")}" ${hasItem ? "" : "disabled"}>${hasItem ? "Edit question" : "No question id"}</button>
            </div>
          </article>
        `;
      })
      .join("");
    if (state.activeReportId && !state.reports.some((entry) => String(entry.id) === String(state.activeReportId))) {
      closeOverrideEditor();
    }
    typesetMath([el("reportsList")]);
  };

  const loadReports = async () => {
    setMsg("reportsMsg", "Loading...");
    try {
      const data = await api("adminListProblemReports", {
        query: { status: el("reportsFilter").value },
      });
      renderReports(data.items || []);
      setMsg("reportsMsg", "Loaded.", "ok");
    } catch (err) {
      setMsg("reportsMsg", err.message || "Could not load reports.", "error");
    }
  };

  const updateReport = async (reportId, status) => {
    const noteInput = el("reportsList").querySelector(
      `textarea.report-note[data-id="${CSS.escape(reportId)}"]`
    );
    setMsg("reportsMsg", "Saving...");
    try {
      await api("adminUpdateProblemReport", {
        method: "POST",
        body: {
          reportId,
          status,
          adminNote: noteInput ? noteInput.value.trim() : "",
        },
      });
      setMsg("reportsMsg", "Updated.", "ok");
      await loadReports();
      await loadDashboard();
    } catch (err) {
      setMsg("reportsMsg", err.message || "Could not update report.", "error");
    }
  };

  const renderNotifications = (items) => {
    state.notifications = Array.isArray(items) ? items : [];
    el("notifyList").innerHTML = state.notifications
      .map(
        (n) => {
          const currentStatus = n.active ? "active" : "inactive";
          return `
          <article class="rounded-2xl border p-3 shadow-sm ${statusCardClass(currentStatus, "inactive")}">
            <div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <p class="font-bold break-words">${escapeHtml(n.title || "-")}</p>
              ${statusBadge(currentStatus, "inactive")}
            </div>
            <p class="text-sm text-slate-500">${escapeHtml(n.body || "-")}</p>
            <p class="text-xs text-slate-500 mt-1">${escapeHtml(n.targetType || "-")} ${escapeHtml(
          n.targetUid || ""
        )} | ${escapeHtml(n.url || "path.html")} | ${escapeHtml(fmt(n.createdAt))}</p>
            <div class="mt-3 grid gap-2 sm:flex sm:flex-wrap">
              <button class="notification-action px-2.5 py-1.5 rounded-xl border border-sky-200 bg-white hover:bg-sky-50 text-xs font-semibold" data-id="${escapeHtml(
                n.id || ""
              )}" data-action="activate">Activate</button>
              <button class="notification-action px-2.5 py-1.5 rounded-xl border border-sky-200 bg-white hover:bg-sky-50 text-xs font-semibold" data-id="${escapeHtml(
                n.id || ""
              )}" data-action="deactivate">Deactivate</button>
              <button class="notification-action px-2.5 py-1.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold" data-id="${escapeHtml(
                n.id || ""
              )}" data-action="delete">Delete</button>
            </div>
          </article>
        `;
        }
      )
      .join("");
  };

  const loadNotifications = async () => {
    setMsg("notifyMsg", "Loading...");
    try {
      const data = await api("adminListNotifications");
      renderNotifications(data.items || []);
      setMsg("notifyMsg", "Loaded.", "ok");
    } catch (err) {
      setMsg("notifyMsg", err.message || "Could not load notifications.", "error");
    }
  };

  const sendNotification = async () => {
    const payload = {
      targetType: el("notifyTargetType").value,
      uid: el("notifyTargetUid").value.trim(),
      title: el("notifyTitle").value.trim(),
      body: el("notifyBody").value.trim(),
      url: el("notifyUrl").value.trim(),
      inApp: el("notifyInApp").checked,
      offApp: el("notifyOffApp").checked,
    };
    if (!payload.title || !payload.body) {
      setMsg("notifyMsg", "Title and body are required.", "error");
      return;
    }
    if (payload.targetType === "user" && !payload.uid) {
      setMsg("notifyMsg", "Target UID is required for one-user target.", "error");
      return;
    }
    if (!payload.inApp && !payload.offApp) {
      setMsg("notifyMsg", "Pick at least one delivery mode.", "error");
      return;
    }
    setMsg("notifyMsg", "Sending...");
    try {
      const result = await api("adminSendNotification", {
        method: "POST",
        body: payload,
      });
      setMsg(
        "notifyMsg",
        `Sent. Web: ${result.webSent || 0}, FCM: ${result.fcmSent || 0}${
          result.inAppId ? ", in-app stored" : ""
        }.`,
        "ok"
      );
      el("notifyTitle").value = "";
      el("notifyBody").value = "";
      await loadNotifications();
    } catch (err) {
      setMsg("notifyMsg", err.message || "Could not send notification.", "error");
    }
  };

  const updateNotification = async (notificationId, action) => {
    const execute = async () => {
      setMsg("notifyMsg", "Updating...");
      try {
        await api("adminUpdateNotification", {
          method: "POST",
          body: { notificationId, action },
        });
        setMsg("notifyMsg", "Updated.", "ok");
        await loadNotifications();
      } catch (err) {
        setMsg("notifyMsg", err.message || "Could not update notification.", "error");
      }
    };
    if (action === "delete") {
      openConfirm("Delete this notification?", "This cannot be undone.", execute);
      return;
    }
    await execute();
  };

  const wireEvents = () => {
    document.querySelectorAll(".tab").forEach((btn) => {
      btn.addEventListener("click", () => setTab(btn.dataset.tab));
    });

    el("confirmCancel").addEventListener("click", closeConfirm);
    el("confirmOk").addEventListener("click", async () => {
      if (state.confirmAction) await state.confirmAction();
      closeConfirm();
    });

    el("refreshDashboard").addEventListener("click", loadDashboard);
    el("usersLoad").addEventListener("click", () => loadUsers(true));
    el("usersNext").addEventListener("click", () => loadUsers(false));
    el("usersExport").addEventListener("click", () => {
      downloadCsv("admin-users", state.users, [
        "uid",
        "email",
        "emailVerified",
        "disabled",
        "username",
        "fullName",
        "nationality",
        "xp",
        "streak",
        "leagueName",
        "createdAt",
        "lastSignInAt",
      ]);
    });
    el("usersList").addEventListener("click", (evt) => {
      const btn = evt.target.closest(".ua");
      if (!btn) return;
      runUserAction(btn.dataset.action, btn.dataset.uid, btn.dataset.email || "");
    });

    el("deletionsLoad").addEventListener("click", loadDeletions);
    el("deletionsFilter").addEventListener("change", loadDeletions);
    el("deletionsExport").addEventListener("click", () => {
      downloadCsv("admin-deletion-requests", state.deletions, [
        "id",
        "email",
        "uid",
        "status",
        "reason",
        "details",
        "source",
        "createdAt",
        "handledAt",
        "handledBy",
        "ip",
        "userAgent",
      ]);
    });
    el("deletionsList").addEventListener("click", (evt) => {
      const btn = evt.target.closest(".dr");
      if (!btn) return;
      runDeletionAction(btn.dataset.id, btn.dataset.action);
    });

    el("reportsLoad").addEventListener("click", loadReports);
    el("reportsFilter").addEventListener("change", loadReports);
    el("reportsExport").addEventListener("click", () => {
      downloadCsv("admin-problem-reports", state.reports, [
        "id",
        "uid",
        "issueType",
        "message",
        "status",
        "page",
        "itemId",
        "itemType",
        "prompt",
        "expectedAnswer",
        "userResponse",
        "createdAt",
        "adminNote",
        "handledAt",
        "handledBy",
      ]);
    });
    el("reportEditorClose").addEventListener("click", closeOverrideEditor);
    el("reportEditorReload").addEventListener("click", () => {
      if (state.activeReportId) loadOverrideEditor(state.activeReportId);
    });
    el("reportEditorSave").addEventListener("click", () => {
      if (state.activeReportId) saveQuestionOverride(state.activeReportId);
    });
    el("reportsList").addEventListener("click", (evt) => {
      const statusBtn = evt.target.closest(".report-action");
      if (statusBtn) {
        updateReport(statusBtn.dataset.id, statusBtn.dataset.status);
        return;
      }
      const editBtn = evt.target.closest(".report-open-editor");
      if (editBtn) {
        loadOverrideEditor(editBtn.dataset.id);
        return;
      }
    });

    el("notifySend").addEventListener("click", sendNotification);
    el("notifyLoad").addEventListener("click", loadNotifications);
    el("notifyExport").addEventListener("click", () => {
      downloadCsv("admin-notifications", state.notifications, [
        "id",
        "targetType",
        "targetUid",
        "title",
        "body",
        "url",
        "active",
        "createdAt",
        "createdBy",
      ]);
    });
    el("notifyList").addEventListener("click", (evt) => {
      const btn = evt.target.closest(".notification-action");
      if (!btn) return;
      updateNotification(btn.dataset.id, btn.dataset.action);
    });

    el("signInBtn").addEventListener("click", async () => {
      const email = el("loginEmail").value.trim();
      const pass = el("loginPass").value;
      if (!email || !pass) {
        setMsg("authMsg", "Enter email and password.", "error");
        return;
      }
      if (!isAllowedAdminEmail(email)) {
        setMsg("authMsg", "Only skalmistjulius@gmail.com can access this admin console.", "error");
        return;
      }
      setMsg("authMsg", "Signing in...");
      try {
        await auth.signInWithEmailAndPassword(email, pass);
      } catch (err) {
        setMsg("authMsg", err.message || "Sign in failed.", "error");
      }
    });
    el("signOutBtn").addEventListener("click", () => auth.signOut());
  };

  const enterAdmin = async (user) => {
    if (!user || !isAllowedAdminEmail(user.email)) {
      await auth.signOut();
      setMsg("authMsg", "Only skalmistjulius@gmail.com can access this admin console.", "error");
      return;
    }

    try {
      await api("adminDashboard");
    } catch (err) {
      if (err?.status === 401 || err?.status === 403 || /not authorized|invalid auth token|missing auth token/i.test(err?.message || "")) {
        await auth.signOut();
        setMsg("authMsg", "This account is not authorized for admin access.", "error");
      } else {
        setMsg(
          "authMsg",
          "Admin service is unavailable right now. Check Firebase Functions billing/deployment, then reload.",
          "error"
        );
      }
      return;
    }

    el("authCard").classList.add("hidden");
    el("app").classList.remove("hidden");
    el("adminEmail").textContent = user.email || "";
    el("adminEmail").classList.remove("hidden");
    el("signOutBtn").classList.remove("hidden");

    await Promise.all([
      loadDashboard(),
      loadUsers(true),
      loadDeletions(),
      loadReports(),
      loadNotifications(),
    ]);
    setMsg("authMsg", "");
  };

  wireEvents();
  auth.onAuthStateChanged((user) => {
    if (!user) {
      el("authCard").classList.remove("hidden");
      el("app").classList.add("hidden");
      el("adminEmail").classList.add("hidden");
      el("signOutBtn").classList.add("hidden");
      return;
    }
    if (!isAllowedAdminEmail(user.email)) {
      auth.signOut().catch(() => {});
      el("authCard").classList.remove("hidden");
      el("app").classList.add("hidden");
      el("adminEmail").classList.add("hidden");
      el("signOutBtn").classList.add("hidden");
      setMsg("authMsg", "Only skalmistjulius@gmail.com can access this admin console.", "error");
      return;
    }
    setMsg("authMsg", "Checking admin access...");
    enterAdmin(user);
  });
})();
