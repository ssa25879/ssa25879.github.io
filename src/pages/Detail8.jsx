export default function Detail8({ active, onClick }) {
  return (
    <section className="project-detail detail-page" id="detail-8" style={{ display: active ? "block" : "none" }} onClick={onClick}>
      <button className="detail-back" data-back-to-projects="">← 목록으로</button>
      <div className="detail-header">
        <h1 className="detail-title">냉털픽 (ait-FridgePick)</h1>
        <p className="detail-period">Apps in Toss · React 기반 미니앱</p>
        <div className="detail-tags">
          <span className="detail-tag">React</span><span className="detail-tag">TypeScript</span>
          <span className="detail-tag">Vite</span><span className="detail-tag">Toss TDS</span>
          <span className="detail-tag">Apps in Toss</span>
        </div>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">프로젝트 개요</h2>
        <p className="retro-text">
          사용자가 보유한 식재료를 선택하면 공식 레시피 후보를 추천하고,
          부족한 재료를 함께 보여주는 Apps in Toss 미니앱입니다.
          실행 중 외부 레시피 API를 호출하지 않고 정적 레시피 카탈로그를 사용합니다.
        </p>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">프로젝트 개발 및 수행 내용</h2>
        <div className="detail-subsection">
          <div className="detail-subsection-title">1. 주재료 매칭 기반 레시피 추천</div>
          <ul className="detail-list">
            <li>레시피의 주재료와 사용자가 선택한 재료를 비교해 매칭률이 60% 이상인 후보를 추천합니다.</li>
            <li>부족한 양념과 부재료를 표시해 레시피 원문과 함께 확인할 수 있도록 구성했습니다.</li>
          </ul>
        </div>
        <div className="detail-subsection">
          <div className="detail-subsection-title">2. 공식 레시피 카탈로그</div>
          <ul className="detail-list">
            <li>식약처와 EPIS 레시피 데이터를 정적 카탈로그로 제공하며, 저장소 README 기준 총 1,359개 레시피를 포함합니다.</li>
            <li>화면 진입 뒤 추천 모듈을 준비하고, 로딩 실패와 추천 후보가 없는 상태를 구분합니다.</li>
          </ul>
        </div>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">프로젝트 저장소</h2>
        <a className="detail-link" href="https://github.com/ssa25879/ait-FridgePick" target="_blank"
          rel="noopener noreferrer">🔗 GitHub 저장소</a>
      </div>
    </section>
  );
}
