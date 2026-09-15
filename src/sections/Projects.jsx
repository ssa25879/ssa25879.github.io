import ProjectCard from '../componets/ProjectCard.jsx'
import projects from "../data/projects.js";

function Projects() {
    function handleProjectSelect(projectId) {
        console.log("선택 프로젝트 확인", projectId)
    }

    return (
        <section id="projects">
            <p className="label">Projects</p>
            <h2 className="section-title">프로젝트</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onSelect={handleProjectSelect}
                    />
                ))}

            </div>
        </section>
    )
}

export default Projects
