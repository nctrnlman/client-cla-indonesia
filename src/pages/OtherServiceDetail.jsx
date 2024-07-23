import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Hero from "../components/other-service-detail/Hero";
import Content from "../components/other-service-detail/Content";
import SequentialForm from "../components/legal-training/SequentialForm";
import FAQ from "../components/home/FAQ";
import servicesData from "../data/servicesData";
import Features from "../components/other-service-detail/Features";
import Bonus from "../components/other-service-detail/Bonus";

function OtherServiceDetail() {
  const { slug } = useParams();
  const formatSlug = (text) => {
    return text
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const formattedSlug = formatSlug(slug);
  const title = `${formattedSlug} | CLA Indonesia`;
  const description = `Find detailed information about ${formattedSlug} services offered by CLA Indonesia.`;

  const servicePackage = servicesData
    .flatMap((category) => category.items)
    .find((item) => item.slug === slug);

  const packages = servicePackage ? [servicePackage.package] : [];

  return (
    <div className="">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com/other-service/${slug}`}
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/path-to-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/path-to-image.jpg"
        />
      </Helmet>

      <Hero title={formattedSlug} description={packages[0].description} />

      <Content packages={packages} />
      <Bonus />
      <Features packages={packages} />
      <FAQ />
      <div id="SequentialForm">
        <SequentialForm />
      </div>
    </div>
  );
}

export default OtherServiceDetail;
