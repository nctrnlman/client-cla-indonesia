import { useTranslation } from "react-i18next";

function Process({ process }) {
  const { t } = useTranslation(["serviceData"]);
  if (!process || process.length === 0) {
    return null;
  }

  return (
    <section className="p-8 max-w-7xl mx-auto bg-white shadow-md rounded-lg my-20 mb-8">
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
    </section>
  );
}

export default Process;
