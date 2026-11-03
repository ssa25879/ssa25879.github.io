(() => {
  "use strict";

  const portfolio = window.Portfolio = window.Portfolio || {};

  function init() {
    const drawer = document.getElementById("mobile-drawer");
    const toggle = document.querySelector("[data-toggle-menu]");

    function setDrawer(open) {
      drawer.classList.toggle("open", open);
      drawer.inert = !open;
      drawer.setAttribute("aria-hidden", String(!open));
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
    }
    setDrawer(false);
    toggle.addEventListener("click", () => {
      const open = !drawer.classList.contains("open");
      setDrawer(open);
      if (open) drawer.querySelector("a").focus();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && drawer.classList.contains("open")) {
        setDrawer(false);
        toggle.focus();
      }
    });
    window.matchMedia("(min-width: 769px)").addEventListener("change", (event) => {
      if (event.matches) setDrawer(false);
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
          setDrawer(false);
          const section = document.getElementById(hash.slice(1));
          const heading = section?.querySelector("h2");
          if (heading) {
            heading.tabIndex = -1;
            heading.focus({ preventScroll: true });
          }
        }
      });
    });
  }

  portfolio.navigation = { init };
})();
