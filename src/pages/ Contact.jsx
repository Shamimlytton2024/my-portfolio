// components/Contact.jsx

import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-xl mx-auto">
          I’m open to freelance, full-time roles, or collaborative projects. Feel free to reach out!
        </p>

        <div className="text-lg space-y-2 text-gray-800 dark:text-white">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:kalandshamim@gmail.com"
              className="text-indigo-600 hover:underline"
            >
              kalandshamim@gmail.com
            </a>
          </p>
          <p>
            📞 Phone:{" "}
            <a
              href="tel:+25472565619"
              className="text-indigo-600 hover:underline"
            >
              0725 656 19
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
