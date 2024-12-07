import Hero from "../components/legal-associate/Hero";
import Subscription from "../components/home/Subscription";
import FAQ from "../components/home/FAQ";
import About from "../components/home/About";
import { useEffect } from "react";
import SEOTemplate from "../utils/SEOTemplate";
import SequentialForm from "../components/legal-training/SequentialForm";

function LegalAssociate({ setIsLoading }) {
  const seoTemplate = SEOTemplate();

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {seoTemplate.renderSEOTags("legalAssociate")}
      <Hero />
      <Subscription />
      <About />
      <FAQ />
      <div id="SequentialForm">
        <SequentialForm />
      </div>
    </div>
  );
}

export default LegalAssociate;
