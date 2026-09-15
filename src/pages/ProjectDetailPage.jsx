import { Link, useParams } from 'react-router'
import projects from '../data/projects.js'
import ProjectDetail from '../componets/ProjectDetail.jsx'

function ProjectDetailPage() {
    const { projectId } = useParams()

    const project = projects.find(
        (project) => project.id === projectId
    )

    if (!project) {
        return (
            <section className="detail-page">
                <p>프로젝트를 찾을 수 없습니다.</p>
                <Link to="/">← 목록으로</Link>
            </section>
        )
    }

    if (!project.detail) {
        return (
            <section className="detail-page">
                <h1>{project.title}</h1>
                <p>상세 내용을 준비 중입니다.</p>
                <Link to="/">← 목록으로</Link>
            </section>
        )
    }

    return <ProjectDetail project={project} />
}

export default ProjectDetailPage