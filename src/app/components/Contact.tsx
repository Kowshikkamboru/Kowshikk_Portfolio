"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch("https://formsubmit.co/amborukoushik@gmail.com", {
        method: "POST",
        body: formData,
      });
    } catch {
      // FormSubmit may redirect; we still show success
    }

    setSending(false);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      form.reset();
    }, 6000);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag reveal">Let&apos;s Connect</span>
          <h2 className="section-title reveal">Get In Touch</h2>
          <p className="section-desc reveal">
            Have a project in mind? Let&apos;s collaborate and build something
            amazing together.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal">
            <p className="contact-intro">
              I&apos;m currently available for freelance work and full-time
              opportunities. Whether you have a project to get started, need
              technical consultation, or just want to say hello — I&apos;d love
              to hear from you.
            </p>

            <div className="contact-details">
              <div className="contact-row">
                <div className="contact-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="contact-meta">
                  <span className="contact-label-text">Email</span>
                  <a href="mailto:amborukoushik@gmail.com" className="contact-value">
                    amborukoushik@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-row">
                <div className="contact-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="contact-meta">
                  <span className="contact-label-text">Phone</span>
                  <a href="tel:+917780239794" className="contact-value">
                    +91 7780239794
                  </a>
                </div>
              </div>

              <div className="contact-row">
                <div className="contact-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="contact-meta">
                  <span className="contact-label-text">Location</span>
                  <span className="contact-value">Hyderabad, India</span>
                </div>
              </div>
            </div>

            <div className="social-row">
              <a
                href="https://www.linkedin.com/in/koushik-amboru/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="http://github.com/koushikamboru"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              <a
                href="mailto:amborukoushik@gmail.com"
                className="social-btn"
                aria-label="Email"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          <div className="contact-form-wrap reveal">
            {!submitted ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input type="hidden" name="_subject" value="New message from portfolio website" />
                <input type="hidden" name="_captcha" value="true" />
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" id="name" name="name" className="form-input" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" id="email" name="email" className="form-input" placeholder="your.email@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input type="text" id="subject" name="subject" className="form-input" placeholder="Project inquiry" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" name="message" className="form-input" rows={5} placeholder="Tell me about your project..." required />
                </div>
                <button type="submit" className="btn btn-primary btn-full" disabled={sending}>
                  <span>{sending ? "Sending..." : "Send Message"}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            ) : (
              <div className="form-success show">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <h3>Thank You!</h3>
                <p>Your message has been received. I&apos;ll get back to you soon!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
