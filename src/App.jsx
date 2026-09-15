import './App.css'
import Navbar from './componets/Navbar'
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import ProjectDetail from "./componets/ProjectDetail.jsx";
import Projects from "./sections/Projects.jsx";
import projects from "./data/projects.js";

function App() {
    const foodProject = projects.find(
        (project) => project.id === 'food-info-app'
    )
    
    return (
        <>  
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <ProjectDetail project={foodProject}/>
        </>
    )
}

export default App
