"use client";

const EXPERIENCES = [
  {
    id: "shata",
    logo: "SE",
    role: "Software Engineer",
    company: "Shata Events Pvt. Ltd.",
    duration: "Feb 2025 – Mar 2026",
    type: "Full-Time",
    badge: "Resigned",
    location: "Hyderabad, India (On-site)",
    color: "#22d3ee",
    linkedProjects: ["shata-app", "shata-partner", "shata-websites"],
    summary:
      "Sole developer responsible for the complete digital ecosystem of a fast-growing event management startup — from architecture to App Store deployment.",
    achievements: [
      {
        label: "Cross-Platform App Development",
        star: {
          situation:
            "Shata Events needed a full-featured marketplace app for vendors and clients with no existing codebase or infrastructure.",
          task:
            "Design, build, and deploy two production Flutter applications (Shata & Shata Partner) from scratch within a tight startup budget.",
          action:
            "Architected the Flutter apps with REST API consumption, Firebase Auth (email + OTP), Google Maps integration, Razorpay payments, and Jio DLT SMS. Handled complete Android/iOS deployment lifecycle — keystore signing, Play Console, App Store Connect, provisioning profiles.",
          result:
            "Both apps live on Play Store & App Store. Full end-to-end delivery solo, cutting outsourcing costs by 50%+.",
        },
      },
      {
        label: "DLT/SMS Integration",
        star: {
          situation:
            "Regulatory requirement for transactional SMS in India mandated DLT registration — a process most vendors quoted ₹2L+ for.",
          task:
            "Own the entire Jio DLT onboarding, template approval, and API integration independently.",
          action:
            "Navigated TRAI compliance, registered templates, integrated the DLT API into the Flutter codebase, and built a fallback mechanism for failed deliveries.",
          result:
            "100% compliant SMS pipeline delivered at ₹0 additional vendor cost. Zero SMS delivery issues post-launch.",
        },
      },
      {
        label: "Multi-Portal Web Ecosystem",
        star: {
          situation:
            "Shata required separate portals for public users, partners, and 4 internal admin functions — each with distinct access controls.",
          task:
            "Build and deploy all 6 web surfaces (public site, partner site, 4 admin portals) with responsive UI/UX.",
          action:
            "Built landing pages using vanilla HTML/CSS/JS (Syne + Instrument Serif fonts, #FF6B2C accent), admin portals with React.js, and integrated REST APIs for real-time data. Deployed on Vercel with environment-based access control.",
          result:
            "All 6 surfaces live and operational. Reduced projected development cost by over 50% vs. market quotations.",
        },
      },
    ],
  },
  {
    id: "systecks",
    logo: "SY",
    role: "Web Developer",
    company: "Systecks Solutions LLP",
    duration: "Jun 2024 – Aug 2024",
    type: "Internship",
    location: "Remote",
    color: "#8b5cf6",
    linkedProjects: [],
    summary:
      "Contributed to client-facing web projects, gaining hands-on experience in professional development workflows.",
    achievements: [
      {
        label: "Client Web Development",
        star: {
          situation:
            "Client projects required responsive, modern web pages delivered on deadline.",
          task:
            "Develop and maintain web interfaces using HTML, CSS, and JavaScript under senior developer guidance.",
          action:
            "Built responsive layouts, implemented UI components, collaborated via Git, and participated in code reviews.",
          result:
            "Delivered assigned modules on time; strengthened understanding of professional development workflows and version control practices.",
        },
      },
    ],
  },
  {
    id: "csrbox",
    logo: "CB",
    role: "Front-End Web Development Intern",
    company: "CSRBOX",
    duration: "Jun 2024 – Aug 2024",
    type: "Internship",
    location: "Remote",
    color: "#22c55e",
    linkedProjects: ["wellness-platform"],
    summary:
      "Led a six-person team to deliver a wellness platform as part of AICTE-backed CSR initiative.",
    achievements: [
      {
        label: "Wellness Platform Leadership",
        star: {
          situation:
            "CSRBOX needed a cross-device responsive wellness portal under an AICTE initiative, with a multi-person student team and no prior codebase.",
          task:
            "Lead frontend development and coordinate a team of 6 to deliver the platform within the internship timeline.",
          action:
            "Architected the React component structure, assigned module ownership, managed version control via Git (Agile sprints), and handled Vercel deployment pipeline.",
          result:
            "Delivered fully functional wellness platform on time. Gained leadership, project management, and cross-team coordination experience.",
        },
      },
    ],
  },
  {
    id: "uipath",
    logo: "UI",
    role: "RPA Developer Intern",
    company: "AICTE / UiPath",
    duration: "Sep 2023 – Nov 2023",
    type: "Internship",
    location: "Remote",
    color: "#f59e0b",
    linkedProjects: [],
    summary:
      "Completed AICTE-backed UiPath RPA Developer program, earning Foundation & Advanced certifications.",
    achievements: [
      {
        label: "RPA Automation Development",
        star: {
          situation:
            "Program required hands-on automation of real-world business processes using UiPath Studio.",
          task:
            "Design, build, and test automation workflows for data entry, web scraping, and document processing use cases.",
          action:
            "Built 10+ automation bots using UiPath Studio v2021.10, applied selectors, exception handling, and Orchestrator deployment. Completed Foundation and Advanced certification tracks.",
          result:
            "Earned UiPath RPA Developer Foundation & Advanced certifications (v2021.10). Solid foundation in enterprise process automation.",
        },
      },
    ],
  },
  {
    id: "android",
    logo: "AN",
    role: "Android Developer Intern",
    company: "AICTE / Google",
    duration: "Apr 2024 – Jun 2024",
    type: "Internship",
    location: "Remote",
    color: "#3b82f6",
    linkedProjects: [],
    summary:
      "AICTE & Google co-certified Android Development program focusing on Kotlin and Flutter.",
    achievements: [
      {
        label: "Android App Development",
        star: {
          situation:
            "Program required building functional Android applications from UI design to deployment readiness.",
          task:
            "Complete structured modules covering Android architecture, Kotlin fundamentals, and Flutter cross-platform development.",
          action:
            "Built multiple practice apps with activity lifecycles, navigation, API integration, and Flutter widgets. Applied Material Design principles throughout.",
          result:
            "AICTE/Google Android Developer certification earned. Applied Flutter skills directly in subsequent Shata Events role.",
        },
      },
    ],
  },
  {
    id: "ecell",
    logo: "EC",
    role: "Campus Ambassador",
    company: "E-Cell, IIT Bombay",
    duration: "Jul 2024 – Jun 2025",
    type: "Volunteer / Leadership",
    location: "Remote",
    color: "#f97316",
    linkedProjects: [],
    summary:
      "Represented one of India's most prestigious entrepreneurship cells on campus.",
    achievements: [
      {
        label: "Campus Outreach & Entrepreneurship",
        star: {
          situation:
            "E-Cell IIT Bombay needed campus representatives to drive awareness of national entrepreneurship programs.",
          task:
            "Promote E-Cell events, workshops, and competitions to the SVCE student body.",
          action:
            "Ran outreach campaigns, promoted Eureka! and other flagship events, onboarded student registrations, and represented E-Cell in remote coordination.",
          result:
            "Strengthened communication and marketing skills; built a personal network across India's startup ecosystem.",
        },
      },
    ],
  },
];

