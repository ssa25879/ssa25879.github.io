export default function Detail3({ active, onClick }) {
  return (
<section className="project-detail detail-page" id="detail-3" style={{ display: active ? "block" : "none" }} onClick={onClick}>
      <button className="detail-back" data-back-to-projects="">
        ← 목록으로
      </button>
      <div className="detail-header">
        <h1 className="detail-title">Dodge 게임 [Block Dodge]</h1>
        <p className="detail-period">2026.04 - 2026.06</p>
        <div className="detail-tags">
          <span className="detail-tag">Unity</span><span className="detail-tag">C#</span><span className="detail-tag">3D</span><span
            className="detail-tag">개인 프로젝트</span>
        </div>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">기획 의도</h2>
        <ul className="detail-list">
          <li>
            날아오는 탄환을 피하며 생존하는 게임으로, 기초적인 프로젝트에서
            회피 효과를 구현하고 싶었고, 구현에 성공했습니다.
          </li>
        </ul>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">프로젝트 개발 및 수행 내용</h2>
        <div className="detail-subsection">
          <div className="detail-subsection-title">1. 탄환 회피 시스템</div>
          <ul className="detail-list">
            <li>
              시간이 지날수록 빨라지는 탄환을 피하는 시스템을 구현했습니다.
              기본적으로 모바일 조이스틱을 통해 캐릭터를 이동시켜 회피합니다.
            </li>
          </ul>
        </div>
        <div className="detail-subsection">
          <div className="detail-subsection-title">2. 회피(구르기) 기능</div>
          <ul className="detail-list">
            <li>
              별도의 회피 버튼을 누르면 잠깐의 무적 판정과 함께, 이동 중이던
              방향(입력이 없다면 정면)으로 회피 기동을 수행합니다.
            </li>
          </ul>
        </div>
        <div className="detail-subsection">
          <div className="detail-subsection-title">
            3. 패배 및 최고 점수 시스템
          </div>
          <ul className="detail-list">
            <li>
              공격에 3회 피격되면 게임이 종료되며, 최고 점수를 저장해 다시
              플레이하고 싶은 의욕을 부여합니다.
            </li>
          </ul>
        </div>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">프로젝트 스크린샷</h2>
        <div className="screenshot-grid">
          <div className="screenshot-box"><img
              src="https://github.com/ssa25879/BlockDodge/blob/main/Dodge/Intro.jpg?raw=true" />
          </div>
          <div className="screenshot-box"><img
              src="https://github.com/ssa25879/BlockDodge/blob/main/Dodge/Dodge_01.png?raw=true" />
          </div>
          <div className="screenshot-box">
            <img src="https://github.com/ssa25879/BlockDodge/blob/main/Dodge/Dodge_InGame.jpg?raw=true" />
          </div>
          <div className="screenshot-box">
            <img src="https://github.com/ssa25879/BlockDodge/blob/main/Dodge/Dodge_GameOver.jpg?raw=true" />
          </div>
        </div>
      </div>



      <div className="detail-section">
        <h2 className="detail-section-title">회고</h2>
        <p className="retro-text">
          해당 방식의 플레이, 특히 회피 기능을 구현할 때 쿨타임과 버튼 UI를
          연동하는 과정에서 어려움을 느껴 구현에 어려움을 겪었습니다.
        </p>
      </div>
    </section>
);
}
