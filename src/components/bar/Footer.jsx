import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo_cla_bnw.png";
function Footer() {
  return (
    <div>
      <footer className="bg-gradient-to-r from-primary to-cyan-600 font-sans">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-y-10 lg:grid-cols-5">
            <div className="sm:col-span-2">
              <img src={logo} alt="Logo CLA" className="w-40" />
            </div>

            <div>
              <p className="font-semibold md:pl-20 text-gray-800 dark:text-white">
                Quick Link
              </p>

              <div className="flex flex-col items-start md:pl-20 mt-5 space-y-2">
                <Link
                  to="/"
                  className="text-gray-100 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-primary"
                >
                  Home
                </Link>
                <Link
                  to="/legal-associate"
                  className="text-gray-100 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-primary"
                >
                  Legal Associate
                </Link>
                <Link
                  to="/legal-training"
                  className="text-gray-100 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-primary"
                >
                  Legal Training
                </Link>
                <Link
                  to="/other-service"
                  className="text-gray-100 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-primary"
                >
                  Other Service
                </Link>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800 dark:text-white">
                Company
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-gray-100 transition-colors duration-300   hover:text-primary">
                  Jalan Pengadegan Utara II No. 30
                </p>
                <p className="text-gray-100 transition-colors duration-300   hover:text-primary">
                  Pancoran, Jakarta Selatan.
                </p>
                <p className="text-gray-100 transition-colors duration-300   hover:text-primary">
                  Indonesia
                </p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-800 dark:text-white">
                Contact
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-gray-100 transition-colors duration-300   hover:text-primary">
                  +62 812 1111 0564
                </p>
                <p className="text-gray-100 transition-colors duration-300   hover:text-primary">
                  contact@mylaw.id, career@mylaw.id
                </p>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />

          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-1 gap-4 hover:cursor-pointer"></div>

            <div className="flex gap-4 hover:cursor-pointer">
              <img
                src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                width="30"
                height="30"
                alt="fb"
              />
              <img
                src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                width="30"
                height="30"
                alt="tw"
              />
              <img
                src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                width="30"
                height="30"
                alt="inst"
              />

              <img
                src="https://www.svgrepo.com/show/28145/linkedin.svg"
                width="30"
                height="30"
                alt="in"
              />
            </div>
          </div>
          <p className="font-sans pt-8 text-start md:text-center md:text-lg md:p-4 text-white">
            © 2023 Corporate Legal Indonesia. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
