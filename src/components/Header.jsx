// import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { FaBell, FaUserCircle } from 'react-icons/fa';

function Header({ darkMode, setDarkMode }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow-md">
      <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        Admin Dashboard
      </div>
      <div className="flex items-center space-x-4">
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <Link to='/messages'>
            <FaBell className="text-gray-500 dark:text-gray-300 text-xl cursor-pointer" />
        </Link>
        <Link to='/profile'>
            <FaUserCircle className="text-gray-500 dark:text-gray-300 text-xl cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
