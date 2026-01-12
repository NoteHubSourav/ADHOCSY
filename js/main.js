// ===============================
// ADHOCSY – Main Script
// ===============================

document.addEventListener("DOMContentLoaded", function () {

  // Smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth"
        });
      }
    });
  });

  // Form validation
  const forms = document.querySelectorAll("form");
  forms.forEach(form => {
    form.addEventListener("submit", function (e) {
      const inputs = form.querySelectorAll("input, textarea, select");
      let isValid = true;
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add("input-error");
        } else {
          input.classList.remove("input-error");
        }
      });
      if (!isValid) {
        e.preventDefault();
        alert("Please fill out all required fields.");
      }
    });
  });

  console.log("ADHOCSY site fully initialized!");
});
