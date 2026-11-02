# 윤우상 포트폴리오

순수 HTML·CSS·JavaScript로 구성한 GitHub Pages 사이트입니다. 빌드 도구와 실행용 패키지 의존성 없이 정적 파일을 배포합니다.

## 파일 역할

```text
index.html                 콘텐츠와 메인·프로젝트 상세 HTML
assets/css/
  tokens.css               기본 테마·다크 테마 변수
  base.css                 리셋·본문·포커스 스타일
  layout.css               내비게이션·메뉴·공통 레이아웃
  sections.css             소개·기술·자격증·연락처·공통 버튼
  projects.css             프로젝트 목록·상세 화면
  responsive.css           768px·480px 반응형 규칙
assets/js/
  theme.js                 테마 전환
  projects.js              프로젝트 표시·키보드·History API
  navigation.js            모바일 메뉴·메인 화면 복귀
  app.js                   기능 초기화
tests/verify.cjs            프로젝트 구성·탐색의 브라우저 회귀 검사
```

스타일은 위 순서로 로드합니다. 스크립트는 `theme → projects → navigation → app` 순서로 `defer` 로드합니다. 각 기능은 즉시 실행 함수 내부에 구현을 두고 `window.Portfolio`를 통해 필요한 인터페이스만 공유합니다.

## 콘텐츠 및 기능 수정

- 소개·기술·연락처 등의 내용은 `index.html`의 해당 섹션에서 수정합니다.
- 색상·간격은 `assets/css/tokens.css`에서 수정합니다. 기능별 스타일은 해당 CSS 파일에서 수정합니다.
- 동작은 해당 JavaScript 파일에서 수정합니다. HTML에 `onclick`이나 `onkeydown`을 추가하지 않습니다.
- 대표 프로젝트는 Urban Survival, VR 리듬게임, 이미지 검색 앱, 보드게임 AR 가이드 앱, 턴캘, Frending(capstone) 순서입니다. 식품 정보 앱, Block Dodge, 냉털픽, 리뷰 AI 분석기, 인계한장, 복습큐, 구독레이더는 다른 프로젝트로 표시합니다.
- 대표 프로젝트는 데스크톱 3열, 768px 이하 2열, 480px 이하 1열로 표시합니다. 다른 프로젝트는 최소 카드 폭 220px의 격자를 사용하며 동일한 모바일 열 수를 적용합니다. 카드 내부 여백은 기본 20px, 모바일 16px이고 내용은 생략하지 않습니다.
- 새 기능 파일은 HTML에 `defer`로 연결하고 `app.js`에서 초기화합니다.

프로젝트 추가 순서:

1. `#projects .projects-grid`에 카드 HTML을 추가합니다.
2. 카드에 `role="button"`, `tabindex="0"`, `aria-label`, `data-project-id="detail-14"`를 지정합니다. 현재 프로젝트는 `detail-1`부터 `detail-13`까지 등록되어 있습니다.
3. `#detail-view`에 같은 ID의 `<section class="project-detail detail-page" id="detail-14">`를 추가합니다.
4. 상세 목록 복귀 버튼에 `class="detail-back" data-back-to-projects`를 지정합니다.

`data-show-main`은 메인 화면 복귀, `data-close-menu`는 모바일 메뉴 닫기, `data-toggle-menu`와 `data-toggle-theme`는 각각 메뉴·테마 버튼을 연결합니다. 카드와 상세 화면의 ID가 일치하지 않으면 화면과 URL을 변경하지 않습니다.

## 로컬 확인과 배포

`index.html`을 브라우저에서 직접 열어 확인할 수 있습니다. 별도 HTML 조각을 fetch로 불러오거나 ES 모듈을 사용하지 않습니다. 필요하면 에디터의 정적 서버로 확인할 수 있습니다.

GitHub Pages에는 루트 `index.html`과 `assets/`를 함께 반영합니다. 별도 빌드 단계는 없습니다. 현재 작업은 로컬 수정이며 원격 반영·배포는 별도로 수행합니다.

기존 동작을 유지하므로 상세 해시 URL을 새로고침하면 메인 화면으로 시작하고, 테마 선택은 저장하지 않습니다.

## 검증

`tests/verify.cjs`는 Node.js 20 이상, Playwright와 로컬 Chrome 또는 Edge가 필요합니다. 사이트 실행에 필요한 의존성은 아닙니다. `BROWSER_PATH` 환경변수로 브라우저 실행 파일을 지정할 수도 있습니다.

Playwright가 Node.js에서 검색 가능한 환경에서는 다음 명령을 실행합니다.

```powershell
node tests/verify.cjs
```

Codex 기본 Node.js가 오래된 버전일 때는 포함된 런타임을 사용합니다.

```powershell
$runtimeRoot = "$env:USERPROFILE\.cache\codex-runtimes\codex-primary-runtime\dependencies\node"
$env:NODE_PATH = "$runtimeRoot\node_modules"
& "$runtimeRoot\bin\node.exe" tests/verify.cjs
```

320·375·480·768·900·1280px에서 대표작 순서, 전체 프로젝트 13개 진입·복귀, 다크 테마와 가로 넘침을 검사합니다. capstone 기술·담당 내용, 관련 프로젝트 링크, Enter/Space, 뒤로/앞으로, 메인 복귀, 모바일 메뉴, 테마 초기화, 상세 해시 새로고침, 잘못된 ID와 로컬 파일 실행·JavaScript 예외도 확인합니다. 실행 후 `tests/desktop.png`, `tests/mobile.png`를 생성하며 커밋에는 포함하지 않습니다. 외부 미디어 요청은 차단하므로 외부 이미지·영상의 접근과 실제 재생은 별도 확인해야 합니다.

## 프로젝트 미리보기

식품 정보 앱의 기존 기록은 유지하고, 냉털픽을 이를 개선·확장한 앱인토스 미니앱으로 소개합니다. 대표작 6개 순서는 유지합니다.

미리보기가 2장 이하였던 프로젝트를 보강하고, AR 가이드의 기존 Drive 임베드를 원본 이미지 3장으로 교체했습니다. 새 앱인토스 프로젝트도 각각 미리보기 3장을 제공합니다. `assets/images/`에 원본 캡처를 보관하며, 이미지를 누르면 원본 크기로 열립니다. 캡션과 대체 텍스트를 함께 제공합니다.

- SNS: capstone 저장소 `images/`의 피드·댓글·프로필·DM 화면
- VR: 저장소의 기존 화면과 사용자 프로젝트에 보관된 플레이 캡처
- 앱인토스: 연결된 콘솔에 등록된 공식 미리보기. 구독레이더는 출시 준비 상태로 표시
- 리뷰 AI: Mock 모드의 초기 화면·답변 요약·근거 리뷰

자동 검사는 이미지 보강 대상과 신규 앱의 미리보기 3장 이상, 로컬 이미지 로딩·대체 텍스트, 저장소 링크와 전체 13개 상세 탐색을 확인합니다.
