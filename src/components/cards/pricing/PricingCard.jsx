import PropTypes from "prop-types";
import { generateWhatsAppUrl } from "../../../utils/whatsappUtils";

function PricingCard({ title, price, fakePrice, buttonText }) {
  const whatsappUrl = generateWhatsAppUrl(title);

  const handleButtonClick = () => {
    window.open(whatsappUrl, "_blank");
  };
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <div className="card-body min-h-[300px] flex flex-col justify-between">
        <div className="flex flex-col justify-between h-full">
          <h3 className="card-title justify-start text-2xl font-bold text-primary min-h-[64px]">
            {title}
          </h3>
          <div className="mt-4 flex flex-col flex-grow">
            <span className="text-3xl font-bold text-primary">{price}</span>
            <p className="text-red-500 line-through mb-4 mt-2">
              Rp {fakePrice}
            </p>
          </div>
        </div>

        <ul className="space-y-2 mb-6">
          {/* {features.map((feature) => (
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
        ))} */}
          Harap berkonsultasi dengan kami untuk informasi lebih lanjut mengenai
          layanan ini.
        </ul>
        <div className="card-actions mt-auto">
          <button
            className="btn bg-primary z-10 text-white btn-block"
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
