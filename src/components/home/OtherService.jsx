import PricingCard from "../cards/pricing/PricingCard";
// import OtherServiceCard from "../cards/other-service/OtherServiceCard"; flip card ga kepake

function OtherService() {
  const services = [
    {
      title: "Finance, Accounting and Tax",
      description:
        "This package includes all the premium features such as A, B, and C.",
      price: "5.500.000",
      fakePrice: "7.500.000",
      features: [
        "Konsultasi",
        "Akta Pendirian",
        "Surat Keputusan Pendirian PT",
        "Nomor Pokok Wajib Pajak Badan Usaha",
        "Nomor Induk Berusaha (NIB)",
        "KPPR",
        "Sertifikat Standar/Izin",
        "Aktivitas EFIN Badan Usaha",
      ],
      buttonText: "Subscribe Now",
    },
    {
      title: "Business Development and Research",
      description:
        "This package includes standard features such as X, Y, and Z.",
      price: "5.500.000",
      fakePrice: "7.500.000",
      features: [
        "Konsultasi",
        "Akta Pendirian",
        "Surat Keputusan Pendirian PT",
        "Nomor Pokok Wajib Pajak Badan Usaha",
        "Nomor Induk Berusaha (NIB)",
        "KPPR",
        "Sertifikat Standar/Izin",
        "Aktivitas EFIN Badan Usaha",
      ],
      buttonText: "Subscribe Now",
    },
    {
      title: "Virtual or Private Office",
      description: "This package includes basic features such as 1, 2, and 3.",
      price: "7.500.000",
      fakePrice: "12.500.000",
      features: [
        "Konsultasi",
        "Akta Pendirian",
        "Surat Keputusan Pendirian PT",
        "Nomor Pokok Wajib Pajak Badan Usaha",
        "Nomor Induk Berusaha (NIB)",
        "KPPR",
        "Sertifikat Standar/Izin",
        "Aktivitas EFIN Badan Usaha",
      ],
      buttonText: "Subscribe Now",
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <button
            className="bg-secondary items-center p-4 px-6 rounded-full text-primary font-extrabold text-lg hover:bg-primary hover:text-secondary transition duration-300
          "
          >
            PRODUCT
          </button>
          <h2 className="mt-6 text-3xl md:text-5xl font-extrabold text-primary">
            Other Service
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <PricingCard
              key={index}
              title={service.title}
              description={service.description}
              price={service.price}
              fakePrice={service.fakePrice}
              features={service.features}
              buttonText={service.buttonText}
            />
          ))}
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-primary opacity-10 rounded-tl-full" />
      <div className="absolute left-0 top-0 w-1/2 h-1/2 bg-secondary opacity-10 rounded-br-full" />
    </section>
  );
}

export default OtherService;
