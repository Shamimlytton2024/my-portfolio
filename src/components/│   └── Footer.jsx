// components/Footer.jsx

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Shamim Lytton. All rights reserved.
        </p>
        <div className="flex space-x-4 text-lg">
          <a
            href="https://github.com/shamimlytton"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shamimlytton"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:kalandeshamim@gmail.com"
            className="hover:text-gray-400"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
