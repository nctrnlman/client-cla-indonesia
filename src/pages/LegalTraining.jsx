import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import FAQ from "../../src/components/legal-training/FAQ";
import ContactUsSection from "../components/legal-training/SequentialForm";
import PackageTraining from "../components/legal-training/Package";

function LegalTraining({ setIsLoading }) {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const contactFormRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  const handlePackageSelect = (packageTitle) => {
    setSelectedPackage(packageTitle);
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Legal Training - CLA Indonesia</title>
        <meta
          name="description"
          content="CLA Indonesia menyediakan pelatihan hukum untuk meningkatkan pemahaman dan kepatuhan terhadap regulasi bisnis di Indonesia."
        />
        <link
          rel="canonical"
          href="https://www.domainanda.com/legal-training"
        />
      </Helmet>

      <PackageTraining onPackageSelect={handlePackageSelect} />

      <div ref={contactFormRef}>
        <ContactUsSection selectedPackage={selectedPackage} />
      </div>
      <FAQ />
    </div>
  );
}

export default LegalTraining;
