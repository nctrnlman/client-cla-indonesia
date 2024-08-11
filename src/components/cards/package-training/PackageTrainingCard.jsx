import { motion, AnimatePresence } from "framer-motion";
import MotionText from "./MotionText";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

function PackageTrainingCard({
  title,
  icon,
  content,
  additionalContent,
  buttonText,
  backgroundColor,
  textColor,
  buttonColor,
  titleBackgroundColor,
  titleTextColor,
  onButtonClick,
  isOpen,
  onToggle,
}) {
  const { t } = useTranslation(["trainingPackage"]);

  return (
    <div
      className={`${backgroundColor} ${textColor} rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl h-full flex flex-col`}
    >
      <div className="p-6 flex-grow flex flex-col">
        <div className="text-center mb-6">
          <motion.h3
            className={`text-2xl font-bold mb-4 px-4 py-2 inline-block rounded ${titleBackgroundColor} ${titleTextColor}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h3>
          <motion.div
            className="w-16 h-1 bg-current mx-auto mb-4"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 0.4 }}
          ></motion.div>
        </div>
        <MotionText delay={0.6} className="flex-grow">
          {content}
        </MotionText>
        {icon && (
          <motion.div
            className="text-6xl mt-6 mb-4 text-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {icon}
          </motion.div>
        )}
        <div className="mt-4">
          <button
            onClick={onToggle}
            className="flex items-center justify-center w-full focus:outline-none"
          >
            <span className="mr-2">
              {isOpen ? t("viewLess") : t("viewMore")}
            </span>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FontAwesomeIcon icon={faChevronDown} />
            </motion.div>
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 overflow-hidden"
              >
                <p className="text-center font-bold mb-4">
                  {additionalContent}
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => onButtonClick(title)}
                    className={`btn ${buttonColor} w-full rounded-full`}
                  >
                    {buttonText}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default PackageTrainingCard;
