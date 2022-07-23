import React, { useState, useEffect } from "react";
import HeaderButton from "./HeaderButton";

function Header() {
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
    <div className="bg-indigo-500">
      <button
        type="button"
        onClick={handleThemeChange}
        className="bg-indigo-700 text-lg p-1 rounded-md h-10 w-10"
      >
        {theme === "dark" ? "🌙" : "🌞"}
      </button>
      <nav>
        <div className=" mx-auto flex flex-wrap items-center justify-between">
          <HeaderButton text={"Hello"} link={"#"} />
        </div>
      </nav>
    </div>
  );
}

export default Header;
