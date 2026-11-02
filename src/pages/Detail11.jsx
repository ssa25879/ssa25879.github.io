import preview1 from "../assets/handover/preview-1.png";
import preview2 from "../assets/handover/preview-2.png";
import preview3 from "../assets/handover/preview-3.png";

export default function Detail11({ active, onClick }) {
  return (
    <section className="project-detail detail-page" id="detail-11" style={{ display: active ? "block" : "none" }} onClick={onClick}>
      <button className="detail-back" data-back-to-projects="">
        ← 목록으로
      </button>
      <div className="detail-header">
        <h1 className="detail-title">
          인계한장
        </h1>
        <p className="detail-period">
          앱인토스 출시 · 2026.10.26
        </p>
        <div className="detail-tags">
          <span className="detail-tag">
            React
          </span>
          <span className="detail-tag">
            TypeScript
          </span>
          <span className="detail-tag">
            Apps in Toss
          </span>
        </div>
      </div>
      <div className="detail-section">
        <h2 className="detail-section-title">
          프로젝트 개요
        </h2>
        <p className="retro-text">
          템플릿으로 인수인계를 작성하고 저장·복사해 전달하는 앱인토스 미니앱입니다.
        </p>
      </div>
      <div className="detail-section">
        <h2 className="detail-section-title">
          주요 구현
        </h2>
        <ul className="detail-list">
          <li>
            완료 업무·진행 중 업무·전달사항을 템플릿과 업종별 프리셋으로 작성합니다.
          </li>
          <li>
            기록을 기기에 저장하고 다시 열거나 복사해 전달할 수 있습니다.
          </li>
          <li>
            자주 쓰는 기록을 고정하고, 고정하지 않은 기록만 선택해 정리합니다.
          </li>
        </ul>
      </div>
      <div className="detail-section">
        <h2 className="detail-section-title">
          프로젝트 미리보기
        </h2>
        <p className="retro-text">
          앱 등록용으로 제작한 예시 화면입니다.
        </p>
        <div className="screenshot-grid preview-gallery preview-gallery-portrait">
          <figure>
            <a className="preview-image-link" href={preview1} target="_blank" rel="noopener noreferrer" aria-label="인계한장 등록용 미리보기 1 원본 이미지 열기">
              <img src={preview1} alt="인계한장 등록용 미리보기 1" width="636" height="1048" loading="lazy" decoding="async" />
            </a>
            <figcaption>
              인계한장 등록용 미리보기 1
            </figcaption>
          </figure>
          <figure>
            <a className="preview-image-link" href={preview2} target="_blank" rel="noopener noreferrer" aria-label="인계한장 등록용 미리보기 2 원본 이미지 열기">
              <img src={preview2} alt="인계한장 등록용 미리보기 2" width="636" height="1048" loading="lazy" decoding="async" />
            </a>
            <figcaption>
              인계한장 등록용 미리보기 2
            </figcaption>
          </figure>
          <figure>
            <a className="preview-image-link" href={preview3} target="_blank" rel="noopener noreferrer" aria-label="인계한장 등록용 미리보기 3 원본 이미지 열기">
              <img src={preview3} alt="인계한장 등록용 미리보기 3" width="636" height="1048" loading="lazy" decoding="async" />
            </a>
            <figcaption>
              인계한장 등록용 미리보기 3
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="detail-section">
        <h2 className="detail-section-title">
          프로젝트 저장소
        </h2>
        <a className="detail-link" href="https://github.com/ssa25879/ait-onepage-handover" target="_blank" rel="noopener noreferrer">
          🔗 GitHub · ait-onepage-handover
        </a>
      </div>
    </section>
  );
}
