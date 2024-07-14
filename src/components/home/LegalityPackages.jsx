import React from "react";
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
  const [isExpanded, setIsExpanded] = React.useState(false);

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
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-4">
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

PricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  fakePrice: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonText: PropTypes.string.isRequired,
  isPopular: PropTypes.bool,
};

PricingCard.defaultProps = {
  fakePrice: null,
  isPopular: false,
};

function LegalityPackages() {
  const packages = [
    {
      title: "Pendirian PT Standard (PMDN)",
      description:
        "This package includes all the premium features such as A, B, and C.",
      price: "3.500.000",
      fakePrice: "7.500.000",
      features: [
        "Konsultasi",
        "Penelusuran nama PT",
        "Surat Keputusan Pendirian PT",
        "Nomor Pokok Wajib Pajak Badan Usaha",
      ],
      buttonText: "Order Now",
    },
    {
      title: "Pendirian PT Lengkap (PMDN)",
      description:
        "This package includes standard features such as X, Y, and Z.",
      price: "5.500.000",
      fakePrice: "7.500.000",
      features: [
        "Konsultasi",
        "Penelusuran nama PT",
        "Surat Keputusan Pendirian PT",
        "Nomor Pokok Wajib Pajak Badan Usaha",
        "Nomor Induk Berusaha (NIB)",
        "KPPR",
        "Sertifikat Standar/Izin",
        "Aktivitas EFIN Badan Usaha",
      ],
      buttonText: "Order Now",
    },
    {
      title: "Pendirian PT PMA",
      description: "This package includes basic features such as 1, 2, and 3.",
      price: "7.500.000",
      fakePrice: "12.500.000",
      features: [
        "Konsultasi",
        "Akta Pendirian",
        "Surat Keputusan Pendirian PT",
        "Nomor Pokok Wajib Pajak Badan Usaha",
        "Nomor Induk Berusaha (NIB)",
        "KPPR",
        "Sertifikat Standar/Izin",
        "Aktivitas EFIN Badan Usaha",
      ],
      buttonText: "Order Now",
    },
    {
      title: "Pendirian CV",
      description: "This package includes basic features such as 1, 2, and 3.",
      price: "5.500.000",
      fakePrice: "12.500.000",
      features: [
        "Konsultasi",
        "Akta Pendirian",
        "Surat Keputusan Pendirian PT",
        "Nomor Pokok Wajib Pajak Badan Usaha",
        "Nomor Induk Berusaha (NIB)",
        "KPPR",
        "Sertifikat Standar/Izin",
        "Aktivitas EFIN Badan Usaha",
      ],
      buttonText: "Order Now",
    },
    {
      title: "Pendirian Firma",
      description: "This package includes basic features such as 1, 2, and 3.",
      price: "5.500.000",
      fakePrice: "12.500.000",
      features: [
        "Konsultasi",
        "Akta Pendirian",
        "Surat Keputusan Pendirian PT",
        "Nomor Pokok Wajib Pajak Badan Usaha",
        "Nomor Induk Berusaha (NIB)",
        "KPPR",
        "Sertifikat Standar/Izin",
        "Aktivitas EFIN Badan Usaha",
      ],
      buttonText: "Order Now",
    },
    {
      title: "Pendirian Yayasan",
      description: "This package includes basic features such as 1, 2, and 3.",
      price: "7.500.000",
      fakePrice: "12.500.000",
      features: [
        "Konsultasi",
        "Akta Pendirian",
        "Surat Keputusan Pendirian PT",
        "Nomor Pokok Wajib Pajak Badan Usaha",
        "Nomor Induk Berusaha (NIB)",
        "KPPR",
        "Sertifikat Standar/Izin",
        "Aktivitas EFIN Badan Usaha",
      ],
      buttonText: "Order Now",
    },
  ];

  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="inline-block bg-secondary text-primary font-extrabold text-sm px-4 py-2 rounded-full uppercase tracking-wide mb-4">
            Product
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
            Legality Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the right package for your business needs and start your
            journey with confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PricingCard key={pkg.title} {...pkg} isPopular={index === 1} />
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="text-lg text-gray-600 mb-4">
            Not sure which package is right for you?
          </p>
          <motion.button
            className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-secondary hover:text-primary transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us for Consultation
          </motion.button>
        </motion.div>
      </motion.div>

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

export default LegalityPackages;
