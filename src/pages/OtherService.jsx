import { useEffect } from "react";
import AllPackage from "../components/other-service/AllPackage";
import SEOTemplate from "../utils/SEOTemplate";

function OtherService({ setIsLoading }) {
  const seoTemplate = SEOTemplate(); // Initialize SEO Template

  useEffect(() => {
    setIsLoading(true);

    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust this time as needed

    // Cleanup function
    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <div>
      {seoTemplate.renderSEOTags('otherServices')}
      
      <AllPackage />
    </div>
  );
}

export default OtherService;