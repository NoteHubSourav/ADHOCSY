// ===============================
// ADHOCSY – Theme Toggle Script
// ===============================

document.addEventListener("DOMContentLoaded", function () {
  const themeToggleButton = document.getElementById("themeToggle");
  const currentTheme = localStorage.getItem("theme") || "light";

  // Apply the saved theme
  document.body.classList.add(currentTheme);

  // Update the toggle button icon
  updateThemeIcon(currentTheme);

  // Event listener for the toggle button
  themeToggleButton.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("light") ? "dark" : "light";
    document.body.classList.remove("light", "dark");
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
  });

  // Function to update the theme toggle icon
  function updateThemeIcon(theme) {
    if (theme === "light") {
      themeToggleButton.textContent = "🌙"; // Moon icon for dark mode
    } else {
      themeToggleButton.textContent = "☀️"; // Sun icon for light mode
    }
  }
});
