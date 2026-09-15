import './App.css'
import Navbar from './componets/Navbar'
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import {Link, Route, Routes} from "react-router";
import ProjectDetailPage from "./pages/ProjectDetailPage.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Navbar/>
                    <Hero/>
                    <About/>
                    <Skills/>
                    <Projects/>
                </>
            }/>
            
            <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
            
            <Route path = "*" element = {
                <section className="detail-page">
                    <p>페이지를 찾을 수 없습니다.</p>
                    <Link to="/">메인으로 가기</Link>
                </section>
            }/>


        </Routes>

    )
}

export default App
