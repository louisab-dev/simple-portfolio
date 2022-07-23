import React from "react";

function HeroSection() {
  return (
    <div className="flex items-center justify-center flex-col py-20">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 font-semibold pt-3">
          Hi, this is Louis
        </h1>
        <p className="text-md md:text-xl max-w-md mb-3 text-gray-600">
          I'm a student based in Toulouse
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3 border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
        >Check out my work !</a>
      </div>
    </div>
  );
}

export default HeroSection;
