import Breadcrumb from "./Breadcrumb";
import { FaThumbsUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Hero({ title, description }) {
  const { t } = useTranslation(["serviceData"]);

  return (
    <div className="bg-gradient-to-r from-primary to-cyan-600 py-20 sm:p-10 md:p-16 lg:p-20">
      <div className="max-w-7xl mx-auto px-4">
        <div>
          <Breadcrumb title={title} />
        </div>
        <div className="">
          <p className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl pt-6 sm:pt-8 md:pt-10">
            {title}
          </p>
          <p className="text-white font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl pt-4 sm:pt-6 md:pt-8">
            {t("otherServiceDetail.description")}
          </p>
        </div>

        <div className="flex gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 md:pt-10 items-center">
          <button className="bg-secondary p-3 px-5 sm:p-4 sm:px-6 rounded-full text-white font-semibold shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 flex items-center gap-2">
            <FaThumbsUp className="text-white" />
            {t("otherServiceDetail.recommend")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
