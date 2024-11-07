import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//TODO: change placeholder links

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true); // Default to open for a sidebar layout

  return (
    <header className="flex flex-col w-64 h-screen bg-slate-500 bg-opacity-50 shadow-md fixed z-10">
      <h1 className="text-2xl font-bold text-gray-800 p-4">My Portfolio</h1>

      {/* Sidebar Navigation */}
      <nav className="flex flex-col space-y-4 p-4">
        <Link to="/" className="text-gray-800 hover:text-blue-500">Home</Link>
        <Link to="/about" className="text-gray-800 hover:text-blue-500">About</Link>
        <Link to="/projects" className="text-gray-800 hover:text-blue-500">Projects</Link>
        <a href="https://www.google.com/" className="text-gray-800 hover:text-blue-500">Contact</a>
      </nav>
    </header>
  );
};

export default Header;