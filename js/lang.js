// ===============================
// ADHOCSY – Language Switcher
// ===============================

document.addEventListener("DOMContentLoaded", function () {
  const languageSelector = document.getElementById("languageSwitcher");
  const currentLanguage = localStorage.getItem("language") || "en";

  if (languageSelector) {
    languageSelector.value = currentLanguage;
    languageSelector.addEventListener("change", (event) => {
      const selectedLanguage = event.target.value;
      localStorage.setItem("language", selectedLanguage);
      setLanguage(selectedLanguage);
    });
  }

  setLanguage(currentLanguage);

  function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      // Show/hide based on language
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
        el.style.display = "block";
      } else if (key.includes("_en") || key.includes("_hi")) {
        el.style.display = key.endsWith("_" + lang) ? "block" : "none";
      }
    });
  }
});
