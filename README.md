# 윤우상 포트폴리오

React와 Vite로 구성한 개인 포트폴리오입니다. 프로젝트 목록과 상세 화면은 React Router로 연결합니다.

## 실행

```sh
npm install
npm run dev
```

## 빌드 및 미리보기

```sh
npm run build
npm run preview
```

빌드 결과는 `dist/`에 생성됩니다. Vite 설정은 GitHub Pages에서 프로젝트 상세 주소를 직접 열 수 있도록 `dist/404.html`도 생성합니다.

## 프로젝트 구조

- `src/sections/`: 메인 페이지의 소개, 기술, 프로젝트, 자격증, 연락처 섹션
- `src/componets/`: 내비게이션과 프로젝트 카드·상세 표시 컴포넌트
- `src/data/projects.js`: 프로젝트 목록과 상세 콘텐츠
- `src/pages/ProjectDetailPage.jsx`: `/projects/:projectId` 상세 경로
- `src/index.css`: 공통 레이아웃과 포트폴리오 스타일
