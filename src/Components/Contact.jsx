import React from "react";
import "../Css/Portfolio.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-grid">
        {/* Left Info Section */}
        <div>
          <h2 className="contact-title">Let's build something great</h2>
          <p className="contact-text">
            For freelance work, collaboration, or full-time roles — drop me a
            line. I'll respond within 24 hours.
          </p>

          <div className="contact-info">
            {/* Email */}
            <div className="info-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
              </svg>
              <a href="mailto:nikhilchichghare000@gmail.com">nikhilchichghare000@gmail.com</a>
            </div>

            {/* Phone */}
            <div className="info-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
              </svg>
              <a href="tel:+918552857511">+91 85528 57511</a>
            </div>

            {/* Location */}
            <div className="info-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Nagpur, Maharsahtra, India
            </div>
          </div>
        </div>

        {/* Right Contact Form
        <div className="contact-card">
          <h3 className="form-title">Contact Form</h3>
          <form className="contact-form">
            <input type="text" name="name" placeholder="Your name" required />
            <input type="email" name="email" placeholder="Your email" required />
            <textarea
              name="message"
              placeholder="Tell me about your project"
              rows="5"
              required
            ></textarea>
            <button type="submit" className="send-btn">
              Send
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </form>
        </div> */}
      </div>
    </section>
  );
}
