import React from 'react';

//TODO: Change placeholder links, add logos

const Footer = () => {
  return (
    <footer className="footer flex flex-col items-center text-gray-700 p-4 bg-white bg-opacity-80 shadow-md mt-auto">
      <p>&copy; 2024 JPS</p>
      <div className="social-icons flex space-x-4 mt-2">
        <a href="https://www.google.com/" className="hover:text-blue-500">Github</a>
        <a href="https://www.google.com/" className="hover:text-blue-500">Twitter</a>
        <a href="https://www.google.com/" className="hover:text-blue-500">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;