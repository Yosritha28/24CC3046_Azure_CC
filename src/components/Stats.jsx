import "./Stats.css";

function Stats() {
  const stats = [
    {
      number: "01",
      title: "Cloud-first",
      description: "Learning",
    },
    {
      number: "02",
      title: "Student",
      description: "Innovation",
    },
    {
      number: "03",
      title: "Industry",
      description: "Projects",
    },
    {
      number: "04",
      title: "Global",
      description: "Perspective",
    },
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">

        <div className="stats-intro">
          <span>AT A GLANCE</span>
          <p>
            A department designed around technology,
            experimentation and real-world problem solving.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.number}>

              <span className="stat-number">
                {stat.number}
              </span>

              <div className="stat-text">
                <strong>{stat.title}</strong>
                <span>{stat.description}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Stats;