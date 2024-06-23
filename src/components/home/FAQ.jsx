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
    <div className="py-32 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
      <div className="flex flex-col text-left md:basis-1/2">
        <p className="inline-block font-semibold text-primary mb-4">
          Legal Associate FAQ
        </p>
        <p className="sm:text-4xl text-3xl font-extrabold text-primary">
          Frequently Asked Questions
        </p>
      </div>
      <ul className="md:basis-1/2">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
