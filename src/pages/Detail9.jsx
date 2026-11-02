import preview1 from "../assets/turncal/preview-1.png";
import preview2 from "../assets/turncal/preview-2.png";
import preview3 from "../assets/turncal/preview-3.png";
import preview4 from "../assets/turncal/preview-4.png";

export default function Detail9({ active, onClick }) {
  return (
    <section className="project-detail detail-page" id="detail-9" style={{ display: active ? "block" : "none" }} onClick={onClick}>
      <button className="detail-back" data-back-to-projects="">
        ← 목록으로
      </button>
      <div className="detail-header">
        <h1 className="detail-title">
          턴캘
        </h1>
        <p className="detail-period">
          Apps in Toss · v1.3 출시 · 2026.10.21
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
          교대근무 반복 패턴과 기준일을 등록하면 월간 달력에 근무를 자동으로 표시하는 미니앱입니다. 데이터는 기기에 저장됩니다.
        </p>
      </div>
      <div className="detail-section">
        <h2 className="detail-section-title">
          프로젝트 개발 및 수행 내용
        </h2>
        <div className="detail-subsection">
          <div className="detail-subsection-title">
            1. 근무 패턴 기반 달력 계산
          </div>
          <ul className="detail-list">
            <li>
              주간·오후·야간·당직·비번·휴무 패턴을 기준일과 함께 등록해 월간 근무표를 계산합니다.
            </li>
            <li>
              오늘·내일 근무 요약과 날짜별 메모, 공휴일을 달력에서 확인할 수 있습니다.
            </li>
          </ul>
        </div>
        <div className="detail-subsection">
          <div className="detail-subsection-title">
            2. 사용자별 근무표 설정
          </div>
          <ul className="detail-list">
            <li>
              근무 유형의 이름·약어·색을 편집하고, 변경을 오늘부터 또는 전체 기간에 적용할 수 있습니다.
            </li>
            <li>
              이전 근무 패턴을 불러와 교대 순서를 다시 설정할 수 있습니다.
            </li>
          </ul>
        </div>
        <div className="detail-subsection">
          <div className="detail-subsection-title">
            3. 근무표 내보내기
          </div>
          <ul className="detail-list">
            <li>
              보고 있는 달의 근무표를 PNG 이미지나 캘린더 파일(.ics)로 내보냅니다.
            </li>
            <li>
              v1.3에서는 캘린더 파일에 근무 전날 알림을 추가하는 기능과 같은 달 재내보내기 오류를 개선했습니다.
            </li>
          </ul>
        </div>
      </div>
      <div className="detail-section">
        <h2 className="detail-section-title">
          웹 버전으로 확장
        </h2>
        <p className="retro-text">
          토스 미니앱을 바탕으로 브라우저에서 사용할 수 있는 웹 버전을 만들었습니다. 자체 UI와 localStorage로 전환하고, 백업·복원과 PWA 설치·오프라인 실행을 지원합니다. 두 버전의 데이터는 자동으로 공유되지 않습니다.
        </p>
        <a className="detail-link" href="https://ssa25879.github.io/web-TurnCal/" target="_blank" rel="noopener noreferrer">
          ↗ 턴캘 웹 사용하기
        </a>
      </div>
      <div className="detail-section">
        <h2 className="detail-section-title">문제 해결과 검증</h2>
        <p className="retro-text">
          같은 달을 다시 내보낼 때 파일 이름이 겹치는 문제를 줄이기 위해 이름에 내보낸 시각을 포함했습니다.
          캘린더 알림은 앱의 푸시 알림이 아닌 ICS의 VALARM으로 제공하며, 파일을 가져온 캘린더 앱에서 처리합니다.
          내보내기와 ICS 생성 관련 단위 테스트 27개를 확인했습니다(2026.11.02).
          이 검사는 SDK 호출과 파일 내용을 검증하며, 실제 캘린더 앱의 가져오기·알림 동작은 별도 확인 대상입니다.
        </p>
      </div>
      <div className="detail-section">
        <h2 className="detail-section-title">
          프로젝트 미리보기
        </h2>
        <p className="retro-text">
          토스 앱에 등록한 근무표와 설정 기능 미리보기입니다.
        </p>
        <div className="screenshot-grid preview-gallery preview-gallery-portrait">
          <figure>
            <a className="preview-image-link" href={preview1} target="_blank" rel="noopener noreferrer" aria-label="턴캘 등록용 미리보기 1 원본 이미지 열기">
              <img src={preview1} alt="턴캘 등록용 미리보기 1" width="636" height="1048" loading="lazy" decoding="async" />
            </a>
            <figcaption>
              턴캘 등록용 미리보기 1
            </figcaption>
          </figure>
          <figure>
            <a className="preview-image-link" href={preview2} target="_blank" rel="noopener noreferrer" aria-label="턴캘 등록용 미리보기 2 원본 이미지 열기">
              <img src={preview2} alt="턴캘 등록용 미리보기 2" width="636" height="1048" loading="lazy" decoding="async" />
            </a>
            <figcaption>
              턴캘 등록용 미리보기 2
            </figcaption>
          </figure>
          <figure>
            <a className="preview-image-link" href={preview3} target="_blank" rel="noopener noreferrer" aria-label="턴캘 등록용 미리보기 3 원본 이미지 열기">
              <img src={preview3} alt="턴캘 등록용 미리보기 3" width="636" height="1048" loading="lazy" decoding="async" />
            </a>
            <figcaption>
              턴캘 등록용 미리보기 3
            </figcaption>
          </figure>
          <figure>
            <a className="preview-image-link" href={preview4} target="_blank" rel="noopener noreferrer" aria-label="턴캘 등록용 미리보기 4 원본 이미지 열기">
              <img src={preview4} alt="턴캘 등록용 미리보기 4" width="636" height="1048" loading="lazy" decoding="async" />
            </a>
            <figcaption>
              턴캘 등록용 미리보기 4
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="detail-section">
        <h2 className="detail-section-title">
          프로젝트 저장소
        </h2>
        <a className="detail-link" href="https://github.com/ssa25879/ait-TurnCal" target="_blank" rel="noopener noreferrer">
          🔗 GitHub · 토스 미니앱
        </a>
        <p>
          <a className="detail-link" href="https://github.com/ssa25879/web-TurnCal" target="_blank" rel="noopener noreferrer">
            🔗 GitHub · 웹 버전
          </a>
        </p>
      </div>
    </section>
  );
}
