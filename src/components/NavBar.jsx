import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-md">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="flex items-center justify-between py-3">
          <Link to="/home" className="flex items-center">
            <h1 className="text-2xl font-bold text-transparent sm:text-3xl bg-proj bg-clip-text font-body">EasyStay</h1>
          </Link>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Link to="/Login">
              <button className="px-3 py-1 text-sm text-white transition-transform duration-200 ease-in-out rounded-lg sm:px-4 sm:py-2 sm:text-base bg-proj hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-3 py-1 text-sm text-white transition-transform duration-200 ease-in-out rounded-lg sm:px-4 sm:py-2 sm:text-base bg-proj hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Sign Up
              </button>
            </Link>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className="flex flex-col px-2 py-3 space-y-1">
          <NavItem to="/signup" text="Get Franchise" />
          <NavItem to="/pro" text="PRO" />
          <NavItem to="/faq" text="FAQ" />
          <NavItem to="/support" text="24/7 Support" />
        </ul>
      </div>
    </nav>
  );
}

function NavItem({ to, text }) {
  return (
    <li>
      <Link 
        to={to} 
        className="block px-3 py-2 text-base text-gray-900 transition-colors duration-200 rounded hover:bg-gray-100"
      >
        {text}
      </Link>
    </li>
  );
}

export default NavBar;