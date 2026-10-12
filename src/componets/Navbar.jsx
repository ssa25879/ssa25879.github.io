import { useState } from 'react'

function Navbar() {
    const [isDark, setIsDark] = useState(() => document.body.classList.contains('dark'))
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function toggleTheme() {
        const nextIsDark = !isDark
        document.body.classList.toggle('dark', nextIsDark)
        setIsDark(nextIsDark)
    }

    return (
        <nav>
            <a className="nav-logo" href="#hero">윤우상</a>
            <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#awards">Awards</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="nav-right">
                <button
                    className="icon-btn"
                    id="theme-toggle"
                    type="button"
                    aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
                    aria-pressed={isDark}
                    onClick={toggleTheme}
                >
                    {isDark ? '☀️' : '🌙'}
                </button>
                <button
                    className="icon-btn hamburger"
                    type="button"
                    aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-drawer"
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    {isMenuOpen ? '×' : '☰'}
                </button>
            </div>
            <div
                id="mobile-drawer"
                className={isMenuOpen ? 'open' : ''}
                aria-hidden={!isMenuOpen}
                inert={!isMenuOpen}
            >
                <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
                <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
                <a href="#awards" onClick={() => setIsMenuOpen(false)}>Awards</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
        </nav>
    )
}

export default Navbar
