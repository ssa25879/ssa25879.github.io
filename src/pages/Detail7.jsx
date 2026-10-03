export default function Detail7({ active, onClick }) {
  return (
<section className="project-detail detail-page" id="detail-7" style={{ display: active ? "block" : "none" }} onClick={onClick}>
      <button className="detail-back" data-back-to-projects="">← 목록으로</button>
      <div className="detail-header">
        <h1 className="detail-title">Urban Survival</h1>
        <p className="detail-period">URP_ZombieGame · SideProject · 개발 중</p>
        <div className="detail-tags">
          <span className="detail-tag">Unity 6</span><span className="detail-tag">C#</span>
          <span className="detail-tag">URP</span><span className="detail-tag">NavMesh</span>
          <span className="detail-tag">uGUI</span><span className="detail-tag">AudioMixer</span>
        </div>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">프로젝트 개요</h2>
        <p className="retro-text">
          도시 전장에서 좀비의 공격을 피하며 생존하는 PC 싱글 플레이 탑뷰 게임입니다.
          URP_ZombieGame의 SideProject 브랜치에서 전투, 적 생성, HUD와 설정 기능을 확장하고 있습니다.
        </p>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">프로젝트 개발 및 수행 내용</h2>
        <div className="detail-subsection">
          <div className="detail-subsection-title">1. 무기와 전투 시스템</div>
          <ul className="detail-list">
            <li>권총·소총·SMG·산탄총을 네 개의 슬롯으로 관리하고, 획득한 무기를 교체할 수 있도록 구현했습니다.</li>
            <li>사격·탄약·재장전 상태를 관리하고, 캐릭터 중심선 위 고정 높이를 기준으로 명중을 판정하도록 개선했습니다.</li>
          </ul>
        </div>
        <div className="detail-subsection">
          <div className="detail-subsection-title">2. 웨이브와 생존 진행</div>
          <ul className="detail-list">
            <li>시간에 따라 웨이브와 적의 능력치가 증가하도록 구성하고, 일반·강화 적과 보스 등장 흐름을 관리했습니다.</li>
            <li>플레이어 주변의 NavMesh와 이동 경로를 검증해 스폰 위치를 선택하고, 동시 생성 상한과 대기 중인 적을 관리했습니다.</li>
            <li>목표 보스 처치 시 결과를 기록하고, 이후 생존을 계속하는 무한 모드 흐름을 연결했습니다.</li>
          </ul>
        </div>
        <div className="detail-subsection">
          <div className="detail-subsection-title">3. 전투 HUD와 위협 미니맵</div>
          <ul className="detail-list">
            <li>무기·탄약 정보와 캐릭터 머리 위 재장전 알림·진행 바를 표시했습니다.</li>
            <li>카메라 방향을 기준으로 주변 적을 표시하고, 탐지 범위 밖의 위협은 가장자리 화살표로 안내했습니다.</li>
            <li>강화 적의 미니맵 표시를 색상과 크기로 구분하고, 마커를 재사용하도록 구성했습니다.</li>
          </ul>
        </div>
        <div className="detail-subsection">
          <div className="detail-subsection-title">4. 재사용 가능한 설정 모듈</div>
          <ul className="detail-list">
            <li>볼륨·전체 화면·해상도·그래픽 품질·VSync 설정을 게임 코드와 분리한 GameSettingsKit 모듈로 구성했습니다.</li>
            <li>PlayerPrefs로 설정을 저장하고, AudioMixer를 통해 음악과 효과음 볼륨을 분리했습니다.</li>
          </ul>
        </div>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">기술적 포인트</h2>
        <p className="retro-text">
          사격 판정과 총구의 시각적 연출을 분리하고, 카메라 방향과 미니맵 좌표 기준을 일치시켰습니다.
          전투 중 필요한 상태를 HUD로 전달하면서, 설정 기능은 다른 Unity 프로젝트에서도 사용할 수 있도록 분리했습니다.
        </p>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">프로젝트 저장소</h2>
        <a className="detail-link" href="https://github.com/ssa25879/URP_ZombieGame/tree/SideProject" target="_blank"
          rel="noopener noreferrer">🔗 GitHub · SideProject</a>
      </div>
    </section>
);
}
