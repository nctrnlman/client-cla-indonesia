import { useState } from "react";

const ConsultationButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-5 right-5 flex items-center justify-center px-6 py-3 bg-secondary text-primary rounded-full shadow-lg z-50 hover:bg-primary hover:text-white transition duration-300"
    >
      <span className="relative transition duration-300 pr-4">
        {hovered ? "Hubungi Kami" : "Konsultasi"}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4zm0-4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.39 0-4 .7-4 2v1h8v-1c0-1.3-2.61-2-4-2z"
        />
      </svg>
    </button>
  );
};

export default ConsultationButton;
