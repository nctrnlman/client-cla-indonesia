import Hero from "../components/legal-training/Hero";
import FAQ from "../components/home/FAQ";
import About from "../components/home/About";
import SequentialForm from "../components/legal-training/SequentialForm";
import React, { useState, useEffect } from 'react';

function LegalTraining({ setIsLoading }) {
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);  // Adjust this time as needed

    // Cleanup function
    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <div>
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
