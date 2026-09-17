"use client";

import { useState } from "react";
import { useNavbarScroll } from "@/hooks/useNavbarScroll";
import { scrollToAnchor } from "@/hooks/useSmoothAnchorScroll";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const scrolled = useNavbarScroll(50);
  const [open, setOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setOpen(false);
    scrollToAnchor(href);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${styles.navbar} ${
        scrolled ? styles.navbarScrolled : ""
      }`}
    >
      <div className="container">
        <a
          className={`navbar-brand fw-bold glow ${styles.brand}`}
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
        >
          <i className={`fas fa-code me-2 ${styles.brandIcon}`}></i>My Profile
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            {NAV_LINKS.map((link) => (
              <li className="nav-item" key={link.href}>
                <a
                  className={`nav-link ${styles.navLink}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
