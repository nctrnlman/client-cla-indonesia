import React from 'react';
import { Helmet } from 'react-helmet';

function SEOTemplate() {
  const seoConfig = {
    home: {
      title: "CLA Indonesia - Layanan Hukum Profesional Terpercaya",
      description: "Solusi komprehensif untuk kebutuhan hukum perusahaan. Layanan konsultasi, litigasi, dan pendampingan hukum dengan tingkat keberhasilan tinggi.",
      keywords: "konsultan hukum, jasa hukum, advokat indonesia, hukum korporasi, litigasi",
      url: "https://claindonesia.com",
    },
    legalTraining: {
      title: "Pelatihan Hukum - CLA Indonesia",
      description: "Program pelatihan hukum profesional untuk meningkatkan pemahaman dan kepatuhan regulasi bisnis di Indonesia.",
      keywords: "pelatihan hukum, edukasi hukum, workshop legal, konsultasi hukum",
      url: "https://claindonesia.com/legal-training",
    },
    legalAssociate: {
      title: "Legal Associate - CLA Indonesia",
      description: "CLA Indonesia menawarkan layanan Legal Associate yang meliputi pembentukan perusahaan, kepemilikan saham, dan hukum perusahaan lainnya.",
      keywords: "legal associate, layanan hukum perusahaan, konsultasi hukum, pembentukan perusahaan",
      url: "https://claindonesia.com/legal-associate",
    },
    otherServices: {
      title: "Layanan Hukum Komprehensif - CLA Indonesia",
      description: "Berbagai layanan hukum yang disesuaikan untuk kebutuhan spesifik bisnis Anda. Konsultasi profesional dengan pengalaman luas.",
      keywords: "layanan hukum, konsultasi bisnis, jasa hukum perusahaan, advokat indonesia",
      url: "https://claindonesia.com/other-services",
    },
    otherServiceDetail: {
      title: "Detail Layanan Hukum - CLA Indonesia",
      description: "Informasi detail layanan hukum spesifik untuk kebutuhan bisnis Anda. Solusi komprehensif dari tim profesional.",
      keywords: "detail layanan hukum, konsultasi spesifik, jasa hukum",
      url: "https://claindonesia.com/service-detail",
    }
  };

  // Function to generate structured data
  const generateStructuredData = (config) => ({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": config.title,
    "description": config.description,
    "url": config.url,
    "image": config.ogImage,
    "areaServed": {
      "@type": "Country", 
      "name": "Indonesia"
    }
  });

  const renderSEOTags = (pageType, dynamicConfig = {}) => {
    const config = { ...seoConfig[pageType], ...dynamicConfig };
    
    return (
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta name="keywords" content={config.keywords || ''} />
        
        {/* Canonical Link */}
        <link rel="canonical" href={config.url} />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.description} />
        <meta property="og:url" content={config.url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={config.ogImage} />
        <meta property="og:site_name" content="CLA Indonesia" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content={config.description} />
        <meta name="twitter:image" content={config.ogImage} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(generateStructuredData(config))}
        </script>
      </Helmet>
    );
  };

  return {
    renderSEOTags
  };
}

export default SEOTemplate;