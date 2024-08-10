import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import LegalityPackageCard from "../../components/cards/legality-package/LegalityPackageCard";
function LegalityPackages() {
  const { t } = useTranslation("legalityPackage");
  const packages = t("packages", { returnObjects: true });

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
            {t("product")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
            {t("legality_packages")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("choose_package")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <LegalityPackageCard
              key={pkg.title}
              {...pkg}
              isPopular={index === 1}
            />
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="text-lg text-gray-600 mb-4">{t("not_sure")}</p>
          <motion.button
            className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-secondary hover:text-primary transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("contact_us")}
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
