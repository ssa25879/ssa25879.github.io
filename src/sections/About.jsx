function About() {
    return (
        <section id="about">
            <p className="label">About Me</p>
            <h2 className="section-title">자기소개</h2>
            {/* ✏️ 수정: 자기소개 본문 */}
            <p className="about-text">
                경기과학기술대학교 컴퓨터모바일융합과를 졸업하고, 전공심화 과정까지
                이수하며 모바일과 웹 개발 전반에 걸친 역량을 쌓았습니다. 다양한
                프로젝트와 자격증 취득 경험을 바탕으로 꾸준히 성장하고 있습니다.
            </p>
            <div className="edu-grid">
                <div className="edu-card">
                    <span className="edu-badge">3년제</span>
                    <div className="edu-school">경기과학기술대학교</div>
                    <div className="edu-detail">
                        컴퓨터모바일융합과 · 졸업 (2018 ~ 2023)
                    </div>
                </div>
                <div className="edu-card">
                    <span className="edu-badge">전공심화</span>
                    <div className="edu-school">경기과학기술대학교</div>
                    <div className="edu-detail">
                        컴퓨터모바일융합과 전공심화 · 졸업 (2023 ~ 2024)
                    </div>
                </div>
                <div className="edu-card">
                    <span className="edu-badge edu-badge-active">현재 소속중</span>
                    <div className="edu-school">한국폴리텍대학 광명융합기술교육원</div>
                    <div className="edu-detail">하이테크 과정 증강현실과</div>
                </div>
            </div>
        </section>
    )
}

export default About