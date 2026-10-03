export default function Contact() {
  return (
<section id="contact">
      <p className="label">Contact</p>
      <h2 className="section-title">연락처</h2>
      <div className="contact-grid">
        <a className="contact-card" href="mailto:ssaqwe123@gmail.com">
          <div className="contact-icon">📧</div>
          <div>
            <div className="contact-label">이메일</div>
            <div className="contact-value">ssaqwe123@gmail.com</div>
          </div>
        </a>
        <a className="contact-card" href="https://github.com/ssa25879" target="_blank">
          <div className="contact-icon">🐙</div>
          <div>
            <div className="contact-label">GitHub</div>
            <div className="contact-value">ssa25879</div>
          </div>
        </a>
      </div>
      <a href="mailto:ssaqwe123@gmail.com" className="btn btn-buy-cta">이메일 보내기</a>
    </section>
);
}
