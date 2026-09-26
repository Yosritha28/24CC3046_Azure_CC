import "./Projects.css";

function Projects() {
  const projects = [
    {
      number: "01",
      category: "CLOUD PLATFORM",
      title: "CloudPulse",
      description:
        "A cloud-based monitoring platform designed to visualize application performance, infrastructure health and deployment activity.",
      tags: ["Azure", "Cloud", "Monitoring"],
      featured: true,
    },
    {
      number: "02",
      category: "SMART SYSTEMS",
      title: "VoyageX",
      description:
        "A technology platform that uses data-driven recommendations to create more personalized and sustainable tourism experiences.",
      tags: ["Data", "Recommendations", "Web"],
      featured: false,
    },
    {
      number: "03",
      category: "EMERGING TECHNOLOGY",
      title: "GuardianAR",
      description:
        "An interactive emergency-response concept designed to help users access relevant information quickly in critical situations.",
      tags: ["AR", "Unity", "Smart Systems"],
      featured: false,
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* Header */}
        <div className="projects-header">

          <div>
            <span className="section-label">
              STUDENT PROJECTS
            </span>

            <h2>
              Ideas become
              <br />
              <span>real systems.</span>
            </h2>
          </div>

          <p>
            Students turn classroom concepts into practical
            technology projects, exploring cloud platforms,
            data, intelligent systems and emerging technologies.
          </p>

        </div>

        {/* Projects */}
        <div className="projects-grid">

          {projects.map((project) => (
            <article
              className={`project-card ${
                project.featured ? "project-featured" : ""
              }`}
              key={project.number}
            >

              {/* Visual */}
              <div className="project-visual">

                <div className="project-grid-pattern"></div>

                <div className="project-orbit orbit-one"></div>
                <div className="project-orbit orbit-two"></div>

                <div className="project-core">
                  <span>{project.number}</span>
                </div>

                <div className="project-status">
                  <span></span>
                  PROJECT LAB
                </div>

              </div>

              {/* Content */}
              <div className="project-content">

                <div className="project-top">
                  <span className="project-number">
                    {project.number}
                  </span>

                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-bottom">

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="project-link">
                    VIEW
                  </span>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;