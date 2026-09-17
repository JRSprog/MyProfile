"use client";

import { useState } from "react";
import { ExperienceItem } from "@/types/experience";
import styles from "./About.module.css";

export function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.timeline}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div className={styles.timelineItem} key={item.title}>
            <button
              type="button"
              className={styles.timelineToggle}
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>
                <h5>{item.title}</h5>
                <p className="text-primary mb-0">{item.period}</p>
              </span>
              <i
                className={`fas fa-chevron-down ${styles.timelineChevron} ${
                  isOpen ? styles.timelineChevronOpen : ""
                }`}
              ></i>
            </button>
            <div
              className={`${styles.timelineCollapse} ${
                isOpen ? styles.timelineCollapseOpen : ""
              }`}
            >
              <div className={styles.timelineCollapseInner}>
                {item.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
