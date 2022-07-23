import React from "react";
import SectionTitle from "../SectionTitle";
import ProjectItem from "../items/ProjectItem";

function Projects() {
  return (
    <div className="py-12">
      <SectionTitle>Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <ProjectItem
          imgUrl="https://pbs.twimg.com/profile_banners/1380620718883373064/1618015507/1500x500"
          title="Source Raffles"
          tech={["Python", "JavaScript", "Google Cloud"]}
          link="https://sourceraffles.com"
        />
      </div>
    </div>
  );
}

export default Projects;
