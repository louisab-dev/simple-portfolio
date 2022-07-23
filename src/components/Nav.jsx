import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import ThemeButton from "./buttons/ThemeButton";
import LangageButton from "./buttons/LangageButton";

function Nav() {
  let links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/projects",
    },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-[#e7e8e2] dark:bg-slate-900 py-4 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          <img src="/logo.png" alt="logo" className=" h-10 w-10 mr-1 pt-2" />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-black dark:text-white"
        >
          {open ? <GrClose /> : <GiHamburgerMenu />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto bg-inherit z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a href={link.link}>
                <button className="bg-transparent text-gray-600 dark:text-gray-200 font-semibold hover:bg-slate-300 dark:hover:bg-slate-800 py-2 px-4 rounded-md">
                  {link.name}
                </button>
              </a>
            </li>
          ))}
          <ThemeButton />
          <LangageButton />
        </ul>
      </div>
    </div>
  );
}

export default Nav;
