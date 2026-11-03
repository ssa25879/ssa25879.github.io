(() => {
  "use strict";

  const portfolio = window.Portfolio = window.Portfolio || {};
  let lastProjectId = null;

  function showMainView(restoreFocus = false) {
    document.getElementById("detail-view").style.display = "none";
    document.getElementById("main-view").style.display = "block";
    if (restoreFocus && lastProjectId) {
      document.querySelector(`[data-project-id="${lastProjectId}"]`)?.focus();
    }
  }

  function renderProjectDetail(id) {
    const detail = document.getElementById(id);
    if (!detail?.classList.contains("project-detail")) return false;

    document.getElementById("main-view").style.display = "none";
    document.getElementById("detail-view").style.display = "block";
    document.querySelectorAll(".project-detail").forEach((element) => {
      element.style.display = "none";
    });
    detail.style.display = "block";
    lastProjectId = id;
    window.scrollTo(0, 0);
    const title = detail.querySelector("h1");
    title.id = `${id}-title`;
    title.tabIndex = -1;
    title.focus({ preventScroll: true });
    return true;
  }

  function showProjectDetail(id) {
    if (!renderProjectDetail(id)) return;
    history.pushState({ view: "detail", projectId: id }, "", `#${id}`);
  }

  function backToProjects() {
    if (history.state?.view === "detail") {
      history.back();
    } else {
      history.replaceState(null, "", "#projects");
      showMainView(true);
      document.getElementById("projects").scrollIntoView({ behavior: "instant" });
    }
  }

  function syncLocation() {
    if (!renderProjectDetail(window.location.hash.slice(1))) showMainView(true);
  }

  function init() {
    document.querySelectorAll("[data-project-id]").forEach((card) => {
      card.addEventListener("click", (event) => {
        if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        showProjectDetail(card.dataset.projectId);
      });
      card.addEventListener("keydown", (event) => {
        if (event.key === " ") {
          event.preventDefault();
          showProjectDetail(card.dataset.projectId);
        }
      });
    });

    document.querySelectorAll("[data-back-to-projects]").forEach((button) => {
      button.addEventListener("click", backToProjects);
    });

    window.addEventListener("popstate", syncLocation);
    window.addEventListener("hashchange", syncLocation);
    syncLocation();
  }

  portfolio.projects = { init, showMainView };
})();
