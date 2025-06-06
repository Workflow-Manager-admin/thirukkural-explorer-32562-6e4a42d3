import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

/**
 * PUBLIC_INTERFACE
 * Persistent, responsive navigation bar with links to Home, About, and Quiz.
 * Uses app color theme variables and includes hamburger menu for mobile.
 */
function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle toggling mobile menu visibility
  const handleMenuToggle = () => setMobileMenuOpen((open) => !open);
  const handleNavClick = () => setMobileMenuOpen(false);

  return (
    <nav className="navbar custom-navbar">
      <div className="container nav-content">
        <div className="logo" tabIndex={0} aria-label="Thirukkural Explorer Home">
          <span className="logo-symbol" style={{ fontSize: "1.5em" }}>
            {/* Minimalist Kural/poet icon replacement */}
            <svg width="22" height="22" aria-hidden="true" focusable="false"><circle cx="11" cy="11" r="9" fill="none" stroke="var(--accent)" strokeWidth="2"/><circle cx="11" cy="8.5" r="2.1" fill="var(--accent)" /><rect x="8.5" y="13" width="5" height="2.5" rx="1.2" fill="var(--accent)"/></svg>
          </span>
          <span style={{marginLeft: 6}}>Thirukkural Explorer</span>
        </div>

        {/* Hamburger for mobile */}
        <button
          className="hamburger"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          onClick={handleMenuToggle}
        >
          <span className={`hamburger-bar ${mobileMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-bar ${mobileMenuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-bar ${mobileMenuOpen ? "open" : ""}`}></span>
        </button>

        {/* Links */}
        <div className={`nav-links${mobileMenuOpen ? " mobile-open" : ""}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={handleNavClick}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={handleNavClick}
          >
            About
          </NavLink>
          <NavLink
            to="/quiz"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={handleNavClick}
          >
            Quiz
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
