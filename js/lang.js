document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("languageSwitcher");
  const savedLang = localStorage.getItem("language") || "en";

  function applyLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key].replace(/\n/g, "<br>");
      }
    });
  }

  if (selector) {
    selector.value = savedLang;
    selector.addEventListener("change", e => {
      localStorage.setItem("language", e.target.value);
      applyLanguage(e.target.value);
    });
  }

  applyLanguage(savedLang);
});
