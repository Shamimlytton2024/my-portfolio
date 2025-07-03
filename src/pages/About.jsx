// components/About.jsx

import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gray-100 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          About Me
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          I'm <span className="font-semibold text-indigo-600">Shamim Lytton</span>, a passionate Full-Stack Developer from Kenya. I love building clean, user-friendly web applications using modern technologies like Python, Flask, React, and Tailwind CSS.
        </p>

        <p className="text-gray-700 dark:text-gray-400">
          I have experience with both frontend and backend development, and I enjoy bringing ideas to life through clean code and thoughtful design. Whether it's a full product or a quick MVP, I aim to solve real-world problems with practical solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
