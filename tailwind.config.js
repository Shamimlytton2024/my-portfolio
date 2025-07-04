/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // Enables manual dark mode toggle
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: {
          DEFAULT: '#4f46e5', // Indigo-600
          dark: '#4338ca',
          light: '#6366f1',
        },
      },
    },
  },
  plugins: [],
};
