import Detail1 from '../pages/Detail1.jsx';
import Detail2 from '../pages/Detail2.jsx';
import Detail3 from '../pages/Detail3.jsx';
import Detail4 from '../pages/Detail4.jsx';
import Detail5 from '../pages/Detail5.jsx';
import Detail6 from '../pages/Detail6.jsx';
import Detail7 from '../pages/Detail7.jsx';

export default function ProjectDetail({ projectId, onClick }) {
  return (<div id="detail-view" style={{ display: projectId ? "block" : "none" }}>
    <Detail1 active={projectId === "detail-1"} onClick={onClick} />
    <Detail2 active={projectId === "detail-2"} onClick={onClick} />
    <Detail3 active={projectId === "detail-3"} onClick={onClick} />
    <Detail4 active={projectId === "detail-4"} onClick={onClick} />
    <Detail5 active={projectId === "detail-5"} onClick={onClick} />
    <Detail6 active={projectId === "detail-6"} onClick={onClick} />
    <Detail7 active={projectId === "detail-7"} onClick={onClick} />
  </div>);
}
