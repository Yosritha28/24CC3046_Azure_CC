import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span>C</span>
              CloudConnect
            </a>

            <p>
              Department of Computer Science
              <br />
              & Cloud Technologies
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-nav">

            <span>EXPLORE</span>

            <a href="#about">About</a>
            <a href="#academics">Academics</a>
            <a href="#projects">Projects</a>
            <a href="#cloud-lab">Cloud Lab</a>
            <a href="#events">Events</a>

          </div>

          {/* Technology */}
          <div className="footer-nav">

            <span>TECHNOLOGY</span>

            <p>Azure</p>
            <p>Cloud Computing</p>
            <p>Distributed Systems</p>
            <p>Student Innovation</p>

          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © 2026 CloudConnect
          </span>

          <span>
            Built for the cloud.
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;