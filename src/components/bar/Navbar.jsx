import { useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo_cla.png";
import useSmoothScroll from "../../components/hooks/useSmoothScroll";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOtherServicesOpen, setIsOtherServicesOpen] = useState(false);
  const [isOtherServicesMobileOpen, setIsOtherServicesMobileOpen] =
    useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);
  const otherServicesRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  useSmoothScroll();
  let timeoutId = null;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (to) => {
    setIsMobileMenuOpen(false);
    if (to === location.pathname) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(to);
    }
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setIsOtherServicesOpen(true);
    if (otherServicesRef.current) {
      const rect = otherServicesRef.current.getBoundingClientRect();
      setDropdownTop(rect.bottom);
    }
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsOtherServicesOpen(false);
    }, 1000);
  };

  const handleDropdownMouseEnter = () => {
    clearTimeout(timeoutId);
  };

  const handleDropdownMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setIsOtherServicesOpen(false);
    }, 1000);
  };

  return (
    <>
      <nav className="px-2 sm:px-4 py-2.5 shadow bg-white w-full fixed top-0 z-40">
        <div className="container flex flex-wrap justify-between items-center mx-auto max-w-7xl">
          <Link
            to="/"
            className="flex items-center"
            onClick={() => handleLinkClick("/")}
          >
            <img src={logo} alt="Logo CLA" className="h-24 w-auto" />
          </Link>

          {/* Hamburger menu for mobile */}
          <div className="flex items-center md:hidden">
            <label className="btn btn-circle swap swap-rotate">
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

          {/* Navigation links for desktop */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-8 md:text-base md:font-bold items-center">
              <li>
                <Link
                  to="/"
                  className={`py-2 pr-4 pl-3 text-primary relative ${
                    location.pathname === "/"
                      ? "border-b-2 border-secondary "
                      : ""
                  }`}
                  onClick={() => handleLinkClick("/")}
                >
                  Home
                  <span className="border-animation"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/legal-associate"
                  className={`py-2 pr-4 pl-3 text-primary relative ${
                    location.pathname === "/legal-associate"
                      ? "border-b-2 border-secondary"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("/legal-associate")}
                >
                  Legal Associate
                  <span className="border-animation"></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/legal-training"
                  className={`py-2 pr-4 pl-3 text-primary relative ${
                    location.pathname === "/legal-training"
                      ? "border-b-2 border-secondary"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("/legal-training")}
                >
                  Legal Training
                  <span className="border-animation"></span>
                </Link>
              </li>
              <li
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                ref={otherServicesRef}
              >
                <button className="py-2 pr-4 pl-3 text-primary relative">
                  Other Services
                  <span className="border-animation"></span>
                  <svg
                    className={`flex-shrink-0 w-4 h-4 ml-auto transform ${
                      isOtherServicesOpen ? "rotate-90" : "rotate-0"
                    } h-2 w-4 ml-2 items-center inline-block transition-transform duration-600 ease-in-out text-secondary`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={
                        isOtherServicesOpen ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"
                      }
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar for mobile */}
      <div
        className={`md:hidden w-64 bg-white fixed top-0 left-0 h-full z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto
           ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        id="mobile-menu"
      >
        <div className="flex justify-between items-center px-4 py-6">
          <Link
            to="/"
            className="flex items-center"
            onClick={() => handleLinkClick("/")}
          >
            <img src={logo} alt="Logo CLA" className="h-24 w-auto" />
          </Link>
        </div>
        <ul className="flex-col md:flex-row  md:mt-0 md:text-base md:font-bold px-4">
          <li>
            <Link
              to="/"
              className={`block py-2 pr-4 pl-3 font-semibold text-primary relative ${
                location.pathname === "/" ? "border-b-2 border-secondary " : ""
              }`}
              onClick={() => handleLinkClick("/")}
            >
              Home
              <span className="border-animation"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/legal-associate"
              className={`block py-2 pr-4 pl-3 font-semibold text-primary relative ${
                location.pathname === "/legal-associate"
                  ? "border-b-2 border-secondary"
                  : ""
              }`}
              onClick={() => handleLinkClick("/legal-associate")}
            >
              Legal Associate
              <span className="border-animation"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/legal-training"
              className={`block py-2 pr-4 pl-3 font-semibold text-primary relative ${
                location.pathname === "/legal-training"
                  ? "border-b-2 border-secondary"
                  : ""
              }`}
              onClick={() => handleLinkClick("/legal-training")}
            >
              Legal Training
              <span className="border-animation"></span>
            </Link>
          </li>
          <li
            className="relative"
            onClick={() =>
              setIsOtherServicesMobileOpen(!isOtherServicesMobileOpen)
            }
          >
            <button className="block py-2 pr-4 pl-3 text-primary font-semibold flex items-center justify-between">
              <span>Other Services</span>
              <svg
                className={`flex-shrink-0 w-4 h-4 transform ${
                  isOtherServicesMobileOpen ? "rotate-90" : "rotate-0"
                } ml-2 items-center inline-block transition-transform duration-300 ease-in-out text-secondary`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOtherServicesMobileOpen
                      ? "M19 9l-7 7-7-7"
                      : "M5 15l7-7 7 7"
                  }
                />
              </svg>
            </button>
          </li>
          {isOtherServicesMobileOpen && (
            <div
              className={`pl-6 grid grid-cols-1 w-full justify-center sm:grid-cols-2 lg:grid-cols-4 gap-4 text-primary transition-opacity duration-300 ease-in-out opacity-100`}
              style={{ top: `${dropdownTop}px` }}
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <div>
                <div className="py-2 border-b border-gray-400">
                  <button
                    className="px-3 py-1 font-semibold text-sm  bg-secondary rounded-full
                   "
                  >
                    LEGALITY
                  </button>
                </div>
                <ul className="mt-2 space-y-1 ">
                  <li>PT / Perseroan Terbatas</li>
                  <li>CV / Commanditaire Venootschap</li>
                  <li>PT Perorangan</li>
                  <li>New</li>
                  <li>PT PMA</li>
                  <li>Firma</li>
                  <li>Persekutuan Perdata</li>
                  <li>Perkumpulan</li>
                  <li>Yayasan</li>
                </ul>
              </div>
              <div>
                <div className="py-2 border-b border-gray-400">
                  <button className="font-semibold px-3 py-1 text-sm bg-secondary rounded-full">
                    PERIZINAN
                  </button>
                </div>
                <ul className="mt-2 space-y-1 ">
                  <li>NIB & OSS</li>
                  <li>Izin PKP</li>
                  <li>Izin Restoran</li>
                  <li>Izin Konstruksi</li>
                  <li>Izin PSE</li>
                  <li>Izin K3L</li>
                  <li>Izin Yayasan</li>
                  <li>33++ Izin Lainnya</li>
                  <li>ALL</li>
                </ul>
              </div>
              <div>
                <div className="py-2 border-b border-gray-400">
                  <button className="font-semibold px-3 py-1 text-sm bg-secondary rounded-full ">
                    JASA HUKUM
                  </button>
                </div>
                <ul className="mt-2 space-y-1 ">
                  <li>Virtual Office</li>
                  <li>Perubahan Anggaran Dasar</li>
                  <li>Penutupan Perusahaan</li>
                  <li>Perjanjian Pisah Harta</li>
                  <li>Pendaftaran Merek</li>
                  <li>KITAS Pekerja</li>
                  <li>KITAS Investor</li>
                  <li>17++ Layanan Lainnya</li>
                  <li>ALL</li>
                </ul>
              </div>
              <div>
                <div className="py-2 border-b border-gray-400">
                  <button className="font-semibold px-3 py-1 text-sm bg-secondary rounded-full ">
                    LAINNYA
                  </button>
                </div>
                <ul className="mt-2 space-y-1 ">
                  <li>Virtual Office</li>
                  <li>Perubahan Anggaran Dasar</li>
                  <li>Penutupan Perusahaan</li>
                </ul>
              </div>
            </div>
          )}
        </ul>
      </div>

      {isOtherServicesOpen && (
        <div
          className={`fixed ${
            isMobileMenuOpen ? "right-0" : "left-0 right-0 mx-auto"
          } max-w-7xl bg-gradient-to-r from-primary to-cyan-600 shadow-lg rounded mt-8 p-4 grid grid-cols-1 w-full justify-center sm:grid-cols-2 lg:grid-cols-4 gap-4 z-30`}
          style={{ top: `${dropdownTop}px` }}
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
          <div>
            <div className="py-2 border-b border-gray-400">
              <button className="font-bold px-3 py-1 text-sm rounded-full bg-secondary">
                LEGALITY
              </button>
            </div>
            <ul className="mt-2 space-y-1 text-white">
              <li>PT / Perseroan Terbatas</li>
              <li>CV / Commanditaire Venootschap</li>
              <li>PT Perorangan</li>
              <li>New</li>
              <li>PT PMA</li>
              <li>Firma</li>
              <li>Persekutuan Perdata</li>
              <li>Perkumpulan</li>
              <li>Yayasan</li>
            </ul>
          </div>
          <div>
            <div className="py-2 border-b border-gray-400">
              <button className="font-bold px-3 py-1 text-sm rounded-full bg-secondary">
                PERIZINAN
              </button>
            </div>
            <ul className="mt-2 space-y-1 text-white">
              <li>NIB & OSS</li>
              <li>Izin PKP</li>
              <li>Izin Restoran</li>
              <li>Izin Konstruksi</li>
              <li>Izin PSE</li>
              <li>Izin K3L</li>
              <li>Izin Yayasan</li>
              <li>33++ Izin Lainnya</li>
              <li>ALL</li>
            </ul>
          </div>
          <div>
            <div className="py-2 border-b border-gray-400">
              <button className="font-bold px-3 py-1 text-sm rounded-full bg-secondary">
                JASA HUKUM
              </button>
            </div>
            <ul className="mt-2 space-y-1 text-white">
              <li>Virtual Office</li>
              <li>Perubahan Anggaran Dasar</li>
              <li>Penutupan Perusahaan</li>
              <li>Perjanjian Pisah Harta</li>
              <li>Pendaftaran Merek</li>
              <li>KITAS Pekerja</li>
              <li>KITAS Investor</li>
              <li>17++ Layanan Lainnya</li>
              <li>ALL</li>
            </ul>
          </div>
          <div>
            <div className="py-2 border-b border-gray-400">
              <button className="font-bold px-3 py-1 text-sm rounded-full bg-secondary">
                LAINNYA
              </button>
            </div>
            <ul className="mt-2 space-y-1 text-white">
              <li>Virtual Office</li>
              <li>Perubahan Anggaran Dasar</li>
              <li>Penutupan Perusahaan</li>
            </ul>
          </div>
        </div>
      )}

      <div className="pt-20">
        <main></main>
      </div>
    </>
  );
}

export default Navbar;
