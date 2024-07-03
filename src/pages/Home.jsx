import React, { useState, useEffect } from 'react';
import Hero from "../components/home/Hero";
import Subscription from "../components/home/Subscription";
import About from "../components/home/About";
import FAQ from "../components/home/FAQ";
import LegalityPackages from "../components/home/LegalityPackages";
import OtherService from "../components/home/OtherService";
import PackageSubcription from "../components/home/PackageSubcription";
import LoadingSpinner from "../components/Loading/LoadingSpinner";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
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
        </div>
      )}
    </>
  );
}

export default Home;