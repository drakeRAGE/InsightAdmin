// import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default ThemeToggle;
