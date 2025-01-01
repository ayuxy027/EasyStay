import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function NavBar() {
  const { isAuthenticated, logout, user } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/home" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-proj lg:text-3xl">EasyStay</h1>
            </Link>
          </div>
          
          {/* Desktop Navigation Items */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <NavItem to="/signup" text="Get Franchise" />
            <NavItem to="/pro" text="PRO" />
            <NavItem to="/faq" text="FAQ" />
            <NavItem to="/support" text="24/7 Support" />
          </div>
          
          {/* Login, Sign Up buttons and Mobile Menu Toggle */}
          <div className="flex items-center">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <img 
                  src={user?.picture} 
                  alt={user?.name}
                  className="w-8 h-8 rounded-full"
                />
                <button
                  onClick={() => logout({ returnTo: window.location.origin })}
                  className="px-4 py-2 text-sm font-medium text-white rounded-md transition duration-300 ease-in-out transform bg-proj hover:bg-proj-hover focus:outline-none focus:ring-4 focus:ring-blue-300 active:ring-blue-500 focus:ring-opacity-50 active:scale-95 active:animate-pulse"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <button className="px-4 py-2 text-sm font-medium text-white rounded-md transition duration-300 ease-in-out transform bg-proj hover:bg-proj-hover focus:outline-none focus:ring-4 focus:ring-blue-300 active:ring-blue-500 focus:ring-opacity-50 active:scale-95 active:animate-pulse">
                    Login
                  </button>
                </Link>
                <Link to="/signup" className="ml-2 sm:ml-4">
                  <button className="px-4 py-2 text-sm font-medium text-white rounded-md transition duration-300 ease-in-out transform bg-proj hover:bg-proj-hover focus:outline-none focus:ring-4 focus:ring-blue-300 active:ring-blue-500 focus:ring-opacity-50 active:scale-95 active:animate-pulse">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex justify-center items-center p-2 ml-4 text-gray-400 rounded-md sm:hidden hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <MobileNavItem to="/signup" text="Get Franchise" />
          <MobileNavItem to="/pro" text="PRO" />
          <MobileNavItem to="/faq" text="FAQ" />
          <MobileNavItem to="/support" text="24/7 Support" />
        </div>
      </div>
    </nav>
  );
}

// Desktop Navigation Item Component
function NavItem({ to, text }) {
  return (
    <Link
      to={to}
      className="px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-gray-900"
    >
      {text}
    </Link>
  );
}

// Mobile Navigation Item Component
function MobileNavItem({ to, text }) {
  return (
    <Link
      to={to}
      className="block px-3 py-2 text-lg font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
    >
      {text}
    </Link>
  );
}

export default NavBar;