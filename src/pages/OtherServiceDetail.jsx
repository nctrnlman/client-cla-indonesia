import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SEOTemplate from "../utils/SEOTemplate"; // Import the SEO Template
import Hero from "../components/other-service-detail/Hero";
import Content from "../components/other-service-detail/Content";
import SequentialForm from "../components/home/SequentialForm";
import FAQ from "../components/other-service-detail/FAQ";
import Overview from "../components/other-service-detail/Overview";
import RequirementsDocument from "../components/other-service-detail/RequirementsDocument";
import Process from "../components/other-service-detail/Process";
import NoContent from "../components/other-service-detail/NoContent";
import About from "../components/other-service-detail/About";

function OtherServiceDetail() {
  const { t } = useTranslation(["serviceData"]);
  const { slug } = useParams();
  const seoTemplate = SEOTemplate(); // Initialize SEO Template

  const translatedServicesData = t("servicesData", { returnObjects: true });
  const serviceItem = translatedServicesData
    ?.flatMap((category) => category.items || [])
    ?.find((item) => item.slug === slug);
  const title = `${serviceItem?.name || ""} | CLA Indonesia`;
  const description = serviceItem?.description
    ? serviceItem?.description
    : `Find detailed information about ${
        serviceItem?.name || ""
      } services offered by CLA Indonesia.`;
  const keywords =
    serviceItem?.keyword ||
    "detail layanan hukum, konsultasi spesifik, jasa hukum";
  const packages =
    serviceItem && serviceItem.package ? serviceItem.package : [];
  const overview =
    serviceItem && serviceItem.overviews ? serviceItem.overviews : [];
  const requirementsDocument =
    serviceItem && serviceItem.documents ? serviceItem.documents : [];
  const process = serviceItem && serviceItem.process ? serviceItem.process : [];

  const hasContent =
    packages.length > 0 ||
    overview.length > 0 ||
    requirementsDocument.length > 0 ||
    process.length > 0;

  return (
    <div className="min-h-screen bg-gray-100">
      {seoTemplate.renderSEOTags("otherServiceDetail", {
        title: title,
        description: description,
        keywords: keywords,
        url: `https://claindonesia.com/other-services/${slug}`,
      })}

      <Hero
        title={serviceItem?.name || ""}
        description={packages[0]?.description || ""}
      />
      {hasContent ? (
        <>
          <Content packages={packages} />
          <Overview overview={overview} />
          <RequirementsDocument documents={requirementsDocument} />
          <Process process={process} />
        </>
      ) : (
        <NoContent serviceTitle={serviceItem?.name || ""} />
      )}
      <About />
      <FAQ />
      <SequentialForm />
    </div>
  );
}

export default OtherServiceDetail;
