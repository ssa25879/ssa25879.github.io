export default function Navbar({ dark, menuOpen, onClick }) {
  return (<>
<nav onClick={onClick}>
    <button className="nav-logo" data-show-main="">윤우상</button>
    <ul className="nav-links">
      <li><a href="#about" data-show-main="">About</a></li>
      <li><a href="#skills" data-show-main="">Skills</a></li>
      <li><a href="#projects" data-show-main="">Projects</a></li>
      <li><a href="#awards" data-show-main="">Awards</a></li>
      <li><a href="#contact" data-show-main="">Contact</a></li>
    </ul>
    <div className="nav-right">
      <button className="icon-btn" id="theme-toggle" data-toggle-theme="">{dark ? "☀️" : "🌙"}</button>
      <button className="icon-btn hamburger" data-toggle-menu="">☰</button>
    </div>
  </nav>
<div onClick={onClick} id="mobile-drawer" className={menuOpen ? "open" : ""}>
    <a href="#about" data-show-main="" data-close-menu="">About</a>
    <a href="#skills" data-show-main="" data-close-menu="">Skills</a>
    <a href="#projects" data-show-main="" data-close-menu="">Projects</a>
    <a href="#awards" data-show-main="" data-close-menu="">Awards</a>
    <a href="#contact" data-show-main="" data-close-menu="">Contact</a>
  </div>
</>);
}
