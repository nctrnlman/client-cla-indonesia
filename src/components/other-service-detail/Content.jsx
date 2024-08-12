import PropTypes from "prop-types";
import { motion } from "framer-motion";
import ContentCard from "../cards/other-service-detail/ContentCard";

function Content({ packages }) {
  const gridCols =
    packages.length > 1 ? `md:grid-cols-${packages.length}` : "grid-cols-1";

  return (
    <div className="bg-gray-50 relative md:py-20 overflow-hidden">
      <div
        className={`grid grid-cols-1 ${gridCols} justify-center mx-auto py-20 max-w-7xl gap-10`}
      >
        {packages.map((pkg) => (
          <ContentCard key={pkg.title} {...pkg} />
        ))}
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

Content.propTypes = {
  packages: PropTypes.array.isRequired,
};

export default Content;
