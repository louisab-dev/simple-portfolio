import React, { useState, useEffect } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

function ThemeButton() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="mx-5 my-5 md:my-0">
      <button
        type="button"
        onClick={handleThemeChange}
        className="bg-indigo-700 h-10 w-10 rounded-md"
      >
              <div className={`text-2xl mx-2 text-white`}>{theme === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />}</div>
      </button>
    </div>
  );
}

export default ThemeButton;
