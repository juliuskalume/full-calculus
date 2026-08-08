(function () {
  "use strict";

  const SUPPORTED = ["en", "ja", "es", "tr"];
  const LANGUAGE_NAMES = { en: "English", ja: "日本語", es: "Español", tr: "Türkçe" };
  const STORAGE_KEY = "fc_prefs";

  const dictionary = {
    ja: {
      "LOG IN": "ログイン", "Continue": "続ける", "Start learning": "学習を始める", "Back": "戻る", "Save": "保存", "on": "オン", "off": "オフ",
      "Settings": "設定", "Account": "アカウント", "Username": "ユーザー名", "Full Name": "氏名", "Date of birth": "生年月日", "Country": "国", "Email": "メール", "Password": "パスワード", "Change": "変更", "Change avatar": "アバターを変更", "Choose an avatar": "アバターを選択", "Verify email": "メールを確認", "Current password": "現在のパスワード", "New password": "新しいパスワード", "Language": "言語", "App language": "アプリの言語",
      "Hi! I'm Cal. Welcome to Sentirax Calculus": "こんにちは！Calです。Sentirax Calculusへようこそ", "How much Calculus do you know?": "微積分をどのくらい知っていますか？", "We'll customize your learning path.": "あなたに合わせて学習経路を調整します。", "I am new to Calculus": "微積分は初めてです", "Start from Calc 1": "微積分Iから始める", "I know some basics": "基礎を少し知っています", "Jump to Calc 2": "微積分IIへ進む", "I am advanced": "上級者です", "Jump to Calc 3": "微積分IIIへ進む",
      "Home": "ホーム", "Practice": "練習", "Rank": "ランキング", "Notes": "ノート", "Profile": "プロフィール", "Daily Quest": "今日のクエスト", "Complete today's quests to earn XP": "今日のクエストを完了してXPを獲得", "Unit": "ユニット", "Completed": "完了", "Expand": "展開", "Collapse": "折りたたむ",
      "Loading question...": "問題を読み込み中...", "Pick the best answer.": "最適な答えを選んでください。", "Check": "確認", "Submit Answer": "答えを送信", "Next Question": "次の問題", "Correct": "正解", "Incorrect.": "不正解。", "Correct answer:": "正解:", "Goal complete!": "目標達成！", "Almost there!": "あと少し！", "Keep it up!": "その調子！", "Let's go!": "始めよう！", "Passed": "合格", "Retake": "再受験", "Not passed yet": "未合格", "Retry": "再試行", "Not started": "未開始", "Start": "開始",
      "Calculus I": "微積分I", "Calculus II": "微積分II", "Calculus III": "微積分III", "Limits": "極限", "Derivatives": "導関数", "Integrals": "積分", "Preliminaries": "準備", "Limits & Continuity": "極限と連続性", "Learn how to approach the infinite.": "無限に近づく方法を学びます。"
    },
    es: {
      "LOG IN": "INICIAR SESIÓN", "Continue": "Continuar", "Start learning": "Empezar a aprender", "Back": "Atrás", "Save": "Guardar", "on": "activadas", "off": "desactivadas",
      "Settings": "Configuración", "Account": "Cuenta", "Username": "Usuario", "Full Name": "Nombre completo", "Date of birth": "Fecha de nacimiento", "Country": "País", "Email": "Correo electrónico", "Password": "Contraseña", "Change": "Cambiar", "Change avatar": "Cambiar avatar", "Choose an avatar": "Elige un avatar", "Verify email": "Verificar correo", "Current password": "Contraseña actual", "New password": "Nueva contraseña", "Language": "Idioma", "App language": "Idioma de la app",
      "Hi! I'm Cal. Welcome to Sentirax Calculus": "¡Hola! Soy Cal. Te doy la bienvenida a Sentirax Calculus", "How much Calculus do you know?": "¿Cuánto cálculo sabes?", "We'll customize your learning path.": "Personalizaremos tu ruta de aprendizaje.", "I am new to Calculus": "Soy nuevo en cálculo", "Start from Calc 1": "Empezar desde Cálculo I", "I know some basics": "Conozco algunas bases", "Jump to Calc 2": "Ir a Cálculo II", "I am advanced": "Tengo nivel avanzado", "Jump to Calc 3": "Ir a Cálculo III",
      "Home": "Inicio", "Practice": "Práctica", "Rank": "Rango", "Notes": "Notas", "Profile": "Perfil", "Daily Quest": "Misión diaria", "Complete today's quests to earn XP": "Completa las misiones de hoy para ganar XP", "Unit": "Unidad", "Completed": "Completado", "Expand": "Expandir", "Collapse": "Contraer",
      "Loading question...": "Cargando pregunta...", "Pick the best answer.": "Elige la mejor respuesta.", "Check": "Comprobar", "Submit Answer": "Enviar respuesta", "Next Question": "Siguiente pregunta", "Correct": "Correcto", "Incorrect.": "Incorrecto.", "Correct answer:": "Respuesta correcta:", "Goal complete!": "¡Meta completada!", "Almost there!": "¡Ya casi!", "Keep it up!": "¡Sigue así!", "Let's go!": "¡Vamos!", "Passed": "Aprobado", "Retake": "Repetir", "Not passed yet": "Aún no aprobado", "Retry": "Intentar de nuevo", "Not started": "No iniciado", "Start": "Iniciar",
      "Calculus I": "Cálculo I", "Calculus II": "Cálculo II", "Calculus III": "Cálculo III", "Limits": "Límites", "Derivatives": "Derivadas", "Integrals": "Integrales", "Preliminaries": "Preliminares", "Limits & Continuity": "Límites y continuidad", "Learn how to approach the infinite.": "Aprende a aproximarte al infinito."
    },
    tr: {
      "LOG IN": "GİRİŞ YAP", "Continue": "Devam et", "Start learning": "Öğrenmeye başla", "Back": "Geri", "Save": "Kaydet", "on": "açık", "off": "kapalı",
      "Settings": "Ayarlar", "Account": "Hesap", "Username": "Kullanıcı adı", "Full Name": "Ad soyad", "Date of birth": "Doğum tarihi", "Country": "Ülke", "Email": "E-posta", "Password": "Şifre", "Change": "Değiştir", "Change avatar": "Avatarı değiştir", "Choose an avatar": "Avatar seç", "Verify email": "E-postayı doğrula", "Current password": "Geçerli şifre", "New password": "Yeni şifre", "Language": "Dil", "App language": "Uygulama dili",
      "Hi! I'm Cal. Welcome to Sentirax Calculus": "Merhaba! Ben Cal. Sentirax Calculus'a hoş geldin", "How much Calculus do you know?": "Ne kadar kalkülüs biliyorsun?", "We'll customize your learning path.": "Öğrenme yolunu sana göre düzenleyeceğiz.", "I am new to Calculus": "Kalkülüsu yeni öğreniyorum", "Start from Calc 1": "Kalkülüs I'den başla", "I know some basics": "Bazı temelleri biliyorum", "Jump to Calc 2": "Kalkülüs II'ye geç", "I am advanced": "İleri seviyedeyim", "Jump to Calc 3": "Kalkülüs III'e geç",
      "Home": "Ana sayfa", "Practice": "Alıştırma", "Rank": "Sıralama", "Notes": "Notlar", "Profile": "Profil", "Daily Quest": "Günlük görev", "Complete today's quests to earn XP": "XP kazanmak için bugünkü görevleri tamamla", "Unit": "Ünite", "Completed": "Tamamlandı", "Expand": "Genişlet", "Collapse": "Daralt",
      "Loading question...": "Soru yükleniyor...", "Pick the best answer.": "En iyi cevabı seç.", "Check": "Kontrol et", "Submit Answer": "Cevabı gönder", "Next Question": "Sonraki soru", "Correct": "Doğru", "Incorrect.": "Yanlış.", "Correct answer:": "Doğru cevap:", "Goal complete!": "Hedef tamamlandı!", "Almost there!": "Az kaldı!", "Keep it up!": "Devam et!", "Let's go!": "Haydi!", "Passed": "Geçti", "Retake": "Tekrar al", "Not passed yet": "Henüz geçilmedi", "Retry": "Tekrar dene", "Not started": "Başlamadı", "Start": "Başla",
      "Calculus I": "Kalkülüs I", "Calculus II": "Kalkülüs II", "Calculus III": "Kalkülüs III", "Limits": "Limitler", "Derivatives": "Türevler", "Integrals": "İntegraller", "Preliminaries": "Ön bilgiler", "Limits & Continuity": "Limitler ve süreklilik", "Learn how to approach the infinite.": "Sonsuza yaklaşmayı öğren."
    }
  };

  const getPrefs = () => { try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); } catch { return {}; } };
  const savePrefs = (prefs) => { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs)); } catch {} };
  const normalize = (lang) => SUPPORTED.includes(String(lang || "").slice(0, 2)) ? String(lang).slice(0, 2) : "en";
  const getLanguage = () => normalize(getPrefs().language || navigator.language || "en");
  const t = (text, params) => {
    const source = String(text ?? "");
    let out = getLanguage() === "en" ? source : (dictionary[getLanguage()]?.[source] || source);
    if (params) Object.entries(params).forEach(([k, v]) => { out = out.replaceAll(`{${k}}`, v); });
    return out;
  };

  function translateNode(node) {
    if (!node || node.nodeType !== Node.TEXT_NODE) return;
    const raw = node.nodeValue;
    const trimmed = raw.trim();
    if (!trimmed) return;
    const translated = t(trimmed);
    if (translated !== trimmed) node.nodeValue = raw.replace(trimmed, translated);
  }

  function translateDocument(root = document.body) {
    document.documentElement.lang = getLanguage();
    if (document.title) document.title = t(document.title);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const p = node.parentElement;
        if (!p || ["SCRIPT", "STYLE", "TEXTAREA", "OPTION"].includes(p.tagName)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(translateNode);
    root.querySelectorAll?.("[placeholder],[aria-label],[title]").forEach((el) => {
      ["placeholder", "aria-label", "title"].forEach((attr) => {
        if (el.hasAttribute(attr)) el.setAttribute(attr, t(el.getAttribute(attr)));
      });
    });
  }

  function setLanguage(lang) {
    const prefs = getPrefs();
    prefs.language = normalize(lang);
    savePrefs(prefs);
    location.reload();
  }

  function addSettingsLanguageControl() {
    if (document.body?.dataset?.step !== "settings" || document.getElementById("languageSelect")) return;
    const account = Array.from(document.querySelectorAll("section h3")).find((h) => h.textContent.trim() === t("Account"));
    const section = document.createElement("section");
    section.className = "mb-6";
    section.innerHTML = `
      <h3 class="text-sm font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400 px-1 pb-2">${t("Language")}</h3>
      <div class="bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
        <label class="flex items-center gap-4 px-4 min-h-[72px] py-2 justify-between">
          <span class="text-base font-semibold leading-normal">${t("App language")}</span>
          <select id="languageSelect" class="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark px-3 py-2 text-sm font-bold text-slate-800 dark:text-slate-100">
            ${SUPPORTED.map((code) => `<option value="${code}">${LANGUAGE_NAMES[code]}</option>`).join("")}
          </select>
        </label>
      </div>`;
    const parentSection = account?.closest("section");
    (parentSection?.parentNode || document.querySelector("main") || document.body).insertBefore(section, parentSection || null);
    const select = document.getElementById("languageSelect");
    select.value = getLanguage();
    select.addEventListener("change", (e) => setLanguage(e.target.value));
  }

  window.FCI18n = { SUPPORTED, LANGUAGE_NAMES, getLanguage, setLanguage, t, translateDocument };
  document.addEventListener("DOMContentLoaded", () => {
    translateDocument();
    addSettingsLanguageControl();
    const observer = new MutationObserver((mutations) => {
      if (getLanguage() === "en") return;
      mutations.forEach((m) => {
        if (m.type === "characterData") translateNode(m.target);
        m.addedNodes.forEach((n) => {
          if (n.nodeType === Node.TEXT_NODE) translateNode(n);
          else if (n.nodeType === Node.ELEMENT_NODE) translateDocument(n);
        });
      });
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  });
})();
