import preview1Preview from "../assets/previews/subscription-radar-preview-1.webp";
import preview2Preview from "../assets/previews/subscription-radar-preview-2.webp";
import preview3Preview from "../assets/previews/subscription-radar-preview-3.webp";
import preview1 from "../assets/subscription-radar/preview-1.png";
import preview2 from "../assets/subscription-radar/preview-2.png";
import preview3 from "../assets/subscription-radar/preview-3.png";

export default function Detail13({ active, onClick }) {
  return (
    <section className="project-detail detail-page" id="detail-13" style={{ display: active ? "block" : "none" }} onClick={onClick}>
      <button className="detail-back" data-back-to-projects="">
        ← 목록으로
      </button>
      <div className="detail-header">
        <h1 className="detail-title">
          구독레이더
        </h1>
        <p className="detail-period">
          앱인토스 · 출시 준비 중
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
          수동 등록한 구독의 예상 결제일과 월·연 환산 비용을 관리하는 앱인토스 미니앱입니다.
        </p>
      </div>
      <div className="detail-section">
        <h2 className="detail-section-title">
          주요 구현
        </h2>
        <ul className="detail-list">
          <li>
            구독을 등록·수정·삭제하고 활성·일시정지·해지 상태로 구분합니다.
          </li>
          <li>
            월말·윤년을 보정해 예상 결제일을 계산하고 월·연 환산 비용을 보여줍니다.
          </li>
          <li>
            원본 기록은 기기에 저장하며, 저장 실패 시 입력과 기존 기록을 유지합니다.
          </li>
        </ul>
      </div>
      <div className="detail-section">
        <h2 className="detail-section-title">
          지원 범위
        </h2>
        <p className="retro-text">
          구독 정보는 사용자가 직접 등록합니다. 실제 결제 조회·자동 해지·외화 환산·기기 간 동기화는 제공하지 않습니다.
        </p>
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
            <a className="preview-image-link" href={preview1} target="_blank" rel="noopener noreferrer" aria-label="구독레이더 등록용 미리보기 1 원본 이미지 열기">
              <img src={preview1Preview} alt="구독레이더 등록용 미리보기 1" width="636" height="1048" loading="lazy" decoding="async" />
            </a>
            <figcaption>
              구독레이더 등록용 미리보기 1
            </figcaption>
          </figure>
          <figure>
            <a className="preview-image-link" href={preview2} target="_blank" rel="noopener noreferrer" aria-label="구독레이더 등록용 미리보기 2 원본 이미지 열기">
              <img src={preview2Preview} alt="구독레이더 등록용 미리보기 2" width="636" height="1048" loading="lazy" decoding="async" />
            </a>
            <figcaption>
              구독레이더 등록용 미리보기 2
            </figcaption>
          </figure>
          <figure>
            <a className="preview-image-link" href={preview3} target="_blank" rel="noopener noreferrer" aria-label="구독레이더 등록용 미리보기 3 원본 이미지 열기">
              <img src={preview3Preview} alt="구독레이더 등록용 미리보기 3" width="636" height="1048" loading="lazy" decoding="async" />
            </a>
            <figcaption>
              구독레이더 등록용 미리보기 3
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="detail-section">
        <h2 className="detail-section-title">
          프로젝트 저장소
        </h2>
        <a className="detail-link" href="https://github.com/ssa25879/ait-subscription-radar" target="_blank" rel="noopener noreferrer">
          🔗 GitHub · ait-subscription-radar
        </a>
      </div>
    </section>
  );
}
