import ProjectCard from '../componets/ProjectCard.jsx'

function Projects() {
    return (
        <section id="projects">
            <p className="label">Projects</p>
            <h2 className="section-title">프로젝트</h2>
            <div className="projects-grid">
                <ProjectCard />
            </div>
        </section>
    )
}

export default Projects
