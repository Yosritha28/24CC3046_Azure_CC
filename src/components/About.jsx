import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="about-header">
          <span className="section-label">
            ABOUT THE DEPARTMENT
          </span>

          <div className="about-header-line"></div>
        </div>

        <div className="about-main">

          <div className="about-heading">
            <h2>
              Where computer
              <br />
              science meets
              <br />
              <span>the cloud.</span>
            </h2>
          </div>

          <div className="about-content">

            <p className="about-lead">
              CloudConnect is a modern academic environment
              built around computer science, cloud technologies
              and practical innovation.
            </p>

            <p className="about-description">
              Students learn by building, experimenting and
              solving real-world problems. From software
              development and distributed systems to cloud
              infrastructure and emerging technologies, the
              department connects academic foundations with
              hands-on experience.
            </p>

            <a href="#academics" className="about-link">
              Discover our academic approach
              <span>↗</span>
            </a>

          </div>

        </div>

        <div className="about-focus">

          <div className="focus-item">
            <span>01</span>

            <div>
              <strong>Computing</strong>
              <p>
                Strong foundations in software,
                systems and problem solving.
              </p>
            </div>
          </div>

          <div className="focus-item">
            <span>02</span>

            <div>
              <strong>Cloud Systems</strong>
              <p>
                Learning modern cloud platforms,
                infrastructure and deployment.
              </p>
            </div>
          </div>

          <div className="focus-item">
            <span>03</span>

            <div>
              <strong>Innovation</strong>
              <p>
                Turning ideas into practical
                student-led technology projects.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;