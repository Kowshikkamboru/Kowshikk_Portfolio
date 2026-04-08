"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

function AnimatedCounter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame: number;
    const duration = 2000;
    const start = performance.now();

    const update = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = current + (progress >= 1 && target >= 50 ? "+" : "");
      if (progress < 1) {
        frame = requestAnimationFrame(update);
      }
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return <span className="stat-number" ref={ref}>0</span>;
}

const PARTICLES = [
  { left: "10%", top: "20%", delay: "0s", size: 6 },
  { left: "80%", top: "40%", delay: "2s", size: 4 },
  { left: "60%", top: "70%", delay: "4s", size: 5 },
  { left: "30%", top: "60%", delay: "1s", size: 3 },
  { left: "85%", top: "15%", delay: "3s", size: 4 },
  { left: "20%", top: "80%", delay: "5s", size: 5 },
  { left: "90%", top: "55%", delay: "3.5s", size: 3 },
  { left: "45%", top: "30%", delay: "2.5s", size: 4 },
  { left: "15%", top: "45%", delay: "1.5s", size: 5 },
  { left: "70%", top: "85%", delay: "4.5s", size: 3 },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-particles">
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              width: p.size,
              height: p.size,
            }}
          />
        ))}
      </div>

      <div className="container hero-grid">
        <div className="hero-text">
          <p className="hero-greeting fade-up">Hello, I&apos;m</p>
          <h1 className="hero-name fade-up">Amboru Koushik</h1>
          <div className="fade-up">
            <h2 className="hero-title">Full Stack &amp; Flutter Developer</h2>
          </div>
          <p className="hero-tagline fade-up">
            IEEE Published Author &bull; AI/ML Specialist &bull; Patent Pending
          </p>
          <div className="hero-cta fade-up">
            <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>
              <span>Get In Touch</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#projects" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}>
              <span>View Projects</span>
            </a>
          </div>
          <div className="hero-stats fade-up">
            <div className="stat-item">
              <AnimatedCounter target={50} />
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-item">
              <AnimatedCounter target={1} />
              <span className="stat-label">IEEE Publication</span>
            </div>
            <div className="stat-item">
              <AnimatedCounter target={1} />
              <span className="stat-label">Patent Pending</span>
            </div>
          </div>
        </div>

        <div className="hero-visual fade-in">
          <div className="avatar-ring">
            <Image
              src="/assets/2.jpg"
              alt="Amboru Koushik"
              width={420}
              height={420}
              className="avatar-img"
              priority
            />
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel" />
        </div>
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  );
}
