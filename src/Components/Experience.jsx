import React from "react";
import "../Css/Portfolio.css"; // custom CSS

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">
          {/* Inline SVG instead of lucide-react */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon"
          >
            <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
            <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
            <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
          </svg>
          Experience
        </h2>

        {/* Job 1 */}
        <div className="card">
          <div className="card-header">
            <span className="job-title">Kalyanak Software’s — PHP Laravel Developer</span>
            <span className="job-date">Aug 2023 — Present</span>
          </div>
          <div className="card-content">
            <ul>
              <li>Designed and developed robust, scalable Laravel applications.</li>
              <li>Implemented new features and enhancements while maintaining code quality.</li>
              <li>Designed and optimized database schemas for performance and reliability.</li>
              <li>Developed and maintained RESTful APIs to support front-end functionality.</li>
              <li>Created and maintained documentation for code, processes, and procedures.</li>
              <li>Stayed updated with Laravel trends and shared best practices with the team.</li>
              <li>Continuously enhanced skills through learning and research.</li>
            </ul>
          </div>
        </div>

        {/* Job 2 */}
        <div className="card">
          <div className="card-header">
            <span className="job-title">IT-NetworkZ Infosystems Pvt Ltd — PHP Laravel Intern</span>
            <span className="job-date">Feb 2023 - June 2023</span>
          </div>
          <div className="card-content">
            <ul>
              <li>PHP Laravel Intern</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
