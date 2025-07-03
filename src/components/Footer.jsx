import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6 text-center text-gray-600 dark:text-gray-300">
      <p>© {new Date().getFullYear()} Shamim Lytton. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
