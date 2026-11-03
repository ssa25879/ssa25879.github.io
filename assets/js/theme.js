(() => {
  "use strict";

  const portfolio = window.Portfolio = window.Portfolio || {};

  function init() {
    const button = document.querySelector("[data-toggle-theme]");
    if (!button) return;

    button.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      button.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
      const dark = document.body.classList.contains("dark");
      button.setAttribute("aria-label", dark ? "라이트 모드로 전환" : "다크 모드로 전환");
      button.setAttribute("aria-pressed", String(dark));
    });
  }

  portfolio.theme = { init };
})();
