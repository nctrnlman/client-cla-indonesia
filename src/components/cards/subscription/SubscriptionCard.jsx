import { useState, useRef, useEffect } from "react";
import { FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { generateWhatsAppUrl } from "../../../utils/whatsappUtils";
const SubscriptionCard = ({
  title,
  description,
  price,
  fakePrice,
  features,
  buttonText,
  isPopular,
}) => {
  const { t } = useTranslation("subscription");
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState("0px");
  const contentRef = useRef(null);

  const whatsappUrl = generateWhatsAppUrl(title);

  const handleButtonClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  useEffect(() => {
    if (isExpanded) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isExpanded]);

  return (
    <div
      className={`flex flex-col h-full rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden ${
        isPopular ? "border-4 border-yellow-400" : "border border-gray-200"
      }`}
    >
      <div className="relative flex-grow bg-white p-6">
        {isPopular && (
          <div className="absolute top-0 right-0 bg-yellow-400 text-primary font-bold py-1 px-4 rounded-bl-lg">
            {t("mostPopular")}
          </div>
        )}
        <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
        {/* <p className="text-gray-600 mb-4">{description}</p> */}
        <div className="text-3xl font-bold text-primary mb-2">Rp {price}</div>
        {fakePrice && (
          <p className="text-red-500 line-through mb-4">Rp {fakePrice}</p>
        )}
        <button
          onClick={handleButtonClick}
          className="w-full bg-secondary text-primary font-bold py-2 px-4 rounded-full hover:bg-primary hover:text-secondary transition duration-300"
        >
          {buttonText}
        </button>
      </div>
      <div className="bg-primary text-white p-6 flex-grow flex flex-col">
        <h4 className="text-xl font-semibold mb-4">{t("features")}</h4>
        <ul className="space-y-2">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start">
              <FaCheck className="flex-shrink-0 w-5 h-5 text-green-400 mr-2 mt-1" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div
          ref={contentRef}
          style={{ maxHeight: maxHeight }}
          className="overflow-hidden transition-all duration-300 ease-in-out"
        >
          <ul className="space-y-2 mt-2">
            {features.slice(3).map((feature, index) => (
              <li key={index + 3} className="flex items-start">
                <FaCheck className="flex-shrink-0 w-5 h-5 text-green-400 mr-2 mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        {features.length > 3 && (
          <button
            className="w-full mt-4 text-white flex items-center justify-center hover:underline"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>
                <span className="mr-2">{t("seeLess")}</span>
                <FaChevronUp />
              </>
            ) : (
              <>
                <span className="mr-2">{t("seeMore")}</span>
                <FaChevronDown />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default SubscriptionCard;
