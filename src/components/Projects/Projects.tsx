"use client";

import { useCallback, useEffect, useState } from "react";
import { RevealSection } from "@/components/RevealSection/RevealSection";
import { ProjectModal } from "@/components/ProjectModal/ProjectModal";
import { projects } from "@/data/projects";
import { Project } from "@/types/project";
import { ProjectCard } from "./ProjectCard";
import styles from "./Projects.module.css";

const AUTOPLAY_MS = 6000;

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    null
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + projects.length) % projects.length);
  }, []);

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <RevealSection id="projects" className="bg-dark">
      <div className="container">
        <h2 className="section-title">My Projects</h2>

        <div
          className={styles.carousel}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            type="button"
            className={`${styles.carouselControl} ${styles.carouselControlPrev}`}
            onClick={goPrev}
            aria-label="Previous project"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className={styles.carouselViewport}>
            <div
              className={styles.carouselTrack}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div className={styles.carouselSlide} key={project.id}>
                  <ProjectCard
                    project={project}
                    onViewDetails={setSelectedProject}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className={`${styles.carouselControl} ${styles.carouselControlNext}`}
            onClick={goNext}
            aria-label="Next project"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className={styles.carouselDots}>
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              className={`${styles.dot} ${
                index === activeIndex ? styles.dotActive : ""
              }`}
              onClick={() => goTo(index)}
              aria-label={`Go to ${project.title}`}
            />
          ))}
        </div>
      </div>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </RevealSection>
  );
}
