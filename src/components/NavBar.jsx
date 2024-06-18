import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.png';

function NavBar() {
  return (
    <>
      <nav className="bg-white border-gray-200 font-body">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <Link to="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} alt="Logo" className="self-center w-auto h-10" />
          </Link>
          <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
            <Link to={"/Login"}>
              <button
                type="button"
                className="text-black bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl md:text-lg px-4 py-2 text-center mr-[10px] sm:text-sm"
              >
                Login
              </button>
            </Link>
            <Link to={"/signup"}>
              <button
                type="button"
                className="px-4 py-2 font-medium text-center text-black bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-3xl md:text-lg sm:text-sm"
              >
                SignUp
              </button>
            </Link>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-cta"
              aria-expanded="false"
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
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link to="home">
                  <button
                    className="block px-3 py-2 text-white bg-blue-700 rounded md:p-0 md:bg-transparent md:text-blue-700"
                    aria-current="page"
                  >
                    Home
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block px-3 py-2 text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                >
                  Get Franchise
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block px-3 py-2 text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                >
                  PRO
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="block px-3 py-2 text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                >
                  24/7 Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
