import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-content">

          <div className="hero-eyebrow">
            <span className="eyebrow-dot"></span>
            Department of Computer Science & Cloud Technologies
          </div>

          <h1>
            Build.
            <br />
            <span>Cloud.</span>
            <br />
            Connect.
          </h1>

          <p className="hero-description">
            A modern academic ecosystem where technology,
            cloud computing and student innovation come together
            to build what comes next.
          </p>

          <div className="hero-actions">
            <a href="#about" className="hero-primary">
              Explore the Department
              <span>↗</span>
            </a>

            <a href="#cloud-lab" className="hero-secondary">
              Explore Cloud Lab
            </a>
          </div>

          <div className="hero-meta">
            <div>
              <strong>01</strong>
              <span>Cloud-first learning</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Student innovation</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Industry-ready skills</span>
            </div>
          </div>

        </div>

        {/* Right Visual */}
        <div className="hero-visual">

          <div className="hero-card">

            <div className="card-top">
              <div>
                <span className="status-dot"></span>
                CLOUD SYSTEM
              </div>

              <span className="card-label">
                LIVE
              </span>
            </div>

            <div className="cloud-symbol">
              ☁
            </div>

            <h2>
              Connected
              <br />
              by the Cloud.
            </h2>

            <p>
              Learn. Build. Deploy.
            </p>

            <div className="architecture-mini">

              <div className="architecture-node">
                <span>USER</span>
              </div>

              <div className="architecture-line"></div>

              <div className="architecture-node">
                <span>AZURE</span>
              </div>

              <div className="architecture-line"></div>

              <div className="architecture-node">
                <span>WEB</span>
              </div>

            </div>

            <div className="card-footer">
              <span>Global delivery</span>
              <span>HTTPS enabled</span>
            </div>

          </div>

          <div className="floating-badge badge-one">
            <span>01</span>
            Learn
          </div>

          <div className="floating-badge badge-two">
            <span>02</span>
            Build
          </div>

          <div className="floating-badge badge-three">
            <span>03</span>
            Deploy
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;