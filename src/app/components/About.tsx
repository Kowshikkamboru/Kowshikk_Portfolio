const SKILLS = {
  Languages: ["C", "Java", "Python", "JavaScript", "TypeScript", "Dart", "HTML", "CSS", "PHP", "SQL"],
  Technologies: ["Flutter", "MERN Stack", "Next.js", "Firebase", "Supabase", "RPA (UiPath)"],
  Tools: ["Git", "GitHub", "Vercel", "AWS", "Figma", "Notion", "VS Code"],
};

const EDUCATION = [
  {
    period: "9/2022 - 5/2025",
    degree: "Bachelor of Technology in CSE(AIML)",
    school: "Sree Vidyanikethan Engineering College, Tirupati",
    grade: "CGPA: 7.97/10",
  },
  {
    period: "6/2018 - 8/2021",
    degree: "Diploma in Computer Science",
    school: "Andhra Polytechnic College, Kakinada",
    grade: "77.69%",
  },
  {
    period: "2018",
    degree: "Secondary School Certificate (SSC)",
    school: "Ratnam High School, Nellore",
    grade: "GPA: 8.7/10",
  },
];

const HIGHLIGHTS = [
  "IEEE Published Author",
  "Patent Pending in AI Surveillance",
  "50%+ Cost Reduction Achievement",
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag reveal">Get To Know Me</span>
          <h2 className="section-title reveal">About Me</h2>
          <p className="section-desc reveal">
            Passionate about building innovative solutions that bridge academic
            research and real-world applications.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p className="about-desc reveal">
              Versatile and driven Computer Science graduate specialized in AI &amp;
              ML, with proven research and development expertise. IEEE-published
              author with work in computer vision (CNNs, PSO) and a patent pending
              in AI surveillance.
            </p>
            <p className="about-desc reveal">
              Experienced in building scalable web and mobile apps using Flutter,
              MERN, Next.js, TypeScript, Supabase, and AWS. Skilled at translating
              academic innovation into real-world solutions through continuous
              learning and cross-platform development.
            </p>
            <div className="about-highlights reveal">
              {HIGHLIGHTS.map((h) => (
                <div className="highlight-row" key={h}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{h}</span>
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

        <div className="edu-section">
          <h3 className="edu-title reveal">Education</h3>
          <div className="edu-timeline stagger">
            {EDUCATION.map((edu) => (
              <div className="edu-item reveal" key={edu.degree}>
                <div className="edu-dot" />
                <div className="edu-content">
                  <span className="edu-date">{edu.period}</span>
                  <h4 className="edu-degree">{edu.degree}</h4>
                  <p className="edu-school">{edu.school}</p>
                  <p className="edu-grade">{edu.grade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
