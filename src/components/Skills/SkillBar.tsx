"use client";

import { Skill } from "@/types/skill";
import { useSkillBarReveal } from "@/hooks/useSkillBarReveal";
import styles from "./Skills.module.css";

export function SkillBar({ skill, index = 0 }: { skill: Skill; index?: number }) {
  const { ref, animated } = useSkillBarReveal(0.5);

  return (
    <div
      className={`col-md-3 col-6 text-center mb-5 ${styles.skillCard} ${
        animated ? styles.skillCardVisible : ""
      }`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div
        className={`${styles.techIcon} mx-auto`}
        style={{ animationDelay: `${index * 0.15}s` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={skill.icon} width={40} height={40} alt={skill.name} />
      </div>
      <h5 className="mt-3">{skill.name}</h5>
      <div className={`${styles.skillBar} mt-3`} ref={ref}>
        <div
          className={styles.skillProgress}
          style={{ width: animated ? `${skill.level}%` : "0%" }}
        />
      </div>
    </div>
  );
}
