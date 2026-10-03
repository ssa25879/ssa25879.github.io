(() => {
  "use strict";

  const portfolio = window.Portfolio = window.Portfolio || {};

  function init() {
    const button = document.querySelector("[data-toggle-theme]");
    if (!button) return;

    button.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      button.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });
  }

  portfolio.theme = { init };
})();
