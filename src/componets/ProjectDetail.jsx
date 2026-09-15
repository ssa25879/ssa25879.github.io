import {Link} from "react-router";

function ProjectDetail({project}) {
    const detail = project.detail
    
    return (
        <section className="project-detail detail-page">
            <Link className="detail-back" to="/">목록으로</Link>
            <div className="detail-header">
                <h1 className="detail-title">{detail.title ?? project.title}</h1>
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

            {/* github 이미지 주소 */
                detail.screenshots?.length > 0 && (
                <div className="detail-section">
                    <h2 className="detail-section-title">
                        프로젝트 스크린샷
                    </h2>

                    <div className="screenshot-grid">
                        {detail.screenshots.map((screenshot) => (
                            <div
                                className="screenshot-box"
                                key={screenshot.src}
                            >
                                <img
                                    src={screenshot.src}
                                    alt={screenshot.alt}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* iframe */
                detail.previews?.length > 0 && (
                <div className="detail-section">
                    <h2 className="detail-section-title">
                        프로젝트 스크린샷
                    </h2>

                    <div className="screenshot-grid">
                        {detail.previews.map((preview) => (
                            <div
                                className="screenshot-box"
                                key={preview.src}
                            >
                                <iframe
                                    src={preview.src}
                                    title={preview.title}
                                    width="640"
                                    height="480"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {detail.videoUrl && (
                <div className="detail-section">
                    <h2 className="detail-section-title">
                        프로젝트 영상
                    </h2>

                    <a
                        className="detail-link"
                        href={detail.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        🔗 영상 링크
                    </a>
                </div>
            )}
            
            <div className="detail-section">
                <h2 className="detail-section-title">회고</h2>
                <p className="retro-text">{detail.retrospective}</p>
            </div>
        </section>
    )
}

export default ProjectDetail