function ProjectCard({project, onSelect}) {
    return (
        <div className="project-card"
             role="button"
             tabIndex={0}
             aria-label={`${project.title} 프로젝트 상세보기`}
             onClick={() => onSelect(project.id)}
             onKeyDown={
                 (event) => {
                     if (event.key === 'Enter' || event.key === ' ') {
                         event.preventDefault()
                         onSelect(project.id)
                     }
                 }
             }>
            <p className="project-desc"
               style={{marginBottom: 0}}>{project.category}</p>
            {
                project.subtitle && (
                    <div className="project-desc" style={{marginBottom: 0, marginTop: 0, fontSize: 'small'}}>
                        {project.subtitle}
                    </div>
                )
            }
            
            <div className="project-title">{project.title}</div>
            <p className="project-desc">
                {project.description}
            </p>
            <div className="project-tags">
                {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                        {tag}
                    </span>
                ))}
            </div>
            <span className="project-more">자세히 보기 →</span>
        </div>
    )
}

export default ProjectCard