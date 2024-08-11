import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faBalanceScale } from "@fortawesome/free-solid-svg-icons";
import PackageTrainingCard from "../cards/package-training/PackageTrainingCard";
import { useTranslation } from "react-i18next";

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

  return (
    <div className="min-h-screen py-20 pt-40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 pb-12 text-5xl text-center tracking-tight uppercase font-extrabold text-primary"
        >
          {t("title")}
        </motion.h2>

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

      <div className="half-circle-right"></div>
      <div className="half-circle-left"></div>
    </div>
  );
}

export default PackageTraining;
