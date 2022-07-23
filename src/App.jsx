import React from "react";
import Experiences from "./components/Experiences";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

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
