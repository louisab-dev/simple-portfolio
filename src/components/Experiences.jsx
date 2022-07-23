import React from "react";
import SectionTitle from "./SectionTitle";
import ExperienceItem from "./ExperienceItem";

function Experiences() {
  return (
    <div>
      <div className="py-12">
        <SectionTitle>Experiences</SectionTitle>
        <div className="grid grid-cols-1 gap-5">
          <ExperienceItem
            thumbnail="https://tezos.com/eventassets/tez-dev22/tezdev_meta.jpg"
            title="TezDev Paris"
            keywords={["Event", "Blockchain", "Tezos"]}
            link="/tez-dev-paris"
          />
          <ExperienceItem
            thumbnail="https://www.lalettre.pro/photo/art/grande/45801012-36831165.jpg?v=1588832567"
            title="Sacem Internship"
            keywords={["Internship", "Music", "Development"]}
            link="/sacem-internship"
          />
        </div>
      </div>
    </div>
  );
}

export default Experiences;
