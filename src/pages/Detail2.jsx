export default function Detail2({ active, onClick }) {
  return (
<section className="project-detail detail-page" id="detail-2" style={{ display: active ? "block" : "none" }} onClick={onClick}>
      <button className="detail-back" data-back-to-projects="">
        ← 목록으로
      </button>
      <div className="detail-header">
        <h1 className="detail-title">마크다운 SNS 사이트</h1>
        <p className="detail-period">2023.04 - 2023.09</p>
        <div className="detail-tags">
          <span className="detail-tag">ToastUI</span><span className="detail-tag">JavaScript</span><span
            className="detail-tag">React</span><span className="detail-tag">팀 프로젝트</span><span className="detail-tag">팀원</span>
        </div>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">기획 의도</h2>
        <ul className="detail-list">
          <li>
            당시 마크다운을 지원하는 SNS가 없거나 적었고, 실제 SNS 이용 시
            이미지를 올리면 게시글 하단부에만 이미지가 노출되는 점을
            개선하고자 기획했습니다.
          </li>
        </ul>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">프로젝트 개발 및 수행 내용</h2>
        <div className="detail-subsection">
          <div className="detail-subsection-title">
            1. 마크다운 에디터 도입 (Toast UI Editor)
          </div>
          <ul className="detail-list">
            <li>
              마크다운이 적용되는 에디터가 필요해, NHN에서 MIT 라이선스로
              공개한 Toast UI Editor를 찾아 적용했습니다.
            </li>
          </ul>
        </div>
        <div className="detail-subsection">
          <div className="detail-subsection-title">2. DB 설계 및 전환</div>
          <ul className="detail-list">
            <li>
              팀원이 구성한 DB를 MySQL로 변환해 적용했으나, 이후 서버 관리의
              용이성을 높이기 위해 MS-SQL로 다시 수정해 적용했습니다.
            </li>
          </ul>
        </div>
        <div className="detail-subsection">
          <div className="detail-subsection-title">3. UI 구성 및 제작</div>
          <ul className="detail-list">
            <li>
              다른 SNS 서비스의 UI를 참고하여 화면을 구성하고 제작했습니다.
            </li>
          </ul>
        </div>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">회고</h2>
        <p className="retro-text">
          최초 기획했던 MySQL 기반 DB 구성을 비용 등의 문제로 MS-SQL로
          전환하는 과정에서, 기존과 다른 문법과 의미 차이로 인해 수정하는 데
          어려움을 느꼈습니다.
        </p>
      </div>
    </section>
);
}
