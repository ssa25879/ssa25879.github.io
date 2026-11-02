import mockAnswerSummary from "../assets/review-chatbot/mock-answer-summary.png";
import mockAnswerEvidenceReviews from "../assets/review-chatbot/mock-answer-evidence-reviews.png";

export default function Detail10({ active, onClick }) {
  return (
    <section className="project-detail detail-page" id="detail-10" style={{ display: active ? "block" : "none" }} onClick={onClick}>
      <button className="detail-back" data-back-to-projects="">← 목록으로</button>
      <div className="detail-header">
        <h1 className="detail-title">쇼핑 리뷰 AI 분석기</h1>
        <p className="detail-period">review-chatbot · Next.js 16 App Router</p>
        <div className="detail-tags">
          <span className="detail-tag">Next.js</span><span className="detail-tag">React</span>
          <span className="detail-tag">TypeScript</span><span className="detail-tag">LangChain</span>
          <span className="detail-tag">Pinecone</span><span className="detail-tag">Supabase</span>
        </div>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">프로젝트 개요</h2>
        <p className="retro-text">
          상품 리뷰를 검색해 사용자의 질문에 답하고, 답변 근거가 된 리뷰를 함께 보여주는 RAG 챗봇입니다.
          샘플 데이터로 실행하는 Mock 모드와 외부 검색·저장 서비스를 연결하는 실데이터 모드를 제공합니다.
        </p>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">Mock 모드 분석 화면</h2>
        <div className="screenshot-grid review-chatbot-gallery">
          <figure className="screenshot-box">
            <a className="review-chatbot-screenshot-link" href={mockAnswerSummary} target="_blank" rel="noopener noreferrer"
              aria-label="분석 결과 요약 화면 원본 이미지 열기">
              <img src={mockAnswerSummary} alt="Mock 데이터 분석 답변과 리뷰 평균 평점 요약 화면" />
            </a>
            <figcaption>분석 결과 요약 · 클릭해 원본 보기</figcaption>
          </figure>
          <figure className="screenshot-box">
            <a className="review-chatbot-screenshot-link" href={mockAnswerEvidenceReviews} target="_blank" rel="noopener noreferrer"
              aria-label="답변 근거 리뷰 화면 원본 이미지 열기">
              <img src={mockAnswerEvidenceReviews} alt="분석 답변의 근거가 된 참고 리뷰 목록 화면" />
            </a>
            <figcaption>답변 근거 리뷰 · 클릭해 원본 보기</figcaption>
          </figure>
        </div>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">프로젝트 개발 및 수행 내용</h2>
        <div className="detail-subsection">
          <div className="detail-subsection-title">1. 리뷰 검색과 답변 근거 표시</div>
          <ul className="detail-list">
            <li>질문과 관련된 리뷰를 검색해 답변 생성에 사용하고, 근거 리뷰도 함께 반환합니다.</li>
            <li>대화 기록을 저장해 질문과 응답 흐름을 이어갈 수 있도록 구성했습니다.</li>
          </ul>
        </div>
        <div className="detail-subsection">
          <div className="detail-subsection-title">2. Mock·실데이터 모드 분리</div>
          <ul className="detail-list">
            <li>Mock 모드는 샘플 CSV를 메모리에 올려 키워드 검색과 템플릿 답변을 제공하며, 외부 API나 DB 없이 실행할 수 있습니다.</li>
            <li>실데이터 모드는 Pinecone 의미 검색, Gemini 답변 생성, Supabase 리뷰·대화 저장을 연결합니다.</li>
          </ul>
        </div>
        <div className="detail-subsection">
          <div className="detail-subsection-title">3. 모델 선택</div>
          <ul className="detail-list">
            <li>실데이터 모드에서는 Gemini 대신 로컬 Ollama 모델을 사용해 답변을 생성할 수 있습니다.</li>
          </ul>
        </div>
      </div>

      <div className="detail-section">
        <h2 className="detail-section-title">프로젝트 저장소</h2>
        <a className="detail-link" href="https://github.com/ssa25879/review-chatbot" target="_blank"
          rel="noopener noreferrer">🔗 GitHub 저장소</a>
      </div>
    </section>
  );
}
