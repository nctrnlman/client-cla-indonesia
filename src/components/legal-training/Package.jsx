import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faBalanceScale, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import PackageTrainingCard from "../cards/package-training/PackageTrainingCard";
import { useTranslation } from "react-i18next";
import SubscriptionInfo from "../cards/subscription/SubscriptionInfoLT";

function PackageTraining({ onPackageSelect }) {
  const { t } = useTranslation(["trainingPackage"]);
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

  const PriceDisplay = ({ price, fakePrice, unit, features }) => (
    <div className="mt-4 mb-6">
      <div className="flex items-baseline">
        <span className="text-3xl font-bold text-primary">Rp {price}</span>
        <span className="text-xl text-gray-500 line-through ml-2">
          Rp {fakePrice}
        </span>
        <span className="ml-2 text-gray-600">/ {unit}</span>
      </div>
      <ul className="mt-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="min-h-screen py-20 pt-35 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-secondary p-4 px-6 rounded-full text-primary font-extrabold text-base md:text-lg transition duration-300">
            {t("product")}
          </span>
          <h2 className="text-5xl font-extrabold text-primary mt-5 mb-6">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-6">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            className="h-full"
          >
            <PackageTrainingCard
  title={t("internalPackage.title")}
  icon={
    <FontAwesomeIcon
      icon={faBalanceScale}
      className="text-yellow-400"
    />
  }
  content={
    <>
      <p className="mb-4">{t("internalPackage.content")}</p>
      <div className="mt-4 mb-6">
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-white">Rp 2.000.000</span>
          <span className="text-xl text-gray-500 line-through ml-2">
            Rp 2.500.000
          </span>
          <span className="ml-2 text-gray-600">/ {t("internalPackage.perCompany")}</span>
        </div>
        <ul className="mt-4 space-y-2">
          {[
            t("features.e_certificate"),
            t("features.souvenir")
          ].map((feature, index) => (
            <li key={index} className="flex items-center">
              <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  }
  additionalContent={t("internalPackage.additionalContent")}
  buttonText={t("internalPackage.buttonText")}
  backgroundColor="bg-primary"
  textColor="text-white"
  buttonColor="bg-[#fdb515] text-primary hover:bg-yellow-300"
  titleBackgroundColor="bg-[#fdb515]"
  titleTextColor="text-primary"
  onButtonClick={onPackageSelect}
  isOpen={openPackage === t("internalPackage.title")}
  onToggle={() => togglePackage(t("internalPackage.title"))}
/>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            className="h-full"
          >
            <PackageTrainingCard
              title={t("generalPackage.title")}
              icon={
                <FontAwesomeIcon icon={faBuilding} className="text-primary" />
              }
              content={
                <>
                  <p className="mb-4">{t("generalPackage.content")}</p>
                  <PriceDisplay 
                    price="500.000" 
                    fakePrice="750.000" 
                    unit={t("generalPackage.perPackage")}
                    features={[
                      t("features.e_certificate")
                    ]}
                  />
                </>
              }
              additionalContent={t("generalPackage.additionalContent")}
              buttonText={t("generalPackage.buttonText")}
              backgroundColor="bg-[#FDB515]"
              textColor="text-primary"
              buttonColor="bg-primary text-white hover:bg-blue-700"
              titleBackgroundColor="bg-primary"
              titleTextColor="text-white"
              onButtonClick={onPackageSelect}
              isOpen={openPackage === t("generalPackage.title")}
              onToggle={() => togglePackage(t("generalPackage.title"))}
            />
          </motion.div>
        </div>
      </div>
      <div className="md:pt-10 pt-4">
        <SubscriptionInfo />
      </div>
      <div className="half-circle-right"></div>
      <div className="half-circle-left"></div>
    </div>
  );
}

export default PackageTraining;