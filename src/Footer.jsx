import React from "react";
import "./Portfolio.css";

const Footer = () => {
	return (
		<footer className="footer">
			<section id="contact" className="contact-section">
				<div className="contact-grid">
					{/* Left Info Section */}
					<div>
						<h2 className="contact-title">Let's build something great</h2>
						<p className="contact-text">
							For freelance work, collaboration, or full-time roles — drop me a
							line. I'll respond within 24 hours.
						</p>
					</div>

					{/* Right Info Section */}
					<div className="contact-info-section">
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


				</div>
			</section>
			<div className="footer-container">
				<div className="footer-text">
					© 2025 Nikhil Chichghare. All rights reserved.
				</div>

				<div className="footer-icons">
					{/* GitHub */}
					<a href="https://github.com/iamnikhilC/" target="_blank" rel="noopener noreferrer" className="icon-btn">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
							fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5
              .08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5
              0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2
              c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0
              3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22
              1.23-.15 1.85v4"></path>
							<path d="M9 18c-4.51 2-5-2-7-2"></path>
						</svg>
					</a>

					{/* LinkedIn */}
					<a href="https://www.linkedin.com/in/nikhil-chichghare-1ab35a24a" target="_blank" rel="noopener noreferrer" className="icon-btn">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
							fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 
              2 0 0 0-2-2 2 2 0 0 0-2 
              2v7h-4v-7a6 6 0 0 1 6-6z"></path>
							<rect width="4" height="12" x="2" y="9"></rect>
							<circle cx="4" cy="4" r="2"></circle>
						</svg>
					</a>

					{/* Email
					<a href="mailto:nikhil@example.com" className="icon-btn">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
							fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<path d="m22 7-8.991 5.727a2 2 0 
              0 1-2.009 0L2 7"></path>
							<rect x="2" y="4" width="20" height="16" rx="2"></rect>
						</svg>
					</a> */}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
