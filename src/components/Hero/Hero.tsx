"use client";

import Script from "next/script";
import { scrollToAnchor } from "@/hooks/useSmoothAnchorScroll";
import { particlesConfig } from "@/data/particlesConfig";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div id="particles-js" className={styles.particles}></div>
      <Script
        src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.particlesJS?.("particles-js", particlesConfig);
        }}
      />
      <div className={`container ${styles.heroContent}`}>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className={`${styles.availableBadge} ${styles.fadeIn}`}
              style={{ animationDelay: "0s" }}
            >
              <span className={styles.pulseDot}></span>
              Available for new opportunities
            </div>
            <h3
              className={`text-primary mb-3 ${styles.fadeIn}`}
              style={{ animationDelay: "0.2s" }}
            >
              Hello, I&apos;m
            </h3>
            <h1
              className={`fw-bold mb-4 ${styles.heroTitle} ${styles.fadeIn}`}
              style={{ animationDelay: "0.4s" }}
            >
              Jeffrey
            </h1>
            <h4
              className={`mb-4 ${styles.subtitle} ${styles.fadeIn}`}
              style={{ animationDelay: "0.6s" }}
            >
              Inspiring Full Stack Web Developer
            </h4>
            <p
              className={`lead mb-5 ${styles.fadeIn}`}
              style={{ animationDelay: "0.8s" }}
            >
              I specialize in creating dynamic web applications using PHP
              (Laravel), JavaScript, and MySQL with modern CSS frameworks
              like Tailwind and Bootstrap.
            </p>
            <div className={styles.fadeIn} style={{ animationDelay: "1s" }}>
              <a
                href="#projects"
                className="btn btn-primary btn-lg btn-3d me-3"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToAnchor("#projects");
                }}
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="btn btn-outline-light btn-lg"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToAnchor("#contact");
                }}
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className={`text-center mt-5 mt-lg-0 ${styles.profileCard}`}
            >
              <div className={styles.profileRing}>
                <div className={styles.profileImgWrap}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/fr.jpg"
                    alt="Profile"
                    className={styles.profileImg}
                  />
                  <div className={styles.profileVignette}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#about"
        className={styles.scrollIndicator}
        aria-label="Scroll to About section"
        onClick={(e) => {
          e.preventDefault();
          scrollToAnchor("#about");
        }}
      >
        <i className="fas fa-chevron-down"></i>
      </a>
    </section>
  );
}