export default function Experience() {
  const scrollToProject = (id: string) => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      const card = document.getElementById(`project-${id}`);
      if (card) {
        card.scrollIntoView({ behavior: "smooth", block: "center" });
        card.classList.add("highlight-flash");
        setTimeout(() => card.classList.remove("highlight-flash"), 2000);
      }
    }, 600);
  };

  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag reveal">Career Journey</span>
          <h2 className="section-title reveal">Experience</h2>
          <p className="section-desc reveal">
            Full-time roles, internships, and leadership positions — each with the story behind the impact.
          </p>
        </div>

        {/* Legend */}
        <div className="exp-legend reveal">
          {["Full-Time", "Internship", "Volunteer / Leadership"].map((t) => (
            <span className="exp-legend-item" key={t}>
              <span className={`exp-type-dot type-${t.split(" ")[0].toLowerCase()}`} />
              {t}
            </span>
          ))}
        </div>

        <div className="exp-timeline stagger">
          {EXPERIENCES.map((exp) => (
            <div
              className="exp-card reveal"
              key={exp.id}
              id={`exp-${exp.id}`}
              style={{ "--exp-color": exp.color } as React.CSSProperties}
            >
              <div className="exp-side">
                <div className="exp-logo" style={{ borderColor: `${exp.color}40`, color: exp.color }}>
                  {exp.logo}
                </div>
                <div className="exp-connector" />
              </div>

              <div className="exp-main">
                <div className="exp-header">
                  <div className="exp-title-block">
                    <div className="exp-badges-row">
                      <span className={`exp-type-badge type-${exp.type.split(" ")[0].toLowerCase()}`}>
                        {exp.type}
                      </span>
                      {exp.badge && (
                        <span className="exp-status-badge">{exp.badge}</span>
                      )}
                    </div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">
                      <span className="exp-company-name">{exp.company}</span>
                      <span className="exp-sep">·</span>
                      <span className="exp-location">{exp.location}</span>
                    </p>
                    <span className="exp-date">{exp.duration}</span>
                  </div>

                  {exp.linkedProjects.length > 0 && (
                    <button
                      className="exp-project-link-btn"
                      onClick={() => scrollToProject(exp.linkedProjects[0])}
                      title="View related projects"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      View Projects
                    </button>
                  )}
                </div>

                <p className="exp-summary">{exp.summary}</p>

                <div className="exp-achievements">
                  {exp.achievements.map((ach, i) => (
                    <details className="star-detail" key={i}>
                      <summary className="star-summary">
                        <span className="star-bullet">▹</span>
                        <span className="star-label">{ach.label}</span>
                        <svg className="star-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </summary>
                      <div className="star-body">
                        {(["situation", "task", "action", "result"] as const).map((key) => (
                          <div className="star-row" key={key}>
                            <span className="star-key">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                            <p className="star-text">{ach.star[key]}</p>
                          </div>
                        ))}
                      </div>
                    </details>
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
