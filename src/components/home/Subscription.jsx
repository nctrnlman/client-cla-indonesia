import React, { useState, useRef, useEffect } from "react";
import { FaCheck, FaChevronDown, FaChevronUp, FaStar } from "react-icons/fa";
import bg_info from "../../assets/bg/note_banner.jpg";

const PricingCard = ({
  title,
  description,
  price,
  fakePrice,
  features,
  buttonText,
  isPopular,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState("0px");
  const contentRef = useRef(null);

  useEffect(() => {
    if (isExpanded) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isExpanded]);

  return (
    <div
      className={`flex flex-col h-full rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden ${
        isPopular ? "border-4 border-yellow-400" : "border border-gray-200"
      }`}
    >
      <div className="relative flex-grow bg-white p-6">
        {isPopular && (
          <div className="absolute top-0 right-0 bg-yellow-400 text-primary font-bold py-1 px-4 rounded-bl-lg">
            Most Popular
          </div>
        )}
        <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="text-4xl font-bold text-primary mb-2">Rp {price}</div>
        {fakePrice && (
          <p className="text-red-500 line-through mb-4">Rp {fakePrice}</p>
        )}
        <button className="w-full bg-secondary text-primary font-bold py-2 px-4 rounded-full hover:bg-primary hover:text-secondary transition duration-300">
          {buttonText}
        </button>
      </div>
      <div className="bg-primary text-white p-6 flex-grow flex flex-col">
        <h4 className="text-xl font-semibold mb-4">Features</h4>
        <ul className="space-y-2">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start">
              <FaCheck className="flex-shrink-0 w-5 h-5 text-green-400 mr-2 mt-1" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div
          ref={contentRef}
          style={{ maxHeight: maxHeight }}
          className="overflow-hidden transition-all duration-300 ease-in-out"
        >
          <ul className="space-y-2 mt-2">
            {features.slice(3).map((feature, index) => (
              <li key={index + 3} className="flex items-start">
                <FaCheck className="flex-shrink-0 w-5 h-5 text-green-400 mr-2 mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        {features.length > 3 && (
          <button
            className="w-full mt-4 text-white flex items-center justify-center hover:underline"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>
                <span className="mr-2">See less</span>
                <FaChevronUp />
              </>
            ) : (
              <>
                <span className="mr-2">See more</span>
                <FaChevronDown />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

function Subscription() {
  const packages = [
    {
      title: "Standard (for UMK only)",
      description:
        "This package includes all the premium features such as A, B, and C.",
      price: "1.500.000",
      fakePrice: "2.500.000",
      features: [
        "Unlimited online consultation",
        "Drafting Employment Legal Documents (PKWT, PKWTT, Termination of Employment Agreement, and a Power of Attorney) per 3 months",
        "Reviewing 2 Agreements per month",
        "Compliance assistance: Filing Investment Activity Report (LKPM)",
        "Complimentary Legal training provided once every 3 months",
      ],
      buttonText: "Subscribe Now",
      isPopular: false,
    },
    {
      title: "Premium",
      description:
        "This package includes standard features such as X, Y, and Z.",
      price: "3.500.000",
      fakePrice: "4.000.000",
      features: [
        "Unlimited online consultation",
        "Drafting Employment Legal Documents (PKWT, PKWTT, Termination of Employment Agreement, and a Power of Attorney) per 3 months",
        "Drafting 1 Business Agreement (Sale and Purchase Agreement, Share Purchase Agreement, MoU, or others) per 3 months",
        "Reviewing 2 Agreements per month",
        "Compliance assistance: Filing Investment Activity Report (LKPM)",
        "Complimentary: Legal training provided once every 3 months, Filing monthly SPT Badan.",
      ],
      buttonText: "Subscribe Now",
      isPopular: true,
    },
    {
      title: "Ultimate",
      description: "This package includes basic features such as 1, 2, and 3.",
      price: "5.000.000",
      fakePrice: "12.500.000",
      features: [
        "Unlimited online consultation, including meeting with counterparts",
        "Drafting or reviewing 5 Agreements per month",
        "Compliance assistance: Filing Investment Activity Report (LKPM) and other technical reports.",
        "Assisting with corporate documents (AGMS/EGMS, Director Resolution, and Shareholders' resolution)",
        "Complimentary: Legal training provided once every 3 months, Filing yearly SPT Badan.",
      ],
      buttonText: "Subscribe Now",
      isPopular: false,
    },
  ];

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-secondary text-primary font-extrabold text-lg py-2 px-4 rounded-full">
            PRODUCT
          </span>
          <h2 className="text-5xl font-extrabold text-primary mt-5 mb-6">
            3 Months Subscription
          </h2>
          <p className="text-2xl font-semibold text-black mb-5">
            for Legal Associate
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PricingCard key={index} {...pkg} />
          ))}
        </div>
        <div className="flex flex-col justify-center gap-16 items-center mx-auto h-full max-w-7xl pb-20 pt-20">
          {/* note */}
          <div
            className="text-white flex p-6 gap-4 rounded-tl-3xl rounded-br-3xl bg-cover bg-center"
            style={{
              backgroundImage: `url(${bg_info})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* icon */}
            <div>
              <svg
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_412_677)">
                  <path
                    d="M23.5 3.91699C12.69 3.91699 3.91669 12.6903 3.91669 23.5003C3.91669 34.3103 12.69 43.0837 23.5 43.0837C34.31 43.0837 43.0834 34.3103 43.0834 23.5003C43.0834 12.6903 34.31 3.91699 23.5 3.91699ZM23.5 33.292C22.4229 33.292 21.5417 32.4107 21.5417 31.3337V23.5003C21.5417 22.4232 22.4229 21.542 23.5 21.542C24.5771 21.542 25.4584 22.4232 25.4584 23.5003V31.3337C25.4584 32.4107 24.5771 33.292 23.5 33.292ZM25.4584 17.6253H21.5417V13.7087H25.4584V17.6253Z"
                    fill="#F4F5F8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_412_677">
                    <rect width="47" height="47" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="text-lg">
              Payment will be processed monthly for a duration of 3 consecutive
              months. Price does not include Taxes, Transportation Costs, and
              other fees beyond the Services mentioned above (if any).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
