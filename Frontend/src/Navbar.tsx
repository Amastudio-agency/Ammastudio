

import React, { useState } from "react";

// Define the functional component with a React.FC type
const Navbar: React.FC = () => {
  // State to control the menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between p-4 text-white">
        <h1 className="text-xl font-bold whitespace-nowrap">Ammastudio</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <button
                className="border border-white rounded-md px-3 py-1 hover:bg-gray-800"
                onClick={() => (window.location.href = "/")}
              >
                + become client
              </button>
            </li>
            <li>
              <button
                className="border border-white rounded-full p-2 hover:bg-gray-800 flex items-center justify-center w-10 h-10"
                onClick={toggleMenu}
              >
                {/* Simple Hamburger Icon using SVG */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Dropdown menu */}
      <div
        className={`absolute top-0 left-0 w-full bg-gray-800 text-white transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        {/* Close Icon */}
        <div className="flex justify-start p-4">
          <button
            className="border border-white rounded-full p-2 hover:bg-gray-800 flex items-center justify-center w-10 h-10"
            onClick={toggleMenu}
          >
            {/* Arrow Icon using SVG */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col items-center space-y-4 py-4">
          <li>
            <a href="/services" className="hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="/projects" className="hover:text-gray-300">
              Works
            </a>
          </li>
          <li>
            <a href="/method" className="hover:text-gray-300">
              Method
            </a>
          </li>


          <li>
            <a href="/team" className="hover:text-gray-300">
              Team
            </a>
          </li>

          <li>
            <a href="/testimonial" className="hover:text-gray-300">
              Testimonial
            </a>
          </li>


          <li>
            <a href="/contact" className="hover:text-gray-300">
              Contaact
            </a>
          </li>



        </ul>
      </div>
    </div>
  );
};

export default Navbar;







