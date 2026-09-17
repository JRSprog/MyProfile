import { RevealSection } from "@/components/RevealSection/RevealSection";
import { experience } from "@/data/experience";
import { ExperienceTimeline } from "./ExperienceTimeline";

export function About() {
  return (
    <RevealSection id="about" className="bg-dark">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="row">
          <div className="col-lg-6">
            <div className="card-3d card p-4 h-100">
              <h4 className="mb-4">
                <i className="fas fa-user me-2"></i>Who I Am
              </h4>
              <p>
                I am a passionate full-stack developer with expertise in
                building robust web applications using modern technologies.
              </p>
              <p>
                With a strong foundation in PHP (Laravel), JavaScript, and
                MySQL, I create efficient and scalable solutions that meet
                client needs.
              </p>
              <p>
                I have experience working with CSS frameworks like Tailwind
                CSS and Bootstrap to create visually appealing and responsive
                user interfaces.
              </p>
              <p>
                Graduated at Bestlink College of the Phillipines with a
                Bachelor degree in Information Technology majoring in
                Information Management
              </p>
              <p>
                Beyond the classroom, I enjoy turning real business needs into
                working software — from building Apsara Home, a full-stack
                dropshipping and social commerce platform, to inventory and
                school management systems used by actual organizations.
              </p>
              <p>
                I&apos;m driven by curiosity and a habit of continuous
                learning, always exploring new tools and best practices to
                write cleaner, more maintainable code. Outside of coding, I
                value collaboration and clear communication, and I&apos;m
                always open to new opportunities to grow as a developer.
              </p>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="card-3d card p-4 h-100">
              <h4 className="mb-4">
                <i className="fas fa-briefcase me-2"></i>My Experience
              </h4>
              <ExperienceTimeline items={experience} />
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
