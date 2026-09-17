import { Project } from "@/types/project";
import styles from "./Projects.module.css";

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  return (
    <div className={`card card-3d h-100 mx-auto ${styles.projectCard}`}>
      <div className="card-body">
        <div className="position-relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            className={`img-fluid mb-4 w-100 ${styles.projectImg}`}
          />
          <div className="position-absolute top-0 end-0 m-3">
            {project.badges.map((badge) => (
              <span className="badge bg-primary me-1" key={badge}>
                {badge}
              </span>
            ))}
          </div>
        </div>
        <h4 className="card-title">{project.title}</h4>
        <p className="card-text">{project.summary}</p>
        <div className="mt-3">
          <a
            href="#"
            className="btn btn-sm btn-3d"
            onClick={(e) => {
              e.preventDefault();
              onViewDetails(project);
            }}
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}
