import React from "react";
import SectionTitle from "../SectionTitle";
import ExperienceItem from "../items/ExperienceItem";
import { useTranslation } from "react-i18next";
import Carousel from "../Carousel";

function Experiences() {
  const { t } = useTranslation();
  const ExperienceList = [
    <ExperienceItem
      thumbnail="https://www.lalettre.pro/photo/art/grande/45801012-36831165.jpg?v=1588832567"
      title="Sacem Internship"
      keywords={["Internship", "Music", "Development"]}
      link="/sacem-internship"
    />,
    <ExperienceItem
      thumbnail="https://tezos.com/Tezos_Meta.jpg"
      title="Formation Smart Contracts Tezos"
      keywords={["Formation", "Tezos", "Smart Contracts"]}
      link="/formation-smart-contract-tezos"
    />,
  ];
  return (
    <div>
      <div className="py-12">
        <SectionTitle>{t("experiences.title")}</SectionTitle>
        <Carousel>{ExperienceList}</Carousel>
      </div>
    </div>
  );
}

export default Experiences;
