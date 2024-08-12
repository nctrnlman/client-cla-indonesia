import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
function Process({ process }) {
  const { t } = useTranslation(["serviceData"]);
  if (!process || process.length === 0) {
    return null;
  }

  return (
    <section className="p-8 max-w-7xl mx-auto relative bg-white shadow-md rounded-lg my-20 mb-8 overflow-hidden">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-4 border-primary pb-2">
        {t("otherServiceDetail.process")}
      </h2>
      {process.map((item, index) => {
        const Tag = item.type;
        if (Tag === "ul") {
          return (
            <Tag key={index} className={`space-y-4 ${item.className}`}>
              {item.content.map((subItem, subIndex) => (
                <subItem.type key={subIndex} className={subItem.className}>
                  {subItem.content}
                </subItem.type>
              ))}
            </Tag>
          );
        }
        return (
          <Tag key={index} className={`text-gray-800 mb-4 ${item.className}`}>
            {item.content}
          </Tag>
        );
      })}
      <motion.div
        className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary opacity-10 rounded-full"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      {/* <motion.div
        className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-secondary opacity-10 rounded-full"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, delay: 2.5 }}
      /> */}
    </section>
  );
}

export default Process;
