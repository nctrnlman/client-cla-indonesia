import { motion } from "framer-motion";
import FAQItem from "../cards/faq/FAQItem";

const FAQ = () => {
  const faqs = [
    {
      question: "What are the typical responsibilities of a Legal Associate?",
      answer:
        "Legal Associates assist lawyers with research, preparation of legal documents, and client communication. They may also help with case management and legal strategy development.",
    },
    {
      question: "How does a Legal Associate support in legal research?",
      answer:
        "Legal Associates conduct legal research to support cases, ensuring compliance with laws and regulations. They analyze precedents and provide summaries and recommendations to lawyers.",
    },
    {
      question: "What skills are important for a Legal Associate?",
      answer:
        "Important skills for Legal Associates include legal research, writing, and analysis. They should have strong attention to detail, communication skills, and the ability to work under pressure.",
    },
    {
      question: "What qualifications are required to become a Legal Associate?",
      answer:
        "Typically, a Legal Associate has a degree in law and may have completed internships or gained experience in a law firm. Some roles may require additional certifications or qualifications.",
    },
  ];

  return (
    <div className="py-32 px-8 max-w-6xl mx-auto">
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
            Legal Associate FAQ
          </motion.p>
          <h2 className="sm:text-5xl text-4xl font-extrabold text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mb-8">
            Find answers to common questions about the role and responsibilities
            of a Legal Associate.
          </p>
          <motion.button
            className="bg-primary text-white font-bold py-3 px-6 rounded-full hover:bg-secondary hover:text-primary transition duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us for More Info
          </motion.button>
        </div>
        <motion.ul
          className="md:basis-3/5 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FAQItem question={faq.question} answer={faq.answer} />
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default FAQ;
