import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <header className="bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100 p-4 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold mb-4 sm:mb-0">AfricanSpeaks</h1>
        <nav className="flex flex-wrap justify-center space-x-4">
          <Link to="/" className="hover:text-amber-700 dark:hover:text-amber-300">Home</Link>
          <Link to="/languages" className="hover:text-amber-700 dark:hover:text-amber-300">Languages</Link>
          <Link to="/teachers" className="hover:text-amber-700 dark:hover:text-amber-300">Teachers</Link>
          <Link to="/schedule" className="hover:text-amber-700 dark:hover:text-amber-300">Schedule</Link>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)} 
            className="p-2 rounded-full bg-amber-200 dark:bg-amber-800"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
