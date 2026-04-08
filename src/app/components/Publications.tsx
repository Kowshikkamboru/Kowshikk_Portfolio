const ACHIEVEMENTS = [
  {
    title: "Patent Pending",
    description:
      "AI-powered surveillance system for intelligent monitoring and security applications",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
  {
    title: "Joint Secretary",
    description:
      "Led 25+ technical and cultural events at SVCE CSE-AIML DATA Association",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Squad Leader - NSS",
    description:
      "Led community service initiatives and public welfare activities",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "English Proficiency",
    description: "Mepro Certification (C2 Level)",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export default function Publications() {
  return (
    <section className="section" id="publications">
      <div className="container">
        <div className="section-header">
          <span className="section-tag reveal">Research &amp; Recognition</span>
          <h2 className="section-title reveal">Publications &amp; Achievements</h2>
          <p className="section-desc reveal">
            Contributing to the field of AI and computer vision through research
            and innovation.
          </p>
        </div>

        <div className="pub-content">
          <div className="pub-card highlight reveal">
            <div className="pub-icon">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <div className="pub-body">
              <span className="pub-venue">IEEE Conference</span>
              <h3 className="pub-title">
                Detecting Vehicle Number Plates Involved in Road Accidents Using
                CNN &amp; PSO
              </h3>
              <p className="pub-desc">
                Presented research on a real-time license plate detection system
                using Convolutional Neural Networks (CNNs) with hyperparameter
                optimization via Particle Swarm Optimization (PSO). Addressed
                challenges such as motion blur, variable lighting, and multilingual
                plates in traffic surveillance scenarios.
              </p>
            </div>
          </div>

          <div className="achievements-grid stagger">
            {ACHIEVEMENTS.map((a) => (
              <div className="achieve-card reveal" key={a.title}>
                <div className="achieve-icon">{a.icon}</div>
                <h3 className="achieve-title">{a.title}</h3>
                <p className="achieve-desc">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
