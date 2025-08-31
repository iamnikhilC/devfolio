import React from "react";
import "./Portfolio.css"; // custom CSS file

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">
          {/* Inline SVG instead of lucide-react GraduationCap */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon"
          >
            <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
            <path d="M22 10v6"></path>
            <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
          </svg>
          Education
        </h2>

        <div className="education-grid">
          {/* Card */}
          <div className="edu-card">
            <div className="edu-card-header">
              <div className="edu-card-title">
                <span className="degree">Master of Computer Applications (MCA)</span>
                <span className="date">2023</span>
              </div>
            </div>

            <div className="edu-card-content">
              <div className="university">Inter Institutional Computer Center, Rashtrasant Tukdoji Maharaj Nagpur University, Nagpur</div>
              <div className="badges">
                <span className="badge">First Class with Distinction</span>
                <span className="badge">80.2 %</span>
              </div>
            </div>
          </div>

          <div className="edu-card">
            <div className="edu-card-header">
              <div className="edu-card-title">
                <span className="degree">Bachelor of Science (B.Sc.)</span>
                <span className="date">2020</span>
              </div>
            </div>

            <div className="edu-card-content">
              <div className="university">Pushpak Mahavidyalaya, Umred, Nagpur</div>
              <div className="badges">
                <span className="badge">First Class</span>

                <span className="badge">60%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
