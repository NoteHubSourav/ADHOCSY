// ===============================
// ADHOCSY – Theme Toggle
// ===============================

document.addEventListener("DOMContentLoaded", function () {
  const themeToggleButton = document.getElementById("themeToggle");
  const logoLight = document.querySelector(".logo-light");
  const logoDark = document.querySelector(".logo-dark");

  let currentTheme = localStorage.getItem("theme") || "light";
  applyTheme(currentTheme);

  themeToggleButton.addEventListener("click", () => {
    currentTheme = currentTheme === "light" ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
    applyTheme(currentTheme);
  });

  function applyTheme(theme) {
    if (theme === "light") {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      logoLight.style.display = "block";
      logoDark.style.display = "none";
      themeToggleButton.textContent = "🌙";
    } else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      logoLight.style.display = "none";
      logoDark.style.display = "block";
      themeToggleButton.textContent = "☀️";
    }
  }
});
