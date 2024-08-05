import { motion } from "framer-motion";
import FAQItem from "../cards/faq/FAQItem";

const FAQ = () => {
  const faqs = [
    {
      question: "Apa tanggung jawab umum dari seorang Legal Associate?",
      answer:
        "Legal Associate membantu pengacara dengan penelitian, persiapan dokumen hukum, dan komunikasi dengan klien. Mereka juga dapat membantu dalam manajemen kasus dan pengembangan strategi hukum.",
    },
    {
      question: "Bagaimana seorang Legal Associate mendukung penelitian hukum?",
      answer:
        "Legal Associate melakukan penelitian hukum untuk mendukung kasus, memastikan kepatuhan dengan hukum dan peraturan. Mereka menganalisis preseden dan memberikan ringkasan serta rekomendasi kepada pengacara.",
    },
    {
      question: "Keterampilan apa yang penting untuk seorang Legal Associate?",
      answer:
        "Keterampilan penting untuk Legal Associate termasuk penelitian hukum, menulis, dan analisis. Mereka harus memiliki perhatian yang kuat terhadap detail, keterampilan komunikasi, dan kemampuan bekerja di bawah tekanan.",
    },
    {
      question: "Kualifikasi apa yang dibutuhkan untuk menjadi seorang Legal Associate?",
      answer:
        "Biasanya, seorang Legal Associate memiliki gelar dalam bidang hukum dan mungkin telah menyelesaikan magang atau mendapatkan pengalaman di firma hukum. Beberapa peran mungkin memerlukan sertifikasi atau kualifikasi tambahan.",
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
            FAQ Legal Associate
          </motion.p>
          <h2 className="sm:text-5xl text-4xl font-extrabold text-primary mb-6">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-gray-600 mb-8">
            Temukan jawaban atas pertanyaan umum tentang peran dan tanggung jawab
            seorang Legal Associate.
          </p>
          <motion.button
            className="bg-primary text-white font-bold py-3 px-6 rounded-full hover:bg-secondary hover:text-primary transition duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hubungi Kami untuk Info Lebih Lanjut
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
