import { useEffect } from "react";
import SEOTemplate from "../utils/SEOTemplate";
import Hero from "../components/home/Hero";
import Subscription from "../components/home/Subscription";
import About from "../components/home/About";
import FAQ from "../components/home/FAQ";
import LegalityPackages from "../components/home/LegalityPackages";
import OtherService from "../components/home/OtherService";
import PackageSubcription from "../components/home/PackageSubcription";
import SequentialForm from "../components/legal-training/SequentialForm";

function Home({ setIsLoading }) {
  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {SEOTemplate().renderSEOTags("home")}
      <main className="flex-grow">
        <Hero />
        <div id="PackageSubcription" className="-mt-28">
          <PackageSubcription />
        </div>
        <Subscription />
        <div id="legalityPackages">
          <LegalityPackages />
        </div>
        <OtherService />
        <About />
        <FAQ />
        <div id="SequentialForm">
          <SequentialForm />
        </div>
      </main>
    </div>
  );
}

export default Home;
