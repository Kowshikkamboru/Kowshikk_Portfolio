"use client";

const CERTIFICATIONS = [
  { name: "CCNA — Intro to Networks", issuer: "Cisco" },
  { name: "CCNA — Switching, Routing & Wireless", issuer: "Cisco" },
  { name: "CCNA — Enterprise Networking & Automation", issuer: "Cisco" },
  { name: "IT Essentials", issuer: "Cisco" },
  { name: "UiPath RPA Developer Foundation v2021.10", issuer: "UiPath / AICTE" },
  { name: "UiPath RPA Developer Advanced v2021.10", issuer: "UiPath / AICTE" },
  { name: "Android Developer", issuer: "AICTE / Google" },
  { name: "Geoprocessing with Python", issuer: "ISRO" },
  { name: "Pearson MePro — Level 10 Expert (C2)", issuer: "Pearson" },
  { name: "IBM Web Dev Fundamentals", issuer: "IBM" },
  { name: "IBM Project Management Fundamentals", issuer: "IBM" },
  { name: "Intellectual Property Rights", issuer: "Coursera" },
  { name: "Flutter Bootcamp", issuer: "LetsUpgrade" },
  { name: "Excel Bootcamp", issuer: "LetsUpgrade" },
];

const ACHIEVEMENTS = [
  {
    title: "Joint Secretary — CSE-AIML Association",
    description: "Led 25+ technical and cultural events at SVCE. Organised AI/ML workshops, speaker sessions, and inter-college competitions.",
    icon: "🏛️",
  },
  {
    title: "NSS Squad Leader",
    description: "Led community service drives, public welfare campaigns, and voluntary initiatives across Tirupati.",
    icon: "🤲",
  },
  {
    title: "Campus Ambassador — E-Cell IIT Bombay",
    description: "Represented one of India's top entrepreneurship cells. Promoted Eureka! and other flagship startup events.",
    icon: "🚀",
  },
  {
    title: "Pearson MePro C2 Level (English)",
    description: "Highest English proficiency level — Expert (C2) certified by Pearson's MePro platform.",
    icon: "🗣️",
  },
];

export default function Publications() {
  const scrollToProject = (id: string) => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      const el = document.getElementById(`project-${id}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("highlight-flash");
        setTimeout(() => el.classList.remove("highlight-flash"), 2000);
      }
    }, 700);
  };

  const scrollToEdu = () => {
    document.getElementById("edu-btech")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="section" id="publications">
      <div className="container">
        <div className="section-header">
          <span className="section-tag reveal">Research & Recognition</span>
          <h2 className="section-title reveal">Publications & Achievements</h2>
          <p className="section-desc reveal">
            Peer-reviewed research and filed innovations that translate academic curiosity into real intellectual property.
          </p>
        </div>

        {/* ─── IEEE Publication ─── */}
        <div className="pub-card highlight reveal" id="pub-ieee">
          <div className="pub-badge-row">
            <span className="pub-type-badge ieee">IEEE Conference Paper</span>
            <span className="pub-type-badge status-pub">✓ Published</span>
          </div>
          <div className="pub-body-main">
            <div className="pub-icon-large">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <div className="pub-detail">
              <p className="pub-venue">
                9th International Conference on Intelligent Computing and Control Systems — ICICCS 2025
              </p>
              <h3 className="pub-title">
                Detecting Vehicle Number Plates Involved in Road Accidents Using CNN & PSO
              </h3>
              <p className="pub-desc">
                Presented a real-time license plate detection system using Convolutional Neural Networks (CNNs) with hyperparameter optimisation via Particle Swarm Optimization (PSO). Addressed challenges including motion blur, variable lighting, and multilingual plates in Indian traffic surveillance. Achieved 91%+ detection accuracy on adverse-condition datasets.
              </p>

              <div className="pub-meta-grid">
                <div className="pub-meta-item">
                  <span className="pub-meta-label">Role</span>
                  <span className="pub-meta-value">First Author</span>
                </div>
                <div className="pub-meta-item">
                  <span className="pub-meta-label">Published</span>
                  <span className="pub-meta-value">2025</span>
                </div>
                <div className="pub-meta-item">
                  <span className="pub-meta-label">DOI</span>
                  <a
                    href="https://doi.org/10.1109/ICICCS65191.2025.10984880"
                    className="pub-meta-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    10.1109/ICICCS65191.2025.10984880
                  </a>
                </div>
              </div>

              <div className="pub-crosslinks">
                <button className="pub-crosslink-btn" onClick={() => scrollToProject("vehicle-plate-cnn")}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                  View Project
                </button>
                <button className="pub-crosslink-btn edu" onClick={scrollToEdu}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                  B.Tech Research Work
                </button>
                <a
                  href="https://doi.org/10.1109/ICICCS65191.2025.10984880"
                  className="pub-crosslink-btn external"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Read on IEEE Xplore
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Patent ─── */}
        <div className="pub-card patent-card reveal" id="pub-patent">
          <div className="pub-badge-row">
            <span className="pub-type-badge patent">Indian Patent</span>
            <span className="pub-type-badge status-pending">⏳ Pending Examination</span>
          </div>
          <div className="pub-body-main">
            <div className="pub-icon-large patent-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
            </div>
            <div className="pub-detail">
              <p className="pub-venue">Indian Patent Office — Application Published</p>
              <h3 className="pub-title">
                AI & IoT-Based Vehicle Accident Detection and Reporting System
              </h3>
              <p className="pub-desc">
                A novel system that combines computer vision (AI-based accident detection from CCTV and camera feeds) with IoT sensor data (impact and vibration sensors) to automatically detect road accidents and trigger emergency alerts in real time. Designed to dramatically reduce emergency response times across India's road network.
              </p>

              <div className="pub-meta-grid">
                <div className="pub-meta-item">
                  <span className="pub-meta-label">Application No.</span>
                  <span className="pub-meta-value">202541110844</span>
                </div>
                <div className="pub-meta-item">
                  <span className="pub-meta-label">Filed</span>
                  <span className="pub-meta-value">November 2025</span>
                </div>
                <div className="pub-meta-item">
                  <span className="pub-meta-label">Published</span>
                  <span className="pub-meta-value">December 2025</span>
                </div>
                <div className="pub-meta-item">
                  <span className="pub-meta-label">Status</span>
                  <span className="pub-meta-value" style={{ color: "#fb7185" }}>Awaiting Examination</span>
                </div>
              </div>

              <div className="pub-crosslinks">
                <button className="pub-crosslink-btn" onClick={() => scrollToProject("ai-accident-patent")}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                  View Project
                </button>
                <button className="pub-crosslink-btn edu" onClick={scrollToEdu}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                  B.Tech Innovation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Achievements ─── */}
        <div className="achievements-section">
          <h3 className="ach-section-title reveal">Leadership & Achievements</h3>
          <div className="achievements-grid stagger">
            {ACHIEVEMENTS.map((a) => (
              <div className="achieve-card reveal" key={a.title}>
                <span className="achieve-emoji">{a.icon}</span>
                <h3 className="achieve-title">{a.title}</h3>
                <p className="achieve-desc">{a.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Certifications ─── */}
        <div className="certs-section reveal">
          <h3 className="ach-section-title">Certifications ({CERTIFICATIONS.length})</h3>
          <div className="certs-grid">
            {CERTIFICATIONS.map((c) => (
              <div className="cert-chip" key={c.name}>
                <span className="cert-name">{c.name}</span>
                <span className="cert-issuer">{c.issuer}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
