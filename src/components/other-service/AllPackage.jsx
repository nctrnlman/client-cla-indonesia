import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import OtherServicesCard from "../cards/other-services/OtherServicesCard";

function AllPackage() {
  const { t, i18n } = useTranslation(["serviceData"]);
  const servicesData = t("servicesData", { returnObjects: true }) || [];
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);
  const [visibleItems, setVisibleItems] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    const filtered = servicesData
      .map((category) => ({
        ...category,
        items: (category.items || []).filter((item) =>
          item.package[0]?.title.toLowerCase().includes(searchValue)
        ),
      }))
      .filter((category) => category.items.length > 0);

    setFilteredServices(filtered);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSeeMore = (categoryIndex) => {
    setVisibleItems({
      ...visibleItems,
      [categoryIndex]: (visibleItems[categoryIndex] || 3) + 3,
    });
  };

  const filteredCategories = filteredServices
    .filter(
      (category) =>
        selectedCategory === "" || category.category === selectedCategory
    )
    .filter((category) => category.items.length > 0);

  const isAnyCategoryEmpty = filteredCategories.length === 0;

  useEffect(() => {
    const updatedServices = t("servicesData", { returnObjects: true }) || [];
    const filtered = updatedServices
      .map((category) => ({
        ...category,
        items: (category.items || []).filter((item) =>
          item.package[0]?.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        ),
      }))
      .filter((category) => category.items.length > 0);

    setFilteredServices(filtered);
  }, [i18n.language, searchTerm]);

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
            {t("allPackage.product")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
            {t("allPackage.allServices")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("allPackage.choosePackage")}
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder={t("allPackage.searchPlaceholder")}
            className="p-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent mr-4"
          />

          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="p-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
            >
              {t("allPackage.filterByCategory")}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a onClick={() => handleCategoryChange("")}>
                  {t("allPackage.allCategories")}
                </a>
              </li>
              {servicesData.map((category, index) => (
                <li key={index}>
                  <a onClick={() => handleCategoryChange(category.category)}>
                    {category.category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {filteredCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12 py-10">
            <h3 className="text-3xl font-extrabold text-primary mb-8 text-center">
              {category.category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items
                .slice(0, visibleItems[categoryIndex] || 3)
                .filter((pkg) => pkg.package[0]?.title && pkg.package[0]?.price)
                .map((pkg) => (
                  <OtherServicesCard
                    key={pkg.package[0]?.title || pkg.slug}
                    title={
                      pkg.package[0]?.title || t("allPackage.untitledPackage")
                    }
                    slug={pkg.slug}
                    description={
                      pkg.package[0]?.description ||
                      t("allPackage.noDescription")
                    }
                    price={pkg.package[0]?.price || t("allPackage.noPrice")}
                    fakePrice={pkg.package[0]?.fakePrice}
                    features={pkg.package[0]?.features || []}
                    buttonText={
                      pkg.package[0]?.buttonText || t("allPackage.learnMore")
                    }
                  />
                ))}
            </div>
            {category.items.length > (visibleItems[categoryIndex] || 3) && (
              <div className="flex justify-center mt-8 py-4">
                <button
                  onClick={() => handleSeeMore(categoryIndex)}
                  className="flex items-center justify-center text-primary hover:text-secondary transition duration-300"
                >
                  <span className="mr-2">{t("allPackage.seeMore")}</span>
                  <FaChevronDown />
                </button>
              </div>
            )}
          </div>
        ))}

        {isAnyCategoryEmpty && (
          <motion.div
            className="mt-16 text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="text-lg text-gray-600 mb-4">
              {t("allPackage.noPackagesFound")}
            </p>
            <motion.button
              className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-secondary hover:text-primary transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("allPackage.contactUsButton")}
            </motion.button>
          </motion.div>
        )}

        <motion.div
          className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-secondary opacity-10 rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-primary opacity-10 rounded-full"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
}

export default AllPackage;
