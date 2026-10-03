export default function Detail4({ active, onClick }) {
  return (
<section className="project-detail detail-page" id="detail-4" style={{ display: active ? "block" : "none" }} onClick={onClick}>
      <button className="detail-back" data-back-to-projects="">
        ← 목록으로
      </button>
      <div className="detail-header">
        <h1 className="detail-title">VR 리듬게임</h1>
        <p className="detail-period">2026.05 - 2026.07</p>
        <div className="detail-tags">
          <span className="detail-tag">Unity</span><span className="detail-tag">VR</span><span className="detail-tag">C#</span><span
            className="detail-tag">개인 프로젝트</span>
        </div>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">기획 의도</h2>
        <ul className="detail-list">
          <li>
            현재 VR 게임 중 가장 유명하고 완성도 높은 게임인 비트세이버(Beat
            Saber)를 직접 제작해보고 싶다는 의도로 제작했습니다.
          </li>
        </ul>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">프로젝트 개발 및 수행 내용</h2>
        <div className="detail-subsection">
          <div className="detail-subsection-title">1. Saber 판정 시스템</div>
          <ul className="detail-list">
            <li>
              VR 컨트롤러에 판정을 위한 Saber 오브젝트를 배치하고, 휘둘러지는
              방향과 각도를 인식해 Hit / Good / Miss 판정을 부여했습니다.
            </li>
            <li>
              만점 100,000점을 목표로 노트를 처리하는 구조로 설계했습니다.
            </li>
          </ul>
        </div>
        <div className="detail-subsection">
          <div className="detail-subsection-title">2. Combo / HP 상호작용</div>
          <ul className="detail-list">
            <li>
              판정 성공·실패 여부에 따라 Combo 처리와 HP 처리 등의 상호작용을
              구성했습니다.
            </li>
          </ul>
        </div>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">프로젝트 스크린샷</h2>
        <div className="screenshot-grid">
          <div className="screenshot-box"><img
              src="https://github.com/ssa25879/VRRhythmGame/blob/main/VR/01_song_selection_retrowave_orange.png?raw=true" />
          </div>
          <div className="screenshot-box"><img
              src="https://github.com/ssa25879/VRRhythmGame/blob/main/VR/02_gameplay_hit_effect.png?raw=true" />
          </div>
        </div>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">프로젝트 영상</h2>
        <a className="detail-link" href="https://youtu.be/1m5YNTJQpFM" target="_blank">🔗 영상 링크</a>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">회고</h2>
        <p className="retro-text">
          기존에 VR 게임을 접해본 경험이 적어, VR 게임을 구성할 때 필수적으로
          적용해야 하는 요소들을 알게 되는 계기가 되었습니다. 또한 Meta Quest
          3S 기종을 기반으로 제작하며 해당 기기의 다양한 사용법을 익힐 수
          있었습니다.
        </p>
      </div>
    </section>
);
}
