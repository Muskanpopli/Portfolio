"use client"

import React, { useEffect, useState } from "react";
import { Mail, Code } from "lucide-react"
import { scrollToSection } from "@/utils/navigation"
import { NAVIGATION_ITEMS, SOCIAL_LINKS } from "@/constants/navigation"

interface NavbarProps {
  activeSection: string
  scrolled: boolean
}

const Navbar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const width = Math.min(100, (scrollY / docHeight) * 100);
      setScrollWidth(width);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial value

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-transparent">
      <div className="container">
        {/* Brand Logo */}
        <a className="navbar-brand" href="#home" onClick={() => handleNavClick("home")}>
          <div className="brand-logo">
            <div className="logo-icon">
              <Code size={20} />
            </div>
            <div className="brand-info">
              <div className="brand-name">Muskan Popli</div>
              <div className="brand-title">Full Stack Developer</div>
            </div>
          </div>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <div className={`hamburger ${isMenuOpen ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Navigation Menu */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          {/* Main Navigation Links */}
          <ul className="navbar-nav mx-auto">
            {NAVIGATION_ITEMS.map((item) => (
              <li className="nav-item" key={item.id}>
                <button
                  className="nav-link custom-nav-link"
                  onClick={() => handleNavClick(item.id)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.label}</span>
                  <div className="nav-indicator"></div>
                </button>
              </li>
            ))}
          </ul>

          {/* Right Side Actions */}
          <div className="navbar-actions">
            {/* Social Links */}
            <div className="social-links">
              {SOCIAL_LINKS.map((link) => (
                <a key={link.name} href={link.url} className="social-link" title={link.name}>
                  <link.icon size={18} />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <a href="mailto:muskan1popli@gmail.com" className="btn btn-primary cta-button">
              <Mail size={16} className="me-2" />
              <span>Hire Me</span>
            </a>

            <a
              href="https://drive.google.com/file/d/16_KzuFO8IKrvvIPZJ_JsI4hiXH5x1GeI/view?usp=drivesdk"
              className="btn btn-outline-primary resume-button"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                // Your custom logic here
                console.log("Resume link clicked!");
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7,10 12,15 17,10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span className="ms-2">Resume</span>
            </a>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="scroll-progress">
          <div
            className="progress-bar"
            style={{
              width: `${scrollWidth}%`,
            }}
          ></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
