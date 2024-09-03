import { motion } from "framer-motion";
import FAQItem from "../cards/faq/FAQItem";
import { useTranslation } from "react-i18next";
import { generateWhatsAppUrl } from "../../utils/whatsappUtils";

const FAQ = () => {
  const { t } = useTranslation("faq");
  const whatsappUrl = generateWhatsAppUrl();

  const handleButtonClick = () => {
    window.open(whatsappUrl, "_blank");
  };
  const faqs = [
    {
      question: t("faqs.0.question"),
      answer: t("faqs.0.answer"),
    },
    {
      question: t("faqs.1.question"),
      answer: t("faqs.1.answer"),
    },
    {
      question: t("faqs.2.question"),
      answer: t("faqs.2.answer"),
    },
    {
      question: t("faqs.3.question"),
      answer: t("faqs.3.answer"),
    },
  ];

  return (
    <div className="bg-gray-50">
      <div className="py-20 px-8 max-w-6xl mx-auto ">
        <motion.div
          className="flex flex-col md:flex-row gap-12 items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col text-left md:sticky md:top-32 md:basis-2/5">
            <motion.p
              className="font-semibold bg-secondary max-w-fit p-4 px-6 rounded-full text-primary text-lg hover:bg-primary hover:text-secondary transition duration-300 mb-4 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("faqTitle")}
            </motion.p>
            <h2 className="sm:text-5xl text-4xl font-extrabold text-primary mb-6">
              {t("faqHeading")}
            </h2>
            <p className="text-gray-700 mb-8">{t("faqDescription")}</p>
            <motion.button
              className="bg-primary text-white font-bold py-3 px-6 rounded-full hover:bg-secondary hover:text-primary transition duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleButtonClick}
            >
              {t("contactButton")}
            </motion.button>
          </div>
          <motion.ul
            className="md:basis-3/5 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FAQItem question={faq.question} answer={faq.answer} />
              </motion.div>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
