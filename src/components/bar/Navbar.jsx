import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo/logo_cla.png";
import useSmoothScroll from "../../components/hooks/useSmoothScroll";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useSmoothScroll();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="px-2 sm:px-4 py-2.5 shadow bg-white w-full fixed top-0 z-40">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center" onClick={handleLinkClick}>
          <img src={logo} alt="Logo CLA" className="h-20 w-auto" />
        </Link>

        <div className="flex items-center">
          <label className="btn btn-circle swap swap-rotate md:hidden">
            <input
              type="checkbox"
              checked={isMobileMenuOpen}
              onChange={toggleMobileMenu}
            />
            {/* hamburger icon */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            {/* close icon */}
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
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
                to="/"
                className="block py-2 pr-4 pl-3 text-primary hover:text-secondary transition duration-300 ease-in-out"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/legal-associate"
                className="block py-2 pr-4 pl-3 text-primary hover:text-secondary transition duration-300 ease-in-out"
                onClick={handleLinkClick}
              >
                Legal Associate
              </Link>
            </li>
            <li>
              <Link
                to="/legal-training"
                className="block py-2 pr-4 pl-3 text-primary hover:text-secondary transition duration-300 ease-in-out"
                onClick={handleLinkClick}
              >
                Legal Training
              </Link>
            </li>
            <li>
              <Link
                to="/other-service"
                className="block py-2 pr-4 pl-3 text-primary hover:text-secondary transition duration-300 ease-in-out"
                onClick={handleLinkClick}
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
