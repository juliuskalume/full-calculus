(function () {
  const injectFonts = () => {
    if (document.getElementById("fc-fonts")) return;
    const style = document.createElement("style");
    style.id = "fc-fonts";
    style.textContent = `
      @font-face {
        font-family: "DIN Next Rounded";
        src: url("fonts/DINNextRounded-Regular.woff2") format("woff2"),
             url("fonts/DINNextRounded-Regular.woff") format("woff");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: "Feather Bold";
        src: url("fonts/Feather-Bold.woff2") format("woff2"),
             url("fonts/Feather-Bold.woff") format("woff");
        font-weight: 700;
        font-style: normal;
        font-display: swap;
      }
      :root {
        --fc-font-body: "DIN Next Rounded", "Arial Rounded MT Bold", "Arial Rounded MT", Arial, sans-serif;
        --fc-font-heading: "Feather Bold", "DIN Next Rounded", "Arial Rounded MT Bold", "Arial Rounded MT", Arial, sans-serif;
      }
      body {
        font-family: var(--fc-font-body) !important;
      }
      h1, h2, h3, h4, h5, h6, .heading-font {
        font-family: var(--fc-font-heading) !important;
        font-weight: 700 !important;
      }
    `;
    document.head.appendChild(style);
  };

  if (document.head) {
    injectFonts();
  } else {
    document.addEventListener("DOMContentLoaded", injectFonts, { once: true });
  }

  const applyTheme = () => {
    const html = document.documentElement;
    let prefs = {};
    try {
      prefs = JSON.parse(localStorage.getItem("fc_prefs") || "{}");
    } catch {
      prefs = {};
    }

    let darkPref = prefs?.darkMode;

    if (darkPref !== true && darkPref !== false) {
      const legacy = localStorage.getItem("fc_dark");
      if (legacy === "1" || legacy === "0") {
        darkPref = legacy === "1";
        prefs.darkMode = darkPref;
        try {
          localStorage.setItem("fc_prefs", JSON.stringify(prefs));
          localStorage.removeItem("fc_dark");
        } catch {
          // ignore
        }
      }
    }

    if (darkPref === true) {
      html.classList.add("dark");
      html.classList.remove("light");
    } else if (darkPref === false) {
      html.classList.remove("dark");
      html.classList.add("light");
    } else {
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        html.classList.add("dark");
        html.classList.remove("light");
      } else {
        html.classList.remove("dark");
        html.classList.add("light");
      }
    }
  };

  applyTheme();

  const registerServiceWorker = () => {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    if (window.location.protocol === "file:") {
      return;
    }

    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {
        // ignore registration failures
      });
    });
  };

  registerServiceWorker();

  const initPageLoader = () => {
    const LOADER_ID = "fc-page-loader";
    const STYLE_ID = "fc-page-loader-style";

    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement("style");
      style.id = STYLE_ID;
      style.textContent = `
        #${LOADER_ID} {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f5f6f8;
          transition: opacity 0.2s ease;
        }
        #${LOADER_ID}.hidden {
          opacity: 0;
          pointer-events: none;
        }
        #${LOADER_ID} .fc-loader-ring {
          width: 42px;
          height: 42px;
          border-radius: 9999px;
          border: 4px solid rgba(0, 0, 0, 0.12);
          border-top-color: #0df26c;
          animation: fc-spin 0.8s linear infinite;
        }
        @keyframes fc-spin {
          to { transform: rotate(360deg); }
        }
        .dark #${LOADER_ID} {
          background: #101622;
        }
        .dark #${LOADER_ID} .fc-loader-ring {
          border-color: rgba(255, 255, 255, 0.18);
          border-top-color: #0df26c;
        }
      `;
      document.head.appendChild(style);
    }

    const create = () => {
      if (document.getElementById(LOADER_ID)) return;
      const loader = document.createElement("div");
      loader.id = LOADER_ID;
      loader.innerHTML = `<div class="fc-loader-ring" aria-label="Loading"></div>`;
      document.body.appendChild(loader);
    };

    if (document.body) {
      create();
    } else {
      document.addEventListener("DOMContentLoaded", create, { once: true });
    }

    const show = () => {
      const el = document.getElementById(LOADER_ID);
      if (el) el.classList.remove("hidden");
    };
    const hide = () => {
      const el = document.getElementById(LOADER_ID);
      if (el) el.classList.add("hidden");
    };

    window.addEventListener("load", hide);
    window.addEventListener("pageshow", (e) => {
      if (e.persisted) hide();
    });
    window.addEventListener("beforeunload", show);
  };

  initPageLoader();

  const initComingSoonModal = () => {
    const MODAL_ID = "fc-coming-soon-modal";
    const STYLE_ID = "fc-coming-soon-style";

    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement("style");
      style.id = STYLE_ID;
      style.textContent = `
        #${MODAL_ID} {
          position: fixed;
          inset: 0;
          z-index: 9998;
          display: none;
        }
        #${MODAL_ID}.show {
          display: flex;
        }
        #${MODAL_ID} .fc-grid {
          background-image: radial-gradient(circle, rgba(226,232,240,0.9) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .dark #${MODAL_ID} .fc-grid {
          background-image: radial-gradient(circle, rgba(30,41,59,0.9) 1px, transparent 1px);
        }
      `;
      document.head.appendChild(style);
    }

    const ensure = () => {
      if (document.getElementById(MODAL_ID)) return;
      const wrap = document.createElement("div");
      wrap.id = MODAL_ID;
      wrap.innerHTML = `
        <div class="absolute inset-0 fc-grid opacity-50 pointer-events-none"></div>
        <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
        <div class="relative z-10 w-full flex items-center justify-center p-5">
          <div class="relative w-full max-w-[340px] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center text-center p-6 gap-6">
            <button
              type="button"
              data-fc-close
              class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
              aria-label="Close"
            >
              <span class="material-symbols-outlined">close</span>
            </button>
            <div class="relative w-full flex items-center justify-center pt-2">
              <span class="absolute top-0 left-8 material-symbols-outlined text-yellow-400 text-xl animate-bounce" style="animation-delay: 0.1s;">star</span>
              <span class="absolute top-10 right-10 material-symbols-outlined text-primary text-sm animate-pulse">star</span>
              <span class="absolute bottom-2 left-12 material-symbols-outlined text-primary/40 text-xs rotate-12">pentagon</span>
              <div class="relative z-10 w-40 h-40 bg-contain bg-center bg-no-repeat" id="fc-coming-soon-hero"></div>
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-0"></div>
            </div>
            <div class="flex flex-col items-center gap-3 w-full">
              <h2 id="fc-coming-soon-title" class="text-2xl font-bold text-primary leading-tight tracking-tight">Coming Soon!</h2>
              <p id="fc-coming-soon-body" class="text-slate-600 dark:text-slate-300 text-base font-normal leading-relaxed">
                We're still perfecting this part of the path.
              </p>
            </div>
            <div class="flex flex-col w-full gap-3 mt-2">
              <button
                type="button"
                data-fc-primary
                class="group relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary hover:bg-blue-600 transition-colors text-white text-base font-bold leading-normal tracking-wide shadow-lg shadow-primary/25 active:scale-[0.98]"
              >
                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease">
                  <span id="fc-coming-soon-primary-icon" class="material-symbols-outlined">notifications_active</span>
                </span>
                <span
                  id="fc-coming-soon-primary-label"
                  class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 group-hover:translate-x-full ease"
                >
                  Notify Me
                </span>
                <span class="relative invisible">Notify Me</span>
              </button>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(wrap);
    };

    const show = (options = {}) => {
      ensure();
      const modal = document.getElementById(MODAL_ID);
      if (!modal) return;
      const title = modal.querySelector("#fc-coming-soon-title");
      const body = modal.querySelector("#fc-coming-soon-body");
      const hero = modal.querySelector("#fc-coming-soon-hero");
      const closeBtn = modal.querySelector("[data-fc-close]");
      const primaryBtn = modal.querySelector("[data-fc-primary]");

      const enableNotifications = options.enableNotifications !== false;
      if (title) title.textContent = options.title || "Coming Soon!";
      if (body) body.innerHTML = options.message || "We're still perfecting this part of the path.";
      if (hero) {
        const img = options.image || "icons/apologetic-fox.png";
        hero.style.backgroundImage = `url('${img}')`;
      }
      const primaryLabel = options.primaryLabel || (enableNotifications ? "Notify Me" : "Got it");
      const primaryIcon = options.primaryIcon || (enableNotifications ? "notifications_active" : "check_circle");
      const primaryLabelEl = modal.querySelector("#fc-coming-soon-primary-label");
      const primaryIconEl = modal.querySelector("#fc-coming-soon-primary-icon");
      if (primaryLabelEl) primaryLabelEl.textContent = primaryLabel;
      if (primaryIconEl) primaryIconEl.textContent = primaryIcon;

      const onClose = () => {
        modal.classList.remove("show");
        document.body.classList.remove("overflow-hidden");
      };

      const onPrimary = () => {
        if (typeof options.onPrimary === "function") {
          options.onPrimary();
          onClose();
          return;
        }
        if (enableNotifications) {
          try {
            const prefs = JSON.parse(localStorage.getItem("fc_prefs") || "{}");
            prefs.sound = prefs.sound !== false ? prefs.sound : true;
            prefs.motivation = prefs.motivation !== false ? prefs.motivation : true;
            prefs.darkMode = prefs.darkMode;
            localStorage.setItem("fc_prefs", JSON.stringify(prefs));
          } catch {
            // ignore
          }
          try {
            const state = JSON.parse(localStorage.getItem("fc_state") || "{}");
            state.notifications = true;
            localStorage.setItem("fc_state", JSON.stringify(state));
          } catch {
            // ignore
          }
          if (window.FCPush?.requestPermissionAndSubscribe) {
            window.FCPush.requestPermissionAndSubscribe().catch(() => {});
          }
        }
        onClose();
      };

      const onSecondary = () => {
        if (typeof options.onSecondary === "function") {
          options.onSecondary();
        }
        onClose();
      };

      closeBtn?.addEventListener("click", onClose, { once: true });
      primaryBtn?.addEventListener("click", onPrimary, { once: true });
      // no secondary button

      modal.classList.add("show");
      document.body.classList.add("overflow-hidden");
    };

    window.FCUI = window.FCUI || {};
    window.FCUI.showComingSoon = show;
  };

  const whenReady = () => initComingSoonModal();
  if (document.body) {
    whenReady();
  } else {
    document.addEventListener("DOMContentLoaded", whenReady, { once: true });
  }

  const initHelpFab = () => {
    const existingFab = document.getElementById("helpFab") || document.getElementById("fcHelpFab");
    const existingOverlay = document.getElementById("helpOverlay") || document.getElementById("fcHelpOverlay");
    if (existingFab || existingOverlay) return;

    let prefs = {};
    try {
      prefs = JSON.parse(localStorage.getItem("fc_prefs") || "{}");
    } catch {
      prefs = {};
    }
    if (prefs.displayFab === false) return;

    const filename = (location.pathname.split("/").pop() || "").toLowerCase();
    if (["offline.html", "auth-restriction.html"].includes(filename)) return;

    const step = document.body?.getAttribute("data-step") || "";
    const context = step || filename.replace(".html", "");

    const helpMap = {
      practice: {
        title: "Practice Hub Help",
        message: "Boost your skills fast with short, focused sessions.",
        tips: [
          "Start a Daily Warmup for quick XP.",
          "Fix mistakes to reinforce weak topics.",
          "Set a daily XP goal to stay consistent.",
        ],
        primary: "Start Warmup",
        action: "startWarmup",
      },
      notes: {
        title: "Notes Help",
        message: "Review explanations and jump straight into practice.",
        tips: ["Switch Calc tabs to change course.", "Use Search to find topics fast.", "Tap Go to practice a section."],
        primary: "Search Notes",
        action: "focusSearch",
      },
      path: {
        title: "Learning Path Help",
        message: "Follow the path to unlock the next unit.",
        tips: ["Tap a green node to start a lesson.", "Complete a unit test to advance.", "Check Daily Quest for extra XP."],
        primary: "Daily Quest",
        action: "openDailyQuest",
      },
      leaderboard: {
        title: "Leaderboard Help",
        message: "See how you rank against other learners.",
        tips: ["Sign in to see your position.", "XP and streaks update after lessons.", "Check often to track progress."],
        primary: "Back to Path",
        action: "openPath",
      },
      profile: {
        title: "Profile Help",
        message: "Track your progress and achievements.",
        tips: ["Achievements unlock as you finish units.", "Keep your streak alive daily.", "Update your avatar in Settings."],
        primary: "Open Settings",
        action: "openSettings",
      },
      settings: {
        title: "Settings Help",
        message: "Personalize your learning experience.",
        tips: ["Update your username and avatar.", "Change preferences like sound and vibration.", "Adjust your daily goal pace."],
        primary: "Back to Path",
        action: "openPath",
      },
      "daily-quest": {
        title: "Daily Quest Help",
        message: "Complete quests to earn bonus XP and streak boosts.",
        tips: ["Finish lessons to complete quest steps.", "Claim rewards once a quest is done.", "Quests refresh daily."],
        primary: "Go to Path",
        action: "openPath",
      },
      streak: {
        title: "Streak Help",
        message: "Keep your streak alive by practicing every day.",
        tips: ["Complete any lesson to maintain streak.", "Missed a day? Start a new streak."],
        primary: "Go to Path",
        action: "openPath",
      },
      skill: {
        title: "Getting Started",
        message: "Pick the level that matches your confidence.",
        tips: ["You can change this later in Settings.", "Be honest to get the best path."],
        primary: "Continue",
        action: "continueOnboarding",
      },
      goal: {
        title: "Set Your Goal",
        message: "Choose a pace you can stick to.",
        tips: ["Consistency beats intensity.", "You can change this later."],
        primary: "Continue",
        action: "continueOnboarding",
      },
      time: {
        title: "Reminder Time",
        message: "Pick a time you’re most likely to study.",
        tips: ["Choose a consistent time.", "You can update this later."],
        primary: "Continue",
        action: "continueOnboarding",
      },
      notify: {
        title: "Learning Reminders",
        message: "Enable reminders so you don’t miss a day.",
        tips: ["You can turn this off anytime.", "Reminders help protect your streak."],
        primary: "Continue",
        action: "continueOnboarding",
      },
      account: {
        title: "Create Your Account",
        message: "Save your progress across devices.",
        tips: ["Google sign-in is fastest.", "Email sign-up works too."],
        primary: "Continue",
        action: "continueOnboarding",
      },
      done: {
        title: "You’re Ready",
        message: "Your path is set. Start learning now.",
        tips: ["You can adjust goals later.", "Practice every day for streaks."],
        primary: "Start Learning",
        action: "continueOnboarding",
      },
      "active-lesson": {
        title: "Lesson Help",
        message: "Answer each question to earn XP.",
        tips: ["Use hints if you’re stuck.", "Your streak grows with daily activity."],
        primary: "Got it",
        action: "close",
      },
      "unit-test": {
        title: "Unit Test Help",
        message: "Prove mastery to unlock the next unit.",
        tips: ["No hints during tests.", "Aim for accuracy to pass."],
        primary: "Got it",
        action: "close",
      },
      test: {
        title: "Test Help",
        message: "Complete the test to unlock progress.",
        tips: ["Answer carefully — accuracy matters.", "You can retry later if needed."],
        primary: "Got it",
        action: "close",
      },
      "lesson-complete": {
        title: "Lesson Complete",
        message: "Nice work! Your XP and streak are updated.",
        tips: ["Keep going to build momentum.", "Daily goal progress updates here."],
        primary: "Back to Path",
        action: "openPath",
      },
      "unit-test-pass": {
        title: "Test Passed",
        message: "You unlocked the next unit.",
        tips: ["Head back to the path to continue.", "Keep your streak alive."],
        primary: "Back to Path",
        action: "openPath",
      },
      "unit-test-fail": {
        title: "Test Review",
        message: "Review weak areas and try again.",
        tips: ["Practice mistakes before retrying.", "Accuracy improves with repetition."],
        primary: "Practice Hub",
        action: "openPractice",
      },
      login: {
        title: "Login Help",
        message: "Sign in to sync progress across devices.",
        tips: ["Use Google for quickest sign-in.", "Forgot password? Tap the link below."],
        primary: "Got it",
        action: "close",
      },
      index: {
        title: "Getting Started",
        message: "Pick your experience level to start.",
        tips: ["This helps us personalize your path.", "You can change it later."],
        primary: "Continue",
        action: "continueOnboarding",
      },
      default: {
        title: "Need Help?",
        message: "Quick tips for this screen.",
        tips: ["Complete lessons to earn XP.", "Practice daily to keep your streak."],
        primary: "Got it",
        action: "close",
      },
    };

    const help = helpMap[context] || helpMap.default;

    if (!document.getElementById("fc-help-style")) {
      const style = document.createElement("style");
      style.id = "fc-help-style";
      style.textContent = `
        #fc-help-fab-wrap {
          position: fixed;
          right: 16px;
          bottom: 96px;
          z-index: 40;
        }
        @media (min-width: 768px) {
          #fc-help-fab-wrap {
            right: calc(50% - 220px + 1rem);
          }
        }
        #fcHelpFab {
          width: 48px;
          height: 48px;
          border-radius: 9999px;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          color: #475569;
          box-shadow: 0 12px 24px rgba(15, 23, 42, 0.15);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .dark #fcHelpFab {
          background: #1a2332;
          border-color: #334155;
          color: #cbd5e1;
        }
        #fcHelpOverlay {
          position: fixed;
          inset: 0;
          z-index: 80;
        }
        #fcHelpOverlay.hidden {
          display: none;
        }
        #fcHelpOverlay .fc-help-card {
          background: #ffffff;
          color: #0f172a;
        }
        .dark #fcHelpOverlay .fc-help-card {
          background: #1a2332;
          color: #e2e8f0;
        }
        #fc-help-confirm {
          position: fixed;
          inset: 0;
          z-index: 90;
        }
        #fc-help-confirm.hidden {
          display: none;
        }
      `;
      document.head.appendChild(style);
    }

    const wrap = document.createElement("div");
    wrap.id = "fc-help-fab-wrap";
    wrap.innerHTML = `
      <button
        id="fcHelpFab"
        type="button"
        class="bg-surface-light dark:bg-surface-dark p-3 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
        aria-label="Help"
      >
        <span class="material-symbols-outlined">help</span>
      </button>
    `;

    const overlay = document.createElement("div");
    overlay.id = "fcHelpOverlay";
    overlay.className = "fixed inset-0 z-[80] hidden";
    overlay.innerHTML = `
      <div class="absolute inset-0 bg-[#141414]/60 backdrop-blur-sm" data-help-close></div>
      <div class="absolute inset-0 flex flex-col justify-end sm:justify-center items-center px-0 sm:px-4">
        <div class="fc-help-card w-full max-w-[440px] rounded-t-3xl sm:rounded-3xl flex flex-col shadow-2xl">
          <div class="flex h-6 w-full items-center justify-center sm:hidden">
            <div class="h-1.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
          </div>
          <div class="flex items-center justify-between px-6 pt-6">
            <h2 id="fc-help-title" class="text-xl font-extrabold text-slate-900 dark:text-white">Help</h2>
            <button
              type="button"
              id="fc-help-close"
              class="w-9 h-9 rounded-full flex items-center justify-center text-slate-500 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close help"
            >
              <span class="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>
          <div class="px-6 pt-4 pb-3 flex items-start gap-4">
            <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center overflow-hidden">
              <img src="icons/apologetic-fox.png" alt="Help mascot" class="w-full h-full object-cover" />
            </div>
            <p id="fc-help-message" class="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed"></p>
          </div>
          <div class="px-6 pb-4">
            <ul id="fc-help-tips" class="space-y-2 text-sm text-slate-600 dark:text-slate-300"></ul>
          </div>
          <div class="px-6 pb-8 flex flex-col gap-3">
            <button
              id="fc-help-primary"
              type="button"
              class="w-full flex items-center justify-center gap-2 rounded-xl h-12 bg-primary text-black font-bold shadow-md hover:bg-primary-dark transition-colors"
            >
              Got it
            </button>
            <div class="flex items-center justify-between text-sm">
              <button id="fc-help-support" type="button" class="text-primary font-semibold hover:text-primary-dark">
                Email support
              </button>
              <button id="fc-help-hide" type="button" class="text-slate-400 hover:text-primary">
                Hide FAB
              </button>
              <button id="fc-help-privacy" type="button" class="text-slate-500 dark:text-slate-400 hover:text-primary">
                Privacy Policy
              </button>
              <button id="fc-help-terms" type="button" class="text-slate-500 dark:text-slate-400 hover:text-primary">
                Terms
              </button>
            </div>
          </div>
          <div class="h-2 sm:hidden"></div>
        </div>
      </div>
    `;

    const confirmOverlay = document.createElement("div");
    confirmOverlay.id = "fc-help-confirm";
    confirmOverlay.className = "hidden";
    confirmOverlay.innerHTML = `
      <div class="absolute inset-0 bg-[#141414]/60 backdrop-blur-sm"></div>
      <div class="absolute inset-0 flex items-center justify-center px-4">
        <div class="fc-help-card w-full max-w-[360px] rounded-2xl p-6 shadow-2xl">
          <h3 class="text-lg font-extrabold mb-2 text-primary">Hide help button?</h3>
          <p class="text-sm text-white">
            You can turn it back on anytime in Settings.
          </p>
          <div class="mt-5 flex gap-3">
            <button
              id="fc-help-confirm-cancel"
              type="button"
              class="flex-1 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              Cancel
            </button>
            <button
              id="fc-help-confirm-hide"
              type="button"
              class="flex-1 h-11 rounded-xl bg-primary text-black font-bold shadow-md hover:bg-primary-dark transition-colors"
            >
              Hide
            </button>
          </div>
        </div>
      </div>
    `;

    const attach = () => {
      document.body.appendChild(wrap);
      document.body.appendChild(overlay);
      document.body.appendChild(confirmOverlay);

      const open = () => {
        const titleEl = document.getElementById("fc-help-title");
        const msgEl = document.getElementById("fc-help-message");
        const tipsEl = document.getElementById("fc-help-tips");
        const primaryBtn = document.getElementById("fc-help-primary");
        if (titleEl) titleEl.textContent = help.title || "Help";
        if (msgEl) msgEl.textContent = help.message || "";
        if (tipsEl) {
          tipsEl.innerHTML = (help.tips || [])
            .map((tip) => `<li class="flex gap-2"><span class="material-symbols-outlined text-primary text-[18px]">check_circle</span><span>${tip}</span></li>`)
            .join("");
        }
        if (primaryBtn) primaryBtn.textContent = help.primary || "Got it";
        overlay.classList.remove("hidden");
        document.body.classList.add("overflow-hidden");
      };

      const close = () => {
        overlay.classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
      };

      const openConfirm = () => {
        confirmOverlay.classList.remove("hidden");
        document.body.classList.add("overflow-hidden");
      };

      const closeConfirm = () => {
        confirmOverlay.classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
      };

      const actions = {
        close,
        startWarmup: () => document.getElementById("startWarmupBtn")?.click(),
        openDailyQuest: () => (window.location.href = "daily-quest.html"),
        openNotes: () => (window.location.href = "notes.html"),
        openSettings: () => (window.location.href = "settings.html"),
        openPath: () => (window.location.href = "path.html"),
        openPractice: () => (window.location.href = "practice.html"),
        focusSearch: () => {
          const row = document.getElementById("searchRow");
          const input = document.getElementById("searchInput");
          if (row) row.classList.remove("hidden");
          input?.focus();
        },
        continueOnboarding: () => document.getElementById("continueBtn")?.click(),
      };

      document.getElementById("fcHelpFab")?.addEventListener("click", open);
      overlay.querySelector("[data-help-close]")?.addEventListener("click", close);
      document.getElementById("fc-help-close")?.addEventListener("click", close);
      document.getElementById("fc-help-primary")?.addEventListener("click", () => {
        const action = actions[help.action] || close;
        action();
        if (help.action !== "startWarmup" && help.action !== "continueOnboarding") {
          close();
        }
      });
      document.getElementById("fc-help-support")?.addEventListener("click", () => {
        window.location.href = "mailto:sentira.official@gmail.com";
      });
      document.getElementById("fc-help-privacy")?.addEventListener("click", () => {
        window.location.href = "privacy.html";
      });
      document.getElementById("fc-help-terms")?.addEventListener("click", () => {
        window.location.href = "terms.html";
      });
      document.getElementById("fc-help-hide")?.addEventListener("click", () => {
        openConfirm();
      });
      document.getElementById("fc-help-confirm-cancel")?.addEventListener("click", closeConfirm);
      document.getElementById("fc-help-confirm-hide")?.addEventListener("click", () => {
        try {
          const next = JSON.parse(localStorage.getItem("fc_prefs") || "{}");
          next.displayFab = false;
          localStorage.setItem("fc_prefs", JSON.stringify(next));
        } catch {
          // ignore
        }
        closeConfirm();
        close();
        wrap.remove();
        overlay.remove();
        confirmOverlay.remove();
      });
    };

    if (document.body) attach();
    else document.addEventListener("DOMContentLoaded", attach, { once: true });
  };

  initHelpFab();

  const initOfflineRedirect = () => {
    const filename = (location.pathname.split("/").pop() || "").toLowerCase();
    if (filename === "offline.html" || filename === "auth-restriction.html") return;

    const url = new URL(window.location.href);
    if (url.searchParams.get("offline") === "1") {
      try {
        localStorage.setItem("fc_offline_mode", "1");
      } catch {
        // ignore
      }
      url.searchParams.delete("offline");
      if (window.history && window.history.replaceState) {
        window.history.replaceState({}, "", url.toString());
      }
    }

    const isOfflineBypass = () => {
      try {
        return localStorage.getItem("fc_offline_mode") === "1";
      } catch {
        return false;
      }
    };

    const clearOfflineBypass = () => {
      try {
        localStorage.removeItem("fc_offline_mode");
      } catch {
        // ignore
      }
    };

    const goOffline = () => {
      if (!navigator.onLine && !isOfflineBypass()) {
        location.replace("offline.html");
        return;
      }
      if (navigator.onLine) {
        clearOfflineBypass();
      }
    };

    if (document.readyState === "complete") {
      goOffline();
    } else {
      window.addEventListener("load", goOffline, { once: true });
    }

    window.addEventListener("online", clearOfflineBypass);
  };

  initOfflineRedirect();

  const initOfflineIndicator = () => {
    if (document.getElementById("fc-offline-bar")) return;

    if (!document.getElementById("fc-offline-style")) {
      const style = document.createElement("style");
      style.id = "fc-offline-style";
      style.textContent = `
        :root { --fc-offline-bar-height: 0px; }
        #fc-offline-bar {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          height: 22px;
          padding-bottom: env(safe-area-inset-bottom, 0);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.01em;
          z-index: 60;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }
        #fc-offline-bar.hidden {
          opacity: 0;
          transform: translateY(100%);
          pointer-events: none;
        }
        #fc-offline-bar.offline {
          background: #ef4444;
          color: #ffffff;
        }
        #fc-offline-bar.online {
          background: #1cb0f6;
          color: #ffffff;
        }
      `;
      document.head.appendChild(style);
    }

    const bar = document.createElement("div");
    bar.id = "fc-offline-bar";
    bar.className = "hidden";
    bar.textContent = "You are offline. Some features may break.";

    const attach = () => {
      document.body.appendChild(bar);
    };

    if (document.body) attach();
    else document.addEventListener("DOMContentLoaded", attach, { once: true });

    const adjustedNavs = new Map();

    const setNavOffset = (enabled) => {
      const navs = document.querySelectorAll("nav");
      navs.forEach((nav) => {
        const style = window.getComputedStyle(nav);
        if (style.position !== "fixed") return;
        const bottom = parseFloat(style.bottom || "0");
        if (enabled) {
          if (bottom > 2) return;
          if (!adjustedNavs.has(nav)) {
            adjustedNavs.set(nav, nav.style.bottom || "");
          }
          nav.style.bottom = "var(--fc-offline-bar-height)";
        } else if (adjustedNavs.has(nav)) {
          nav.style.bottom = adjustedNavs.get(nav) || "";
          adjustedNavs.delete(nav);
        }
      });
    };

    const showOffline = () => {
      bar.textContent = "You are offline. Some features may break.";
      bar.classList.remove("hidden");
      bar.classList.remove("online");
      bar.classList.add("offline");
      document.documentElement.style.setProperty("--fc-offline-bar-height", "22px");
      setNavOffset(true);
    };

    const showOnline = () => {
      bar.textContent = "Back online";
      bar.classList.remove("hidden");
      bar.classList.remove("offline");
      bar.classList.add("online");
      document.documentElement.style.setProperty("--fc-offline-bar-height", "22px");
      setNavOffset(true);
      setTimeout(() => {
        bar.classList.add("hidden");
        document.documentElement.style.setProperty("--fc-offline-bar-height", "0px");
        setNavOffset(false);
      }, 5000);
    };

    let wasOffline = !navigator.onLine;
    if (wasOffline) showOffline();

    window.addEventListener("offline", () => {
      wasOffline = true;
      showOffline();
    });

    window.addEventListener("online", () => {
      if (wasOffline) {
        wasOffline = false;
        showOnline();
      }
    });
  };

  initOfflineIndicator();

  const initHaptics = () => {
    const shouldVibrate = () => {
      try {
        const prefs = JSON.parse(localStorage.getItem("fc_prefs") || "{}");
        return prefs.vibration !== false;
      } catch {
        return true;
      }
    };

    document.addEventListener(
      "click",
      (event) => {
        if (!shouldVibrate()) return;
        if (!navigator.vibrate) return;
        const target = event.target?.closest?.(
          "button, a, [role='button'], input[type='button'], input[type='submit'], label, summary, [onclick], .press"
        );
        if (!target) return;
        navigator.vibrate(20);
      },
      { passive: true }
    );
  };

  initHaptics();

  const initBackToPathOverride = () => {
    const filename = (location.pathname.split("/").pop() || "").toLowerCase();
    const forcePages = new Set(["practice.html", "leaderboard.html", "notes.html", "profile.html"]);
    if (!forcePages.has(filename)) return;

    try {
      history.pushState({ fcForcePath: true }, "");
    } catch {
      // ignore
    }

    window.addEventListener("popstate", () => {
      window.location.href = "path.html";
    });
  };

  initBackToPathOverride();
})();
