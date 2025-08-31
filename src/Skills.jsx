import React from "react";
import "./Portfolio.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon"
          >
            <path d="m18 16 4-4-4-4"></path>
            <path d="m6 8-4 4 4 4"></path>
            <path d="m14.5 4-5 16"></path>
          </svg>
          Skills
        </h2>

        <div className="skills-grid">
          {/* Frontend */}
          <div className="card">
            <div className="card-header">Frontend</div>
            <div className="card-content">
              <span className="badge">JavaScript</span>
              <span className="badge">jQuery</span>
              <span className="badge">React</span>
              <span className="badge">AJAX</span>
              <span className="badge">HTML</span>
              <span className="badge">CSS</span>
              <span className="badge">Bootstrap</span>
            </div>
          </div>

          {/* Backend */}
          <div className="card">
            <div className="card-header">Backend</div>
            <div className="card-content">
              <span className="badge">PHP</span>
              <span className="badge">OOP</span>
              <span className="badge">Laravel</span>
              <span className="badge">MVC</span>
              <span className="badge">REST APIs</span>
              <span className="badge">Queues</span>
            </div>
          </div>

          {/* Database */}
          <div className="card">
            <div className="card-header">Database</div>
            <div className="card-content">
              <span className="badge">SQL</span>
              <span className="badge">MySQL</span>
            </div>
          </div>

          {/* Tools / Utilities */} 
          <div className="card">
            <div className="card-header">Tools / Utilities</div>
            <div className="card-content">
              <span className="badge">JSON</span>
              <span className="badge">Git</span>
              <span className="badge">Postman</span>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
