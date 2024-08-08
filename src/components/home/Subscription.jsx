import { useTranslation } from "react-i18next";
import SubscriptionCard from "../cards/subscription/SubscriptionCard";
import SubscriptionInfo from "../cards/subscription/SubscriptionInfo";

const Subscription = () => {
  const { t } = useTranslation("subscription");

  const packages = t("packages", { returnObjects: true });

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-secondary text-primary font-extrabold text-lg py-2 px-4 rounded-full">
            {t("product")}
          </span>
          <h2 className="text-5xl font-extrabold text-primary mt-5 mb-6">
            {t("subscriptionTitle")}
          </h2>
          <p className="text-2xl font-semibold text-black mb-5">
            {t("subscriptionSubtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <SubscriptionCard key={index} {...pkg} />
          ))}
        </div>
        <div className="md:pt-10 pt-4">
          <SubscriptionInfo />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
