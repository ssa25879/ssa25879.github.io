const awards = [
    {
        name: 'SQL개발자(SQLD자격)',
        date: '2024.06',
        organization: '한국데이터베이스진흥센터',
    },
    {
        name: '정보기술자격(ITQ) 한글엑셀(한셀) B등급',
        date: '2018.12',
        organization: '한국생산성본부',
    },
    {
        name: '정보기술자격(ITQ) 한글파워포인트(한쇼) A등급',
        date: '2018.12',
        organization: '한국생산성본부',
    },
    {
        name: '1종보통운전면허',
        date: '2017.08',
        organization: '경찰청(운전면허시험관리단)',
    },
]

function Awards() {
    return (
        <section id="awards">
            <p className="label">Certificates</p>
            <h2 className="section-title">자격증</h2>
            <div className="awards-list">
                {awards.map((award) => (
                    <div className="award-item" key={award.name}>
                        <div className="award-dot" />
                        <div style={{ flex: 1 }}>
                            <div className="award-top">
                                <span className="award-name">
                                    {award.name}
                                    <span className="badge-pass">최종합격</span>
                                </span>
                                <span className="award-date">{award.date}</span>
                            </div>
                            <div className="award-detail">{award.organization}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Awards
