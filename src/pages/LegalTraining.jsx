import Hero from "../components/legal-training/Hero";
import FAQ from "../components/home/FAQ";
import About from "../components/home/About";
import SequentialForm from "../components/legal-training/SequentialForm";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

function LegalTraining({ setIsLoading }) {
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
      <Hero />
      <div id="SequentialForm">
        <SequentialForm />
      </div>
      <About />
      <FAQ />
    </div>
  );
}

export default LegalTraining;
