import React, { useState, useRef, useEffect } from "react";
import { FaCheck, FaChevronDown, FaChevronUp, FaStar } from "react-icons/fa";
import bg_info from "../../assets/bg/note_banner.jpg";

const PricingCard = ({
  title,
  description,
  price,
  fakePrice,
  features,
  buttonText,
  isPopular,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState("0px");
  const contentRef = useRef(null);

  useEffect(() => {
    if (isExpanded) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isExpanded]);

  return (
    <div
      className={`flex flex-col h-full rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl overflow-hidden ${
        isPopular ? "border-4 border-yellow-400" : "border border-gray-200"
      }`}
    >
      <div className="relative flex-grow bg-white p-6">
        {isPopular && (
          <div className="absolute top-0 right-0 bg-yellow-400 text-primary font-bold py-1 px-4 rounded-bl-lg">
            Most Popular
          </div>
        )}
        <h3 className="text-2xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="text-4xl font-bold text-primary mb-2">Rp {price}</div>
        {fakePrice && (
          <p className="text-red-500 line-through mb-4">Rp {fakePrice}</p>
        )}
        <button className="w-full bg-secondary text-primary font-bold py-2 px-4 rounded-full hover:bg-primary hover:text-secondary transition duration-300">
          {buttonText}
        </button>
      </div>
      <div className="bg-primary text-white p-6 flex-grow flex flex-col">
        <h4 className="text-xl font-semibold mb-4">Features</h4>
        <ul className="space-y-2">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start">
              <FaCheck className="flex-shrink-0 w-5 h-5 text-green-400 mr-2 mt-1" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div
          ref={contentRef}
          style={{ maxHeight: maxHeight }}
          className="overflow-hidden transition-all duration-300 ease-in-out"
        >
          <ul className="space-y-2 mt-2">
            {features.slice(3).map((feature, index) => (
              <li key={index + 3} className="flex items-start">
                <FaCheck className="flex-shrink-0 w-5 h-5 text-green-400 mr-2 mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        {features.length > 3 && (
          <button
            className="w-full mt-4 text-white flex items-center justify-center hover:underline"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>
                <span className="mr-2">See less</span>
                <FaChevronUp />
              </>
            ) : (
              <>
                <span className="mr-2">See more</span>
                <FaChevronDown />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

function Subscription() {
  const packages = [
    {
      title: "Standard (untuk UMK saja)",
      description:
        "Paket ini mencakup semua fitur premium seperti A, B, dan C.",
      price: "1.500.000",
      fakePrice: "2.500.000",
      features: [
        "Konsultasi online tanpa batas",
        "Penyusunan Dokumen Hukum Ketenagakerjaan (PKWT, PKWTT, Perjanjian Pengakhiran, dan Surat Kuasa) setiap 3 bulan",
        "Meninjau 2 Perjanjian per bulan",
        "Bantuan kepatuhan: Pengisian Laporan Kegiatan Penanaman Modal (LKPM)",
        "Pelatihan Hukum gratis diberikan setiap 3 bulan sekali",
      ],
      buttonText: "Berlangganan Sekarang",
      isPopular: false,
    },
    {
      title: "Premium",
      description:
        "Paket ini mencakup fitur standar seperti X, Y, dan Z.",
      price: "3.500.000",
      fakePrice: "4.000.000",
      features: [
        "Konsultasi online tanpa batas",
        "Penyusunan Dokumen Hukum Ketenagakerjaan (PKWT, PKWTT, Perjanjian Pengakhiran, dan Surat Kuasa) setiap 3 bulan",
        "Penyusunan 1 Perjanjian Bisnis (Perjanjian Jual Beli, Perjanjian Pembelian Saham, MoU, atau lainnya) setiap 3 bulan",
        "Meninjau 2 Perjanjian per bulan",
        "Bantuan kepatuhan: Pengisian Laporan Kegiatan Penanaman Modal (LKPM)",
        "Gratis: Pelatihan Hukum diberikan setiap 3 bulan sekali, Pengisian SPT Badan bulanan.",
      ],
      buttonText: "Berlangganan Sekarang",
      isPopular: true,
    },
    {
      title: "Ultimate",
      description: "Paket ini mencakup fitur dasar seperti 1, 2, dan 3.",
      price: "5.000.000",
      fakePrice: "12.500.000",
      features: [
        "Konsultasi online tanpa batas, termasuk pertemuan dengan pihak lain",
        "Penyusunan atau meninjau 5 Perjanjian per bulan",
        "Bantuan kepatuhan: Pengisian Laporan Kegiatan Penanaman Modal (LKPM) dan laporan teknis lainnya.",
        "Bantuan dokumen perusahaan (RUPS/RUPSLB, Keputusan Direksi, dan Keputusan Pemegang Saham)",
        "Gratis: Pelatihan Hukum diberikan setiap 3 bulan sekali, Pengisian SPT Badan tahunan.",
      ],
      buttonText: "Berlangganan Sekarang",
      isPopular: false,
    },
  ];

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-secondary text-primary font-extrabold text-lg py-2 px-4 rounded-full">
            PRODUCT
          </span>
          <h2 className="text-5xl font-extrabold text-primary mt-5 mb-6">
            3 Months Subscription
          </h2>
          <p className="text-2xl font-semibold text-black mb-5">
            for Legal Associate
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PricingCard key={index} {...pkg} />
          ))}
        </div>
        <div className="flex flex-col justify-center gap-16 items-center mx-auto h-full max-w-7xl pb-20 pt-20">
          {/* note */}
          <div
            className="text-white flex p-6 gap-4 rounded-tl-3xl rounded-br-3xl bg-cover bg-center"
            style={{
              backgroundImage: `url(${bg_info})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* icon */}
            <div>
              <svg
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_412_677)">
                  <path
                    d="M23.5 3.91699C12.69 3.91699 3.91669 12.6903 3.91669 23.5003C3.91669 34.3103 12.69 43.0837 23.5 43.0837C34.31 43.0837 43.0834 34.3103 43.0834 23.5003C43.0834 12.6903 34.31 3.91699 23.5 3.91699ZM23.5 33.292C22.4229 33.292 21.5417 32.4107 21.5417 31.3337V23.5003C21.5417 22.4232 22.4229 21.542 23.5 21.542C24.5771 21.542 25.4584 22.4232 25.4584 23.5003V31.3337C25.4584 32.4107 24.5771 33.292 23.5 33.292ZM25.4584 17.6253H21.5417V13.7087H25.4584V17.6253Z"
                    fill="#F4F5F8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_412_677">
                    <rect width="47" height="47" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="text-lg">
  Pembayaran akan diproses setiap bulan selama 3 bulan berturut-turut. Harga tidak termasuk Pajak, Biaya Transportasi, dan biaya lain di luar Layanan yang disebutkan di atas (jika ada).
</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
