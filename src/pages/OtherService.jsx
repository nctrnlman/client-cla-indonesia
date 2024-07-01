import Hero from "../components/other-service/Hero";
import FAQ from "../components/home/FAQ";
import React, { useState, useEffect } from 'react';

function OtherService({ setIsLoading }) {
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

export default OtherService;
