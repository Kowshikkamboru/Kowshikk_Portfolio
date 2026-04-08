const EXPERIENCES = [
  {
    logo: "SE",
    role: "Lead Software Developer",
    company: "Shata Events Pvt Ltd",
    duration: "Feb 2025 - Present",
    badge: "Current Role",
    achievements: [
      "Architected and led the complete development of Shata and Shata Partner applications and websites using Flutter, React.js, Nest.js, AWS, and DLT-integrated APIs",
      "Delivered full-featured cross-platform solutions including Android/iOS apps, user/partner/admin websites, and 4 additional restricted-access admin portals",
      "Successfully reduced development costs by over 50% compared to market quotations through efficient planning, in-house execution, and optimized architecture",
    ],
  },
  {
    logo: "CB",
    role: "Front End Web Development (FEWD)",
    company: "CSRBOX",
    duration: "Jun 2024 - Aug 2024",
    achievements: [
      "Led a team of six to develop a responsive wellness platform using HTML, CSS, JavaScript, and React",
      "Managed project workflows and version control with Agile methods and Git",
      "Ensured seamless deployment and cross-device functionality via Vercel",
    ],
  },
  {
    logo: "EC",
    role: "Campus Ambassador",
    company: "E-Cell, IIT Bombay",
    duration: "Jul 2024 - Jun 2025",
    achievements: [
      "Promoted E-Cell IIT Bombay's entrepreneurship programs, enhancing campus engagement through effective outreach strategies",
      "Strengthened communication and marketing skills by representing E-Cell initiatives in a remote, work-from-home environment",
    ],
  },
  {
    logo: "SV",
    role: "Joint Secretary",
    company: "SVCE",
    duration: "Apr 2023 - May 2025",
    achievements: [
      "Organized multiple technical and non-technical events focused on AI & ML and CSE-related technologies",
      "Executed successful event planning, including entertainment programs, prize distributions, and sports activities within the association",
      "Enhanced association visibility and engagement through effective event coordination and community-building initiatives",
    ],
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag reveal">Career Journey</span>
          <h2 className="section-title reveal">Work Experience</h2>
          <p className="section-desc reveal">
            From leading development teams to driving innovation, here&apos;s my
            professional journey.
          </p>
        </div>

        <div className="exp-timeline stagger">
          {EXPERIENCES.map((exp) => (
            <div className="exp-card reveal" key={exp.role + exp.company}>
              <div className="exp-header">
                <div className="exp-logo">{exp.logo}</div>
                <div className="exp-info">
                  <h3 className="exp-role">{exp.role}</h3>
                  <p className="exp-company">{exp.company}</p>
                  <span className="exp-date">{exp.duration}</span>
                  {exp.badge && (
                    <span className="exp-badge">{exp.badge}</span>
                  )}
                </div>
              </div>
              <div className="exp-body">
                <ul className="exp-list">
                  {exp.achievements.map((a, i) => (
                    <li className="exp-item" key={i}>{a}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
