import { useState } from "react";
import PropTypes from "prop-types";
function PricingCard({
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
      className="relative w-96 h-[32rem] perspective-1000 m-4"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full text-center transition-transform duration-500 transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front side */}
        <div
          className="absolute w-full h-full backface-hidden flex flex-col justify-end border rounded-2xl"
          style={{
            backgroundImage:
              "url('https://yalelawassociates.com/wp-content/uploads/2018/11/law-bg-2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-60 border rounded-2xl"></div>

          <div className="flex flex-row justify-between p-4  w-full relative z-10">
            <div className="text-left z-10">
              <h2 className="text-lg pb-2 font-bold text-white">{title}</h2>
              <div>
                <p className="text-base pt-2 font-extrabold text-white">
                  Rp.{price}
                </p>
                <p className="text-base pt-2 font-extrabold line-through text-red-500">
                  Rp.{fakePrice}
                </p>
              </div>
            </div>
            <div className="mt-4 text-right pt-5 pr-4 z-10">
              <div className=" bg-white rounded-full border border-primary p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* Back side */}
        <div className="absolute w-full h-full backface-hidden flex items-center justify-center bg-white text-primary rotate-y-180 rounded-lg border border-primary shadow">
          <div className="p-6 mx-auto max-w-lg text-center">
            <ul role="list" className="mb-0 space-y-2 text-left">
              <svg
                className="w-8 h-8 mb-4 text-green-500"
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
                <li key={index} className="grid grid-cols-12 items-center ">
                  <svg
                    width="20"
                    height="20"
                    className="mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="col-span-11 text-sm text-justify">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

PricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  fakePrice: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default PricingCard;
