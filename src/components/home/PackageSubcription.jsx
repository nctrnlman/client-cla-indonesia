import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PackageCard from "../cards/packageSubscription/PackageCard";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faBuilding,
  faBalanceScale,
} from "@fortawesome/free-solid-svg-icons";

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col justify-center items-center py-20 pt-40 relative">
      <div>
        <h2 className="mb-4 pb-12 text-5xl text-center tracking-tight font-extrabold text-primary animate-bounce">
          Package Subscription
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-6 max-w-7xl">
        <motion.div variants={cardVariants} initial="hidden" animate="visible">
          <PackageCard
            title={<span className="text-shadow-md">Legal Associate</span>}
            icon={
              <FontAwesomeIcon
                icon={faBalanceScale}
                className="text-5xl mb-4 text-secondary"
              />
            }
            content={
              <>
                <p className="mb-4 text-shadow-md">
                  Elevate your business legal journey with our Legal Associate
                  as your trusted partner. We provide legal assistance tailored
                  to your companys needs and type.
                </p>
                <ul className="text-left space-y-2">
                  <li>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="mr-2 text-green-500"
                    />{" "}
                    Personalized legal advice
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="mr-2 text-green-500"
                    />{" "}
                    Contract review and drafting
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="mr-2 text-green-500"
                    />{" "}
                    Regulatory compliance assistance
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="mr-2 text-green-500"
                    />{" "}
                    On-demand legal consultations
                  </li>
                </ul>
              </>
            }
            buttonText="Learn More"
            onButtonClick={() =>
              handleButtonClick("Legal Associate Package Selected")
            }
            backgroundColor="bg-primary"
            textColor="text-white"
            buttonColor="bg-secondary text-white"
          />
        </motion.div>
        <motion.div variants={cardVariants} initial="hidden" animate="visible">
          <PackageCard
            title={
              <span className="text-shadow-md">
                Legality (Incorporation and Virtual Office)
              </span>
            }
            icon={
              <FontAwesomeIcon
                icon={faBuilding}
                className="text-5xl mb-4 text-primary "
              />
            }
            content={
              <>
                <p className="mb-4">
                  Streamline your business setup with our comprehensive Legality
                  package. We handle incorporation and provide a virtual office
                  solution to give your business a professional edge.
                </p>
                <ul className="text-left space-y-2">
                  <li>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="mr-2 text-green-500"
                    />{" "}
                    Company incorporation services
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="mr-2 text-green-500"
                    />{" "}
                    Virtual office address
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="mr-2 text-green-500"
                    />{" "}
                    Mail handling and forwarding
                  </li>
                  <li>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="mr-2 text-green-500"
                    />{" "}
                    Meeting room access
                  </li>
                </ul>
              </>
            }
            buttonText="Explore"
            onButtonClick={() => handleButtonClick("Legality Package Selected")}
            backgroundColor="bg-secondary"
            textColor="text-white"
            buttonColor="bg-primary text-white"
          />
        </motion.div>
      </div>

      <div className="half-circle-right"></div>
      <div className="half-circle-left"></div>
    </div>
  );
}

export default PackageSubscription;
