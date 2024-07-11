import { useEffect } from "react";
import Hero from "../components/home/Hero";
import Subscription from "../components/home/Subscription";
import About from "../components/home/About";
import FAQ from "../components/home/FAQ";
import LegalityPackages from "../components/home/LegalityPackages";
import OtherService from "../components/home/OtherService";
import PackageSubcription from "../components/home/PackageSubcription";
import SequentialForm from "../components/legal-training/SequentialForm";
import { Helmet } from "react-helmet";

function Home({ setIsLoading }) {
  useEffect(() => {
    setIsLoading(true);

    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Adjust this time as needed

    // Cleanup function
    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <>
      <Helmet>
        <title>CLA Indonesia - Layanan Legal Terpercaya di Indonesia</title>
        <meta
          name="description"
          content="CLA Indonesia menyediakan layanan hukum terpercaya di Indonesia. Temukan solusi hukum yang tepat untuk kebutuhan bisnis Anda."
        />
        <link rel="canonical" href="https://www.domainanda.com/" />
      </Helmet>
      <Hero />
      <div id="PackageSubcription">
        <PackageSubcription />
      </div>
      <Subscription />
      <div id="legalityPackages">
        <LegalityPackages />
      </div>
      <About />
      <OtherService />
      <FAQ />
      <div id="SequentialForm">
        <SequentialForm />
      </div>
    </>
  );
}

export default Home;
