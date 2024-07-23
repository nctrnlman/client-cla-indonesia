import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faBuilding,
  faBalanceScale,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const MotionText = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

function PackageCard({
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
            <span className="mr-2">{isOpen ? "See Less" : "See More"}</span>
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
                <p className="text-center font-bold mb-4">{additionalContent}</p>
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

function PackageSubscription({ onPackageSelect }) {
  const [openPackage, setOpenPackage] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const togglePackage = (packageTitle) => {
    if (openPackage === packageTitle) {
      setOpenPackage(null);
    } else {
      setOpenPackage(packageTitle);
    }
  };

  return (
    <div className="min-h-screen py-20 pt-40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 pb-12 text-5xl text-center tracking-tight uppercase font-extrabold text-primary"
        >
          Training Package
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-6">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            className="h-full"
          >
            <PackageCard
              title="In-House Training"
              icon={
                <FontAwesomeIcon
                  icon={faBalanceScale}
                  className="text-yellow-400"
                />
              }
              content={
                <>
                  <p className="mb-4">
                    Our In-House Training package offers comprehensive legal support
                    for your business. With personalized guidance and expert advice,
                    we ensure your company stays compliant and protected.
                  </p>
                </>
              }
              additionalContent="In This Package You Can Choose Online and Offline*"
              buttonText="Contact Us"
              backgroundColor="bg-primary"
              textColor="text-white"
              buttonColor="bg-[#fdb515] text-primary hover:bg-yellow-300"
              titleBackgroundColor="bg-[#fdb515]"
              titleTextColor="text-primary"
              onButtonClick={onPackageSelect}
              isOpen={openPackage === "In-House Training"}
              onToggle={() => togglePackage("In-House Training")}
            />
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            className="h-full"
          >
            <PackageCard
              title="General Training"
              icon={
                <FontAwesomeIcon icon={faBuilding} className="text-primary" />
              }
              content={
                <>
                  <p className="mb-4">
                    Our General Training package is designed to give your business
                    a strong foundation. From incorporation to providing a professional
                    address, we've got you covered every step of the way.
                  </p>
                </>
              }
              additionalContent="In This Package You Can Choose Online and Offline*"
              buttonText="Contact Us"
              backgroundColor="bg-[#FDB515]"
              textColor="text-primary"
              buttonColor="bg-primary text-white hover:bg-blue-700"
              titleBackgroundColor="bg-primary"
              titleTextColor="text-white"
              onButtonClick={onPackageSelect}
              isOpen={openPackage === "General Training"}
              onToggle={() => togglePackage("General Training")}
            />
          </motion.div>
        </div>
      </div>

      <div className="half-circle-right"></div>
      <div className="half-circle-left"></div>
    </div>
  );
}

export default PackageSubscription;