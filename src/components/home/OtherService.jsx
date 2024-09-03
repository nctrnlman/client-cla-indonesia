import { useTranslation } from "react-i18next";
import PricingCard from "../cards/pricing/PricingCard";

function OtherService() {
  const { t } = useTranslation("otherService");

  const services = [
    {
      title: t("services.finance_title"),
      description: t("services.finance_description"),
      price: "5.500.000",
      fakePrice: "7.500.000",
      features: [
        t("features.consultation"),
        t("features.company_deed"),
        t("features.pt_decree"),
        t("features.company_tax_number"),
        t("features.business_identification_number"),
        t("features.kppr"),
        t("features.standard_certificate"),
        t("features.company_efin_activity"),
      ],
      buttonText: t("subscribe_now"),
    },
    {
      title: t("services.business_title"),
      description: t("services.business_description"),
      price: "5.500.000",
      fakePrice: "7.500.000",
      features: [
        t("features.consultation"),
        t("features.company_deed"),
        t("features.pt_decree"),
        t("features.company_tax_number"),
        t("features.business_identification_number"),
        t("features.kppr"),
        t("features.standard_certificate"),
        t("features.company_efin_activity"),
      ],
      buttonText: t("subscribe_now"),
    },
    {
      title: t("services.office_title"),
      description: t("services.office_description"),
      price: "7.500.000",
      fakePrice: "12.500.000",
      features: [
        t("features.consultation"),
        t("features.company_deed"),
        t("features.pt_decree"),
        t("features.company_tax_number"),
        t("features.business_identification_number"),
        t("features.kppr"),
        t("features.standard_certificate"),
        t("features.company_efin_activity"),
      ],
      buttonText: t("subscribe_now"),
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <button className="bg-secondary items-center p-4 px-6 rounded-full text-primary font-extrabold text-lg hover:bg-primary hover:text-secondary transition duration-300">
            {t("product")}
          </button>
          {/* <h2 className="mt-6 text-3xl md:text-5xl font-extrabold text-primary">
            {t("solutions")}
          </h2> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <PricingCard
              key={index}
              title={service.title}
              description={service.description}
              price={service.price}
              fakePrice={service.fakePrice}
              features={service.features}
              buttonText={service.buttonText}
            />
          ))}
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-primary opacity-10 rounded-tl-full" />
      <div className="absolute left-0 top-0 w-1/2 h-1/2 bg-secondary opacity-10 rounded-br-full" />
    </section>
  );
}

export default OtherService;
