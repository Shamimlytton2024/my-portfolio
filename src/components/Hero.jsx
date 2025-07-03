import React from "react";
import {
  SiPython,
  SiFlask,
  SiSqlalchemy,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
} from "react-icons/si";

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Hi, I'm <span className="text-indigo-600">Shamim Lytton</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-2">
          A passionate Full-Stack Developer crafting modern web apps with Python, Flask, React, and Tailwind CSS.
        </p>
        <p className="text-md text-gray-700 dark:text-gray-400 mb-6">
          📞 <a href="tel:+25472565619" className="text-indigo-600 hover:underline">0725 656 19</a>
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <a
            href="#projects"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full transition"
          >
            View Projects
          </a>
          <a
            href="mailto:kalandshamim@gmail.com"
            className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 font-semibold px-6 py-3 rounded-full transition"
          >
            Contact Me
          </a>
        </div>

        {/* Tech Stack Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 max-w-3xl mx-auto">
          <SiPython className="text-4xl text-yellow-500" title="Python" />
          <SiFlask className="text-4xl text-gray-700" title="Flask" />
          <SiSqlalchemy className="text-4xl text-red-600" title="SQLAlchemy" />
          <SiJavascript className="text-4xl text-yellow-400" title="JavaScript" />
          <SiReact className="text-4xl text-blue-500" title="React" />
          <SiTailwindcss className="text-4xl text-teal-400" title="Tailwind CSS" />
          <SiHtml5 className="text-4xl text-orange-600" title="HTML5" />
          <SiCss3 className="text-4xl text-blue-600" title="CSS3" />
          <SiGit className="text-4xl text-orange-500" title="Git" />
          <SiGithub className="text-4xl text-black dark:text-white" title="GitHub" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
