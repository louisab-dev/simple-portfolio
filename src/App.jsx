import React from "react";
import Experiences from "./components/sections/Experiences";
import HeroSection from "./components/sections/HeroSection";
import Nav from "./components/Nav";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";

function App() {
  return (
    <>
      <Nav />
      <div className="bg-[#e7e8e2] dark:bg-slate-900">
        <div className="max-w-5xl mx-auto w-11/12">
          <HeroSection />
          <Skills />
          <Projects />
          <Experiences />
        </div>
      </div>
    </>
  );
}

export default App;
