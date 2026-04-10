"use client";

const SKILLS = {
  Languages: ["C", "Java", "Python", "JavaScript", "TypeScript", "Dart", "HTML", "CSS", "PHP", "SQL"],
  Technologies: ["Flutter", "React.js", "Next.js", "Node.js", "REST APIs", "Firebase", "Supabase", "RPA (UiPath)"],
  Cloud & Tools: ["AWS (Architecture)", "Cloudflare Workers", "Vercel", "Git", "GitHub", "Figma", "VS Code"],
  "AI / ML": ["TensorFlow", "OpenCV", "CNN", "PSO", "Whisper (OpenAI)", "Workers AI", "Computer Vision"],
};

const EDUCATION = [
  {
    id: "btech",
    period: "Sep 2022 – May 2025",
    degree: "B.Tech in CSE (AI & ML)",
    school: "Sree Vidyanikethan Engineering College, Tirupati",
    grade: "CGPA: 7.97 / 10",
    highlight: "IEEE Publication + Patent Filed",
    highlightColor: "#f59e0b",
    linkedProjects: ["vehicle-plate-cnn", "ai-accident-patent", "geoprocessing"],
    linkedPubs: ["ieee", "patent"],
    achievements: [
      "First-author IEEE paper at ICICCS 2025",
      "Indian Patent filed (App No. 202541110844)",
      "ISRO Geoprocessing Python Certification",
      "Pearson MePro C2 Level English Certification",
      "Joint Secretary — CSE-AIML Association",
      "NSS Squad Leader",
    ],
  },
  {
    id: "diploma",
    period: "Jun 2018 – Aug 2021",
    degree: "Diploma in Computer Science",
    school: "Andhra Polytechnic College, Kakinada",
    grade: "77.69%",
    highlight: "3 Independent Projects Shipped",
    highlightColor: "#3b82f6",
    linkedProjects: ["apnagaadi", "sanathana", "tabm"],
    linkedPubs: [],
    achievements: [
      "Built ApnaGaadi — automobile rental web platform",
      "Built Sanathana Sangha — full-stack PHP/MySQL portal",
      "Built TABM — multi-layer C encryption system",
      "Foundation in web dev, databases & systems programming",
    ],
  },
  {
    id: "ssc",
    period: "2018",
    degree: "SSC (Secondary School Certificate)",
    school: "Ratnam High School, Nellore",
    grade: "GPA: 8.7 / 10",
    highlight: null,
    highlightColor: null,
    linkedProjects: [],
    linkedPubs: [],
    achievements: ["Strong foundation in Mathematics & Science"],
  },
];

const HIGHLIGHTS = [
  { text: "IEEE Published Author — ICICCS 2025", icon: "📄" },
  { text: "Indian Patent Pending (AI/IoT Surveillance)", icon: "🛡️" },
  { text: "50%+ Cost Reduction @ Shata Events", icon: "💡" },
];

export default function About() {
  const scrollToProjects = (projectIds: string[]) => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      const el = document.getElementById(`project-${projectIds[0]}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("highlight-flash");
        setTimeout(() => el.classList.remove("highlight-flash"), 2000);
      }
    }, 700);
  };

  const scrollToPubs = () => {
    document.getElementById("publications")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag reveal">Get To Know Me</span>
          <h2 className="section-title reveal">About Me</h2>
          <p className="section-desc reveal">
            Passionate about building innovative solutions that bridge academic research and real-world applications.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p className="about-desc reveal">
              Versatile Computer Science graduate (B.Tech, AI & ML) with proven research and industry experience. I combine academic rigour — IEEE publication, patent filing — with hands-on product delivery: both apps I built at Shata Events are live on the Play Store and App Store.
            </p>
            <p className="about-desc reveal">
              I'm strongest in process thinking and system architecture — I can go from whiteboard to deployed product alone. My stack spans Flutter, React/Next.js, Python/ML, REST APIs, and Cloudflare-first cloud infrastructure.
            </p>
            <div className="about-highlights reveal">
              {HIGHLIGHTS.map((h) => (
                <div className="highlight-row" key={h.text}>
                  <span className="highlight-emoji">{h.icon}</span>
                  <span>{h.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-col stagger">
            {Object.entries(SKILLS).map(([category, skills]) => (
              <div className="skill-card reveal" key={category}>
                <h3 className="skill-card-title">{category}</h3>
                <div className="skill-tags">
                  {skills.map((s) => (
                    <span className="skill-chip" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education — with cross-links */}
        <div className="edu-section">
          <h3 className="edu-title reveal">Education</h3>
          <div className="edu-timeline stagger">
            {EDUCATION.map((edu) => (
              <div className="edu-item reveal" key={edu.id} id={`edu-${edu.id}`}>
                <div className="edu-dot" style={edu.highlightColor ? { background: edu.highlightColor, boxShadow: `0 0 0 2px ${edu.highlightColor}` } : {}} />
                <div className="edu-content">
                  <span className="edu-date">{edu.period}</span>
                  <h4 className="edu-degree">{edu.degree}</h4>
                  <p className="edu-school">{edu.school}</p>
                  <p className="edu-grade">{edu.grade}</p>

                  {edu.highlight && (
                    <span className="edu-highlight" style={{ color: edu.highlightColor ?? "var(--primary)", borderColor: `${edu.highlightColor}30` ?? "rgba(var(--c-cyan-rgb),0.2)" }}>
                      ✦ {edu.highlight}
                    </span>
                  )}

                  <ul className="edu-achievements">
                    {edu.achievements.map((a, i) => (
                      <li key={i} className="edu-ach-item">{a}</li>
                    ))}
                  </ul>

                  <div className="edu-crosslinks">
                    {edu.linkedProjects.length > 0 && (
                      <button
                        className="edu-link-btn"
                        onClick={() => scrollToProjects(edu.linkedProjects)}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <line x1="3" y1="9" x2="21" y2="9" />
                          <line x1="9" y1="21" x2="9" y2="9" />
                        </svg>
                        View {edu.linkedProjects.length} Project{edu.linkedProjects.length > 1 ? "s" : ""}
                      </button>
                    )}
                    {edu.linkedPubs.length > 0 && (
                      <button
                        className="edu-link-btn pub"
                        onClick={scrollToPubs}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                        </svg>
                        {edu.linkedPubs.length === 2 ? "IEEE Paper + Patent" : "IEEE Paper"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
