// ===============================
// ADHOCSY – Language Switcher Script
// ===============================

document.addEventListener("DOMContentLoaded", function () {
  const languageSelector = document.getElementById("languageSwitcher");
  const currentLanguage = localStorage.getItem("language") || "en";

  // Apply the saved language on load
  setLanguage(currentLanguage);

  // Event listener for language change
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
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
  }

  // Translation dictionary
  const translations = {
    en: {
      hero_title: "India’s Trusted Gig Workforce Platform",
      hero_desc: "Connecting workers with companies for part-time and full-time opportunities with dignity and transparency.",
      worker_button: "I’M A WORKER",
      employer_button: "I’M AN EMPLOYER",
      nav_about: "About",
      nav_offerings: "Offerings",
      nav_contact: "Contact",
      trusted_by_title: "Trusted By Leading Companies",
      what_we_solve_title: "What We Solve",
      for_workers: "For Workers",
      for_workers_desc: "Access verified jobs, fair wages, and a secure digital identity.",
      for_companies: "For Companies",
      for_companies_desc: "Hire reliable manpower quickly across locations.",
      our_solution: "Our Solution",
      our_solution_desc: "A single trusted platform bridging workforce gaps.",
      directors_desk_title: "From the Directors’ Desk",
      footer_description: "India’s trusted gig workforce platform.",
      quick_links: "Quick Links",
      contact: "Contact"
      // Add more keys as needed
    },
    hi: {
      hero_title: "भारत का भरोसेमंद गिग वर्कफोर्स प्लेटफॉर्म",
      hero_desc: "कर्मचारियों को कंपनियों के साथ सम्मान और पारदर्शिता के साथ पार्ट-टाइम और फुल-टाइम अवसरों से जोड़ना।",
      worker_button: "मैं एक कामगार हूँ",
      employer_button: "मैं एक नियोक्ता हूँ",
      nav_about: "हमारे बारे में",
      nav_offerings: "पेशकशें",
      nav_contact: "संपर्क करें",
      trusted_by_title: "प्रमुख कंपनियों द्वारा विश्वसनीय",
      what_we_solve_title: "हम क्या हल करते हैं",
      for_workers: "कर्मचारियों के लिए",
      for_workers_desc: "सत्यापित नौकरियों, उचित वेतन और सुरक्षित डिजिटल पहचान तक पहुंच।",
      for_companies: "कंपनियों के लिए",
      for_companies_desc: "स्थान पर जल्दी और विश्वसनीय कार्यबल भर्ती करें।",
      our_solution: "हमारा समाधान",
      our_solution_desc: "कार्यबल के अंतर को पाटने वाला एक एकल भरोसेमंद प्लेटफॉर्म।",
      directors_desk_title: "निदेशकों की बात",
      footer_description: "भारत का भरोसेमंद गिग वर्कफोर्स प्लेटफॉर्म।",
      quick_links: "त्वरित लिंक",
      contact: "संपर्क"
      // Add more keys as needed
    },
    mr: {
      hero_title: "भारताचा विश्वसनीय गिग वर्कफोर्स प्लॅटफॉर्म",
      hero_desc: "कामगारांना कंपन्यांसोबत सन्मान आणि पारदर्शिकतेसह पार्ट-टाइम आणि फुल-टाइम संधींना जोडणे.",
      worker_button: "मी एक कामगार आहे",
      employer_button: "मी एक नियोक्ता आहे",
      nav_about: "आमच्याबद्दल",
      nav_offerings: "आमच्या ऑफरिंग्ज",
      nav_contact: "संपर्क",
      trusted_by_title: "आघाडीच्या कंपन्यांकडून विश्वासार्ह",
      what_we_solve_title: "आपण काय सोडवतो",
      for_workers: "कामगारांसाठी",
      for_workers_desc: "सत्यापित नोकऱ्या, योग्य वेतन आणि सुरक्षित डिजिटल ओळख.",
      for_companies: "कंपन्यांसाठी",
      for_companies_desc: "स्थानिक पातळीवर जलद आणि विश्वासार्ह मनुष्यबळाची भरती.",
      our_solution: "आमचे समाधान",
      our_solution_desc: "कार्यबलातील अंतर भरून काढणारा एक एकल विश्वासार्ह मंच.",
      directors_desk_title: "निदेशकांचे पद",
      footer_description: "भारताचा विश्वसनीय गिग वर्कफोर्स प्लॅटफॉर्म.",
      quick_links: "झटपट लिंक",
      contact: "संपर्क"
      // Add more keys as needed
    }
  };
});
