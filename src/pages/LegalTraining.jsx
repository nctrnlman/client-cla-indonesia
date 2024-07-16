import React, { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import FAQ from "../components/home/FAQ";
import About from "../components/home/About";
import ContactUsSection from "../components/legal-training/SequentialForm";
import PackageSubscription from "../components/legal-training/Package";

function LegalTraining({ setIsLoading }) {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const contactFormRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);

    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust this time as needed

    // Cleanup function
    return () => clearTimeout(timer);
  }, [setIsLoading]);

  const handlePackageSelect = (packageTitle) => {
    setSelectedPackage(packageTitle);
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
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
      
      <PackageSubscription onPackageSelect={handlePackageSelect} />
      
      <div ref={contactFormRef}>
        <ContactUsSection selectedPackage={selectedPackage} />
      </div>
      
      {/* <About /> */}
      
      <FAQ />
    </div>
  );
}

export default LegalTraining;