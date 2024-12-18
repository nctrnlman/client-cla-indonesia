import { Helmet } from "react-helmet";

function SEOTemplate() {
  const seoConfig = {
    home: {
      title: "CLA Indonesia - Konsultan Hukum Profesional & Advokat Terpercaya",
      description:
        "Solusi komprehensif konsultasi hukum perusahaan di Indonesia. Layanan advokat profesional untuk manajemen risiko dan pendampingan hukum bisnis dengan tingkat keberhasilan tinggi.",
      keywords:
        "konsultan hukum Indonesia, pengacara, layanan hukum perusahaan, konsultasi hukum bisnis, konsultasi hukum online, manajemen risiko hukum, layanan hukum online, konsultan jakarta",
      url: "https://claindonesia.com",
    },
    legalTraining: {
      title: "Pelatihan Hukum Profesional - Edukasi Hukum Bisnis CLA Indonesia",
      description:
        "Program pelatihan hukum profesional untuk meningkatkan pemahaman dan kepatuhan regulasi bisnis. Solusi edukasi hukum untuk pengembangan kompetensi legal di Indonesia.",
      keywords:
        "pelatihan hukum, edukasi hukum bisnis, workshop legal, konsultasi hukum , manajemen risiko hukum, belajar hukum online",
      url: "https://claindonesia.com/legal-training",
    },
    legalAssociate: {
      title:
        "Legal Associate Profesional - Solusi Hukum Komprehensif CLA Indonesia",
      description:
        "CLA Indonesia menawarkan layanan Legal Associate profesional meliputi pembentukan perusahaan, kepemilikan saham, dan kompleksitas hukum perusahaan di Indonesia.",
      keywords:
        "legal associate, layanan hukum perusahaan, konsultasi hukum korporasi, pembentukan perusahaan, due diligence hukum, advokat Jakarta, pengacara jakarta selatan",
      url: "https://claindonesia.com/legal-associate",
    },
    otherServices: {
      title: "Layanan Hukum Komprehensif - Solusi Hukum Bisnis Terdepan",
      description:
        "Temukan solusi hukum dan bisnis terintegrasi di satu tempat. Kami menawarkan berbagai layanan, mulai dari pendirian badan usaha, pengurusan izin, konsultasi hukum, hingga manajemen pajak dan pembukuan. Dengan tim ahli yang berpengalaman, kami siap mendukung kebutuhan legalitas bisnis Anda di Indonesia. Layanan meliputi pembuatan PT, CV, firma, pengurusan NIB, izin usaha, sertifikasi, perjanjian hukum, hingga riset pasar dan layanan virtual office. Solusi praktis dan profesional untuk kesuksesan bisnis Anda.",
      keywords:
        "layanan hukum dan bisnis, jasa hukum Indonesia, pendirian badan usaha, pembuatan PT, pengurusan izin usaha, legalitas perusahaan, jasa pengurusan NIB, izin restoran, izin konstruksi, jasa pembuatan laporan keuangan, jasa legal opinion, jasa riset pasar, jasa perubahan anggaran dasar, jasa likuidasi perusahaan, pengurusan SPT, konsultan pajak, virtual office Jakarta, jasa KITAS, jasa pendaftaran merek, hukum kekayaan intelektual, jasa pembubaran perusahaan, jasa pendirian yayasan, pembuatan perjanjian hukum, konsultasi hukum perusahaan, layanan hukum lengkap.",
      url: "https://claindonesia.com/other-services",
    },
    otherServiceDetail: {
      title: "Detail Layanan Hukum Spesifik - Solusi Hukum Terpersonalisasi",
      description:
        "Informasi detail layanan hukum spesifik untuk kebutuhan bisnis Anda. Pendekatan komprehensif dari tim legal profesional dengan keahlian mendalam.",
      keywords:
        "layanan hukum online, konsultasi hukum spesifik, jasa hukum korporasi, legal drafting, negosiasi kontrak bisnis, advokat profesional, pengacara jakarta",
      url: "https://claindonesia.com/service-detail",
    },
  };

  // Function to generate structured data
  const generateStructuredData = (config) => ({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: config.title,
    description: config.description,
    url: config.url,
    image: config.ogImage,
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    serviceType: [
      "Konsultasi Hukum",
      "Advokat Profesional",
      "Manajemen Risiko Hukum",
      "Legal Corporate",
    ],
  });

  const renderSEOTags = (pageType, dynamicConfig = {}) => {
    const config = { ...seoConfig[pageType], ...dynamicConfig };

    return (
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta name="keywords" content={config.keywords || ""} />

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
    renderSEOTags,
  };
}

export default SEOTemplate;
