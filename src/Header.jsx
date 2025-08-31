import React, { useState, useEffect } from "react";
import "./Portfolio.css";

const Header = () => {
	const [darkMode, setDarkMode] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		if (darkMode) {
			document.body.classList.add("dark");   // add dark class
		} else {
			document.body.classList.remove("dark"); // remove dark class
		}
	}, [darkMode]);

	return (
		<header className={`header ${darkMode ? "dark" : ""}`}>
			<div className="container">
				<div className="nav-bar">
					{/* Logo */}
					<div className="logo">
						<div className="logo-icon">
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
							>
								<path d="m18 16 4-4-4-4"></path>
								<path d="m6 8-4 4 4 4"></path>
								<path d="m14.5 4-5 16"></path>
							</svg>
						</div>
						<span className="logo-text">Nikhil Chichghare</span>
					</div>

					{/* Navigation */}
					<nav className={`nav-links ${menuOpen ? "open" : ""}`}>
						{["About", "Skills", "Projects", "Experience", "Education", "Contact"].map(
							(item) => (
								<button key={item} className="nav-btn"
									onClick={() => {
										const section = document.getElementById(item.toLowerCase());
										if (section) {
											section.scrollIntoView({ behavior: "smooth" });
										}
									}}
								>
									{item}
								</button>
							)
						)}
						<button className="resume-btn">
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
								<path d="M12 15V3"></path>
								<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
								<path d="m7 10 5 5 5-5"></path>
							</svg>
							Resume
						</button>
						<button
							className="theme-btn"
							onClick={() => setDarkMode((prev) => !prev)}
							aria-label="Toggle theme"
						>
							{darkMode ? "🌙" : "☀️"}
						</button>
					</nav>

					{/* Mobile Buttons */}
					<div className="mobile-actions">
						<button
							className="theme-btn"
							onClick={() => setDarkMode((prev) => !prev)}
							aria-label="Toggle theme"
						>
							{darkMode ? "🌙" : "☀️"}
						</button>
						<button
							className="menu-btn"
							onClick={() => setMenuOpen((prev) => !prev)}
							aria-label="Toggle menu"
						>
							{menuOpen ? "✖" : "☰"}
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
