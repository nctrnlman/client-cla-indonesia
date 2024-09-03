export const generateWhatsAppUrl = (serviceTitle) => {
  const phoneNumber = "6281211110564";
  const message = serviceTitle
    ? `Hai, saya tertarik dengan paket ${serviceTitle}. Bisakah Anda memberikan detail lebih lanjut?`
    : "Hai, saya tertarik dengan layanan Anda.";

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};
