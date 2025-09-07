import React from "react";
import "../Css/Portfolio.css"

function About() {
  return (
    <section id="about">
      <div className="about-grid">

        {/* About Me Card */}
        <div className="card">
          <div className="card-header">
            <div className="card-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
                viewBox="0 0 24 24"
                fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
              </svg>
            </div>
            <span className="icon-text">About Me</span>

          </div>
          <div className="card-content">
            <p>
              I am a Full-Stack Developer specializing in <strong>Laravel (PHP)</strong>, with experience in building scalable web and mobile applications. My expertise includes API development, authentication systems, and front-end integration. Recently, I’ve worked on projects like a bike taxi mobile app and a barbershop management platform (MyBarber), focusing on real-world problem-solving through clean, efficient code. I am passionate about developing user-friendly solutions, exploring modern web technologies, and continuously improving my skills.
            </p>
            
          </div>
        </div>

        {/* Highlights Card */}
        <div className="card">
          <div className="card-header">
            <div className="card-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
                viewBox="0 0 24 24"
                fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                <circle cx="12" cy="8" r="6"></circle>
              </svg>
            </div>
            <div className="icon-text">Highlights</div>
          </div>
          <div className="card-content">
            <ul>
              <li>5+ production apps shipped</li>
              <li>Stripe, Razorpay, and Cashfree integrations</li>
              {/* <li>Auth: sessions, JWT, OTP, OAuth</li> */}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
