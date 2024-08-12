import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { generateWhatsAppUrl } from "../../../utils/whatsappUtils";

const ConsultationButton = () => {
  const [hovered, setHovered] = useState(false);
  const whatsappUrl = generateWhatsAppUrl();

  const handleButtonClick = () => {
    window.open(whatsappUrl, "_blank");
  };
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleButtonClick}
      className="fixed bottom-5 right-5 flex items-center justify-center px-6 py-3 bg-secondary text-primary rounded-full shadow-lg z-50 hover:bg-primary hover:text-white transition duration-300"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={hovered ? "hover" : "normal"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="mr-2 font-semibold"
        >
          {hovered ? "Hubungi Kami" : "Konsultasi"}
        </motion.span>
      </AnimatePresence>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
        animate={{ rotate: hovered ? 360 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
        />
      </motion.svg>
    </motion.button>
  );
};

export default ConsultationButton;
