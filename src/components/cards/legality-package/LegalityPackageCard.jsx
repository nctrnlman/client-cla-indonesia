import React from "react";
import { motion } from "framer-motion";
import { FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { generateWhatsAppUrl } from "../../../utils/whatsappUtils";

const LegalityPackageCard = ({
  title,
  description,
  price,
  fakePrice,
  features,
  buttonText,
  isPopular,
}) => {
  const { t } = useTranslation("legalityPackage");
  const [isExpanded, setIsExpanded] = React.useState(false);
  const whatsappUrl = generateWhatsAppUrl(title);

  const handleButtonClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      className={`bg-white rounded-lg shadow-lg overflow-hidden ${
        isPopular ? "border-4 border-secondary" : ""
      }`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {isPopular && (
        <motion.div
          className="bg-secondary text-primary text-center py-2 font-bold"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {t("most_popular")}
        </motion.div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>

        <span className="text-4xl font-bold text-primary">Rp {price}</span>
        {fakePrice && (
          <p className=" text-red-500 line-through mb-4 mt-2">Rp {fakePrice}</p>
        )}

        <ul className="mb-2 space-y-2">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center">
              <FaCheck className="text-green-500 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        {features.length > 3 && (
          <div>
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? "auto" : 0 }}
              className="overflow-hidden"
            >
              <ul className="mb-6 space-y-2">
                {features.slice(3).map((feature, index) => (
                  <li key={index + 3} className="flex items-center">
                    <FaCheck className="text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <button
              className="text-primary hover:text-secondary transition duration-300 flex items-center justify-center w-full mb-4"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? t("show_less") : t("show_more")}
              {isExpanded ? (
                <FaChevronUp className="ml-2" />
              ) : (
                <FaChevronDown className="ml-2" />
              )}
            </button>
          </div>
        )}
        <motion.button
          className="w-full bg-primary text-white font-bold py-2 px-4 rounded-full hover:bg-secondary hover:text-primary transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleButtonClick}
        >
          {buttonText}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default LegalityPackageCard;
