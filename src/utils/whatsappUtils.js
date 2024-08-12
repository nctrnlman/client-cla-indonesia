export const generateWhatsAppUrl = (serviceTitle) => {
  const phoneNumber = "6281221431716";
  const encodedServiceTitle = encodeURIComponent(serviceTitle);
  const message = encodedServiceTitle
    ? `Hi, I'm interested in the ${encodedServiceTitle} package. Could you please provide more details?`
    : "Hi, I am interested in your services.";

  return `https://wa.me/${phoneNumber}?text=${message}`;
};
