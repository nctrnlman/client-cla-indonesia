import WhyChooseLegalAssociate from "../cards/about/WhyChooseLegalAssociate";

const cardsData = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    ),
    title: "Liaising with Government Authorities",
    description: "Liaising with government authorities.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 11a7 7 0 11-14 0 7 7 0 0114 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 11a7 7 0 11-14 0 7 7 0 0114 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 11a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    title: "Business Approach Tasks",
    description: "Conducting tasks with business approaches for your interest.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    ),
    title: "Company Compliance Alignment",
    description:
      "Our service aligns with company’s compliance, going beyond more requests.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    ),
    title: "Competitive Pricing and Efficiency",
    description:
      "We provide competitive pricing with transparent task descriptions and efficient work.",
  },
];

function About() {
  return (
    <div className="min-h-screen pt-20">
      <div className="text-center ">
        <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-primary pb-4">
          Why Choose Legal Associate
        </h1>
      </div>
      <div className="py-8 px-4 md:px-8 max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {cardsData.map((card, index) => (
          <WhyChooseLegalAssociate
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
