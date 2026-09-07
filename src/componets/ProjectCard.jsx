function ProjectCard( { category, title, description, tags, detailId: id, ariaLabel } ) {
    return (
        <div className="project-card"
             role="button"
             tabIndex="0"
             aria-label={ ariaLabel }
             onClick={() => showProjectDetail(id)}
             onKeyDown={
                 (event) => {
                     if (event.key === 'Enter' || event.key === ' ') {
                         event.preventDefault()
                         onselect(id)
                     }
                 }
             }>
            <p className="project-desc"
               style={ { marginBottom: 0} }>[APP / API]</p>
            <div className="project-title">식품 정보 앱</div>
            <p className="project-desc">
                공공 OpenAPI를 활용해 식품의 영양 성분과 첨가물 정보를 조회할 수 있는 앱을 개발했습니다.
            </p>
            <div className="project-tags">
                <span className="tag">Android</span>
                <span className="tag">Java</span>
                <span className="tag">OpenAPI</span>
            </div>
            <span className="project-more">자세히 보기 →</span>
        </div>
    )
}

export default ProjectCard