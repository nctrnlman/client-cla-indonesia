import { useEffect } from "react";
import AllPackage from "../components/other-service/AllPackage";
import SEOTemplate from "../utils/SEOTemplate";

function OtherService({ setIsLoading }) {
  const seoTemplate = SEOTemplate();
  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <div>
      {seoTemplate.renderSEOTags("otherServices")}

      <AllPackage />
    </div>
  );
}

export default OtherService;
