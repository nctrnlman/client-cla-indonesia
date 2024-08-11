import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Hero from "../components/other-service-detail/Hero";
import Content from "../components/other-service-detail/Content";
import SequentialForm from "../components/legal-training/SequentialForm";
import FAQ from "../components/home/FAQ";
// import Features from "../components/other-service-detail/Features";
import Bonus from "../components/other-service-detail/Bonus";
import { useTranslation } from "react-i18next";
import Overview from "../components/other-service-detail/Overview";
import RequirementsDocument from "../components/other-service-detail/RequirementsDocument";
import Process from "../components/other-service-detail/Process";

function OtherServiceDetail() {
  const { t } = useTranslation(["serviceData"]);
  const { slug } = useParams();

  // const formatSlug = (text) => {
  //   return text
  //     .split("-")
  //     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  //     .join(" ");
  // };

  const translatedServicesData = t("servicesData", { returnObjects: true });
  const serviceItem = translatedServicesData
    ?.flatMap((category) => category.items || [])
    ?.find((item) => item.slug === slug);

  // const formattedSlug = formatSlug(slug);

  const title = `${serviceItem?.name || ""} | CLA Indonesia`;
  const description = `Find detailed information about ${
    serviceItem?.name || ""
  } services offered by CLA Indonesia.`;

  const packages =
    serviceItem && serviceItem.package ? [serviceItem.package] : [];
  const content = "-";
  const overview = serviceItem ? serviceItem.overviews : "";
  const requirementsDocument = serviceItem ? serviceItem.documents : "";
  const process = serviceItem ? serviceItem.process : "";

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

      <Hero
        title={serviceItem?.name || ""}
        description={packages[0]?.description || ""}
      />
      <Content packages={packages} content={content} />
      <Overview overview={overview} />
      <RequirementsDocument documents={requirementsDocument} />
      <Process process={process} />
      <Bonus />
      <FAQ />
      <SequentialForm />
    </div>
  );
}

export default OtherServiceDetail;
