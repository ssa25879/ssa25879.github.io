function Hero() {
    return (
        <section id="hero">
            <span className="hero-badge">Portfolio</span>
            
            <h1 className="hero-title">안녕하세요,<br/><span>윤우상</span>입니다.</h1>
            
            <p className="hero-sub">모바일과 웹의 경계를 탐구하는 개발자입니다.</p>
            <div className="hero-btns">
                <a href="#projects" className="btn btn-primary">프로젝트 보기</a>
                <a href="#contact" className="btn btn-secondary">연락하기</a>
            </div>
        </section>
    )
}

export default Hero