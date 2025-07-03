// src/components/DarkModeToggle.jsx
import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = () => {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:scale-110 transition"
      aria-label="Toggle Dark Mode"
    >
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default DarkModeToggle;
