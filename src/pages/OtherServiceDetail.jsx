import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Hero from "../components/other-service-detail/Hero";

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

  return (
    <div className="h-screen bg-primary">
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

      <Hero title={formattedSlug} />
    </div>
  );
}

export default OtherServiceDetail;
