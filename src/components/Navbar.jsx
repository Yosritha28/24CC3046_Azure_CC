import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Brand */}
        <a href="#home" className="brand">
          <span className="brand-mark">C</span>

          <span className="brand-name">
            Cloud<span>Connect</span>
          </span>
        </a>

        {/* Navigation Links */}
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#academics">Academics</a>
          <a href="#projects">Projects</a>
          <a href="#cloud-lab">Cloud Lab</a>
          <a href="#events">Events</a>
        </div>

        {/* Contact Button */}
        <a href="#contact" className="nav-contact">
          Contact
          <span>↗</span>
        </a>

      </div>
    </nav>
  );
}

export default Navbar;