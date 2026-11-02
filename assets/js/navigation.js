(() => {
  "use strict";

  const portfolio = window.Portfolio = window.Portfolio || {};

  function init() {
    const drawer = document.getElementById("mobile-drawer");

    document.querySelector("[data-toggle-menu]")?.addEventListener("click", () => {
      drawer?.classList.toggle("open");
    });

    document.querySelectorAll("[data-show-main]").forEach((element) => {
      element.addEventListener("click", (event) => {
        event.preventDefault();
        const hash = element.getAttribute("href") || "#";
        history.pushState(null, "", hash);
        portfolio.projects.showMainView();
        if (hash === "#") window.scrollTo(0, 0);
        else document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "instant" });
        if (element.hasAttribute("data-close-menu")) {
          drawer?.classList.remove("open");
        }
      });
    });
  }

  portfolio.navigation = { init };
})();
