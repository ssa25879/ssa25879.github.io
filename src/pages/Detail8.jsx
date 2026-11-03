import preview1Preview from "../assets/previews/fridgepick-preview-1.webp";
import preview2Preview from "../assets/previews/fridgepick-preview-2.webp";
import preview3Preview from "../assets/previews/fridgepick-preview-3.webp";
import preview1 from "../assets/fridgepick/preview-1.png";
import preview2 from "../assets/fridgepick/preview-2.png";
import preview3 from "../assets/fridgepick/preview-3.png";

export default function Detail8({ active, onClick }) {
  return (
    <section className="project-detail detail-page" id="detail-8" style={{ display: active ? "block" : "none" }} onClick={onClick}>
      <button className="detail-back" data-back-to-projects="">
        ← 목록으로
      </button>
      <div className="detail-header">
        <h1 className="detail-title">
          식품 정보 앱 → 냉털픽
        </h1>
        <p className="detail-period">
          2022 Android 앱 → 2026 앱인토스 미니앱 · 냉털픽 출시
        </p>
        <div className="detail-tags">
          <span className="detail-tag">
            React
          </span>
          <span className="detail-tag">
            TypeScript
          </span>
          <span className="detail-tag">
            Vite
          </span>
          <span className="detail-tag">
            Toss TDS
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
          과거 Android·Java와 공공 OpenAPI로 식품 영양 정보를 조회하는 앱을 만들었습니다. 이후 React·TypeScript와 AI 개발 도구를 활용해, 보유 재료로 레시피를 추천하는 앱인토스 미니앱 냉털픽으로 개선·확장했습니다.
        </p>
      </div>
      <div className="detail-section">
        <h2 className="detail-section-title">과거 작업과 현재의 개선</h2>
        <div className="detail-subsection">
          <div className="detail-subsection-title">이전 · 식품 정보 앱 (2022.03 ~ 2022.10)</div>
          <ul className="detail-list">
            <li>Android·Java 기반으로 공공 OpenAPI의 영양 정보를 조회하고 JSON 응답을 화면에 표시했습니다.</li>
            <li>팀장으로서 역할을 분담하고 API 연동과 결과물 통합을 담당했습니다.</li>
          </ul>
        </div>
        <div className="detail-subsection">
          <div className="detail-subsection-title">현재 · 냉털픽 (2026)</div>
          <ul className="detail-list">
            <li>React·TypeScript·Vite와 Toss TDS로 토스 안에서 실행하는 미니앱을 제작했습니다.</li>
            <li>식품 정보 조회 경험을 재료 선택·레시피 추천·부족 재료 안내로 확장했습니다.</li>
            <li>AI 개발 도구는 개발 보조에 활용했으며, 추천은 정적 레시피 카탈로그의 주재료 매칭률로 계산합니다.</li>
          </ul>
        </div>
      </div>
      <div className="detail-section">
        <h2 className="detail-section-title">
          프로젝트 개발 및 수행 내용
        </h2>
        <div className="detail-subsection">
          <div className="detail-subsection-title">
            1. 주재료 매칭 기반 레시피 추천
          </div>
          <ul className="detail-list">
            <li>
              레시피의 주재료와 사용자가 선택한 재료를 비교해 매칭률이 60% 이상인 후보를 추천합니다.
            </li>
            <li>
              부족한 양념과 부재료를 표시해 레시피 원문과 함께 확인할 수 있도록 구성했습니다.
            </li>
          </ul>
        </div>
        <div className="detail-subsection">
          <div className="detail-subsection-title">
            2. 공식 레시피 카탈로그
          </div>
          <ul className="detail-list">
            <li>
              식약처와 EPIS 레시피 데이터를 정적 카탈로그로 제공하며, 저장소 README 기준 총 1,359개 레시피를 포함합니다.
            </li>
            <li>
              화면 진입 뒤 추천 모듈을 준비하고, 로딩 실패와 추천 후보가 없는 상태를 구분합니다.
            </li>
          </ul>
        </div>
      </div>
      <div className="detail-section">
        <h2 className="detail-section-title">문제 해결과 검증</h2>
        <p className="retro-text">
          양념만 보유해도 적합한 레시피로 추천되는 일을 막기 위해 주재료를 기준으로 매칭률을 계산했습니다.
          미지원 주재료도 계산의 분모에 남겨 매칭률이 부풀려지지 않게 하고, 부족 재료는 별도로 안내합니다.
          추천 계산 단위 테스트 29개를 확인했습니다(2026.11.02). 이 검사는 추천 규칙을 검증하며,
          실제 조리 가능 여부나 사용자의 만족도를 측정한 결과는 아닙니다.
        </p>
      </div>
      <div className="detail-section">
        <h2 className="detail-section-title">
          프로젝트 미리보기
        </h2>
        <p className="retro-text">
          토스 앱 등록에 사용한 재료 선택·추천 기능 미리보기입니다.
        </p>
        <div className="screenshot-grid preview-gallery preview-gallery-portrait">
          <figure>
            <a className="preview-image-link" href={preview1} target="_blank" rel="noopener noreferrer" aria-label="냉털픽 등록용 미리보기 1 원본 이미지 열기">
              <img src={preview1Preview} alt="냉털픽 등록용 미리보기 1" width="636" height="1048" loading="lazy" decoding="async" />
            </a>
            <figcaption>
              냉털픽 등록용 미리보기 1
            </figcaption>
          </figure>
          <figure>
            <a className="preview-image-link" href={preview2} target="_blank" rel="noopener noreferrer" aria-label="냉털픽 등록용 미리보기 2 원본 이미지 열기">
              <img src={preview2Preview} alt="냉털픽 등록용 미리보기 2" width="636" height="1048" loading="lazy" decoding="async" />
            </a>
            <figcaption>
              냉털픽 등록용 미리보기 2
            </figcaption>
          </figure>
          <figure>
            <a className="preview-image-link" href={preview3} target="_blank" rel="noopener noreferrer" aria-label="냉털픽 등록용 미리보기 3 원본 이미지 열기">
              <img src={preview3Preview} alt="냉털픽 등록용 미리보기 3" width="636" height="1048" loading="lazy" decoding="async" />
            </a>
            <figcaption>
              냉털픽 등록용 미리보기 3
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="detail-section">
        <h2 className="detail-section-title">
          프로젝트 저장소
        </h2>
        <a className="detail-link" href="https://github.com/ssa25879/ait-FridgePick" target="_blank" rel="noopener noreferrer">
          🔗 GitHub 저장소
        </a>
      </div>
    </section>
  );
}
