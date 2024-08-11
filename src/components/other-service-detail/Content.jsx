import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa";

const PricingCard = ({
  title,
  description,
  price,
  fakePrice,
  features,
  buttonText,
  isPopular,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

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
          Most Popular
        </motion.div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
        {/* <p className="text-gray-600 mb-4">{description}</p> */}
        <div className="mb-8">
          <span className="text-4xl font-bold text-primary">{price}</span>
          {fakePrice && (
            <span className="text-lg text-gray-500 line-through ml-2">
              {fakePrice}
            </span>
          )}
        </div>
        <ul className="mb-6 space-y-2">
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
              {isExpanded ? "Show Less" : "Show More"}
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
        >
          {buttonText}
        </motion.button>
      </div>
    </motion.div>
  );
};

function Content({ packages, content }) {
  return (
    <div className="bg-gray-50 relative md:py-20 overflow-hidden">
      <div className="grid grid-cols-1  justify-center mx-auto py-20 max-w-7xl gap-10">
        <div className="grid grid-cols-1 gap-8">
          {packages.map((pkg, index) => (
            <PricingCard key={pkg.title} {...pkg} isPopular={index === 1} />
          ))}
        </div>
        {/* <div>
          <h2 className="text-2xl font-bold text-primary mb-4">Overview</h2>
          <ul className="text-2xl font-bold text-primary mb-2 text-justify list-disc list-inside pl-5">
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div> */}
      </div>
      <motion.div
        className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-secondary opacity-10 rounded-full"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-primary opacity-10 rounded-full"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, delay: 2.5 }}
      />
    </div>
  );
}

// Content.propTypes = {
//   packages: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       price: PropTypes.string.isRequired,
//       fakePrice: PropTypes.string,
//       features: PropTypes.arrayOf(PropTypes.string).isRequired,
//       buttonText: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   content: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default Content;
