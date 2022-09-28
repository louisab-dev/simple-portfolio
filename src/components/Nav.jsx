import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { AiOutlineHome } from "react-icons/ai";
import ThemeButton from "./buttons/ThemeButton";
import LangageButton from "./buttons/LangageButton";

function Nav() {
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-[#e7e8e2] dark:bg-slate-900 py-4 px-7">
        <a
          className="font-bold text-2xl cursor-pointer flex items-center text-gray-800"
          href="/"
        >
          <AiOutlineHome className="mr-2 text-white" />
        </a>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-black dark:text-white"
        >
          {open ? <GrClose /> : <GiHamburgerMenu />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto bg-inherit z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-200 ease-in ${
            open ? "top-16" : "top-[-490px]"
          }`}
        >
          <ThemeButton />
          <LangageButton />
        </ul>
      </div>
    </div>
  );
}

export default Nav;
