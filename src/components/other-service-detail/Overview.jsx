import { useTranslation } from "react-i18next";

function Overview({ overview }) {
  const { t } = useTranslation(["serviceData"]);
  return (
    <section className="p-8 max-w-7xl mx-auto bg-white mb-8 shadow-md rounded-lg my-20">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-4 border-primary pb-2">
        {t("otherServiceDetail.overview")}
      </h2>
      {overview.map((item, index) => {
        const Tag = item.type;
        if (Tag === "ul") {
          return (
            <Tag key={index} className={` space-y-2 ${item.className}`}>
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

export default Overview;
