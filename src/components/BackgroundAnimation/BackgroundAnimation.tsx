"use client";

import { useFloatingBackground } from "@/hooks/useFloatingBackground";
import styles from "./BackgroundAnimation.module.css";

export function BackgroundAnimation() {
  const dots = useFloatingBackground(50);

  return (
    <div className={styles.bgAnimation} aria-hidden="true">
      {dots.map((dot) => (
        <span
          key={dot.id}
          className={styles.dot}
          style={{
            left: dot.left,
            animationDelay: dot.animationDelay,
            width: dot.size,
            height: dot.size,
          }}
        />
      ))}
    </div>
  );
}
