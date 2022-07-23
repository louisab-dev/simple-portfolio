import React from "react";
import i18next from "i18next";
import { FaLanguage } from "react-icons/fa";

function ThemeButton() {
  const countryList = ["en", "fr", "es"];

  const nextLangage = () => {
    let index = countryList.indexOf(i18next.language);
    if (index === countryList.length - 1) {
      index = 0;
    } else {
      index++;
      index = index % countryList.length;
    }
      i18next.changeLanguage(countryList[index]);
      console.log(countryList[index]);
  };

  return (
    <div className="mx-5">
      <button
        type="button"
        onClick={nextLangage}
        className="bg-indigo-700 h-10 w-10 rounded-md"
      >
        <div className={`text-2xl mx-2 text-white`}>
            <FaLanguage />
        </div>
      </button>
    </div>
  );
}

export default ThemeButton;
