import React from "react";
import "../Css/Portfolio.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
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
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
        </svg>
        Projects
      </h2>

      <div className="projects-grid">
        {/* Project 1 */}
        <div className="card">
          <div className="card-header">eSIM — Digital SIM Management Platform</div>
          <div className="card-content">
            <p className="card-desc">
            A full-stack solution for managing embedded SIMs, enabling users to connect to cellular networks without physical SIM cards. Features include dynamic UI, seamless API integration, and real-time data exchange for smooth connectivity management.
            </p>
            <div className="badges">
              <span className="badge">Laravel</span>
              <span className="badge">REST API's</span>
              <span className="badge">Blade Template</span>
              <span className="badge">AJAX</span>
              <span className="badge">jQuery</span>
              <span className="badge">JSON</span>
              <span className="badge">HTML</span>
              <span className="badge">CSS</span>
              <span className="badge">Bootstrap</span>
              <span className="badge">Razorpay</span>
            </div>
            <div className="buttons">
            <a href="https://rspsim.com/" target="_blank" className="btn">Live</a>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div className="card">
          <div className="card-header">Book the Plot – Property Management System</div>
          <div className="card-content">
            <p className="card-desc">
            A platform for booking and managing plots with property listings, reservation flow, and an admin dashboard for management. Includes interactive booking using AJAX and smooth user experience with Blade templates.

            </p>
            <div className="badges">
              <span className="badge">Laravel</span>
              <span className="badge">API's</span>
              <span className="badge">Blade Template</span>
              <span className="badge">AJAX</span>
              <span className="badge">jQuery</span>
              <span className="badge">CSS</span>
            </div>
            <div className="buttons">
              <a href="https://booktheplot.com/" target="_blank" className="btn">Live</a>
              {/* <button className="btn">Code</button> */}
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="card">
          <div className="card-header">Shrutseva — Gujarati Library Management System</div>
          <div className="card-content">
            <p className="card-desc">
            A library management platform for organizing books, managing memberships, and handling borrowing/return records. Designed for Gujarati readers with an easy-to-use interface and smooth book tracking system.
            </p>
            <div className="badges">
              <span className="badge">Laravel</span>
              <span className="badge">API's</span>
              <span className="badge">Blade Template</span>
              <span className="badge">AJAX</span>
              <span className="badge">jQuery</span>
              <span className="badge">CSS</span>
            </div>
            <div className="buttons">
            <a href="https://shrutseva.com" target="_blank" className="btn">Live</a>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="card">
          <div className="card-header">Bazaarbhav — Market Rate & Subscription Platform</div>
          <div className="card-content">
            <p className="card-desc">
           An online dictionary platform with improved UI and search functionality to find word meanings in Gujarati and Sanskrit, enhancing the user experience for language learners.
            </p>
            <div className="badges">
            <span className="badge">Laravel</span>
              <span className="badge">API's</span>
              <span className="badge">Blade Template</span>
              <span className="badge">AJAX</span>
              <span className="badge">jQuery</span>
              <span className="badge">CSS</span>
              <span className="badge">Razorpay</span>
            </div>
            <div className="buttons">
            <a href="https://bazaarbhav.com" target="_blank" className="btn">Live</a>
            </div>
          </div>
        </div>

        {/* Project 5 */}
        <div className="card">
          <div className="card-header">GS Kosh — Gujarati-Sanskrit Dictionary</div>
          <div className="card-content">
            <p className="card-desc">
            An online dictionary platform with improved UI and search functionality to find word meanings in Gujarati and Sanskrit, enhancing the user experience for language learners.
            </p>
            <div className="badges">
            <span className="badge">CodeIgniter</span>
              <span className="badge">JavaScript</span>
              <span className="badge">CSS</span>
              <span className="badge">Bootstrap</span>
            </div>
            <div className="buttons">
            <a href="" target="" className="btn">Live</a>
            </div>
          </div>
        </div>

        {/* Project 6 */}
        <div className="card">
          <div className="card-header">Rantanotsav — Dharmashala Management Module</div>
          <div className="card-content">
            <p className="card-desc">
            A guesthouse management module with check-in/out, room service requests, and complaint handling to streamline guest interactions and improve service efficiency.
            </p>
            <div className="badges">
              <span className="badge">Laravel</span>
              <span className="badge">API's</span>
              <span className="badge">Blade Template</span>
              <span className="badge">AJAX</span>
              <span className="badge">jQuery</span>
              <span className="badge">CSS</span>
            </div>
            <div className="buttons">
            <a href="#" target="" className="btn">Live</a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
