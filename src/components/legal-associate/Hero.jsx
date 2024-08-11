import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import people from "../../assets/bg/legal_associate_hero.png";

function Hero() {
  const { t } = useTranslation("legalAssociate");

  const MotionText = ({ children, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="pt-20 ">
      <div className="flex flex-col justify-center gap-4 items-center mx-auto h-full text-center">
        <button className="bg-secondary p-4 px-6 rounded-full text-primary font-extrabold text-base md:text-lg transition duration-300">
          {t("hero.aboutButton")}
        </button>
        <p className="text-center text-[#003262] font-extrabold outline-2 text-2xl sm:text-2xl md:text-4xl lg:text-5xl">
          {t("hero.title")}
        </p>
      </div>
      {/* desc */}
      <div className="bg-gradient-to-r from-primary to-cyan-600 h-full p-4 mt-10 w-full">
        <div className="flex flex-col md:flex-row md:justify-around gap-6 max-w-7xl mx-auto py-10 items-center">
          {/* text */}
          <div className="text-white max-w-4xl">
            <p className="text-justify text-base md:text-lg lg:text-xl py-4">
              {t("hero.description")}
            </p>
            <ul className="text-left space-y-2 py-2">
              {t("hero.features", { returnObjects: true }).map(
                (item, index) => (
                  <MotionText key={index} delay={0.8 + index * 0.1}>
                    <li className="text-base">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="mr-2 text-green-400"
                      />
                      <span>{item}</span>
                    </li>
                  </MotionText>
                )
              )}
            </ul>
            <div className="bg-white text-primary w-full md:w-fit flex p-6 rounded-lg gap-4 rounded-tl-3xl rounded-br-3xl mt-10">
              {/* icon */}
              <div>
                <svg
                  width="47"
                  height="47"
                  viewBox="0 0 47 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_412_677)">
                    <path
                      d="M23.5 3.91699C12.69 3.91699 3.91669 12.6903 3.91669 23.5003C3.91669 34.3103 12.69 43.0837 23.5 43.0837C34.31 43.0837 43.0834 34.3103 43.0834 23.5003C43.0834 12.6903 34.31 3.91699 23.5 3.91699ZM23.5 33.292C22.4229 33.292 21.5417 32.4107 21.5417 31.3337V23.5003C21.5417 22.4232 22.4229 21.542 23.5 21.542C24.5771 21.542 25.4584 22.4232 25.4584 23.5003V31.3337C25.4584 32.4107 24.5771 33.292 23.5 33.292ZM25.4584 17.6253H21.5417V13.7087H25.4584V17.6253Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_412_677">
                      <rect width="47" height="47" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="text-sm">
                <p className="font-bold text-base md:text-lg lg:text-xl">
                  {t("hero.moreInfo.heading")}
                </p>
                <p className="pt-1">{t("hero.moreInfo.subheading")}</p>
                <p>{t("hero.moreInfo.customServices")}</p>
                <p>{t("hero.moreInfo.additionalServices")}</p>
                <p className="pt-4 text-sm">{t("hero.moreInfo.note")}</p>
              </div>
            </div>
          </div>
          {/* icon for desktop */}
          <div className="hidden md:block">
            <img
              src={people}
              alt="Legal Associate Hero"
              className="w-full h-auto max-w-xs md:max-w-md lg:max-w-lg object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
