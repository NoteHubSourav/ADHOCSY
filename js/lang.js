document.addEventListener("DOMContentLoaded", function () {
  const languageSelector = document.getElementById("languageSwitcher");
  const currentLanguage = localStorage.getItem("language") || "en";

  // 1. Sync the dropdown value with the saved language
  if (languageSelector) {
    languageSelector.value = currentLanguage;
    
    languageSelector.addEventListener("change", (event) => {
      const selectedLanguage = event.target.value;
      localStorage.setItem("language", selectedLanguage);
      setLanguage(selectedLanguage);
    });
  }

  // 2. Initial Application
  setLanguage(currentLanguage);

  function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(element => {
      const key = element.getAttribute("data-i18n");
      // Check if translation exists to avoid blank text
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
  }
  
  // ... translations dictionary stays the same ...
});
