export default function Projects({ onClick, onKeyDown }) {
  return (
<section id="projects" onClick={onClick} onKeyDown={onKeyDown}>
      <p className="label">Projects</p>
      <h2 className="section-title">프로젝트</h2>

      <div className="projects-grid">

        <div className="project-card" role="button" tabIndex="0" aria-label="식품 정보 앱 프로젝트 상세보기"
          data-project-id="detail-1">
          <p className="project-desc project-kind">[APP / API]</p>
          <div className="project-title">식품 정보 앱</div>
          <p className="project-desc">
            공공 OpenAPI를 활용해 식품의 영양 성분과 첨가물 정보를 조회할 수
            있는 앱을 개발했습니다.
          </p>
          <div className="project-tags">
            <span className="tag">Android</span><span className="tag">Java</span><span className="tag">OpenAPI</span>
          </div>
          <span className="project-more">자세히 보기 →</span>
        </div>


        <div className="project-card" role="button" tabIndex="0" aria-label="마크다운 SNS 사이트 프로젝트 상세보기"
          data-project-id="detail-2">
          <p className="project-desc project-kind">[Web / SNS]</p>
          <div className="project-title">마크다운 SNS 사이트</div>
          <p className="project-desc">
            ToastUI Editor를 기반으로 마크다운 문법을 이용해 글을 작성하고
            공유할 수 있는 SNS 사이트를 제작했습니다.
          </p>
          <div className="project-tags">
            <span className="tag">JavaScript</span>
            <span className="tag">React</span>
            <span className="tag">ToastUI</span>
          </div>
          <span className="project-more">자세히 보기 →</span>
        </div>


        <div className="project-card" role="button" tabIndex="0" aria-label="Dodge 게임 프로젝트 상세보기"
          data-project-id="detail-3">
          <p className="project-desc project-kind">
            [Game / Unity]
          </p>
          <div className="project-desc project-subtitle project-subtitle-tight">
            Dodge 게임
          </div>
          <div className="project-title">Block Dodge</div>
          <p className="project-desc">
            날아오는 탄환을 피해 생존하는 게임입니다.
          </p>
          <div className="project-tags">
            <span className="tag">Unity</span><span className="tag">C#</span><span className="tag">Game</span>
          </div>
          <span className="project-more">자세히 보기 →</span>
        </div>


        <div className="project-card" role="button" tabIndex="0" aria-label="VR 리듬게임 프로젝트 상세보기"
          data-project-id="detail-4">
          <p className="project-desc project-kind">
            [Game / Unity / VR]
          </p>
          <div className="project-desc project-subtitle">
            VR 리듬게임
          </div>
          <div className="project-title">VR BeatSaber</div>
          <p className="project-desc">
            Beat Saber에서 영감을 받아 제작한 VR 리듬게임입니다.
          </p>
          <div className="project-tags">
            <span className="tag">Unity</span><span className="tag">VR</span><span className="tag">C#</span>
          </div>
          <span className="project-more">자세히 보기 →</span>
        </div>


        <div className="project-card" role="button" tabIndex="0" aria-label="보드게임 AR 가이드 앱 프로젝트 상세보기"
          data-project-id="detail-5">
          <p className="project-desc project-kind">
            [AR / Virnect Make]
          </p>
          <div className="project-title">보드게임 AR 가이드 앱</div>
          <p className="project-desc">
            Virnect와의 일경험 프로젝트를 통해 제작한 보드게임 규칙 안내용 AR
            가이드 앱입니다. 노코딩 제작 프로그램인 Virnect Make를 활용해
            개발했습니다.
          </p>
          <div className="project-tags">
            <span className="tag">AR</span><span className="tag">Virnect Make</span><span className="tag">No-code</span>
          </div>
          <span className="project-more">자세히 보기 →</span>
        </div>

        <div className="project-card" role="button" tabIndex="0" aria-label="이미지 검색 앱 프로젝트 상세보기"
          data-project-id="detail-6">
          <p className="project-desc project-kind">[App / UI / API]</p>
          <div className="project-title">이미지 검색 앱</div>
          <p className="project-desc">
            Unity UI Toolkit으로 검색 화면을 구성하고, Pixabay API 검색과
            비동기 썸네일 로딩을 연결한 이미지 검색 앱입니다.
          </p>
          <div className="project-tags">
            <span className="tag">Unity</span><span className="tag">C#</span><span className="tag">UI Toolkit</span>
            <span className="tag">UniTask</span><span className="tag">Pixabay API</span>
          </div>
          <span className="project-more">자세히 보기 →</span>
        </div>


        <div className="project-card" role="button" tabIndex="0" aria-label="Urban Survival 프로젝트 상세보기"
          data-project-id="detail-7">
          <p className="project-desc project-kind">[Game / Unity / PC]</p>
          <div className="project-title">Urban Survival</div>
          <p className="project-desc">
            네 종류의 무기와 좀비 웨이브, 보스 전투를 구현한 탑뷰 생존 게임입니다.
            전투 HUD와 설정 기능을 함께 개발하고 있습니다.
          </p>
          <div className="project-tags">
            <span className="tag">Unity 6</span><span className="tag">C#</span><span className="tag">URP</span>
            <span className="tag">NavMesh</span><span className="tag">uGUI</span>
          </div>
          <span className="project-more">자세히 보기 →</span>
        </div>
      </div>
    </section>
);
}
