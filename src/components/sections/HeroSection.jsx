import React from "react";
import { useTranslation } from "react-i18next";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { PlanetViewer } from "../PlanetViewer";

function HeroSection() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center pt-28 gap-3 flex-col md:flex-row md:gap-14">
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
          <div className="pt-3">
            <a href="https://www.linkedin.com/in/louis-amoros-bessede/">
              {
                <AiFillLinkedin className="inline-block dark:text-white text-indigo-600 text-2xl md:text-3xl mx-2" />
              }
            </a>
            <a href="https://github.com/iamlouislab">
              {
                <AiFillGithub className="inline-block dark:text-white text-indigo-600 text-2xl md:text-3xl mx-2" />
              }
            </a>
          </div>
        </div>
      </div>
      <div className="h-[300px]">
        <PlanetViewer scale="40" modelPath={"/planet.glb"} />
      </div>
    </div>
  );
}

export default HeroSection;
