import PricingCard from "../cards/pricing/PricingCard";

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
        "Assisting with corporate documents (AGMS/EGMS, Director Resolution, and Shareholders’ resolution)",
        "Complimentary: Legal training provided once every 3 months, Filing yearly SPT Badan.",
      ],
      buttonText: "Subscribe Now",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center pt-20">
      <div className="flex flex-col justify-center items-center ">
        <button
          className="bg-secondary items-center p-4 px-6 rounded-full text-primary font-extrabold text-lg hover:bg-primary hover:text-secondary transition duration-300
          "
        >
          PRODUCT
        </button>
        <h2 className="mb-6 mt-5 text-center text-5xl tracking-tight font-extrabold text-primary">
          3 Months Subscription
        </h2>
        <p className="mb-5  pb-12 font-semibold text-black sm:text-2xl text-center">
          for Legal Associate
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-6">
        {packages.map((pkg, index) => (
          <PricingCard
            key={index}
            title={pkg.title}
            description={pkg.description}
            price={pkg.price}
            fakePrice={pkg.fakePrice}
            features={pkg.features}
            buttonText={pkg.buttonText}
          />
        ))}
      </div>

      <div className="flex flex-col justify-center gap-16 items-center mx-auto h-full max-w-7xl pb-20">
        {/* note */}
        <div className="bg-gradient-to-r from-primary to-cyan-600 text-white flex p-6 gap-4 rounded-bl-3xl rounded-tr-3xl">
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
  );
}

export default Subscription;
