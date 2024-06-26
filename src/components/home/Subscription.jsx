import PricingCard from "../cards/pricing/PricingCard";

function Subscription() {
  const pricingPlans = [
    {
      title: "Standard",
      description: "Best option for personal use & for your next project.",
      price: 92,
      features: [
        "Rp2.500.000 jadi Rp1.500.000 per month",
        "Unlimited online consultation",
        "Drafting Employment Legal Documents (PKWT, PKWTT, Termination of Employment Agreement, and a Power of Attorney) per 3 months",
        "Reviewing 2 Agreements per month",
        "Compliance assistance: Filing Investment Activity Report (LKPM)",
        "Complimentary Legal training provided once every 3 months",
      ],
      buttonText: "Get started",
    },
    {
      title: "Premium",
      description: "Relevant for multiple users, extended & premium support.",
      price: 183,
      features: [
        "Unlimited online consultation",
        "Drafting Employment Legal Documents (PKWT, PKWTT, Termination of Employment Agreement, and a Power of Attorney) per 3 months",
        "Drafting 1 Business Agreement (Sale and Purchase Agreement, Share Purchase Agreement, MoU, or others) per 3 months",
        "Reviewing 2 Agreements per month",
        "Compliance assistance: Filing Investment Activity Report (LKPM)",
        "Complimentary: Legal training provided once every 3 months, Filing monthly SPT Badan.",
      ],
      buttonText: "Get started",
    },
    {
      title: "Ultimate",
      description:
        "Best for large scale uses and extended redistribution rights.",
      price: 305,
      features: [
        "Unlimited online consultation, including meeting with counterparts",
        "Drafting or reviewing 5 Agreements per month",
        "Compliance assistance: Filing Investment Activity Report (LKPM) and other technical reports.",
        "Assisting with corporate documents (AGMS/EGMS, Director Resolution, and Shareholders’ resolution)",
        "Complimentary: Legal training provided once every 3 months, Filing yearly SPT Badan.",
      ],
      buttonText: "Get started",
    },
  ];

  return (
    <section className="bg-white dark:bg-primary p-20">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-primary dark:text-white">
            3 Months Subscription for Legal Associate
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Here at CLA we focus on markets where technology, innovation, and
            capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Subscription;
