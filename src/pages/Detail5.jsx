import preview1 from "../assets/ar-guide/preview-1.png";
import preview2 from "../assets/ar-guide/preview-2.png";
import preview3 from "../assets/ar-guide/preview-3.png";

export default function Detail5({ active, onClick }) {
  return (
    <section className="project-detail detail-page" id="detail-5" style={{ display: active ? "block" : "none" }} onClick={onClick}>
      <button className="detail-back" data-back-to-projects="">
        ← 목록으로
      </button>
      <div className="detail-header">
        <h1 className="detail-title">
          보드게임 AR 가이드 앱
        </h1>
        <p className="detail-period">
          2026.05.18. - 2026.07.12. (8주)
        </p>
        <div className="detail-tags">
          <span className="detail-tag">
            AR
          </span>
          <span className="detail-tag">
            Virnect Make
          </span>
          <span className="detail-tag">
            No-code
          </span>
          <span className="detail-tag">
            일경험 프로젝트
          </span>
          <span className="detail-tag">
            팀 프로젝트
          </span>
          <span className="detail-tag">
            팀장
          </span>
        </div>
      </div>
      <div className="detail-section">
        <h2 className="detail-section-title">
          기획 의도
        </h2>
        <ul className="detail-list">
          <li>
            기존 보드게임 설명서는 텍스트 중심으로 구성되어 있어 초보자가 보드게임을 이해하는 데 시간이 오래 걸립니다. AR 기술을 활용해 복잡한 규칙과 구성품 정보를 시청각적으로 제공함으로써 사용자의 학습 부담을 줄이고자 기획했습니다.
          </li>
        </ul>
      </div>
      <div className="detail-section">
        <h2 className="detail-section-title">
          프로젝트 개발 및 수행 내용
        </h2>
        <div className="detail-subsection">
          <div className="detail-subsection-title">
            1. 팀장으로서의 역할 및 기여
          </div>
          <ul className="detail-list">
            <li>
              전체 일정 관리, 프로젝트 방향 설정, 지원금 사용 관리, 기능 구현을 총괄했습니다.
            </li>
          </ul>
        </div>
        <div className="detail-subsection">
          <div className="detail-subsection-title">
            2. 콘텐츠 구조 설계
          </div>
          <ul className="detail-list">
            <li>
              메인 화면과 선택 화면을 거쳐 사용자가 원하는 안내 콘텐츠를 확인할 수 있도록 구성했습니다.
            </li>
            <li>
              선택지를 제공해 초보자가 규칙과 진행 흐름을 쉽게 이해할 수 있도록 지원했습니다.
            </li>
          </ul>
        </div>
        <div className="detail-subsection">
          <div className="detail-subsection-title">
            3. TTS 음성 안내
          </div>
          <ul className="detail-list">
            <li>
              TTS 음성 안내를 통해 사용자가 설명을 귀로 듣고 이해할 수 있도록 구성했습니다.
            </li>
          </ul>
        </div>
      </div>
      <div className="detail-section">
        <h2 className="detail-section-title">
          프로젝트 미리보기
        </h2>
        <div className="screenshot-grid preview-gallery">
          <figure>
            <a className="preview-image-link" href={preview1} target="_blank" rel="noopener noreferrer" aria-label="보드게임 가이드 사용 원본 이미지 열기">
              <img src={preview1} alt="보드게임 가이드 사용" width="1920" height="1080" loading="lazy" decoding="async" />
            </a>
            <figcaption>
              보드게임 가이드 사용
            </figcaption>
          </figure>
          <figure>
            <a className="preview-image-link" href={preview2} target="_blank" rel="noopener noreferrer" aria-label="AR 이미지 인식 원본 이미지 열기">
              <img src={preview2} alt="AR 이미지 인식" width="1920" height="1080" loading="lazy" decoding="async" />
            </a>
            <figcaption>
              AR 이미지 인식
            </figcaption>
          </figure>
          <figure>
            <a className="preview-image-link" href={preview3} target="_blank" rel="noopener noreferrer" aria-label="규칙 정보 오버레이 원본 이미지 열기">
              <img src={preview3} alt="규칙 정보 오버레이" width="1920" height="1080" loading="lazy" decoding="async" />
            </a>
            <figcaption>
              규칙 정보 오버레이
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="detail-section">
        <h2 className="detail-section-title">
          프로젝트 영상
        </h2>
        <a className="detail-link" href="https://youtu.be/OPElYhlrmv8" target="_blank">
          🔗 영상 링크
        </a>
      </div>
      <div className="detail-section">
        <h2 className="detail-section-title">
          회고
        </h2>
        <p className="retro-text">
          팀원 전원이 처음 사용해보는 툴로 협업을 총괄하다 보니 기능 구현 부분을 분배하는 데 어려움을 느꼈습니다. 문제를 한 사람이 해결하기보다 팀원들과 함께 테스트하고 의견을 나누며 해결하는 협업 방식의 중요성을 배웠습니다.
        </p>
      </div>
    </section>
  );
}
