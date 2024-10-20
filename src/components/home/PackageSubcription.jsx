import { useTranslation } from "react-i18next"; // Import useTranslation
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faBuilding,
  faBalanceScale,
} from "@fortawesome/free-solid-svg-icons";

const MotionText = ({ children, delay = 0 }) => (
  <motion.div
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
  buttonText,
  onButtonClick,
  backgroundColor,
  textColor,
  buttonColor,
}) {
  return (
    <div
      className={`${backgroundColor} ${textColor} rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl h-full flex flex-col`}
    >
      <div className="p-6 flex-grow">
        <div className="text-center mb-6">
          {icon && (
            <motion.div
              className="text-6xl mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              {icon}
            </motion.div>
          )}
          <motion.h3
            className="text-2xl font-bold mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h3>
          <motion.div
            className="w-16 h-1 bg-current mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 0.4 }}
          ></motion.div>
        </div>
        <MotionText delay={0.6}>{content}</MotionText>
      </div>
      <div className="p-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onButtonClick}
          className={`${buttonColor} w-full py-2 px-4 rounded-full font-bold transition-all duration-300 hover:shadow-md`}
        >
          {buttonText}
        </motion.button>
      </div>
    </div>
  );
}

function PackageSubscription() {
  const { t } = useTranslation("packageSubscription"); // Use the useTranslation hook
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleButtonClick = (packageType) => {
    if (packageType === t("legalityPackageSelected")) {
      // Scroll to the LegalityPackages component
      const legalityPackagesElement =
        document.getElementById("legalityPackages");
      if (legalityPackagesElement) {
        legalityPackagesElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to legal associate page for other packages
      navigate("/legal-associate", {
        state: { packageType },
      });
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
          {t("subscribePackage")}
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
              title={<span className="text-white">{t("legalAssociate")}</span>}
              icon={
                <FontAwesomeIcon
                  icon={faBalanceScale}
                  className="text-yellow-400"
                />
              }
              content={
                <>
                  <MotionText>
                    <p className="mb-4">{t("legalAssociateContent")}</p>
                  </MotionText>
                  <ul className="text-left space-y-2">
                    {[
                      t("personalizedLegalAdvice"),
                      t("contractReviewAndDrafting"),
                      t("regulatoryComplianceAssistance"),
                      t("onDemandLegalConsultations"),
                    ].map((item, index) => (
                      <MotionText key={index} delay={0.8 + index * 0.1}>
                        <li>
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="mr-2 text-green-400"
                          />{" "}
                          {item}
                        </li>
                      </MotionText>
                    ))}
                  </ul>
                </>
              }
              buttonText={t("learnMore")}
              onButtonClick={() =>
                handleButtonClick(t("legalAssociatePackageSelected"))
              }
              backgroundColor="bg-primary"
              textColor="text-white"
              buttonColor="bg-[#fdb515] text-primary hover:bg-yellow-300"
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
              title={
                <span className="text-primary">
                  {t("legalityAndVirtualOffice")}
                </span>
              }
              icon={
                <FontAwesomeIcon icon={faBuilding} className="text-primary " />
              }
              content={
                <>
                  <MotionText>
                    <p className="mb-4">{t("legalityContent")}</p>
                  </MotionText>
                  <ul className="text-left space-y-2">
                    {[
                      t("companyFormationServices"),
                      t("virtualOfficeAddress"),
                      t("mailHandlingAndForwarding"),
                      t("accessToMeetingRooms"),
                    ].map((item, index) => (
                      <MotionText key={index} delay={0.8 + index * 0.1}>
                        <li>
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="mr-2 text-green-500"
                          />{" "}
                          {item}
                        </li>
                      </MotionText>
                    ))}
                  </ul>
                </>
              }
              buttonText={t("explore")}
              onButtonClick={() =>
                handleButtonClick(t("legalityPackageSelected"))
              }
              backgroundColor="bg-[#FDB515]"
              textColor="text-primary"
              buttonColor="bg-primary text-white hover:bg-blue-700"
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
