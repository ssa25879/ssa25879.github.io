function Navbar() {
    return (
        <nav>
            <button className="nav-logo" onClick="showMainView()">윤우상</button>
            <ul className="nav-links">
                <li><a href="#about" onClick="showMainView()">About</a></li>
                <li><a href="#skills" onClick="showMainView()">Skills</a></li>
                <li><a href="#projects" onClick="showMainView()">Projects</a></li>
                <li><a href="#awards" onClick="showMainView()">Awards</a></li>
                <li><a href="#contact" onClick="showMainView()">Contact</a></li>
            </ul>
            <div className="nav-right">
                <button className="icon-btn" id="theme-toggle" onClick="toggleTheme()">
                    🌙
                </button>
                <button className="icon-btn hamburger" onClick="toggleMenu()">☰</button>
            </div>
        </nav>
    )
}

export default Navbar