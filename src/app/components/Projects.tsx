const PROJECTS = [
  {
    title: "Shata & Shata Partner",
    description:
      "Developed and deployed 2 apps using Flutter, integrated with Firebase, AWS, Razorpay, and Google Maps. Implemented login/authentication, SMS notifications, payments, and geolocation features. Published on Play Store and App Store with production-grade UI/UX.",
    tech: ["Flutter", "Firebase", "AWS", "Razorpay", "Google Maps"],
    featured: true,
    links: [
      { label: "View on iOS", url: "#" },
      { label: "View on Android", url: "#" },
    ],
    icon: (
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: "ApnaGaadi",
    description:
      "Developed a responsive 6-page website using HTML, Bootstrap, TypeScript, JavaScript, and PHP. Implemented booking forms for vehicle rentals/sales and integrated Google Sheets for data handling.",
    tech: ["HTML", "Bootstrap", "TypeScript", "PHP"],
    links: [{ label: "View Live", url: "https://apnagaadi.vercel.app" }],
    icon: (
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "SANATHANA SANGHA",
    description:
      "Developed a dynamic website on Sanathana Dharma and Hinduism using HTML, CSS, JavaScript, PHP, and MySQL. Implemented user login, homepage with RSS access, and dedicated pages for history, prayers, scriptures, and darshan bookings.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    links: [{ label: "View Live", url: "https://sanathana-vedantism.web.app" }],
    icon: (
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    title: "TABM (Encryption & Decryption)",
    description:
      "Developed TABM, a C-based program that encodes text through ASCII, binary, Gray code, 1's complement, and Morse code for complex, layered encryption.",
    tech: ["C", "Git", "GitHub"],
    links: [{ label: "View on GitHub", url: "https://github.com/koushikamboru/TABM" }],
    icon: (
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "King's Portal",
    description:
      "Building 'King's Portal,' a community-driven platform for IT services and educational resources using HTML, CSS, JS, PHP, and Firebase.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    links: [{ label: "View Live", url: "https://king-s-portal-web.web.app" }],
    icon: (
      <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const ExternalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag reveal">My Work</span>
          <h2 className="section-title reveal">Featured Projects</h2>
          <p className="section-desc reveal">
            Showcasing scalable applications and innovative solutions across
            multiple platforms.
          </p>
        </div>

        <div className="projects-grid stagger">
          {PROJECTS.map((project) => (
            <div
              className={`project-card reveal ${project.featured ? "featured" : ""}`}
              key={project.title}
            >
              <div className="project-thumb">
                <div className="project-thumb-icon">{project.icon}</div>
                {project.featured && (
                  <span className="featured-tag">Featured</span>
                )}
              </div>
              <div className="project-body">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span className="tech-pill" key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a
                      href={link.url}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      key={link.label}
                    >
                      <ExternalIcon />
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
