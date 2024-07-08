import { useEffect } from "react";
import Hero from "../components/home/Hero";
import Subscription from "../components/home/Subscription";
import About from "../components/home/About";
import FAQ from "../components/home/FAQ";
import LegalityPackages from "../components/home/LegalityPackages";
import OtherService from "../components/home/OtherService";
import PackageSubcription from "../components/home/PackageSubcription";

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
      <FAQ />\
    </>
  );
}

export default Home;
