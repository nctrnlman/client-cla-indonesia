import OtherServiceCard from "../cards/other-service/OtherServiceCard";
import PricingCard from "../cards/pricing/PricingCard";

function LegalityPackages() {
  const packages = [
    {
      title: "Pendirian PT Standard (PMDN)",
      description:
        "This package includes all the premium features such as A, B, and C.",
      price: "3.500.000",
      fakePrice: "7.500.000",
      features: [
        "Konsultasi",
        "Penelusuran nama PT",
        "Surat Keputusan Pendirian PT",
        "Nomor Pokok Wajib Pajak Badan Usaha",
      ],
      buttonText: "Order Now",
    },
    {
      title: "Pendirian PT Lengkap (PMDN)",
      description:
        "This package includes standard features such as X, Y, and Z.",
      price: "5.500.000",
      fakePrice: "7.500.000",
      features: [
        "Konsultasi",
        "Penelusuran nama PT",
        "Surat Keputusan Pendirian PT",
        "Nomor Pokok Wajib Pajak Badan Usaha",
        "Nomor Induk Berusaha (NIB)",
        "KPPR",
        "Sertifikat Standar/Izin",
        "Aktivitas EFIN Badan Usaha",
      ],
      buttonText: "Order Now",
    },
    {
      title: "Pendirian PT PMA",
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
      buttonText: "Order Now",
    },
    {
      title: "Pendirian CV",
      description: "This package includes basic features such as 1, 2, and 3.",
      price: "5.500.000",
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
      buttonText: "Order Now",
    },
    {
      title: "Pendirian Firma",
      description: "This package includes basic features such as 1, 2, and 3.",
      price: "5.500.000",
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
      buttonText: "Order Now",
    },
    {
      title: "Pendirian Yayasan",
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
      buttonText: "Order Now",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center py-20 pt-40">
      <div>
        <h2 className="mb-4 pb-12 text-3xl md:text-5xl text-center tracking-tight font-extrabold text-primary">
          Legality Packages
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-6">
        {packages.map((pkg, index) => (
          <PricingCard
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

export default LegalityPackages;
