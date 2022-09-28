import React from "react";
import { useTranslation } from "react-i18next";

function HeroSection() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center py-28 gap-3 flex-col md:flex-row md:gap-10">
      <img src="/pfp.png" alt="Profile" className="rounded-full w-64 h-64" />
      <div className="flex items-center justify-center flex-col">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 font-semibold">
            {t("hero.title")}
          </h1>
          <p className="text-md md:text-xl max-w-md mb-3 text-gray-600">
            {t("hero.subtitle")}
          </p>
          <a
            href="mailto:louisamorosbessede@gmail.com"
            className="inline-block px-8 py-3 border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
          >
            Contact me !
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
