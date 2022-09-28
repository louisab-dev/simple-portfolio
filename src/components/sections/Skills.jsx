import React from "react";
import SectionTitle from "../SectionTitle";
import SkillItem from "../items/SkillItem";
import { useTranslation } from "react-i18next";
import { DiReact } from "react-icons/di";
import { AiFillApple } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";

import Carousel from "../Carousel";

function Skills() {
  const { t } = useTranslation();

  const SkillList = [
    <SkillItem
      title={t("skills.frontend_dev.title")}
      icon={<DiReact />}
      description={t("skills.frontend_dev.description")}
      key={t("skills.frontend_dev.title")}
    />,
    <SkillItem
      title={t("skills.backend_dev.title")}
      icon={<FaNodeJs />}
      description={t("skills.backend_dev.description")}
      key={t("skills.backend_dev.title")}
    />,
    <SkillItem
      title={t("skills.mobile_dev.title")}
      icon={<AiFillApple />}
      description={t("skills.mobile_dev.description")}
      key={t("skills.mobile_dev.title")}
    />,
  ];

  return (
    <div className="py-12">
      <SectionTitle>{t("skills.title")}</SectionTitle>
      <Carousel>{SkillList}</Carousel>
    </div>
  );
}

export default Skills;
