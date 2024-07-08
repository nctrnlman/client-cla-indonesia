import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo_cla.png";
import useSmoothScroll from "../../components/hooks/useSmoothScroll";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useSmoothScroll();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [isOtherServicesOpen, setIsOtherServicesOpen] = useState(false);

  const handleLinkClick = (to) => {
    setIsMobileMenuOpen(false);
    if (to === location.pathname) {
      // If clicking on the same page link, scroll to top smoothly
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // If navigating to a different page, use navigate
      navigate(to);
    }
  };

  return (
    <nav className="px-2 sm:px-4 py-2.5 shadow bg-white w-full fixed top-0 z-40">
      <div className="container flex flex-wrap justify-between items-center mx-auto max-w-7xl ">
        <Link
          to="/"
          className="flex items-center"
          onClick={() => handleLinkClick("/")}
        >
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
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-bold">
            <li>
              <Link
                to="/"
                className="block py-2 pr-4 pl-3 text-primary hover:text-secondary transition duration-300 ease-in-out"
                onClick={() => handleLinkClick("/")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/legal-associate"
                className="block py-2 pr-4 pl-3 text-primary hover:text-secondary transition duration-300 ease-in-out"
                onClick={() => handleLinkClick("/legal-associate")}
              >
                Legal Associate
              </Link>
            </li>
            <li>
              <Link
                to="/legal-training"
                className="block py-2 pr-4 pl-3 text-primary hover:text-secondary transition duration-300 ease-in-out"
                onClick={() => handleLinkClick("/legal-training")}
              >
                Legal Training
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setIsOtherServicesOpen(true)}
              onMouseLeave={() => setIsOtherServicesOpen(false)}
            >
              <button className="block py-2 pr-4 pl-3 text-primary hover:text-secondary transition duration-300 ease-in-out relative">
                Other Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 inline-block transform transition-transform duration-300 ease-in-out group-hover:rotate-180"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-1.5 0V3.75A.75.75 0 0 1 10 3zm-2.22 1.47a.75.75 0 0 1 1.06-1.06l2.72 2.72a.75.75 0 0 1 0 1.06l-2.72 2.72a.75.75 0 0 1-1.06-1.06L11.94 8 7.78 3.84a.75.75 0 0 1-1.06 0z"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {isOtherServicesOpen && (
        <div className="absolute justify-between items-center bg-white border rounded shadow-lg mt-2 w-auto   flex flex-wrap ">
          <div className="py-2 px-4">
            <span className="font-bold">BADAN USAHA</span>
            <ul className="mt-2">
              <li>
                <Link
                  to="/badan-usaha/pt"
                  className="block py-2 px-4 hover:bg-gray-200"
                >
                  PT / Perseroan Terbatas
                </Link>
              </li>
              <li>
                <Link
                  to="/badan-usaha/cv"
                  className="block py-2 px-4 hover:bg-gray-200"
                >
                  CV / Commanditaire Venootschap
                </Link>
              </li>
              <li>
                <Link
                  to="/badan-usaha/pt-perorangan"
                  className="block py-2 px-4 hover:bg-gray-200"
                >
                  PT Perorangan
                </Link>
              </li>
              <li>
                <Link
                  to="/badan-usaha/pt-pma"
                  className="block py-2 px-4 hover:bg-gray-200"
                >
                  PT PMA
                </Link>
              </li>
              <li>
                <Link
                  to="/badan-usaha/firma"
                  className="block py-2 px-4 hover:bg-gray-200"
                >
                  Firma
                </Link>
              </li>
              <li>
                <Link
                  to="/badan-usaha/persekutuan-perdata"
                  className="block py-2 px-4 hover:bg-gray-200"
                >
                  Persekutuan Perdata
                </Link>
              </li>
              <li>
                <Link
                  to="/badan-usaha/perkumpulan"
                  className="block py-2 px-4 hover:bg-gray-200"
                >
                  Perkumpulan
                </Link>
              </li>
              <li>
                <Link
                  to="/badan-usaha/yayasan"
                  className="block py-2 px-4 hover:bg-gray-200"
                >
                  Yayasan
                </Link>
              </li>
            </ul>
          </div>
          <div className="py-2 px-4">
            <span className="font-bold">PERIZINAN</span>
            <ul className="mt-2">
              <li>
                <Link
                  to="/perizinan/nib-oss"
                  className="block py-2 px-4 hover:bg-gray-200"
                >
                  NIB & OSS
                </Link>
              </li>
              <li>
                <Link
                  to="/perizinan/izin-pkp"
                  className="block py-2 px-4 hover:bg-gray-200"
                >
                  Izin PKP
                </Link>
              </li>
              <li>
                <Link
                  to="/perizinan/izin-restoran"
                  className="block py-2 px-4 hover:bg-gray-200"
                >
                  Izin Restoran
                </Link>
              </li>
              <li>
                <Link
                  to="/perizinan/izin-konstruksi"
                  className="block py-2 px-4 hover:bg-gray-200"
                >
                  Izin Konstruksi
                </Link>
              </li>
              <li>
                <Link
                  to="/perizinan/izin-pse"
                  className="block py-2 px-4 hover:bg-gray-200"
                >
                  Izin PSE
                </Link>
              </li>
              <li>
                <Link
                  to="/perizinan/izin-k3l"
                  className="block py-2 px-4 hover:bg-gray-200"
                >
                  Izin K3L
                </Link>
              </li>
              <li>
                <Link
                  to="/perizinan/izin-yayasan"
                  className="block py-2 px-4 hover:bg-gray-200"
                >
                  Izin Yayasan
                </Link>
              </li>
              <li>
                <Link
                  to="/perizinan/33-izin-lainnya"
                  className="block py-2 px-4 hover:bg-gray-200"
                >
                  33++ Izin Lainnya
                </Link>
              </li>
            </ul>
          </div>
          <div className="py-2 px-4">
            <span className="font-bold">LAINNYA</span>
            <ul className="mt-2">
              <li>
                <Link
                  to="/lainnya/virtual-office"
                  className="block py-2 px-4 hover:bg-gray-200"
                >
                  Virtual Office
                </Link>
              </li>
              <li>
                <Link
                  to="/lainnya/perubahan-anggaran-dasar"
                  className="block py-2 px-4 hover:bg-gray-200"
                >
                  Perubahan Anggaran Dasar
                </Link>
              </li>
              <li>
                <Link
                  to="/lainnya/penutupan-perusahaan"
                  className="block py-2 px-4 hover:bg-gray-200"
                >
                  Penutupan Perusahaan
                </Link>
              </li>
              <li>
                <Link
                  to="/lainnya/perjanjian-pisah-harta"
                  className="block py-2 px-4 hover:bg-gray-200"
                >
                  Perjanjian Pisah Harta
                </Link>
              </li>
              <li>
                <Link
                  to="/lainnya/pendaftaran-merek"
                  className="block py-2 px-4 hover:bg-gray-200"
                >
                  Pendaftaran Merek
                </Link>
              </li>
              <li>
                <Link
                  to="/lainnya/kitas-pekerja"
                  className="block py-2 px-4 hover:bg-gray-200"
                >
                  KITAS Pekerja
                </Link>
              </li>
              <li>
                <Link
                  to="/lainnya/kitas-investor"
                  className="block py-2 px-4 hover:bg-gray-200"
                >
                  KITAS Investor
                </Link>
              </li>
              <li>
                <Link
                  to="/lainnya/17-layanan-lainnya"
                  className="block py-2 px-4 hover:bg-gray-200"
                >
                  17++ Layanan Lainnya
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
