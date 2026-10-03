export default function Detail1({ active, onClick }) {
  return (
<section className="project-detail detail-page" id="detail-1" style={{ display: active ? "block" : "none" }} onClick={onClick}>
      <button className="detail-back" data-back-to-projects="">
        ← 목록으로
      </button>
      <div className="detail-header">
        <h1 className="detail-title">식품 정보 앱</h1>
        <p className="detail-period">2022.03 - 2022.10</p>
        <div className="detail-tags">
          <span className="detail-tag">Android</span><span className="detail-tag">Java</span><span
            className="detail-tag">OpenAPI</span><span className="detail-tag">팀 프로젝트</span><span className="detail-tag">팀장</span>
        </div>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">기획 의도</h2>
        <ul className="detail-list">
          <li>
            다이어트를 할 때 음식 이름만으로 간단하게 칼로리 섭취량을 계산하고
            조절할 수 있는 앱이 있으면 좋겠다는 생각에서 기획했습니다.
          </li>
        </ul>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">프로젝트 개발 및 수행 내용</h2>
        <div className="detail-subsection">
          <div className="detail-subsection-title">
            1. 팀장으로서의 역할 및 기여
          </div>
          <ul className="detail-list">
            <li>
              팀원별 담당 파트를 분배하고, API 연동(Put/Get 등) 작업을
              관리했습니다.
            </li>
            <li>팀원들이 완료한 작업을 취합해 하나의 앱으로 통합했습니다.</li>
          </ul>
        </div>
        <div className="detail-subsection">
          <div className="detail-subsection-title">
            2. 공공데이터 OpenAPI 연동
          </div>
          <ul className="detail-list">
            <li>
              공공데이터포털의 OpenAPI를 활용해 식품의 이름·종류에 따른 칼로리
              등의 영양 정보를 조회하고 화면에 제공하는 기능을 구현했습니다.
            </li>
          </ul>
        </div>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">회고</h2>
        <p className="retro-text">
          OpenAPI에서 제공받는 JSON 데이터 중 기본적인 Put/Get 방식 외에 다른
          방식으로 데이터를 받아와야 하는 경우가 있어, 이를 해결하는 과정에서
          어려움을 겪었습니다. 이 과정을 통해 다양한 API 응답 구조를 다루는
          방법을 익힐 수 있었습니다.
        </p>
      </div>
    </section>
);
}
