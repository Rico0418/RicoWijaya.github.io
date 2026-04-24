import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#hero" className="nav-logo">
        Rico<span className="nav-logo-accent">_</span>
      </a>
      <div className="nav-links">
        <a href="#about" className="nav-link">~/about</a>
        <a href="#skills" className="nav-link">~/skills</a>
        <a href="#projects" className="nav-link">~/projects</a>
        <a href="#experience" className="nav-link">~/experience</a>
        <a href="#contact" className="nav-link">~/contact</a>
      </div>
    </nav>
  );
};

export default Navbar;