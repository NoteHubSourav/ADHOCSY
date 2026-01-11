// ===============================
// ADHOCSY – Language Switcher
// ===============================

document.addEventListener("DOMContentLoaded", function () {
  const languageSelector = document.getElementById("languageSwitcher");
  const currentLanguage = localStorage.getItem("language") || "en";

  // Apply the saved language
  setLanguage(currentLanguage);

  // Event listener for the language selector
  languageSelector.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    localStorage.setItem("language", selectedLanguage);
    setLanguage(selectedLanguage);
  });

  // Function to set the language
  function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(element => {
      const key = element.getAttribute("data-i18n");
      element.textContent = translations[lang][key] || element.textContent;
    });
  }

  // Translation dictionary
  const translations = {
    en: {
      hero_title: "India’s Trusted Gig Workforce Platform",
      hero_desc: "Connecting workers with companies for part-time and full-time opportunities with dignity and transparency.",
      // Add more keys as needed
    },
    hi: {
      hero_title: "भारत का भरोसेमंद गिग वर्कफोर्स प्लेटफॉर्म",
      hero_desc: "कर्मचारियों को कंपनियों के साथ सम्मान और पारदर्शिता के साथ पार्ट-टाइम और फुल-टाइम अवसरों से जोड़ना।",
      // Add more keys as needed
    },
    mr: {
      hero_title: "भारताचा विश्वसनीय गिग वर्कफोर्स प्लॅटफॉर्म",
      hero_desc: "कामगारांना कंपन्यांसोबत सन्मान आणि पारदर्शिकतेसह पार्ट-टाइम आणि फुल-टाइम संधींना जोडणे.",
      // Add more keys as needed
    }
  };
});
