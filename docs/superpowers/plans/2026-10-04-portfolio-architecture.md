# 포트폴리오 기능 분리 구현 계획

**목표:** 순수 HTML과 기존 사용자 동작을 유지하며 CSS와 JavaScript를 기능별 파일로 분리한다.

**구조:** 설계서의 CSS 6개, JS 4개를 외부 파일로 로드한다. JS는 defer와 Portfolio 네임스페이스를 사용한다.

**기술:** HTML, CSS, 브라우저 JavaScript. 패키지 설치와 빌드는 없다.

**설계서:** ../specs/2026-10-04-portfolio-architecture-design.md

**실행:** 사용자의 작업 시작 요청에 따라 현재 폴더에서 직접 수행한다. 원격 반영은 하지 않는다.

## 제약과 검토 기준

- 콘텐츠, 외부 URL, 프로젝트 ID, 테마와 메뉴 동작을 보존한다.
- 카드 클릭과 Enter/Space, 상세 복귀, popstate 동작을 확인한다.
- 잘못된 상세 참조는 현재 화면과 URL을 바꾸지 않는다.
- 480px·768px 반응형 경계와 인라인 스타일의 우선순위를 확인한다.
- 상세 URL 새로고침 복원·테마 저장 등 새 기능은 추가하지 않는다.
- 작업 로그는 작성하지 않는다. 진행 상태는 기존 Task.md에 요약한다.

## 1. 검증 준비

- [x] tests/verify.cjs에서 실제 브라우저로 원본과 현재 index.html을 열고 동작·스타일을 검증한다. 브라우저 검증용으로 Codex에 포함된 Node.js 24와 Playwright를 사용한다.
- [x] 변경 전 원본 화면 비교가 통과하고 외부 파일 분리 조건이 실패함을 확인했다.

## 2. 스타일 및 동작 분리

- [x] assets/css/{tokens,base,layout,sections,projects,responsive}.css로 기존 규칙을 책임별로 추출한다. 기존 선언 값과 반응형 규칙 순서를 보존한다.
- [x] 인라인 스타일을 프로젝트 종류·부제·상세 초기 숨김·자격증 콘텐츠 클래스에 옮긴다.
- [x] theme.js는 Portfolio.theme.init(), projects.js는 Portfolio.projects.init()/showMainView(), navigation.js는 Portfolio.navigation.init()을 제공한다.
- [x] app.js는 theme → projects → navigation 순서로 초기화한다.
- [x] index.html의 onclick/onkeydown을 data 속성으로 변경하고, 외부 파일 참조를 넣는다. 관련 편집 안내 주석을 갱신한다.
- [x] 모든 JS에 node --check를 실행하고 브라우저 검증 페이지를 다시 실행한다.

## 3. 동등성 및 마무리

- [x] 원본 커밋과 텍스트, 외부 href/src 및 ID를 대조한다.
- [x] 원본과 변경 후의 데스크톱·모바일 주요 요소 스타일을 비교하고 history 뒤로/앞으로를 확인한다.
- [x] README.md에 파일 역할, 로컬 실행, 프로젝트 추가 방법과 검증 방법을 작성한다.
- [x] Task.md와 이 계획의 진행 상태를 실제 검증 결과로 갱신한다.
- [x] git diff --check를 실행하고 관련 파일만 로컬 커밋한다.

## 실행 결과

- CSS 6개·JS 4개 분리 완료. index.html 688줄.
- node --check와 git diff --check 통과.
- 네 가지 너비의 원본 화면·다크 테마·상세 화면 비교 및 모든 동작 검증 통과.
- 로컬 HTML 직접 열기 검증 통과.
- 독립 검토에서 수정이 필요한 회귀 문제 없음.
- 외부 미디어 접근은 미검증. 원격 반영·배포는 수행하지 않음.
