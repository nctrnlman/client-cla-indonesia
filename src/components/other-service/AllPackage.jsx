import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
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
        {/* <p className="text-gray-600 mb-4">{description}</p> */}
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

function AllPackage() {
  const { t, i18n } = useTranslation(["serviceData"]);
  const servicesData = t("servicesData", { returnObjects: true }) || [];
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredServices, setFilteredServices] = useState(servicesData);
  const [visibleItems, setVisibleItems] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    const filtered = servicesData
      .map((category) => ({
        ...category,
        items:
          category.items?.filter((item) =>
            item.package[0]?.title.toLowerCase().includes(searchValue)
          ) || [],
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
    setFilteredServices(t("servicesData", { returnObjects: true }) || []);
  }, [i18n.language]);

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
            All Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the right package for your business needs and start your
            journey with confidence.
          </p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search for a service..."
            className="p-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent mr-4"
          />

          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="p-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
            >
              Filter by Category
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a onClick={() => handleCategoryChange("")}>All Categories</a>
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
                .filter((pkg) => pkg.package[0]?.title && pkg.package[0]?.price) // Filter out incomplete packages
                .map((pkg, index) => (
                  <PricingCard
                    key={pkg.package[0].title} // Ensure key is unique
                    title={pkg.package[0]?.title || "Untitled Package"}
                    description={
                      pkg.package[0]?.description || "No description available"
                    }
                    price={pkg.package[0]?.price || "No price available"}
                    fakePrice={
                      pkg.package[0]?.fakePrice || "No fake price available"
                    }
                    features={pkg.package[0]?.features || []}
                    buttonText={pkg.package[0]?.buttonText || "Learn More"}
                  />
                ))}
            </div>
            {category.items.length > (visibleItems[categoryIndex] || 3) && (
              <div className="flex justify-center mt-8 py-4">
                <button
                  onClick={() => handleSeeMore(categoryIndex)}
                  className="flex items-center justify-center text-primary hover:text-secondary transition duration-300"
                >
                  <span className="mr-2">See More</span>
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
        )}

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
      </motion.div>
    </div>
  );
}

export default AllPackage;
