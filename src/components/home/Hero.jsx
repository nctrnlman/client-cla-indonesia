import { useMemo } from "react";
import bg from "../../assets/bg/hero.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faLightbulb,
  faGavel,
  faUsers,
  faHandshake,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { generateWhatsAppUrl } from "../../utils/whatsappUtils";

function Hero() {
  const { t, i18n } = useTranslation("home");
  const navigate = useNavigate();
  const whatsappUrl = generateWhatsAppUrl();

  const typeAnimationSequence = useMemo(
    () => [t("hero.type1"), 1000, t("hero.type2"), 1000, t("hero.type3"), 1000],
    [i18n.language, t]
  );

  const handleLearnMore = () => {
    navigate("/legal-associate/");
  };

  const handleScheduleConsultation = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      className="bg-gray-50 min-h-screen relative overflow-hidden flex items-center justify-center py-20"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        className="absolute inset-0 bg-black opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <motion.div
            className="w-full md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <motion.h1
                className="text-[#FDB515] uppercase font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {t("hero.title")}
              </motion.h1>
              <div className="h-10 sm:h-40 md:h-48">
                <TypeAnimation
                  key={i18n.language}
                  sequence={typeAnimationSequence}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="bg-gradient-to-r from-[#FDB515] to-white bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
                />
              </div>
            </div>
            <motion.p
              className="text-white text-base sm:text-lg md:text-xl max-w-xl text-shadow-md mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {t("hero.description")}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FDB515] text-primary py-2 px-6 rounded-full uppercase font-semibold transition duration-300 hover:bg-[#E5A214] w-full sm:w-auto mb-2 sm:mb-0"
                onClick={handleScheduleConsultation}
              >
                {t("hero.button1")}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-[#FDB515] text-[#FDB515] py-2 px-6 rounded-full uppercase font-semibold transition duration-300 hover:bg-[#FDB515] hover:text-primary w-full sm:w-auto"
                onClick={handleLearnMore}
              >
                {t("hero.button2")}
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-5 shadow-lg">
              <motion.h2
                className="text-white shadow-lg text-center uppercase text-xl sm:text-2xl font-semibold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                {t("hero.practiceAreas")}
              </motion.h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: t("hero.areas.corporateLaw"), icon: faBuilding },
                  {
                    title: t("hero.areas.intellectualProperty"),
                    icon: faLightbulb,
                  },
                  { title: t("hero.areas.litigation"), icon: faGavel },
                  { title: t("hero.areas.employmentLaw"), icon: faUsers },
                  {
                    title: t("hero.areas.mergersAcquisitions"),
                    icon: faHandshake,
                  },
                  { title: t("hero.areas.realEstateLaw"), icon: faHome },
                ].map((area, index) => (
                  <motion.div
                    key={index}
                    className="bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-all duration-300"
                    whileHover={{ scale: 1.03 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  >
                    <FontAwesomeIcon
                      icon={area.icon}
                      className="text-[#FDB515] text-2xl mb-2"
                    />
                    <h3 className="text-white font-medium text-base sm:text-lg mb-1">
                      {area.title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                      {t("hero.expertAdvice")}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
