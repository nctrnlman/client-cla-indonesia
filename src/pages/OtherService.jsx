import { useEffect } from "react";
import AllPackage from "../components/other-service/AllPackage";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Other Services - CLA Indonesia</title>
        <meta
          name="description"
          content="Temukan berbagai layanan hukum terpercaya di CLA Indonesia. Jelajahi paket layanan kami yang dirancang untuk memenuhi kebutuhan bisnis dan individu Anda."
        />
        <meta
          name="keywords"
          content="layanan hukum, jasa hukum, paket layanan hukum, CLA Indonesia, layanan bisnis, konsultasi hukum"
        />
        <link
          rel="canonical"
          href="https://www.domainanda.com/other-services"
        />
        <meta property="og:title" content="All Services - CLA Indonesia" />
        <meta
          property="og:description"
          content="Temukan berbagai layanan hukum terpercaya di CLA Indonesia. Jelajahi paket layanan kami yang dirancang untuk memenuhi kebutuhan bisnis dan individu Anda."
        />
        <meta
          property="og:url"
          content="https://www.domainanda.com/other-services"
        />
        <meta
          property="og:image"
          content="https://www.domainanda.com/images/og-image.jpg"
        />{" "}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CLA Indonesia" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="All Services - CLA Indonesia" />
        <meta
          name="twitter:description"
          content="Temukan berbagai layanan hukum terpercaya di CLA Indonesia. Jelajahi paket layanan kami yang dirancang untuk memenuhi kebutuhan bisnis dan individu Anda."
        />
        <meta
          name="twitter:image"
          content="https://www.domainanda.com/images/twitter-image.jpg"
        />{" "}
        {/* Ganti dengan URL gambar yang sesuai */}
      </Helmet>
      <AllPackage />
    </div>
  );
}

export default OtherService;
