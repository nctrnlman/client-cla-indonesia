import { useEffect, useState, useRef } from "react";
import SEOTemplate from "../utils/SEOTemplate";
import FAQ from "../../src/components/legal-training/FAQ";
import ContactUsSection from "../components/legal-training/SequentialForm";
import PackageTraining from "../components/legal-training/Package";

function LegalTraining({ setIsLoading }) {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const contactFormRef = useRef(null);
  const seoTemplate = SEOTemplate(); 

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

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
      {seoTemplate.renderSEOTags('legalTraining')}

      <PackageTraining onPackageSelect={handlePackageSelect} />

      <div ref={contactFormRef}>
        <ContactUsSection selectedPackage={selectedPackage} />
      </div>
      <FAQ />
    </div>
  );
}

export default LegalTraining;