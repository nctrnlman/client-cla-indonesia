import PackageCard from "../cards/packageSubscription/PackageCard";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function PackageSubscription() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleButtonClick = (packageType) => {
    console.log(`${packageType} Selected`);
    navigate("/legal-associate", {
      state: { packageType },
    });
  };

  return (
    <div className="flex flex-col justify-center items-center py-20 pt-40 relative">
      <div>
        <h2 className="mb-4 pb-12 text-5xl text-center tracking-tight font-extrabold text-primary animate-bounce">
          Package Subscription
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-6 max-w-7xl">
        <PackageCard
          title="Legal Associate"
          content="Elevate your business's legal journey with our Legal Associate as your trusted partner. We provide legal assistance tailored to your company's needs and type. Our innovative solutions, quick responses, and flexible services ensure that your legal needs are met efficiently. Partner with us to unlock your business's full potential for growth and success."
          buttonText="More"
          onButtonClick={() => handleButtonClick("Basic Package Selected")}
          backgroundColor="bg-primary"
          textColor="text-white"
          buttonColor="bg-secondary text-white"
        />
        <PackageCard
          title="Legality (Incorporation and Virtual Office)"
          content="Elevate your business's legal journey with our Legal Associate as your trusted partner. We provide legal assistance tailored to your company's needs and type. Our innovative solutions, quick responses, and flexible services ensure that your legal needs are met efficiently. Partner with us to unlock your business's full potential for growth and success."
          buttonText="More"
          onButtonClick={() => handleButtonClick("Premium Package Selected")}
          backgroundColor="bg-secondary"
          textColor="text-white"
          buttonColor="bg-primary text-white"
        />
      </div>
      <div className="half-circle-right"></div>
      <div className="half-circle-left"></div>
    </div>
  );
}

export default PackageSubscription;
