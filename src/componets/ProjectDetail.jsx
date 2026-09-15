function ProjectDetail({project}) {
    const detail = project.detail
    
    return (
        <section className="project-detail detail-page">
            <div className="detail-header">
                <h1 className="detail-title">{project.title}</h1>
                <p className="detail-period">{detail.period}</p>
                
                <div className="detail-tags">
                    {detail.tags.map((tag) => (
                        <span className="detail-tag" key={tag}>{tag}</span>
                    ))}
                </div>
            </div>
            
            <div className="detail-section">
                <h2 className="detail-section-title">기획 의도</h2>
                <ul className="detail-list">
                    {
                        detail.intention.map((item) => (
                            <li key={item}>{item}</li>
                        ))
                    }
                </ul>
            </div>
            
            <div className="detail-section">
                <h2 className="detail-section-title">프로젝트 개발 및 수행 내용</h2>
                {
                    detail.contributions.map(contribution => (
                        <div className="detail-subsection" key={contribution.title}>
                            <div className="detail-subsection-title">{contribution.title}</div>
                            <ul className="detail-list">
                                {
                                    contribution.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
            
            <div className="detail-section">
                <h2 className="detail-section-title">회고</h2>
                <p className="retro-text">{detail.retrospective}</p>
            </div>
        </section>
    )
}

export default ProjectDetail