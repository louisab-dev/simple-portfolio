import { AiOutlineHome } from "react-icons/ai";
import ThemeButton from "./buttons/ThemeButton";
import LangageButton from "./buttons/LangageButton";

function Nav() {
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="flex items-center justify-between bg-[#e7e8e2] dark:bg-slate-900 py-4 px-7">
        <a
          className="font-bold text-2xl cursor-pointer flex items-center text-gray-800"
          href="/"
        >
          <AiOutlineHome className="mr-2 text-gray-600 dark:text-white" />
        </a>
        <div className="flex flex-row gap-5">
          <ThemeButton />
          <LangageButton />
        </div>
      </div>
    </div>
  );
}

export default Nav;
