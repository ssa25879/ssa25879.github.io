export default function Detail9({ active, onClick }) {
  return (
    <section className="project-detail detail-page" id="detail-9" style={{ display: active ? "block" : "none" }} onClick={onClick}>
      <button className="detail-back" data-back-to-projects="">← 목록으로</button>
      <div className="detail-header">
        <h1 className="detail-title">턴캘</h1>
        <p className="detail-period">Apps in Toss · v1.3 출시 · 2026.10.21</p>
        <div className="detail-tags">
          <span className="detail-tag">React</span><span className="detail-tag">TypeScript</span>
          <span className="detail-tag">Vite</span><span className="detail-tag">Toss TDS</span>
          <span className="detail-tag">Apps in Toss</span>
        </div>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">프로젝트 개요</h2>
        <p className="retro-text">
          교대근무 반복 패턴과 기준일을 등록하면 월간 달력에 근무를 자동으로 표시하는 미니앱입니다.
          데이터는 기기에 저장됩니다.
        </p>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">프로젝트 개발 및 수행 내용</h2>
        <div className="detail-subsection">
          <div className="detail-subsection-title">1. 근무 패턴 기반 달력 계산</div>
          <ul className="detail-list">
            <li>주간·오후·야간·당직·비번·휴무 패턴을 기준일과 함께 등록해 월간 근무표를 계산합니다.</li>
            <li>오늘·내일 근무 요약과 날짜별 메모, 공휴일을 달력에서 확인할 수 있습니다.</li>
          </ul>
        </div>
        <div className="detail-subsection">
          <div className="detail-subsection-title">2. 사용자별 근무표 설정</div>
          <ul className="detail-list">
            <li>근무 유형의 이름·약어·색을 편집하고, 변경을 오늘부터 또는 전체 기간에 적용할 수 있습니다.</li>
            <li>이전 근무 패턴을 불러와 교대 순서를 다시 설정할 수 있습니다.</li>
          </ul>
        </div>
        <div className="detail-subsection">
          <div className="detail-subsection-title">3. 근무표 내보내기</div>
          <ul className="detail-list">
            <li>보고 있는 달의 근무표를 PNG 이미지나 캘린더 파일(.ics)로 내보냅니다.</li>
            <li>v1.3에서는 캘린더 파일에 근무 전날 알림을 추가하는 기능과 같은 달 재내보내기 오류를 개선했습니다.</li>
          </ul>
        </div>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">웹 버전으로 확장</h2>
        <p className="retro-text">
          토스 미니앱을 바탕으로 브라우저에서 사용할 수 있는 웹 버전을 만들었습니다.
          자체 UI와 localStorage로 전환하고, 백업·복원과 PWA 설치·오프라인 실행을 지원합니다.
          두 버전의 데이터는 자동으로 공유되지 않습니다.
        </p>
        <a className="detail-link" href="https://ssa25879.github.io/web-TurnCal/" target="_blank"
          rel="noopener noreferrer">↗ 턴캘 웹 사용하기</a>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">프로젝트 저장소</h2>
        <a className="detail-link" href="https://github.com/ssa25879/ait-TurnCal" target="_blank"
          rel="noopener noreferrer">🔗 GitHub · 토스 미니앱</a>
        <p><a className="detail-link" href="https://github.com/ssa25879/web-TurnCal" target="_blank"
          rel="noopener noreferrer">🔗 GitHub · 웹 버전</a></p>
      </div>
    </section>
  );
}
