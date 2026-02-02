(function () {
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
    }
  };

  applyTheme();
})();
