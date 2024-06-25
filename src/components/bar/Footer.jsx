import logo from "../../assets/logo/logo_cla.png";
function Footer() {
  return (
    <div>
      <footer className="bg-primary font-sans">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <img src={logo} alt="Logo CLA" className="w-40" />
            </div>

            <div>
              <p className="font-semibold text-gray-800 dark:text-white">
                Quick Link
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-gray-600 transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500">
                  Home
                </p>
                <p className="text-gray-600 transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500">
                  Legal Associate
                </p>
                <p className="text-gray-600 transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500">
                  Legal Training
                </p>
                <p className="text-gray-600 transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500">
                  Other Services
                </p>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-800 dark:text-white">
                Company
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-gray-600 transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500">
                  Jalan Pengadegan Utara II No. 30
                </p>
                <p className="text-gray-600 transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500">
                  Pancoran, Jakarta Selatan.
                </p>
                <p className="text-gray-600 transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500">
                  Indonesia
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
          <p className="font-sans p-8 text-start md:text-center md:text-lg md:p-4 text-white">
            © 2023 Corporate Legal Indonesia. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
