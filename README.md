# 윤우상 포트폴리오 · React

원격 `main`의 `e1dd9f41bd4b6cae3c96d6be82b9a1070579684c`를 기준으로 화면과 동작을 React로 변환했습니다. React 19와 기존 Vite 도구 체인을 사용합니다.

## 실행

Node.js 22.12 이상과 npm이 필요합니다.

```powershell
npm ci
npm run dev
```

```powershell
npm run build
npm run preview
npm run lint
npm test
```

`npm test`는 프로덕션 빌드를 만든 뒤 Playwright로 Chrome 또는 Edge에서 프로젝트 구성과 탐색 동작을 검사합니다. Windows 기본 설치 경로에서 브라우저를 찾으며, 다른 경로는 `BROWSER_PATH` 환경변수로 지정합니다.

## 구성

- `src/App.jsx`: 상세 화면, 테마, 모바일 메뉴 상태와 History API 동작
- `src/componets/Navbar.jsx`: 고정 내비게이션과 모바일 메뉴
- `src/sections/`: 소개, 기술, 대표 프로젝트 6개와 다른 프로젝트 4개, 자격증, 연락처
- `src/componets/ProjectDetail.jsx`, `src/pages/Detail1.jsx`~`Detail10.jsx`: 프로젝트 상세 화면
- `src/styles/`: main에서 가져온 CSS 6개. `src/index.css`가 원래 순서로 로드
- `tests/verify.cjs`: 반응형 레이아웃과 프로젝트 탐색의 브라우저 회귀 검사

콘텐츠는 HTML 문자열 주입 없이 JSX로 렌더링합니다. 상세 화면을 포함한 DOM을 유지하여 기존 CSS, 외부 미디어, 메뉴 상태와 화면 복귀 동작을 보존합니다. 카드의 `data-project-id`는 상세 ID와 일치해야 합니다.

대표 프로젝트는 Urban Survival, VR 리듬게임, 이미지 검색 앱, 보드게임 AR 가이드 앱, 턴캘, Frending(capstone) 순서입니다. 식품 정보 앱, Block Dodge, 냉털픽, 리뷰 AI 분석기는 다른 프로젝트로 유지합니다.

`#detail-1`~`#detail-10` 해시와 History API를 사용하며, 상세 URL 새로고침은 메인에서 시작합니다. 테마 선택은 저장하지 않습니다. 기존 React Router의 `/projects/:projectId` 경로는 해시 전환으로 교체했습니다.

## 검증 범위

320·375·480·768·900·1280px에서 대표작 순서, 전체 프로젝트 10개 진입·복귀, 다크 테마와 가로 넘침을 검사합니다. capstone 기술·담당 내용, 관련 프로젝트 링크, Enter/Space, 뒤로/앞으로, 메인 복귀, 모바일 메뉴, 테마 초기화, 상세 해시 새로고침, 잘못된 ID와 JavaScript 예외도 확인합니다. 실행 후 `tests/desktop.png`, `tests/mobile.png`를 생성하며 Git에는 포함하지 않습니다.

자동 검사 중 외부 요청은 차단합니다. 외부 이미지 접근과 영상 재생, 연결한 서비스의 실제 동작은 별도로 확인해야 합니다.

## 배포

배포 대상은 원본 소스가 아닌 `npm run build` 결과의 `dist/`입니다. GitHub Pages를 사용하려면 빌드 산출물을 배포하는 설정이 필요합니다. 이번 작업에는 원격 푸시와 Pages 배포를 포함하지 않습니다.
