// components/ProjectCard.jsx
import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, description, github }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-xl mx-auto mb-6">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {description}
      </p>
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-indigo-600 hover:underline font-medium"
      >
        <FaGithub className="mr-2" />
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;
