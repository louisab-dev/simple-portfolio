import React from "react";
import SectionTitle from "../SectionTitle";
import ProjectItem from "../items/ProjectItem";
import { useTranslation } from "react-i18next";

import Carousel from "../Carousel";

function Projects() {
  const { t } = useTranslation();

  const SkillList = [
    <ProjectItem
      imgUrl="https://pbs.twimg.com/profile_banners/1380620718883373064/1618015507/1500x500"
      title="Source Raffles"
      tech={["Python", "JavaScript", "Google Cloud"]}
      link="https://sourceraffles.com"
      key="Source Raffles"
    />,
    <ProjectItem
      imgUrl="https://storage.googleapis.com/ethglobal-api-production/projects/4394s/images/Illustration.png"
      title="Parcels"
      tech={["Next.js", "TailwindCSS", "Solidity"]}
      link="https://showcase.ethglobal.com/buildquest/parcels-web3-strategy-game-4394s"
      key="Parcels"
    />,
    <ProjectItem
      imgUrl="https://metaclip.tech/_next/image?url=%2Flogo.png&w=640&q=75"
      title="Metaclip"
      tech={["Next.js", "AWS", "Solidity"]}
      link="https://metaclip.tech"
      key="Metaclip"
    />,
  ];

  return (
    <div className="py-12">
      <SectionTitle>{t("projects.title")}</SectionTitle>
      <Carousel>{SkillList}</Carousel>
    </div>
  );
}

export default Projects;
