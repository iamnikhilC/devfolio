import React from "react";
import "./Portfolio.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-left">
          <div className="badge">Open to Opportunities</div>

          <h1 className="hero-title">
            Hi, I'm Nikhil — Full-Stack Developer
          </h1>

          <p className="hero-subtitle">
            Building scalable web apps with Laravel, React & modern tooling
          </p>

          {/* Action buttons */}
          <div className="hero-actions">
            <button className="btn primary">
              View Projects →
            </button>
            <button className="btn outline">Hire Me</button>
          </div>

          {/* Contact info */}
          <div className="hero-contact">
            <span>📍 Nagpur, India</span>
            <a href="mailto:hello@nikhil.dev">✉ nikhilchichghare000@gmail.com</a>
            <a href="tel:+918552857511">📞 +91 85528 57511</a>
          </div>

          {/* Social links */}
          <div className="hero-socials">
            <button className="btn secondary">🐱 GitHub</button>
            <button className="btn secondary">🔗 LinkedIn</button>
            <button className="btn secondary">✉ Email</button>
          </div>
        </div>

        {/* Right Content (card style) */}
        <div className="hero-right">
          <div className="card">
            <div className="card-content">
              <div className="icon-box">🚀</div>
              <h3 className="card-title">Ship. Learn. Repeat.</h3>
              <p className="card-text">
                I focus on developer experience, performance, and clean
                architecture to deliver delightful products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
