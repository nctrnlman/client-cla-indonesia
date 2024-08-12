import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const OtherServicesCard = ({
  title,
  slug,
  description,
  price,
  fakePrice,
  features,
  buttonText,
  isPopular,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation("serviceData");
  const navigate = useNavigate();

  const priceClass =
    price.replace(/[^\d]/g, "").length > 2 ? "text-4xl" : "text-lg";
  const handleButtonClick = () => {
    navigate(`/other-service/${slug}`);
  };

  return (
    <motion.div
      className={`bg-white rounded-lg shadow-lg overflow-hidden flex flex-col ${
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
          {t("allPackage.mostPopular")}
        </motion.div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
        <div className="mb-4">
          <span className={`font-bold text-secondary ${priceClass}`}>
            {price}
          </span>
          {fakePrice && (
            <span className="text-base text-gray-500 line-through ml-2">
              {fakePrice}
            </span>
          )}
        </div>
        <div className="flex-grow mb-6">
          <ul className="space-y-2">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center">
                <FaCheck className="text-green-500 mr-2" />
                <span>{feature}</span>
              </li>
            ))}
            {features.length > 3 && isExpanded && (
              <motion.div
                initial={false}
                animate={{ height: isExpanded ? "auto" : 0 }}
                className="overflow-hidden mt-2"
              >
                <ul className="space-y-2">
                  {features.slice(3).map((feature, index) => (
                    <li key={index + 3} className="flex items-center">
                      <FaCheck className="text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </ul>
        </div>
        {features.length > 3 && (
          <button
            className="text-primary hover:text-secondary transition duration-300 flex items-center justify-center w-full mb-4"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? t("allPackage.showLess") : t("allPackage.showMore")}
            {isExpanded ? (
              <FaChevronUp className="ml-2" />
            ) : (
              <FaChevronDown className="ml-2" />
            )}
          </button>
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

export default OtherServicesCard;
