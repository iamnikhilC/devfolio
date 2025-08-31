import React, { useState } from "react";
import "./Portfolio.css";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Portfolio() {
    const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="portfolio">
        <Header />
      {/* Header */}
      {/* <header className="header">
        <h1 className="name">Nikhil Chichghare</h1>
        <p className="role">Full-Stack Developer</p>
        <p className="tagline">
          Building scalable web apps with Laravel & React.js
        </p>
        <a href="#projects" className="btn">
          View My Work
        </a>
      </header> */}
        <Hero/>
      {/* About Section
      <section className="section about">
        <h2>About Me</h2>
        <p>
          I’m a passionate developer who loves building web applications using
          Laravel and React. I enjoy solving problems and creating clean, modern
          UI/UX.
        </p>
      </section> */}
      <About/>

      {/* Skills Section
      <section className="section skills">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Laravel</li>
          <li>MySQL</li>
          <li>Node.js</li>
          <li>REST APIs</li>
        </ul>
      </section> */}
        <Skills/>
      {/* Projects Section
      <section className="section projects" id="projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>MyBarber</h3>
          <p>
            A salon booking platform with admin dashboard and online payments.
          </p>
        </div>
        <div className="project-card">
          <h3>Bike Taxi App</h3>
          <p>
            Location-based ride booking app with GPS tracking and OTP
            authentication.
          </p>
        </div>
        <div className="project-card">
          <h3>AI Forms</h3>
          <p>
            Smart document parser that converts PDFs into structured data.
          </p>
        </div>
      </section> */}
      <Projects/>

      <Experience/>
      <Education/>

      {/* Contact Section
      <section className="section contact">
        <h2>Contact</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit" className="btn">
            Send
          </button>
        </form>
      </section> */}
      {/* <Contact/> */}

      {/* Footer
      <footer className="footer">
        <p>© 2025 Nikhil Chichghare. All rights reserved.</p>
      </footer> */}

      <Footer/>
    </div>
  );
}
