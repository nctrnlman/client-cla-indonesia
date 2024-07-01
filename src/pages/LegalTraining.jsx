import Hero from "../components/legal-training/Hero";
import FAQ from "../components/home/FAQ";
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
      <FAQ />
    </div>
  );
}

export default LegalTraining;
