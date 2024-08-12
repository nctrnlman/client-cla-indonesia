import PropTypes from "prop-types";
import { generateWhatsAppUrl } from "../../../utils/whatsappUtils";

function PricingCard({
  title,
  description,
  price,
  fakePrice,
  features,
  buttonText,
}) {
  const whatsappUrl = generateWhatsAppUrl(title);

  const handleButtonClick = () => {
    window.open(whatsappUrl, "_blank");
  };
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="card-body">
        <h3 className="card-title text-2xl font-bold text-primary">{title}</h3>
        {/* <p className="text-gray-600 mt-2">{description}</p> */}
        <div className="flex items-baseline mt-4 mb-6">
          <span className="text-3xl font-bold text-primary">{price}</span>
          <span className="text-xl text-gray-500 line-through ml-2">
            {fakePrice}
          </span>
        </div>
        <ul className="space-y-2 mb-6">
          {features.map((feature) => (
            <li key={feature} className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="card-actions">
          <button
            className="btn bg-primary text-secondary btn-block"
            onClick={handleButtonClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

PricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  fakePrice: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default PricingCard;
