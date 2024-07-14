import Hero from "../components/legal-associate/Hero";
import Subscription from "../components/home/Subscription";
import FAQ from "../components/home/FAQ";
import About from "../components/home/About";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import LegalAssociateInfo from "../components/legal-associate/LegalAssociateInfo";
import SequentialForm from "../components/legal-training/SequentialForm";

function LegalAssociate({ setIsLoading }) {
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
    <div className="">
      <Helmet>
        <title>Legal Associate - CLA Indonesia</title>
        <meta
          name="description"
          content="CLA Indonesia menawarkan layanan Legal Associate yang meliputi pembentukan perusahaan, kepemilikan saham, dan hukum perusahaan lainnya."
        />
        <link
          rel="canonical"
          href="https://www.domainanda.com/legal-associate"
        />
      </Helmet>
      <Hero />
      {/* <LegalAssociateInfo /> */}
      <Subscription />
      {/* <About /> */}
      {/* <div className="bg-white">
        <FAQ />
      </div> */}
      <div id="SequentialForm">
        <SequentialForm />
      </div>
    </div>
  );
}

export default LegalAssociate;
