// components/Footer.jsx

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 md:mb-0 text-center md:text-left">
          © {new Date().getFullYear()} Shamim Lytton. All rights reserved.
        </p>

        <div className="flex space-x-4 text-lg text-gray-600 dark:text-gray-300">
          <a
            href="https://github.com/shamimlytton"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="hover:text-indigo-600 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shamimlytton"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="hover:text-indigo-600 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:kalandshamim@gmail.com"
            title="Send Email"
            className="hover:text-indigo-600 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
