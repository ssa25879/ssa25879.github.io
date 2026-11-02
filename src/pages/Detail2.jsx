import preview1 from "../assets/capstone/home.png";
import preview2 from "../assets/capstone/comments.png";
import preview3 from "../assets/capstone/profile.png";
import preview4 from "../assets/capstone/dm.png";

export default function Detail2({ active, onClick }) {
  return (
    <section className="project-detail detail-page" id="detail-2" style={{ display: active ? "block" : "none" }} onClick={onClick}>
      <button className="detail-back" data-back-to-projects="">
        ← 목록으로
      </button>
      <div className="detail-header">
        <h1 className="detail-title">
          Frending · 마크다운 SNS
        </h1>
        <p className="detail-period">
          2023.04 - 2023.09
        </p>
        <div className="detail-tags">
          <span className="detail-tag">
            Toast UI Editor
          </span>
          <span className="detail-tag">
            JavaScript
          </span>
          <span className="detail-tag">
            Node.js
          </span>
          <span className="detail-tag">
            Express
          </span>
          <span className="detail-tag">
            EJS
          </span>
          <span className="detail-tag">
            MS-SQL
          </span>
          <span className="detail-tag">
            Socket.IO
          </span>
          <span className="detail-tag">
            팀 프로젝트 · 팀원
          </span>
        </div>
      </div>
      <div className="detail-section">
        <h2 className="detail-section-title">
          기획 의도
        </h2>
        <ul className="detail-list">
          <li>
            마크다운으로 글과 이미지를 함께 작성하고 공유하는 SNS를 학교 축제 전시용으로 제작했습니다.
          </li>
        </ul>
      </div>
      <div className="detail-section">
        <h2 className="detail-section-title">
          담당 내용
        </h2>
        <ul className="detail-list">
          <li>
            Toast UI Editor 도입
          </li>
          <li>
            게시글 작성 UI 구성 및 서버 연동
          </li>
          <li>
            MySQL → MS-SQL 전환 대응
          </li>
        </ul>
      </div>
      <div className="detail-section">
        <h2 className="detail-section-title">
          주요 기능
        </h2>
        <p className="retro-text">
          팀 프로젝트 전체의 구현 내용입니다.
        </p>
        <ul className="detail-list">
          <li>
            마크다운 게시글과 이미지 작성, 피드·댓글·팔로우
          </li>
          <li>
            세션 기반 로그인과 프로필 조회
          </li>
          <li>
            Socket.IO 기반 실시간 DM과 대화 내역 저장·조회
          </li>
          <li>
            게시글 HTML 허용 태그 필터링과 큰 이미지 크기 조정·압축
          </li>
        </ul>
      </div>
      <div className="detail-section">
        <h2 className="detail-section-title">
          프로젝트 미리보기
        </h2>
        <div className="screenshot-grid preview-gallery">
          <figure>
            <a className="preview-image-link" href={preview1} target="_blank" rel="noopener noreferrer" aria-label="Frending 게시글 피드 원본 이미지 열기">
              <img src={preview1} alt="Frending 게시글 피드" width="2880" height="3088" loading="lazy" decoding="async" />
            </a>
            <figcaption>
              Frending 게시글 피드
            </figcaption>
          </figure>
          <figure>
            <a className="preview-image-link" href={preview2} target="_blank" rel="noopener noreferrer" aria-label="게시글과 댓글 원본 이미지 열기">
              <img src={preview2} alt="게시글과 댓글" width="2880" height="1800" loading="lazy" decoding="async" />
            </a>
            <figcaption>
              게시글과 댓글
            </figcaption>
          </figure>
          <figure>
            <a className="preview-image-link" href={preview3} target="_blank" rel="noopener noreferrer" aria-label="사용자 프로필 원본 이미지 열기">
              <img src={preview3} alt="사용자 프로필" width="2880" height="1800" loading="lazy" decoding="async" />
            </a>
            <figcaption>
              사용자 프로필
            </figcaption>
          </figure>
          <figure>
            <a className="preview-image-link" href={preview4} target="_blank" rel="noopener noreferrer" aria-label="실시간 DM 원본 이미지 열기">
              <img src={preview4} alt="실시간 DM" width="2880" height="1800" loading="lazy" decoding="async" />
            </a>
            <figcaption>
              실시간 DM
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="detail-section">
        <h2 className="detail-section-title">
          프로젝트 저장소
        </h2>
        <a className="detail-link" href="https://github.com/ssa25879/capstone" target="_blank" rel="noopener noreferrer">
          🔗 GitHub · capstone
        </a>
      </div>
      <div className="detail-section">
        <h2 className="detail-section-title">
          회고
        </h2>
        <p className="retro-text">
          최초 기획했던 MySQL 기반 DB 구성을 비용 등의 문제로 MS-SQL로 전환하는 과정에서, 기존과 다른 문법과 의미 차이로 인해 수정하는 데 어려움을 느꼈습니다.
        </p>
      </div>
    </section>
  );
}
