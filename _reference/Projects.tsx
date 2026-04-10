"use client";

import { useState } from "react";

const FILTERS = ["All", "Work", "Internship", "Academic", "Personal"];

const PROJECTS = [
  /* ======= WORK — SHATA ======= */
  {
    id: "shata-app",
    title: "Shata — Event Marketplace App",
    category: "Work",
    linkedExp: "shata",
    linkedEdu: null,
    featured: true,
    status: "Live",
    tech: ["Flutter", "Firebase Auth", "REST API", "Razorpay", "Google Maps", "FCM"],
    links: [
      { label: "Play Store", url: "https://play.google.com/store" },
      { label: "App Store", url: "https://apps.apple.com" },
    ],
    star: {
      situation:
        "Shata Events had no digital presence — clients booked services via WhatsApp with no payment tracking, no notifications, and zero automation.",
      task:
        "Build and ship a production-grade event marketplace app for end-users with authentication, booking, payments, and real-time notifications.",
      action:
        "Built the Flutter UI from scratch with REST API consumption, Firebase Auth (email/OTP), Google Maps for venue selection, Razorpay payment gateway, FCM push notifications, and Jio DLT-compliant SMS. Handled full Android/iOS deployment — keystore, Play Console, App Store Connect, provisioning profiles.",
      result:
        "App live on both stores. Entire process from zero to deployment handled solo, reducing outsourcing cost by 50%+. Zero critical post-launch bugs.",
    },
    icon: "📱",
    accent: "#22d3ee",
  },
  {
    id: "shata-partner",
    title: "Shata Partner — Vendor App",
    category: "Work",
    linkedExp: "shata",
    linkedEdu: null,
    featured: true,
    status: "Live",
    tech: ["Flutter", "Firebase Auth", "REST API", "DLT SMS", "Push Notifications"],
    links: [
      { label: "Play Store", url: "https://play.google.com/store" },
      { label: "App Store", url: "https://apps.apple.com" },
    ],
    star: {
      situation:
        "Vendors (partners) needed a separate app to accept/reject bookings, manage availability, and communicate with clients — all in real time.",
      task:
        "Build a companion Flutter app (com.shata.partner) with vendor-specific flows, order management, and OTP login.",
      action:
        "Developed distinct UI/UX flows for vendor onboarding, booking acceptance, real-time status updates, and earnings tracking. Integrated same DLT SMS pipeline and FCM channels. Deployed independently to Play Store and App Store.",
      result:
        "Partner app live alongside the main app. Vendors fully self-sufficient in managing orders without any manual intervention from Shata staff.",
    },
    icon: "🤝",
    accent: "#22d3ee",
  },
  {
    id: "shata-websites",
    title: "Shata Web Ecosystem — 6 Portals",
    category: "Work",
    linkedExp: "shata",
    linkedEdu: null,
    featured: false,
    status: "Live",
    tech: ["HTML", "CSS", "JS", "React.js", "Vercel", "REST API"],
    links: [{ label: "theshata.com", url: "https://theshata.com" }],
    star: {
      situation:
        "Shata needed a public-facing website, a partner portal, and 4 internal admin dashboards — each with different access roles and data views.",
      task:
        "Design and deploy all 6 web surfaces with distinct branding, access control, and responsive UI.",
      action:
        "Built theshata.com in vanilla HTML/CSS/JS with dark and light themes (Syne + Instrument Serif, #FF6B2C accent). Built admin portals in React.js with role-based routing. Deployed all on Vercel with environment-based configs.",
      result:
        "All 6 surfaces operational. Professional web presence established; admin team fully self-served via dashboards.",
    },
    icon: "🌐",
    accent: "#22d3ee",
  },

  /* ======= INTERNSHIP ======= */
  {
    id: "wellness-platform",
    title: "CSRBOX Wellness Platform",
    category: "Internship",
    linkedExp: "csrbox",
    linkedEdu: null,
    featured: false,
    status: "Delivered",
    tech: ["React", "HTML", "CSS", "JavaScript", "Git", "Vercel"],
    links: [],
    star: {
      situation:
        "CSRBOX needed a responsive wellness resource portal under an AICTE initiative, with a student team of 6 and no existing codebase.",
      task:
        "Lead frontend development and deliver the platform within the 2-month internship window.",
      action:
        "Architected the React component structure, assigned module tasks, managed Agile sprints via Git branching, integrated content APIs, and handled Vercel deployment.",
      result:
        "Platform delivered on time. Led first professional team — gained project leadership and cross-team coordination skills.",
    },
    icon: "🌿",
    accent: "#22c55e",
  },

  /* ======= ACADEMIC / RESEARCH ======= */
  {
    id: "vehicle-plate-cnn",
    title: "Vehicle Plate Detection — CNN + PSO",
    category: "Academic",
    linkedExp: null,
    linkedEdu: "btech",
    linkedPub: "ieee",
    featured: true,
    status: "Published (IEEE)",
    tech: ["Python", "TensorFlow", "CNN", "PSO", "OpenCV", "Jupyter"],
    links: [
      {
        label: "IEEE Paper",
        url: "https://doi.org/10.1109/ICICCS65191.2025.10984880",
      },
    ],
    star: {
      situation:
        "Traffic surveillance systems struggled with license plate detection under motion blur, low light, and multilingual plates — causing failed accident investigations.",
      task:
        "Build a real-time number plate detection system robust enough for Indian roads as a B.Tech final-year research project, targeting IEEE publication.",
      action:
        "Designed a CNN architecture for plate localization, applied Particle Swarm Optimization (PSO) for hyperparameter tuning, trained on a custom dataset with augmentation (blur, rotation, low-light simulation). Submitted to ICICCS 2025.",
      result:
        "Paper accepted and published at IEEE ICICCS 2025 (DOI: 10.1109/ICICCS65191.2025.10984880). First-author publication. Achieved 91%+ plate detection accuracy under adverse conditions.",
    },
    icon: "🔬",
    accent: "#f59e0b",
  },
  {
    id: "ai-accident-patent",
    title: "AI/IoT Accident Detection System",
    category: "Academic",
    linkedExp: null,
    linkedEdu: "btech",
    linkedPub: "patent",
    featured: false,
    status: "Patent Pending",
    tech: ["Python", "IoT", "Computer Vision", "Edge AI", "OpenCV"],
    links: [
      {
        label: "Patent (App No. 202541110844)",
        url: "#publications",
      },
    ],
    star: {
      situation:
        "Road accident response times in India are critically slow due to delayed detection and reporting — existing systems miss accidents entirely.",
      task:
        "Design an AI/IoT-based accident detection system capable of real-time alerting as a patent-worthy innovation during B.Tech.",
      action:
        "Developed an edge-AI pipeline combining computer vision (accident detection from CCTV feeds) with IoT sensors for impact/vibration data. Filed Indian Patent Application No. 202541110844 (filed Nov 2025, published Dec 2025).",
      result:
        "Patent application filed and published. System architecture validated as novel IP by Indian Patent Office. Awaiting examination.",
    },
    icon: "🛡️",
    accent: "#fb7185",
  },
  {
    id: "geoprocessing",
    title: "ISRO Geoprocessing — Python Remote Sensing",
    category: "Academic",
    linkedExp: null,
    linkedEdu: "btech",
    featured: false,
    status: "Certified",
    tech: ["Python", "QGIS", "Remote Sensing", "NumPy", "Rasterio"],
    links: [],
    star: {
      situation:
        "ISRO offered a competitive geoprocessing certification to develop satellite data analysis skills.",
      task:
        "Complete the ISRO Geoprocessing Python program — a specialized remote sensing curriculum.",
      action:
        "Processed satellite imagery using Python (Rasterio, NumPy), performed NDVI calculations, band analysis, and spatial queries in QGIS.",
      result:
        "ISRO Geoprocessing Python certificate earned. Gained specialized remote sensing skills applicable to AI/ML geospatial projects.",
    },
    icon: "🛰️",
    accent: "#8b5cf6",
  },

  /* ======= PERSONAL PROJECTS ======= */
  {
    id: "apnagaadi",
    title: "ApnaGaadi — Automobile Rental/Sales",
    category: "Personal",
    linkedExp: null,
    linkedEdu: "diploma",
    featured: false,
    status: "Live",
    tech: ["HTML", "Bootstrap", "TypeScript", "PHP", "Google Sheets API"],
    links: [{ label: "View Live", url: "https://apnagaadi.vercel.app" }],
    star: {
      situation:
        "Small automobile rental businesses lacked a professional web presence and online booking capability.",
      task:
        "Build a 6-page responsive website with booking forms and backend data capture without a database.",
      action:
        "Designed and developed 6-page site in HTML/Bootstrap/TypeScript, integrated PHP-based booking forms piped to Google Sheets for zero-cost data storage.",
      result:
        "Live on Vercel. Demonstrated full-cycle web development from design to deployment independently during Diploma studies.",
    },
    icon: "🚗",
    accent: "#3b82f6",
  },
  {
    id: "sanathana",
    title: "Sanathana Sangha — Religious Community Portal",
    category: "Personal",
    linkedExp: null,
    linkedEdu: "diploma",
    featured: false,
    status: "Live",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Firebase"],
    links: [{ label: "View Live", url: "https://sanathana-vedantism.web.app" }],
    star: {
      situation:
        "A community group needed a digital space for Sanathana Dharma content, prayers, and darshan bookings with user accounts.",
      task:
        "Build a full-stack web portal with user authentication, content pages, and a booking system.",
      action:
        "Developed multi-page PHP/MySQL site with user login, RSS feed integration, scripture/prayer sections, and darshan booking. Hosted on Firebase.",
      result:
        "Live portal used by community members. First full-stack PHP/MySQL project — validated backend development fundamentals during Diploma.",
    },
    icon: "🕉️",
    accent: "#f97316",
  },
  {
    id: "tabm",
    title: "TABM — Layered Encryption in C",
    category: "Personal",
    linkedExp: null,
    linkedEdu: "diploma",
    featured: false,
    status: "Open Source",
    tech: ["C", "Git", "GitHub"],
    links: [{ label: "GitHub", url: "https://github.com/koushikamboru/TABM" }],
    star: {
      situation:
        "Needed a challenging systems-level project to deepen understanding of data encoding and binary manipulation.",
      task:
        "Design a multi-layer text encryption algorithm combining ASCII, binary, Gray code, 1's complement, and Morse code.",
      action:
        "Implemented TABM fully in C — character-level ASCII conversion, binary encoding, Gray code transform, 1's complement flip, and Morse output. Open-sourced on GitHub.",
      result:
        "Working CLI encryption tool. Demonstrated systems programming competency and understanding of encoding theory during Diploma.",
    },
    icon: "🔐",
    accent: "#64748b",
  },
  {
    id: "kings-portal",
    title: "King's Portal — Community IT Platform",
    category: "Personal",
    linkedExp: null,
    linkedEdu: null,
    featured: false,
    status: "Live",
    tech: ["HTML", "CSS", "JavaScript", "Firebase", "PHP"],
    links: [{ label: "View Live", url: "https://king-s-portal-web.web.app" }],
    star: {
      situation:
        "Needed a community platform for IT resources and services accessible to students and small businesses.",
      task:
        "Build a web portal combining educational resources, IT services listings, and user accounts.",
      action:
        "Developed the platform using HTML/CSS/JS with Firebase for hosting and authentication, PHP for dynamic content rendering.",
      result:
        "Live platform with active users. Demonstrated ability to scope, build, and launch a product end-to-end independently.",
    },
    icon: "👑",
    accent: "#f59e0b",
  },
  {
    id: "slidewin",
    title: "SlideWin — Multiplayer Sliding Puzzle",
    category: "Personal",
    linkedExp: null,
    linkedEdu: null,
    featured: false,
    status: "In Development",
    tech: ["Flutter", "Flame Engine", "Dart", "Multiplayer"],
    links: [],
    star: {
      situation:
        "Wanted to explore game development within Flutter ecosystem using Flame engine for a mobile-first multiplayer experience.",
      task:
        "Build a cross-platform multiplayer sliding puzzle game targeting Play Store.",
      action:
        "Developing with Flutter + Flame for game loop, collision detection, and tile logic. Implementing real-time multiplayer via socket-based matchmaking.",
      result:
        "In active development. Play Console already set up. Pushes Flutter/Flame game development skills beyond standard app development.",
    },
    icon: "🎮",
    accent: "#a78bfa",
  },
  {
    id: "mist-play",
    title: "MIST Play — Local Music Player",
    category: "Personal",
    linkedExp: null,
    linkedEdu: null,
    featured: false,
    status: "Play Console Ready",
    tech: ["Flutter", "Dart", "Audio API", "Android"],
    links: [],
    star: {
      situation:
        "Existing music players were bloated with streaming features — users with local libraries needed a clean, fast alternative.",
      task:
        "Build a minimal, beautiful local music player for Android with a distinct brand identity.",
      action:
        "Built MIST Play in Flutter with orange-white branding, custom audio controls, playlist management, and local file scanning. Play Console entry prepared.",
      result:
        "App functionally complete, Play Console submission pending review. Strong focus on UI polish and brand identity (orange-white, MIST branding).",
    },
    icon: "🎵",
    accent: "#fb923c",
  },
];

