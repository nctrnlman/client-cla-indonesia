import React from 'react';
import { Helmet } from 'react-helmet';

function SEOTemplate() {
  const seoConfig = { 
    home: {
      title: "CLA Indonesia - Konsultan Hukum Profesional & Advokat Terpercaya",
      description: "Solusi komprehensif konsultasi hukum perusahaan di Indonesia. Layanan advokat profesional untuk manajemen risiko dan pendampingan hukum bisnis dengan tingkat keberhasilan tinggi.",
      keywords: "konsultan hukum Indonesia, jasa advokat profesional, layanan hukum perusahaan, konsultasi hukum bisnis, legal corporate Indonesia, manajemen risiko hukum",
      url: "https://claindonesia.com",
    },
    legalTraining: {
      title: "Pelatihan Hukum Profesional - Edukasi Hukum Bisnis CLA Indonesia",
      description: "Program pelatihan hukum profesional untuk meningkatkan pemahaman dan kepatuhan regulasi bisnis. Solusi edukasi hukum untuk pengembangan kompetensi legal di Indonesia.",
      keywords: "pelatihan hukum, edukasi hukum bisnis, workshop legal, konsultasi hukum, manajemen risiko hukum, advokat profesional",
      url: "https://claindonesia.com/legal-training",
    },
    legalAssociate: {
      title: "Legal Associate Profesional - Solusi Hukum Komprehensif CLA Indonesia",
      description: "CLA Indonesia menawarkan layanan Legal Associate profesional meliputi pembentukan perusahaan, kepemilikan saham, dan kompleksitas hukum perusahaan di Indonesia.",
      keywords: "legal associate, layanan hukum perusahaan, konsultasi hukum korporasi, pembentukan perusahaan, due diligence hukum, advokat Jakarta",
      url: "https://claindonesia.com/legal-associate",
    },
    otherServices: {
      title: "Layanan Hukum Komprehensif - Solusi Hukum Bisnis Terdepan",
      description: "Berbagai layanan hukum yang disesuaikan untuk kebutuhan spesifik bisnis Anda. Konsultasi profesional dengan pengalaman luas dalam manajemen risiko hukum.",
      keywords: "layanan hukum Indonesia, konsultasi bisnis profesional, jasa hukum perusahaan, litigasi profesional, advokat Indonesia, manajemen sengketa bisnis",
      url: "https://claindonesia.com/other-services",
    },
    otherServiceDetail: {
      title: "Detail Layanan Hukum Spesifik - Solusi Hukum Terpersonalisasi",
      description: "Informasi detail layanan hukum spesifik untuk kebutuhan bisnis Anda. Pendekatan komprehensif dari tim legal profesional dengan keahlian mendalam.",
      keywords: "detail layanan hukum, konsultasi hukum spesifik, jasa hukum korporasi, legal drafting, negosiasi kontrak bisnis, advokat profesional",
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
    },
    "serviceType": [
      "Konsultasi Hukum",
      "Advokat Profesional",
      "Manajemen Risiko Hukum",
      "Legal Corporate"
    ]
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