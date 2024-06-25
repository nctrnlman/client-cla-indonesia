import PricingCard from "../cards/pricing/PricingCard";

function Subscription() {
  const pricingPlans = [
    {
      title: "Starter",
      description: "Best option for personal use & for your next project.",
      price: 29,
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 1 developer",
        "Premium support: 6 months",
        "Free updates: 6 months",
      ],
      buttonText: "Get started",
    },
    {
      title: "Company",
      description: "Relevant for multiple users, extended & premium support.",
      price: 99,
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 10 developers",
        "Premium support: 24 months",
        "Free updates: 24 months",
      ],
      buttonText: "Get started",
    },
    {
      title: "Enterprise",
      description:
        "Best for large scale uses and extended redistribution rights.",
      price: 499,
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 100+ developers",
        "Premium support: 36 months",
        "Free updates: 36 months",
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
