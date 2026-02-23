(function () {
  const cfg = window.FC_FIREBASE_CONFIG || {};
  if (!firebase.apps.length) firebase.initializeApp(cfg);
  const auth = firebase.auth();
  const base = `https://us-central1-${cfg.projectId || "full-calculus"}.cloudfunctions.net`;

  const el = (id) => document.getElementById(id);
  const state = {
    nextUsersPage: "",
    users: [],
    deletions: [],
    reports: [],
    notifications: [],
    confirmAction: null,
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

  const fmt = (value) => {
    if (!value) return "-";
    const dt = new Date(value);
    return Number.isNaN(dt.getTime()) ? String(value) : dt.toLocaleString();
  };

  const getToken = async () => {
    const user = auth.currentUser;
    if (!user) throw new Error("Sign in required");
    return user.getIdToken(true);
  };

  const api = async (name, options = {}) => {
    const token = await getToken();
    let url = `${base}/${name}`;
    const method = options.method || "GET";
    const query = options.query || {};
    const qs = new URLSearchParams();
    Object.keys(query).forEach((key) => {
      const value = query[key];
      if (value != null && String(value) !== "") qs.set(key, String(value));
    });
    const encoded = qs.toString();
    if (encoded) url += `?${encoded}`;

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: method === "GET" ? undefined : JSON.stringify(options.body || {}),
    });

    const text = await res.text();
    let data = null;
    try {
      data = text ? JSON.parse(text) : null;
    } catch {
      data = null;
    }
    if (!res.ok) throw new Error((data && data.message) || text || "Request failed");
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

  const renderDashboard = (stats) => {
    const cards = [
      ["Users", stats.users],
      ["Pending deletions", stats.pendingDeletionRequests],
      ["Pending reports", stats.pendingProblemReports],
      ["Total reports", stats.totalProblemReports],
      ["Web push subs", stats.pushSubscriptions],
      ["FCM tokens", stats.fcmTokens],
    ];
    el("dashboardCards").innerHTML = cards
      .map(
        ([label, value]) => `
          <div class="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p class="text-xs text-slate-500">${escapeHtml(label)}</p>
            <p class="text-2xl font-extrabold">${Number(value) || 0}</p>
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
          <article class="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p class="font-bold">${escapeHtml(u.username || u.displayName || u.fullName || "Unnamed")}</p>
            <p class="text-xs text-slate-500 break-all">${escapeHtml(u.email || "-")}</p>
            <p class="text-[11px] text-slate-500 mt-1">UID: ${escapeHtml(u.uid || "-")}</p>
            <p class="text-xs text-slate-500 mt-1">${escapeHtml(statusText)} | XP ${Number(u.xp) || 0}</p>
            <div class="mt-2 flex flex-wrap gap-2">
              <button class="ua px-2 py-1 rounded border border-slate-300 text-xs font-semibold" data-action="${
                u.disabled ? "enable" : "disable"
              }" data-uid="${escapeHtml(u.uid)}">${u.disabled ? "Enable" : "Disable"}</button>
              <button class="ua px-2 py-1 rounded border border-slate-300 text-xs font-semibold" data-action="reset_password" data-uid="${escapeHtml(
                u.uid
              )}" data-email="${escapeHtml(u.email || "")}">Reset link</button>
              <button class="ua px-2 py-1 rounded border border-slate-300 text-xs font-semibold" data-action="send_verification" data-uid="${escapeHtml(
                u.uid
              )}" data-email="${escapeHtml(u.email || "")}">Verify link</button>
              <button class="ua px-2 py-1 rounded border border-slate-300 text-xs font-semibold" data-action="grant_admin" data-uid="${escapeHtml(
                u.uid
              )}">Grant admin</button>
              <button class="ua px-2 py-1 rounded border border-slate-300 text-xs font-semibold" data-action="revoke_admin" data-uid="${escapeHtml(
                u.uid
              )}">Revoke admin</button>
              <button class="ua px-2 py-1 rounded bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold" data-action="delete" data-uid="${escapeHtml(
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
        const data = await api("adminUserAction", {
          method: "POST",
          body: { action, uid, email },
        });
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
        (r) => `
          <article class="rounded-xl border border-slate-200 p-3">
            <p class="font-bold">${escapeHtml(r.email || "-")}</p>
            <p class="text-xs text-slate-500">UID: ${escapeHtml(r.uid || "-")} | ${escapeHtml(
          r.status || "pending"
        )} | ${escapeHtml(fmt(r.createdAt))}</p>
            <p class="text-sm mt-1">Reason: <span class="text-slate-500">${escapeHtml(r.reason || "-")}</span></p>
            <p class="text-sm">Details: <span class="text-slate-500">${escapeHtml(r.details || "-")}</span></p>
            <div class="mt-2 flex flex-wrap gap-2">
              <button class="dr px-2 py-1 rounded bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold" data-id="${escapeHtml(
                r.id || ""
              )}" data-action="approve_delete">Approve & delete</button>
              <button class="dr px-2 py-1 rounded border border-slate-300 text-xs font-semibold" data-id="${escapeHtml(
                r.id || ""
              )}" data-action="deny">Deny</button>
              <button class="dr px-2 py-1 rounded bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold" data-id="${escapeHtml(
                r.id || ""
              )}" data-action="complete">Complete</button>
            </div>
          </article>
        `
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

  const renderReports = (items) => {
    state.reports = Array.isArray(items) ? items : [];
    el("reportsList").innerHTML = state.reports
      .map(
        (r) => `
          <article class="rounded-xl border border-slate-200 p-3">
            <p class="font-bold">${escapeHtml(r.issueType || "Issue")} <span class="text-xs text-slate-500">(${escapeHtml(
          r.status || "pending"
        )})</span></p>
            <p class="text-xs text-slate-500">UID: ${escapeHtml(r.uid || "-")} | ${escapeHtml(fmt(
          r.createdAt
        ))} | ${escapeHtml(r.page || "-")}</p>
            <p class="text-sm mt-1 whitespace-pre-wrap">${escapeHtml(r.message || "-")}</p>
            <textarea class="report-note mt-2 w-full rounded border border-slate-300 px-2 py-1.5 text-sm" data-id="${escapeHtml(
              r.id || ""
            )}" rows="2" placeholder="Admin note">${escapeHtml(r.adminNote || "")}</textarea>
            <div class="mt-2 flex flex-wrap gap-2">
              <button class="report-action px-2 py-1 rounded border border-slate-300 text-xs font-semibold" data-id="${escapeHtml(
                r.id || ""
              )}" data-status="pending">Pending</button>
              <button class="report-action px-2 py-1 rounded border border-slate-300 text-xs font-semibold" data-id="${escapeHtml(
                r.id || ""
              )}" data-status="in_review">In review</button>
              <button class="report-action px-2 py-1 rounded bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold" data-id="${escapeHtml(
                r.id || ""
              )}" data-status="resolved">Resolved</button>
              <button class="report-action px-2 py-1 rounded bg-slate-700 hover:bg-slate-800 text-white text-xs font-bold" data-id="${escapeHtml(
                r.id || ""
              )}" data-status="closed">Closed</button>
            </div>
          </article>
        `
      )
      .join("");
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
        (n) => `
          <article class="rounded-xl border border-slate-200 p-3">
            <p class="font-bold">${escapeHtml(n.title || "-")} <span class="text-xs text-slate-500">(${
          n.active ? "active" : "inactive"
        })</span></p>
            <p class="text-sm text-slate-500">${escapeHtml(n.body || "-")}</p>
            <p class="text-xs text-slate-500 mt-1">${escapeHtml(n.targetType || "-")} ${escapeHtml(
          n.targetUid || ""
        )} | ${escapeHtml(n.url || "path.html")} | ${escapeHtml(fmt(n.createdAt))}</p>
            <div class="mt-2 flex flex-wrap gap-2">
              <button class="notification-action px-2 py-1 rounded border border-slate-300 text-xs font-semibold" data-id="${escapeHtml(
                n.id || ""
              )}" data-action="activate">Activate</button>
              <button class="notification-action px-2 py-1 rounded border border-slate-300 text-xs font-semibold" data-id="${escapeHtml(
                n.id || ""
              )}" data-action="deactivate">Deactivate</button>
              <button class="notification-action px-2 py-1 rounded bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold" data-id="${escapeHtml(
                n.id || ""
              )}" data-action="delete">Delete</button>
            </div>
          </article>
        `
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
        "createdAt",
        "adminNote",
        "handledAt",
        "handledBy",
      ]);
    });
    el("reportsList").addEventListener("click", (evt) => {
      const btn = evt.target.closest(".report-action");
      if (!btn) return;
      updateReport(btn.dataset.id, btn.dataset.status);
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
    try {
      await api("adminDashboard");
    } catch (err) {
      await auth.signOut();
      setMsg("authMsg", "This account is not authorized for admin access.", "error");
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
    setMsg("authMsg", "Checking admin access...");
    enterAdmin(user);
  });
})();