const STATUS_COLORS: Record<string, string> = {
  Live: "#22c55e",
  "Published (IEEE)": "#f59e0b",
  "Patent Pending": "#fb7185",
  Delivered: "#60a5fa",
  Certified: "#a78bfa",
  "In Development": "#94a3b8",
  "Play Console Ready": "#fb923c",
  "Open Source": "#22d3ee",
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedStar, setExpandedStar] = useState<string | null>(null);

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const scrollToExp = (expId: string) => {
    const el = document.getElementById(`exp-${expId}`);
    if (el) {
      document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("highlight-flash");
        setTimeout(() => el.classList.remove("highlight-flash"), 2000);
      }, 600);
    }
  };

  const scrollToPub = (pubId: string) => {
    const el = document.getElementById(`pub-${pubId}`);
    if (el) {
      document.getElementById("publications")?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("highlight-flash");
        setTimeout(() => el.classList.remove("highlight-flash"), 2000);
      }, 600);
    }
  };

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag reveal">My Work</span>
          <h2 className="section-title reveal">Projects</h2>
          <p className="section-desc reveal">
            Every project has a story — situation, task, action, and result. Click any card to read the full STAR breakdown.
          </p>
        </div>

        {/* Filters */}
        <div className="project-filters reveal">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? "active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
              <span className="filter-count">
                {f === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === f).length}
              </span>
            </button>
          ))}
        </div>

        <div className="projects-grid stagger">
          {filtered.map((project) => (
            <div
              className={`project-card reveal ${project.featured ? "featured" : ""}`}
              key={project.id}
              id={`project-${project.id}`}
              style={{ "--proj-accent": project.accent } as React.CSSProperties}
            >
              {/* Header */}
              <div className="proj-header">
                <div className="proj-icon-wrap">
                  <span className="proj-emoji">{project.icon}</span>
                </div>
                <div className="proj-meta-top">
                  <span className="proj-category">{project.category}</span>
                  <span
                    className="proj-status"
                    style={{ color: STATUS_COLORS[project.status] ?? "#94a3b8" }}
                  >
                    <span className="status-dot" style={{ background: STATUS_COLORS[project.status] ?? "#94a3b8" }} />
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Title & Tech */}
              <h3 className="proj-title">{project.title}</h3>

              <div className="proj-tech">
                {project.tech.slice(0, 5).map((t) => (
                  <span className="tech-pill" key={t}>{t}</span>
                ))}
                {project.tech.length > 5 && (
                  <span className="tech-pill muted">+{project.tech.length - 5}</span>
                )}
              </div>

              {/* STAR Toggle */}
              <button
                className={`star-toggle ${expandedStar === project.id ? "open" : ""}`}
                onClick={() =>
                  setExpandedStar(expandedStar === project.id ? null : project.id)
                }
              >
                <span>STAR Breakdown</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {expandedStar === project.id && (
                <div className="star-panel">
                  {(["situation", "task", "action", "result"] as const).map((key) => (
                    <div className="star-row" key={key}>
                      <span className="star-key">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                      <p className="star-text">{project.star[key]}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Cross-links */}
              <div className="proj-crosslinks">
                {project.linkedExp && (
                  <button
                    className="crosslink-btn"
                    onClick={() => scrollToExp(project.linkedExp!)}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <rect x="2" y="7" width="20" height="14" rx="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                    Built at {project.linkedExp === "shata" ? "Shata Events" : project.linkedExp === "csrbox" ? "CSRBOX" : project.linkedExp}
                  </button>
                )}
                {(project as any).linkedPub && (
                  <button
                    className="crosslink-btn pub"
                    onClick={() => scrollToPub((project as any).linkedPub)}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                    {(project as any).linkedPub === "ieee" ? "IEEE Publication" : "Patent Filed"}
                  </button>
                )}
                {project.linkedEdu && (
                  <span className="crosslink-edu">
                    📚 {project.linkedEdu === "btech" ? "B.Tech Project" : "Diploma Project"}
                  </span>
                )}
              </div>

              {/* Links */}
              {project.links.length > 0 && (
                <div className="project-links">
                  {project.links.map((link) => (
                    <a
                      href={link.url}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      key={link.label}
                      onClick={link.url === "#publications" ? (e) => { e.preventDefault(); scrollToPub("ieee"); } : undefined}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
