import Detail1 from '../pages/Detail1.jsx';
import Detail2 from '../pages/Detail2.jsx';
import Detail3 from '../pages/Detail3.jsx';
import Detail4 from '../pages/Detail4.jsx';
import Detail5 from '../pages/Detail5.jsx';
import Detail6 from '../pages/Detail6.jsx';
import Detail7 from '../pages/Detail7.jsx';
import Detail8 from '../pages/Detail8.jsx';
import Detail9 from '../pages/Detail9.jsx';
import Detail10 from '../pages/Detail10.jsx';
import Detail11 from '../pages/Detail11.jsx';
import Detail12 from '../pages/Detail12.jsx';
import Detail13 from '../pages/Detail13.jsx';

export default function ProjectDetail({ projectId, onClick }) {
  return (<div id="detail-view" style={{ display: projectId ? "block" : "none" }}>
    <Detail1 active={projectId === "detail-1"} onClick={onClick} />
    <Detail2 active={projectId === "detail-2"} onClick={onClick} />
    <Detail3 active={projectId === "detail-3"} onClick={onClick} />
    <Detail4 active={projectId === "detail-4"} onClick={onClick} />
    <Detail5 active={projectId === "detail-5"} onClick={onClick} />
    <Detail6 active={projectId === "detail-6"} onClick={onClick} />
    <Detail7 active={projectId === "detail-7"} onClick={onClick} />
    <Detail8 active={projectId === "detail-8"} onClick={onClick} />
    <Detail9 active={projectId === "detail-9"} onClick={onClick} />
    <Detail10 active={projectId === "detail-10"} onClick={onClick} />
    <Detail11 active={projectId === "detail-11"} onClick={onClick} />
    <Detail12 active={projectId === "detail-12"} onClick={onClick} />
    <Detail13 active={projectId === "detail-13"} onClick={onClick} />
  </div>);
}
