document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");
  const lightLogo = document.querySelector(".logo-light");
  const darkLogo = document.querySelector(".logo-dark");

  let theme = localStorage.getItem("theme") || "light";

  function applyTheme(t) {
    document.body.className = t;
    localStorage.setItem("theme", t);
    lightLogo.style.display = t === "light" ? "block" : "none";
    darkLogo.style.display = t === "dark" ? "block" : "none";
  }

  toggle.addEventListener("click", () => {
    theme = theme === "light" ? "dark" : "light";
    applyTheme(theme);
  });

  applyTheme(theme);
});
