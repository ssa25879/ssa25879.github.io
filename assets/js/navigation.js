(() => {
  "use strict";

  const portfolio = window.Portfolio = window.Portfolio || {};

  function init() {
    const drawer = document.getElementById("mobile-drawer");

    document.querySelector("[data-toggle-menu]")?.addEventListener("click", () => {
      drawer?.classList.toggle("open");
    });

    document.querySelectorAll("[data-show-main]").forEach((element) => {
      element.addEventListener("click", () => {
        portfolio.projects.showMainView();
        if (element.hasAttribute("data-close-menu")) {
          drawer?.classList.remove("open");
        }
      });
    });
  }

  portfolio.navigation = { init };
})();
