import { useState } from "react";
import PropTypes from "prop-types";
function OtherServiceCard({
  title,
  description,
  price,
  fakePrice,
  features,
  buttonText,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-80 h-[32rem]  perspective-1000 m-4"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full text-center transition-transform duration-500 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front side */}
        <div className="absolute w-full h-full backface-hidden flex items-center justify-center bg-primary text-white rounded-lg border border-gray-100 shadow ">
          <div className="p-10 mx-auto max-w-lg h-full text-center justify-between flex flex-col">
            <h2 className="text-lg pb-2 font-semibold text-white">{title}</h2>
            <div>
              <p className="text-base pt-2 font-extrabold line-through	text-red-500">
                Rp.{fakePrice}
              </p>
              <p className="text-base pt-2 font-extrabold">Rp.{price}</p>
            </div>

            <div>
              <a
                href="#"
                className="text-primary bg-secondary hover:bg-primary font-semibold rounded-lg text-sm px-2 py-2.5 "
              >
                {buttonText}
              </a>
            </div>
          </div>
        </div>
        {/* Back side */}
        <div className="absolute w-full h-full backface-hidden flex items-center justify-center bg-secondary text-primary rotate-y-180 rounded-lg border border-gray-100 shadow">
          <div className="p-6 mx-auto max-w-lg text-center">
            <ul role="list" className="mb-0 space-y-2 text-left">
              <svg
                className="w-8 h-8 mb-4 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 2c3.866 0 7 3.134 7 7 0 2.276-1.43 5.224-3.465 8.142a1 1 0 01-1.07.358l-2.743-.69a1 1 0 00-.816.196l-2.2 1.733a1 1 0 01-1.164 0l-2.2-1.733a1 1 0 00-.816-.196l-2.743.69a1 1 0 01-1.07-.358C6.43 14.224 5 11.276 5 9c0-3.866 3.134-7 7-7z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15s-3-3-3-5a3 3 0 016 0c0 2-3 5-3 5z"
                />
              </svg>
              <h2 className="text-lg pb-2 font-semibold text-primary">
                What you get
              </h2>
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-primary "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

OtherServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  fakePrice: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default OtherServiceCard;
