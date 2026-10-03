export default function Detail6({ active, onClick }) {
  return (
<section className="project-detail detail-page" id="detail-6" style={{ display: active ? "block" : "none" }} onClick={onClick}>
      <button className="detail-back" data-back-to-projects="">← 목록으로</button>
      <div className="detail-header">
        <h1 className="detail-title">이미지 검색 앱</h1>
        <p className="detail-period">UsingAI-ImageSearchApp · Unity 기반 앱 개발</p>
        <div className="detail-tags">
          <span className="detail-tag">Unity 6</span><span className="detail-tag">C#</span>
          <span className="detail-tag">UI Toolkit</span><span className="detail-tag">UniTask</span>
          <span className="detail-tag">Pixabay API</span>
        </div>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">프로젝트 개요</h2>
        <p className="retro-text">
          검색어로 이미지를 찾고 결과와 썸네일을 확인할 수 있는 세로형 앱입니다.
          UI Toolkit으로 화면을 구성하고, 검색과 썸네일 로딩을 별도의 Repository 인터페이스로 연결했습니다.
        </p>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">프로젝트 개발 및 수행 내용</h2>
        <div className="detail-subsection">
          <div className="detail-subsection-title">1. 검색 화면과 상태 처리</div>
          <ul className="detail-list">
            <li>검색 중, 검색 결과, 빈 결과, 오류 상태를 구분해 화면에 표시했습니다.</li>
            <li>썸네일을 비동기로 로딩하고, 개별 이미지 로딩 실패는 해당 카드의 대체 표시로 처리했습니다.</li>
          </ul>
        </div>
        <div className="detail-subsection">
          <div className="detail-subsection-title">2. 레이어 분리와 API 연결</div>
          <ul className="detail-list">
            <li>Presentation·Domain·Data·Core와 Composition Root로 역할을 나누고, 화면이 API 구현에 직접 의존하지 않도록 구성했습니다.</li>
            <li>Pixabay 검색과 썸네일 HTTP 요청을 Repository 인터페이스에 연결하고, 네트워크 오류를 화면에서 사용할 결과 타입으로 변환했습니다.</li>
            <li>실제 API와 Mock 구현을 교체할 수 있게 구성해 성공·빈 결과·연결 실패·서버 오류 흐름을 확인할 수 있도록 했습니다.</li>
          </ul>
        </div>
        <div className="detail-subsection">
          <div className="detail-subsection-title">3. 요청 취소와 응답 순서 관리</div>
          <ul className="detail-list">
            <li>새 검색이 시작되면 이전 검색과 썸네일 작업을 취소하고, 요청 세대를 비교해 오래된 응답이 최신 결과를 덮어쓰지 않도록 했습니다.</li>
            <li>화면 종료 시 진행 중인 작업을 취소하고, 검색 결과에 사용한 텍스처의 수명을 관리했습니다.</li>
          </ul>
        </div>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">기술적 포인트</h2>
        <p className="retro-text">
          검색 결과가 없는 경우와 네트워크 오류를 구분하고, 검색 요청과 이미지 로딩의 실패 범위를 나눴습니다.
          실제 API 연동은 Editor 개발 환경에서 사용하며, 모바일 빌드는 현재 Mock 구현을 사용하는 단계입니다.
        </p>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">프로젝트 저장소</h2>
        <a className="detail-link" href="https://github.com/ssa25879/UsingAI-ImageSearchApp" target="_blank"
          rel="noopener noreferrer">🔗 GitHub 저장소</a>
      </div>
    </section>
);
}
