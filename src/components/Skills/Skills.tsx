import { RevealSection } from "@/components/RevealSection/RevealSection";
import { skills } from "@/data/skills";
import { SkillBar } from "./SkillBar";

export function Skills() {
  return (
    <RevealSection id="skills" className="bg-darker">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="row">
          {skills.map((skill) => (
            <SkillBar skill={skill} key={skill.name} />
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
