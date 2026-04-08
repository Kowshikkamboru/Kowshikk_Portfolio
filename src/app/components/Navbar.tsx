"use client";

import { useEffect, useState, useCallback } from "react";

const NAV_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#publications", label: "Publications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 80);

    // Find active section
    const sections = document.querySelectorAll("section[id]");
    let current = "home";
    sections.forEach((section) => {
      const top = (section as HTMLElement).offsetTop - 160;
      if (window.scrollY >= top) {
        current = section.id;
      }
    });
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  };

  const toggleMenu = () => {
    setMenuOpen((v) => !v);
    document.body.style.overflow = menuOpen ? "" : "hidden";
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  const scrollTo = (href: string) => {
    closeMenu();
    const el = document.querySelector(href);
    if (el) {
      const top = (el as HTMLElement).offsetTop - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => scrollTo("#home")} style={{ cursor: "pointer" }}>
          AK
        </div>

        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
          {NAV_ITEMS.map(({ href, label }) => (
            <li key={href}>
              <a
                className={`nav-link ${activeSection === href.slice(1) ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(href);
                }}
                href={href}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            className="theme-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <button
            className={`burger ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
