import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/logo_cla.png";
import useSmoothScroll from "../../../hooks/useSmoothScroll";
import { useTranslation } from "react-i18next";
import Flag from "react-flagkit";
import { Globe } from "lucide-react";

function Navbar() {
  const { t, i18n } = useTranslation(["serviceData"]);
  const data = t("servicesData", { returnObjects: true });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOtherServicesOpen, setIsOtherServicesOpen] = useState(false);
  const [isOtherServicesMobileOpen, setIsOtherServicesMobileOpen] =
    useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);
  const [closeTimer, setCloseTimer] = useState(null);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const otherServicesRef = useRef(null);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  useSmoothScroll();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        otherServicesRef.current &&
        !otherServicesRef.current.contains(event.target)
      ) {
        setIsOtherServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (closeTimer) clearTimeout(closeTimer);
    };
  }, [closeTimer]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageDropdownOpen(false);
  };

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
    if (closeTimer) clearTimeout(closeTimer);
    setIsOtherServicesOpen(true);
    if (otherServicesRef.current) {
      const rect = otherServicesRef.current.getBoundingClientRect();
      setDropdownTop(rect.bottom);
    }
  };

  const handleMouseLeave = () => {
    const timer = setTimeout(() => {
      setIsOtherServicesOpen(false);
    }, 1000); // 1 second delay
    setCloseTimer(timer);
  };

  const handleDropdownLinkClick = (to) => {
    setIsOtherServicesOpen(false);
    navigate(to);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const servicesData = data.reduce((acc, service) => {
    const { category, items } = service;

    let categoryObject = acc.find((cat) => cat.category === category);

    if (!categoryObject) {
      categoryObject = { category, items: [] };
      acc.push(categoryObject);
    }

    categoryObject.items.push(
      ...items.map((item) => ({
        name: item.name,
        slug: item.slug,
      }))
    );

    return acc;
  }, []);

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

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleLanguageDropdown}
              className="mr-4 text-primary hover:text-secondary transition-colors"
            >
              <Globe size={24} />
            </button>
            <label className="btn btn-circle swap swap-rotate">
              <input
                type="checkbox"
                checked={isMobileMenuOpen}
                onChange={toggleMobileMenu}
              />
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
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
                  {t("navbar.home")}
                  <span className="border-animation"></span>
                </Link>
              </li>
              <li
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                ref={otherServicesRef}
              >
                <button className="py-2 pr-4 pl-3 text-primary relative">
                  {t("navbar.otherServices")}
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
                  {t("navbar.legalAssociate")}
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
                  {t("navbar.legalTraining")}
                  <span className="border-animation"></span>
                </Link>
              </li>

              <li className="flex gap-4 items-center">
                <button
                  onClick={() => changeLanguage("en")}
                  className="text-primary flex items-center gap-2 hover:bg-gray-200 p-2 rounded transition-all"
                >
                  <Flag country="US" className="w-6 h-4" />
                  EN
                </button>{" "}
                |
                <button
                  onClick={() => changeLanguage("id")}
                  className="text-primary flex items-center gap-2 hover:bg-gray-200 p-2 rounded transition-all"
                >
                  <Flag country="ID" className="w-6 h-4" />
                  ID
                </button>{" "}
                |
                <button
                  onClick={() => changeLanguage("zh")}
                  className="text-primary flex items-center gap-2 hover:bg-gray-200 p-2 rounded transition-all"
                >
                  <Flag country="CN" className="w-6 h-4" />
                  ZH
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

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
              {t("navbar.home")}
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
              <span>{t("navbar.otherServices")}</span>
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
            >
              {servicesData.map((serviceCategory) => (
                <div key={serviceCategory.category}>
                  <div className="py-2 border-b border-gray-400">
                    <button className="px-3 py-1 font-semibold text-sm bg-secondary rounded-full">
                      {serviceCategory.category}
                    </button>
                  </div>
                  <ul className="mt-2 space-y-1">
                    {serviceCategory.items.map((item) => (
                      <li key={item.slug} className="hover:text-secondary">
                        <Link
                          to={`/other-service/${item.slug}`}
                          onClick={() =>
                            handleDropdownLinkClick(
                              `/other-service/${item.slug}`
                            )
                          }
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
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
              {t("navbar.legalAssociate")}
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
              {t("navbar.legalTraining")}
              <span className="border-animation"></span>
            </Link>
          </li>

          {/* <li
            className="relative"
            onClick={() =>
              setIsOtherServicesMobileOpen(!isOtherServicesMobileOpen)
            }
          >
            <button className="block py-2 pr-4 pl-3 text-primary font-semibold flex items-center justify-between">
              <span>{t("navbar.otherServices")}</span>
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
          </li> */}

          {/* {isOtherServicesMobileOpen && (
            <div
              className={`pl-6 grid grid-cols-1 w-full justify-center sm:grid-cols-2 lg:grid-cols-4 gap-4 text-primary transition-opacity duration-300 ease-in-out opacity-100`}
              style={{ top: `${dropdownTop}px` }}
            >
              {servicesData.map((serviceCategory) => (
                <div key={serviceCategory.category}>
                  <div className="py-2 border-b border-gray-400">
                    <button className="px-3 py-1 font-semibold text-sm bg-secondary rounded-full">
                      {serviceCategory.category}
                    </button>
                  </div>
                  <ul className="mt-2 space-y-1">
                    {serviceCategory.items.map((item) => (
                      <li key={item.slug} className="hover:text-secondary">
                        <Link
                          to={`/other-service/${item.slug}`}
                          onClick={() =>
                            handleDropdownLinkClick(
                              `/other-service/${item.slug}`
                            )
                          }
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )} */}
        </ul>
      </div>

      {isLanguageDropdownOpen && (
        <div className="md:hidden fixed top-16 right-0 bg-white shadow-md rounded-bl-lg z-50">
          <ul className="py-2">
            <li>
              <button
                onClick={() => changeLanguage("en")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                <Flag country="US" className="w-6 h-4 inline-block mr-2" />
                English
              </button>
            </li>
            <li>
              <button
                onClick={() => changeLanguage("id")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                <Flag country="ID" className="w-6 h-4 inline-block mr-2" />
                Bahasa Indonesia
              </button>
            </li>
            <li>
              <button
                onClick={() => changeLanguage("zh")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                <Flag country="CN" className="w-6 h-4 inline-block mr-2" />
                中文
              </button>
            </li>
          </ul>
        </div>
      )}

      {isOtherServicesOpen && (
        <div
          ref={dropdownRef}
          className={`fixed ${
            isMobileMenuOpen ? "right-0" : "left-0 right-0 mx-auto"
          } max-w-7xl bg-gradient-to-r from-primary to-cyan-600 pb-20 shadow-2xl rounded mt-8 p-4 grid grid-cols-1 w-full justify-center sm:grid-cols-2 lg:grid-cols-4 gap-4 z-30 transition-all duration-300 ease-in-out`}
          style={{ top: `${dropdownTop}px` }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {servicesData.map((serviceCategory) => (
            <div key={serviceCategory.category}>
              <div className="py-2 border-b border-gray-400">
                <button className="font-bold px-3 py-1 text-sm rounded-full bg-secondary">
                  {serviceCategory.category}
                </button>
              </div>
              <ul className="mt-2 space-y-1 text-white ">
                {serviceCategory.items.map((item) => (
                  <li key={item.slug} className="hover:text-secondary">
                    <Link
                      to={`/other-service/${item.slug}`}
                      onClick={() =>
                        handleDropdownLinkClick(`/other-service/${item.slug}`)
                      }
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li className="hover:text-secondary">
                  <Link
                    to={`/other-services`}
                    onClick={() => handleDropdownLinkClick("/other-services")}
                  >
                    All
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
      )}
      <div className="pt-20">
        <main></main>
      </div>
    </>
  );
}

export default Navbar;
