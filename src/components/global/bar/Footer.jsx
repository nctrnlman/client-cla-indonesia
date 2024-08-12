import { Link } from "react-router-dom";
import logo from "../../../assets/logo/logo_cla_bnw.png";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation("footer");

  return (
    <div>
      <footer className="bg-gradient-to-r from-primary to-cyan-600 font-sans">
        <div className="container px-6 py-12 mx-auto max-w-7xl">
          <div className="flex md:flex-row flex-col justify-between gap-8">
            <div>
              <img src={logo} alt="Logo CLA" className="w-40" />
              <p className="text-white">{t("trustedPartner")}</p>
            </div>

            <div>
              <p className="font-semibold md:pl-20 text-white">
                {t("quickLinks")}
              </p>

              <div className="flex flex-col items-start md:pl-20 mt-5 space-y-2">
                <Link
                  to="/"
                  className="text-gray-100 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-primary"
                >
                  {t("home")}
                </Link>
                <Link
                  to="/legal-associate"
                  className="text-gray-100 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-primary"
                >
                  {t("legalAssociate")}
                </Link>
                <Link
                  to="/legal-training"
                  className="text-gray-100 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-primary"
                >
                  {t("legalTraining")}
                </Link>
                <Link
                  to="/other-services"
                  className="text-gray-100 transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-primary"
                >
                  {t("otherServices")}
                </Link>
              </div>
            </div>

            <div>
              <p className="font-semibold text-white">{t("company")}</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-gray-100 transition-colors duration-300 hover:text-primary">
                  Jalan Pengadegan Utara II No. 30 <br /> Pancoran, Jakarta
                  Selatan <br /> Indonesia
                </p>
              </div>
            </div>

            <div>
              <p className="font-semibold text-white">{t("contact")}</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <p className="text-gray-100 transition-colors duration-300 hover:text-primary">
                  {t("phone")}
                </p>
                <p className="text-gray-100 transition-colors duration-300 hover:text-primary">
                  {t("emails")}
                </p>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-1 gap-4 hover:cursor-pointer"></div>

            <div className="flex gap-4 hover:cursor-pointer">
              <img
                src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                width="30"
                height="30"
                alt={t("socialMedia.facebook")}
              />
              <img
                src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                width="30"
                height="30"
                alt={t("socialMedia.twitter")}
              />
              <img
                src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                width="30"
                height="30"
                alt={t("socialMedia.instagram")}
              />
              <img
                src="https://www.svgrepo.com/show/28145/linkedin.svg"
                width="30"
                height="30"
                alt={t("socialMedia.linkedin")}
              />
            </div>
          </div>
          <p className="font-sans pt-8 text-start md:text-center md:text-lg md:p-4 text-white">
            {t("copyright")}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
