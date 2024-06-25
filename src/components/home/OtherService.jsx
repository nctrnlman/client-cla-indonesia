import OtherServiceCard from "../cards/other-service/OtherServiceCard";

function OtherService() {
  const packages = [
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
      title: "Virtual oor Private Office",
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
    <div className="flex flex-col justify-center items-center ">
      <div>
        <h2 className="mb-4 pb-12 text-4xl tracking-tight font-extrabold text-primary">
          Other Service
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-6">
        {packages.map((pkg, index) => (
          <OtherServiceCard
            key={index}
            title={pkg.title}
            description={pkg.description}
            price={pkg.price}
            fakePrice={pkg.fakePrice}
            features={pkg.features}
            buttonText={pkg.buttonText}
          />
        ))}
      </div>
    </div>
  );
}

export default OtherService;
