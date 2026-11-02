import preview1 from "../assets/reviewq/preview-1.png";
import preview2 from "../assets/reviewq/preview-2.png";
import preview3 from "../assets/reviewq/preview-3.png";

export default function Detail12({ active, onClick }) {
  return (
    <section className="project-detail detail-page" id="detail-12" style={{ display: active ? "block" : "none" }} onClick={onClick}>
      <button className="detail-back" data-back-to-projects="">
        ← 목록으로
      </button>
      <div className="detail-header">
        <h1 className="detail-title">
          복습큐
        </h1>
        <p className="detail-period">
          앱인토스 출시 · 2026.11.02
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
          과목별 암기 카드를 관리하고, 복습할 카드를 모아 반복 학습하는 앱인토스 미니앱입니다.
        </p>
      </div>
      <div className="detail-section">
        <h2 className="detail-section-title">
          주요 구현
        </h2>
        <ul className="detail-list">
          <li>
            과목·덱별로 카드를 작성하고 여러 카드를 한 번에 등록합니다.
          </li>
          <li>
            기억·망각 판정에 따라 다음 복습일을 계산하고, 오늘 복습할 카드를 모읍니다.
          </li>
          <li>
            학습 통계를 확인하고, 저장 실패와 손상 데이터의 복구 화면을 구분합니다.
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
            <a className="preview-image-link" href={preview1} target="_blank" rel="noopener noreferrer" aria-label="복습큐 등록용 미리보기 1 원본 이미지 열기">
              <img src={preview1} alt="복습큐 등록용 미리보기 1" width="636" height="1048" loading="lazy" decoding="async" />
            </a>
            <figcaption>
              복습큐 등록용 미리보기 1
            </figcaption>
          </figure>
          <figure>
            <a className="preview-image-link" href={preview2} target="_blank" rel="noopener noreferrer" aria-label="복습큐 등록용 미리보기 2 원본 이미지 열기">
              <img src={preview2} alt="복습큐 등록용 미리보기 2" width="636" height="1048" loading="lazy" decoding="async" />
            </a>
            <figcaption>
              복습큐 등록용 미리보기 2
            </figcaption>
          </figure>
          <figure>
            <a className="preview-image-link" href={preview3} target="_blank" rel="noopener noreferrer" aria-label="복습큐 등록용 미리보기 3 원본 이미지 열기">
              <img src={preview3} alt="복습큐 등록용 미리보기 3" width="636" height="1048" loading="lazy" decoding="async" />
            </a>
            <figcaption>
              복습큐 등록용 미리보기 3
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="detail-section">
        <h2 className="detail-section-title">
          프로젝트 저장소
        </h2>
        <a className="detail-link" href="https://github.com/ssa25879/ait-ReviewQ" target="_blank" rel="noopener noreferrer">
          🔗 GitHub · ait-ReviewQ
        </a>
      </div>
    </section>
  );
}
