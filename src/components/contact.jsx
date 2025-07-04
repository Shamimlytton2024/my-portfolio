// components/Contact.jsx

import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-xl mx-auto">
          I’m open to freelance, full-time roles, or collaborative projects. Feel free to reach out via email or social platforms.
        </p>

        <div className="text-lg space-y-4 text-gray-800 dark:text-white">
          <p className="flex items-center justify-center space-x-2">
            <HiOutlineMail className="text-xl text-indigo-600" />
            <a
              href="mailto:kalandshamim@gmail.com"
              className="text-indigo-600 hover:underline"
            >
              kalandshamim@gmail.com
            </a>
          </p>

          <p className="flex items-center justify-center space-x-2">
            <FaGithub className="text-xl text-gray-800 dark:text-white" />
            <a
              href="https://github.com/shamimlytton"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              github.com/shamimlytton
            </a>
          </p>

          <p className="flex items-center justify-center space-x-2">
            <FaLinkedin className="text-xl text-blue-600" />
            <a
              href="https://www.linkedin.com/in/shamimlytton"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:underline"
            >
              linkedin.com/in/shamimlytton
            </a>
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 italic">
            📱 For WhatsApp, please scan the QR code in the Hero section above.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
