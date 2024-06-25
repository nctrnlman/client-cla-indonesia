import React, { useState } from "react";
import logo from "../../assets/logo/logo_cla.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="px-2 sm:px-4 py-2.5 shadow">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo CLA" className="h-20 w-auto" />
        </Link>

        <div className="flex items-center">
          <button
            id="menu-toggle"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>

            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div
          className={`w-full md:block md:w-auto ${
            isMobileMenuOpen ? "" : "hidden"
          }`}
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-bold">
            <li>
              <Link
                to={"/"}
                className="block py-2 pr-4 pl-3 text-primary hover:text-secondary transition duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/legal-associate"}
                className="block py-2 pr-4 pl-3 text-primary hover:text-secondary transition duration-300 ease-in-out"
              >
                Legal Associate
              </Link>
            </li>
            <li>
              <Link
                to={"/legal-training"}
                className="block py-2 pr-4 pl-3 text-primary hover:text-secondary transition duration-300 ease-in-out"
              >
                Legal Training
              </Link>
            </li>
            <li>
              <Link
                to={"/other-service"}
                className="block py-2 pr-4 pl-3 text-primary hover:text-secondary transition duration-300 ease-in-out"
              >
                Other Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
