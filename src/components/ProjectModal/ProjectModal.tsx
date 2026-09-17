"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Project } from "@/types/project";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    document.body.classList.add("modal-open");
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <>
      <div
        className="modal fade show d-block"
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="projectModalLabel"
        onClick={onClose}
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content bg-dark text-light">
            <div className="modal-header border-secondary">
              <h2 className="modal-title" id="projectModalLabel">
                Project Details
              </h2>
              <button
                type="button"
                className="btn-close btn-close-white"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                className="img-fluid rounded w-100 mb-3"
              />
              <div className="mb-3">
                {project.badges.map((badge) => (
                  <span className="badge bg-primary me-1 mb-1" key={badge}>
                    {badge}
                  </span>
                ))}
              </div>
              <h3 className="mb-3">{project.title}</h3>
              <p className="mb-3">{project.description}</p>
              <div className="mb-3">
                <h5>Technologies Used:</h5>
                <div>
                  {project.technologies.map((tech) => (
                    <span className="badge bg-primary me-1 mb-1" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-3">
                <h5>Key Features:</h5>
                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="modal-footer border-secondary">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
              {project.link && project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Live Project
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" onClick={onClose}></div>
    </>,
    document.body
  );
}
