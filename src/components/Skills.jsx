import React from "react";
import SectionTitle from "./SectionTitle";
import SkillItem from "./SkillItem";
import skillsList from "../data/skills";

function Skills() {
  return (
    <div className="py-12">
      <SectionTitle>Skills</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillsList.map((skills) => (
          <SkillItem
            key={skills.title}
            title={skills.title}
            icon={skills.icon}
            description={skills.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
