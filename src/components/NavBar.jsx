import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.png';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-md font-body">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <Link to="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Logo} alt="Logo" className="w-auto h-10" />
        </Link>
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <Link to="/Login">
            <button
              type="button"
              className="text-white bg-blue-600 transition-transform duration-200 ease-in-out hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2 text-center mr-[10px]"
            >
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button
              type="button"
              className="px-4 py-2 font-medium text-center text-white transition-transform duration-200 ease-in-out bg-green-600 rounded-lg hover:scale-105 focus:ring-4 focus:outline-none focus:ring-green-300"
            >
              Sign Up
            </button>
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 transition-colors duration-200 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-cta"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-300 ease-in-out ${
            isOpen ? 'block' : 'hidden'
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
      
            <li>
              <Link to="/get-franchise" className="block px-3 py-2 text-lg text-gray-900 transition-colors duration-200 rounded hover:text-blue-700 md:p-0 sm:hover:bg-blue-700 sm:hover:text-white">
                Get Franchise
              </Link>
            </li>
            <li>
              <Link to="#" className="block px-3 py-2 text-lg text-gray-900 transition-colors duration-200 rounded hover:text-blue-700 md:p-0 sm:hover:bg-blue-700 sm:hover:text-white">
                PRO
              </Link>
            </li>
            <li>
              <Link to="/faq" className="block px-3 py-2 text-lg text-gray-900 transition-colors duration-200 rounded hover:text-blue-700 md:p-0 sm:hover:bg-blue-700 sm:hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/support" className="block px-3 py-2 text-lg text-gray-900 transition-colors duration-200 rounded hover:text-blue-700 md:p-0 sm:hover:bg-blue-700 sm:hover:text-white">
                24/7 Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
