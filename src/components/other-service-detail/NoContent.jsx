import { useTranslation } from "react-i18next";
import { generateWhatsAppUrl } from "../../utils/whatsappUtils";

function NoContent({ serviceTitle }) {
  const { t } = useTranslation("serviceData");

  const whatsappUrl = generateWhatsAppUrl(serviceTitle);

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <p className="text-xl md:text-2xl text-primary font-semibold mb-6 text-center">
        {t("noContent.message")}
      </p>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-primary text-white px-6 py-3 rounded-full shadow-md hover:bg-secondary transition duration-300 ease-in-out"
      >
        {t("noContent.contactUs")}
      </a>
    </div>
  );
}

export default NoContent;
