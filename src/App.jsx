import { useEffect, useState } from 'react';
import Navbar from './componets/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Awards from './sections/Awards.jsx';
import Contact from './sections/Contact.jsx';
import ProjectDetail from './componets/ProjectDetail.jsx';

const projectIds = new Set(['detail-1', 'detail-2', 'detail-3', 'detail-4', 'detail-5', 'detail-6', 'detail-7']);

export default function App() {
  const [projectId, setProjectId] = useState(null);
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
    return () => document.body.classList.remove('dark');
  }, [dark]);

  useEffect(() => {
    function onPopState(event) {
      const state = event.state;
      if (state?.view === 'detail' && state.projectId) {
        if (projectIds.has(state.projectId)) {
          setProjectId(state.projectId);
          window.scrollTo(0, 0);
        }
      } else {
        setProjectId(null);
      }
    }
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  function onNavigation(event) {
    if (event.target.closest('[data-toggle-theme]')) setDark(value => !value);
    if (event.target.closest('[data-toggle-menu]')) setMenuOpen(value => !value);
    if (event.target.closest('[data-show-main]')) setProjectId(null);
    if (event.target.closest('[data-close-menu]')) setMenuOpen(false);
  }

  function openProject(event) {
    const id = event.target.closest('[data-project-id]')?.dataset.projectId;
    if (!projectIds.has(id)) return;
    if (event.type === 'keydown') {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
    }
    setProjectId(id);
    history.pushState({ view: 'detail', projectId: id }, '', `#${id}`);
    window.scrollTo(0, 0);
  }

  function backToProjects(event) {
    if (!event.target.closest('[data-back-to-projects]')) return;
    if (history.state?.view === 'detail') {
      history.back();
    } else {
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
        <footer>© 2025 윤우상. All rights reserved.</footer>
      </div>
      <ProjectDetail projectId={projectId} onClick={backToProjects} />
    </>
  );
}
