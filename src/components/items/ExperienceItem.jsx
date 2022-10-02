import React from "react";

function ExperienceItem({ thumbnail, title, keywords, link }) {
  return (
    <div className="bg-slate-300 dark:bg-slate-800 rounded-lg overflow-hidden hover:-translate-y-2 transform transition mt-5 mx-5">
      <a href={link}>
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-36 md:h-48 object-cover"
        />
        <div className="text-gray-600 dark:text-gray-300 p-5 w-full">
          <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
            {title}
          </h3>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
            {keywords.map((item) => (
              <span
                key={item}
                className="inline-block px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-md"
              >
                {item}
              </span>
            ))}
          </p>
        </div>
      </a>
    </div>
  );
}

export default ExperienceItem;
