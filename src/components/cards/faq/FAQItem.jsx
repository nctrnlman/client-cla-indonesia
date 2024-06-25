import { useState } from "react";
import PropTypes from "prop-types";

const FAQItem = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleFAQ = () => {
    setExpanded(!expanded);
  };

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-gray-200"
        aria-expanded={expanded}
        onClick={toggleFAQ}
      >
        <span className="flex-1 text-gray-800">{question}</span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto transform ${
            expanded ? "rotate-90" : "rotate-0"
          } transition-transform duration-300 ease-in-out`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={expanded ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"}
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          expanded ? "max-h-full" : "max-h-0"
        }`}
        aria-hidden={!expanded}
        style={{ maxHeight: expanded ? "1000px" : "0" }}
      >
        <div className="pb-5 leading-relaxed">
          <div className="space-y-2 leading-relaxed text-gray-600">
            {answer}
          </div>
        </div>
      </div>
    </li>
  );
};

FAQItem.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
};

export default FAQItem;
