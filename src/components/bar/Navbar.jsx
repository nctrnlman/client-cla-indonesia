import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo_cla.png";
import useSmoothScroll from "../../components/hooks/useSmoothScroll";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOtherServicesOpen, setIsOtherServicesOpen] = useState(false);
  const [isOtherServicesMobileOpen, setIsOtherServicesMobileOpen] =
    useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);
  const [closeTimer, setCloseTimer] = useState(null);
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
    }, 1000); // 3 seconds delay
    setCloseTimer(timer);
  };

  const handleDropdownLinkClick = (to) => {
    setIsOtherServicesOpen(false);
    navigate(to);
  };

  const servicesData = [
    {
      category: "LEGALITY",
      items: [
        { name: "PT / Perseroan Terbatas", slug: "pt-perseroan-terbatas" },
        {
          name: "CV / Commanditaire Venootschap",
          slug: "cv-commanditaire-venootschap",
        },
        { name: "PT Perorangan", slug: "pt-perorangan" },
        { name: "New", slug: "new" },
        { name: "PT PMA", slug: "pt-pma" },
        { name: "Firma", slug: "firma" },
        { name: "Persekutuan Perdata", slug: "persekutuan-perdata" },
        { name: "Perkumpulan", slug: "perkumpulan" },
        { name: "Yayasan", slug: "yayasan" },
      ],
    },
    {
      category: "PERIZINAN",
      items: [
        { name: "NIB & OSS", slug: "nib-oss" },
        { name: "Izin PKP", slug: "izin-pkp" },
        { name: "Izin Restoran", slug: "izin-restoran" },
        { name: "Izin Konstruksi", slug: "izin-konstruksi" },
        { name: "Izin PSE", slug: "izin-pse" },
        { name: "Izin K3L", slug: "izin-k3l" },
        { name: "Izin Yayasan", slug: "izin-yayasan" },
        { name: "33++ Izin Lainnya", slug: "33-lainnya" },
        { name: "ALL", slug: "all" },
      ],
    },
    {
      category: "JASA HUKUM",
      items: [
        { name: "Virtual Office", slug: "virtual-office" },
        { name: "Perubahan Anggaran Dasar", slug: "perubahan-anggaran-dasar" },
        { name: "Penutupan Perusahaan", slug: "penutupan-perusahaan" },
        { name: "Perjanjian Pisah Harta", slug: "perjanjian-pisah-harta" },
        { name: "Pendaftaran Merek", slug: "pendaftaran-merek" },
        { name: "KITAS Pekerja", slug: "kitas-pekerja" },
        { name: "KITAS Investor", slug: "kitas-investor" },
        { name: "17++ Layanan Lainnya", slug: "17-lainnya" },
        { name: "ALL", slug: "all" },
      ],
    },
    {
      category: "LAINNYA",
      items: [
        { name: "Virtual Office", slug: "virtual-office" },
        { name: "Perubahan Anggaran Dasar", slug: "perubahan-anggaran-dasar" },
        { name: "Penutupan Perusahaan", slug: "penutupan-perusahaan" },
      ],
    },
  ];

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
        </ul>
      </div>

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
