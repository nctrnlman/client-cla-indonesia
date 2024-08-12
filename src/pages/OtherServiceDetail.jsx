import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Hero from "../components/other-service-detail/Hero";
import Content from "../components/other-service-detail/Content";
import SequentialForm from "../components/home/SequentialForm";
import FAQ from "../components/home/FAQ";
import Bonus from "../components/other-service-detail/Bonus";
import { useTranslation } from "react-i18next";
import Overview from "../components/other-service-detail/Overview";
import RequirementsDocument from "../components/other-service-detail/RequirementsDocument";
import Process from "../components/other-service-detail/Process";
import NoContent from "../components/other-service-detail/NoContent";

function OtherServiceDetail() {
  const { t } = useTranslation(["serviceData"]);
  const { slug } = useParams();

  const translatedServicesData = t("servicesData", { returnObjects: true });
  const serviceItem = translatedServicesData
    ?.flatMap((category) => category.items || [])
    ?.find((item) => item.slug === slug);

  const title = `${serviceItem?.name || ""} | CLA Indonesia`;
  const description = `Find detailed information about ${
    serviceItem?.name || ""
  } services offered by CLA Indonesia.`;

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
      <Bonus />
      <FAQ />
      <SequentialForm />
    </div>
  );
}

export default OtherServiceDetail;
