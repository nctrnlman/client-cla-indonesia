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
      <div>
        <h2 className="mb-6 text-center text-5xl tracking-tight font-extrabold text-primary">
          3 Months Subscription
        </h2>
        <p className="mb-5  pb-12 font-light text-black sm:text-2xl text-center">
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
      <div className="flex justify-start flex-col w-full md:w-auto text-base p-4">
        <span className="mb-2">Notes:</span>
        <span className="text-sm md:text-base">
          Payment will be processed monthly for a duration of 3 consecutive
          months. Price does not include Taxes, Transportation Costs, and other
          fees beyond the Services mentioned above (if any).
        </span>
      </div>
    </div>
  );
}

export default Subscription;
