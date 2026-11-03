import { useEffect, useRef, useState } from 'react';
import Navbar from './componets/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Awards from './sections/Awards.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import ProjectDetail from './componets/ProjectDetail.jsx';

const projectIds = new Set(['detail-1', 'detail-2', 'detail-3', 'detail-4', 'detail-5', 'detail-6', 'detail-7', 'detail-8', 'detail-9', 'detail-10', 'detail-11', 'detail-12', 'detail-13']);

function projectFromHash() {
  const id = window.location.hash.slice(1);
  return projectIds.has(id) ? id : null;
}

export default function App() {
  const [projectId, setProjectId] = useState(projectFromHash);
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastProjectId = useRef(null);
  const restoreFocus = useRef(false);

  useEffect(() => {
    if (projectId) {
      lastProjectId.current = projectId;
      const title = document.querySelector(`#${projectId} h1`);
      title.id = `${projectId}-title`;
      title.tabIndex = -1;
      title.focus({ preventScroll: true });
    } else if (restoreFocus.current && lastProjectId.current) {
      document.querySelector(`[data-project-id="${lastProjectId.current}"]`)?.focus();
      restoreFocus.current = false;
    }
  }, [projectId]);

  useEffect(() => {
    if (menuOpen) document.querySelector('#mobile-drawer a').focus();
  }, [menuOpen]);

  useEffect(() => {
    function onEscape(event) {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        document.querySelector('[data-toggle-menu]').focus();
      }
    }
    const desktop = window.matchMedia('(min-width: 769px)');
    function onDesktop(event) {
      if (event.matches) setMenuOpen(false);
    }
    document.addEventListener('keydown', onEscape);
    desktop.addEventListener('change', onDesktop);
    return () => {
      document.removeEventListener('keydown', onEscape);
      desktop.removeEventListener('change', onDesktop);
    };
  }, [menuOpen]);

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
    return () => document.body.classList.remove('dark');
  }, [dark]);

  useEffect(() => {
    function syncLocation() {
      const id = projectFromHash();
      restoreFocus.current = !id;
      setProjectId(id);
      if (id) window.scrollTo(0, 0);
    }
    window.addEventListener('popstate', syncLocation);
    window.addEventListener('hashchange', syncLocation);
    return () => {
      window.removeEventListener('popstate', syncLocation);
      window.removeEventListener('hashchange', syncLocation);
    };
  }, []);

  function onNavigation(event) {
    if (event.target.closest('[data-toggle-theme]')) setDark(value => !value);
    if (event.target.closest('[data-toggle-menu]')) setMenuOpen(value => !value);
    const mainLink = event.target.closest('[data-show-main]');
    if (mainLink) {
      event.preventDefault();
      const hash = mainLink.getAttribute('href') || '#';
      restoreFocus.current = false;
      history.pushState(null, '', hash);
      setProjectId(null);
      requestAnimationFrame(() => {
        if (hash === '#') window.scrollTo(0, 0);
        else {
          const section = document.getElementById(hash.slice(1));
          section?.scrollIntoView({ behavior: 'instant' });
          if (mainLink.hasAttribute('data-close-menu')) {
            const heading = section?.querySelector('h2');
            if (heading) {
              heading.tabIndex = -1;
              heading.focus({ preventScroll: true });
            }
          }
        }
      });
    }
    if (event.target.closest('[data-close-menu]')) setMenuOpen(false);
  }

  function openProject(event) {
    const card = event.target.closest('[data-project-id]');
    if (!card) return;
    if (event.type === 'keydown') {
      if (event.key !== ' ') return;
    } else if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    const id = card.dataset.projectId;
    if (!projectIds.has(id)) return;
    setProjectId(id);
    history.pushState({ view: 'detail', projectId: id }, '', `#${id}`);
    window.scrollTo(0, 0);
  }

  function backToProjects(event) {
    if (!event.target.closest('[data-back-to-projects]')) return;
    if (history.state?.view === 'detail') {
      history.back();
    } else {
      restoreFocus.current = true;
      history.replaceState(null, '', '#projects');
      setProjectId(null);
      requestAnimationFrame(() => document.getElementById('projects').scrollIntoView({ behavior: 'instant' }));
    }
  }

  return (
    <>
      <Navbar dark={dark} menuOpen={menuOpen} onClick={onNavigation} />
      <div id="main-view" style={projectId ? { display: 'none' } : undefined}>
        <Hero />
        <About />
        <Skills />
        <Projects onClick={openProject} onKeyDown={openProject} />
        <Awards />
        <Contact />
        <Footer />
      </div>
      <ProjectDetail projectId={projectId} onClick={backToProjects} />
    </>
  );
}
