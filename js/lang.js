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
      about_hero_title: "About ADHOCSY",
      about_hero_desc: "Learn about our mission, vision, and leadership at ADHOCSY.",
      about_vision: "Vision",
      about_vision_desc: "To create a dignified and transparent gig workforce ecosystem.",
      about_mission: "Mission",
      about_mission_desc: "To empower workers and companies with trust and efficiency.",
      about_directors_title: "From the Directors’ Desk",
      offerings_hero_title: "Our Offerings",
      offerings_hero_desc: "Discover the solutions ADHOCSY provides for workers and employers.",
      offerings_section_title: "What We Offer",
      offering_worker_solutions: "Worker Solutions",
      offering_worker_desc: "Access to verified jobs, skill development, and fair wages.",
      offering_employer_solutions: "Employer Solutions",
      offering_employer_desc: "Quick and reliable access to a trusted workforce.",
      offering_trust_safety: "Trust & Safety",
      offering_trust_desc: "Ensuring transparency and security for all parties.",
      contact_hero_title: "Get in Touch with ADHOCSY",
      contact_hero_desc: "Reach out to us for inquiries, support, or partnerships.",
      contact_form_title: "Contact Form",
      contact_name_label: "Full Name",
      contact_email_label: "Work Email",
      contact_phone_label: "Phone",
      contact_company_label: "Company Name",
      contact_message_label: "Describe your requirement",
      contact_submit_button: "Submit"
      // Add more keys as needed
    },
    hi: {
      hero_title: "भारत का भरोसेमंद गिग वर्कफोर्स प्लेटफॉर्म",
      hero_desc: "कर्मचारियों को कंपनियों के साथ सम्मान और पारदर्शिता के साथ पार्ट-टाइम और फुल-टाइम अवसरों से जोड़ना।",
      worker_button: "मैं एक कामगार हूँ",
      employer_button: "मैं एक नियोक्ता हूँ",
      about_hero_title: "ADHOCSY के बारे में",
      about_hero_desc: "ADHOCSY में हमारे मिशन, दृष्टिकोण और नेतृत्व के बारे में जानें।",
      about_vision: "दृष्टि",
      about_vision_desc: "एक गरिमापूर्ण और पारदर्शी गिग वर्कफोर्स पारिस्थितिकी तंत्र बनाना।",
      about_mission: "मिशन",
      about_mission_desc: "कर्मचारियों और कंपनियों को विश्वास और दक्षता के साथ सशक्त बनाना।",
      about_directors_title: "निदेशकों की बात",
      offerings_hero_title: "हमारी पेशकशें",
      offerings_hero_desc: "कर्मचारियों और नियोक्ताओं के लिए ADHOCSY द्वारा प्रदान की जाने वाली समाधान खोजें।",
      offerings_section_title: "हम क्या पेश करते हैं",
      offering_worker_solutions: "कर्मचारी समाधान",
      offering_worker_desc: "सत्यापित नौकरियों, कौशल विकास और उचित वेतन तक पहुंच।",
      offering_employer_solutions: "नियोक्ता समाधान",
      offering_employer_desc: "एक भरोसेमंद कार्यबल तक त्वरित और विश्वसनीय पहुंच।",
      offering_trust_safety: "भरोसा और सुरक्षा",
      offering_trust_desc: "सभी पक्षों के लिए पारदर्शिता और सुरक्षा सुनिश्चित करना।",
      contact_hero_title: "ADHOCSY से संपर्क करें",
      contact_hero_desc: "पूछताछ, समर्थन या साझेदारी के लिए हमसे संपर्क करें।",
      contact_form_title: "संपर्क फॉर्म",
      contact_name_label: "पूरा नाम",
      contact_email_label: "कार्य ईमेल",
      contact_phone_label: "फ़ोन",
      contact_company_label: "कंपनी का नाम",
      contact_message_label: "अपनी आवश्यकता का विवरण दें",
      contact_submit_button: "सबमिट करें"
      // Add more keys as needed
    },
    mr: {
      hero_title: "भारताचा विश्वसनीय गिग वर्कफोर्स प्लॅटफॉर्म",
      hero_desc: "कामगारांना कंपन्यांसोबत सन्मान आणि पारदर्शिकतेसह पार्ट-टाइम आणि फुल-टाइम संधींना जोडणे.",
      worker_button: "मी एक कामगार आहे",
      employer_button: "मी एक नियोक्ता आहे",
      about_hero_title: "ADHOCSY बद्दल",
      about_hero_desc: "ADHOCSY मध्ये आमच्या मिशन, दृष्टीकोन आणि नेतृत्वाबद्दल जाणून घ्या.",
      about_vision: "दृष्टी",
      about_vision_desc: "एक सन्माननीय आणि पारदर्शक गिग वर्कफोर्स परिसंस्था निर्माण करणे.",
      about_mission: "मिशन",
      about_mission_desc: "कामगार आणि कंपन्यांना विश्वास आणि कार्यक्षमता सह सशक्त करणे.",
      about_directors_title: "निदेशकांचे पद",
      offerings_hero_title: "आमच्या ऑफरिंग्ज",
      offerings_hero_desc: "कामगार आणि नियोक्तांसाठी ADHOCSY कडून प्रदान केलेले समाधान शोधा.",
      offerings_section_title: "आम्ही काय प्रदान करतो",
      offering_worker_solutions: "कामगार उपाय",
      offering_worker_desc: "सत्यापित नोकऱ्या, कौशल्य विकास आणि योग्य वेतनाची उपलब्धता.",
      offering_employer_solutions: "नियोक्ता उपाय",
      offering_employer_desc: "विश्वसनीय कार्यबलाकडे त्वरित आणि विश्वसनीय प्रवेश.",
      offering_trust_safety: "विश्वास आणि सुरक्षा",
      offering_trust_desc: "सर्व पक्षांसाठी पारदर्शकता आणि सुरक्षितता सुनिश्चित करणे.",
      contact_hero_title: "ADHOCSY शी संपर्क साधा",
      contact_hero_desc: "प्रश्न, समर्थन किंवा भागीदारीसाठी आमच्याशी संपर्क साधा.",
      contact_form_title: "संपर्क फॉर्म",
      contact_name_label: "पूर्ण नाव",
      contact_email_label: "कामाचा ईमेल",
      contact_phone_label: "फोन",
      contact_company_label: "कंपनीचे नाव",
      contact_message_label: "आपली आवश्यकता वर्णन करा",
      contact_submit_button: "सबमिट करा"
      // Add more keys as needed
    }
  };
});
