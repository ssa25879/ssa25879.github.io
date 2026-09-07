import './App.css'
import Navbar from './componets/Navbar'
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";

function App() {
    return (
        <>  
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
        </>
    )
}

export default App
