import Hero from "../components/other-service/Hero";
import FAQ from "../components/home/FAQ";
import About from "../components/home/About";
import Other from "../components/home/OtherService";
import { useEffect } from "react";

function OtherService({ setIsLoading }) {
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
      <Hero />
      <Other />
      <About />
      <FAQ />
    </div>
  );
}

export default OtherService;
