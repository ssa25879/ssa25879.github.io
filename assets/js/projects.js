(() => {
  "use strict";

  const portfolio = window.Portfolio = window.Portfolio || {};

  function showMainView() {
    document.getElementById("detail-view").style.display = "none";
    document.getElementById("main-view").style.display = "block";
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
    window.scrollTo(0, 0);
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
      showMainView();
      document.getElementById("projects").scrollIntoView({ behavior: "instant" });
    }
  }

  function init() {
    document.querySelectorAll("[data-project-id]").forEach((card) => {
      card.addEventListener("click", () => showProjectDetail(card.dataset.projectId));
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          showProjectDetail(card.dataset.projectId);
        }
      });
    });

    document.querySelectorAll("[data-back-to-projects]").forEach((button) => {
      button.addEventListener("click", backToProjects);
    });

    window.addEventListener("popstate", (event) => {
      if (event.state?.view === "detail" && event.state?.projectId) {
        renderProjectDetail(event.state.projectId);
      } else {
        showMainView();
      }
    });
  }

  portfolio.projects = { init, showMainView };
})();
