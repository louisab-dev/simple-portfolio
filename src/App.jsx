import React from "react";
import Experiences from "./components/sections/Experiences";
import HeroSection from "./components/sections/HeroSection";
import Nav from "./components/Nav";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import About from "./components/sections/About";

function App() {
  return (
    <>
      <Nav />
      <div className="bg-[#e7e8e2] dark:bg-slate-900">
        <div className="mx-auto w-5/6">
          <HeroSection />
          <About />
          <Skills />
          <Projects />
          <Experiences />
        </div>
      </div>
    </>
  );
}

export default App;
