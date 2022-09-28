import React from "react";
import SectionTitle from "../SectionTitle";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <div className="py-12">
      <SectionTitle>{t("about.title")}</SectionTitle>
      <div className="text-gray-700 dark:text-gray-300">
        <p>{t("about.description")}</p>
      </div>
    </div>
  );
}

export default Projects;
