"use client";

import { useBackToTop } from "@/hooks/useBackToTop";
import { scrollToAnchor } from "@/hooks/useSmoothAnchorScroll";
import styles from "./BackToTop.module.css";

export function BackToTop() {
  const show = useBackToTop(500);

  return (
    <a
      href="#home"
      className={`${styles.backToTop} ${show ? styles.show : ""}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToAnchor("#home");
      }}
      aria-label="Back to top"
    >
      <i className="fas fa-arrow-up"></i>
    </a>
  );
}
