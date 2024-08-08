import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations from all languages
import translationEN from "./locales/en/translation.json";
import navbarEN from "./locales/en/navbar.json";
import homeEN from "./locales/en/home.json";
import faqEN from "./locales/en/faq.json";
import contactUsEN from "./locales/en/contactUs.json";
import serviceDataEN from "./locales/en/serviceData.json";
import translationID from "./locales/id/translation.json";
import navbarID from "./locales/id/navbar.json";
import homeID from "./locales/id/home.json";
import faqID from "./locales/id/faq.json";
import contactUsID from "./locales/id/contactUs.json";
import serviceDataID from "./locales/id/serviceData.json";
// import translationZH from "./locales/zh/translation.json";
import navbarZH from "./locales/zh/navbar.json";
import homeZH from "./locales/zh/home.json";
import faqZH from "./locales/zh/faq.json";
import contactUsZH from "./locales/zh/contactUs.json";
import serviceDataZH from "./locales/zh/serviceData.json";

const resources = {
  en: {
    translation: translationEN,
    navbar: navbarEN,
    home: homeEN,
    faq: faqEN,
    serviceData: serviceDataEN,
    contactUs: contactUsEN,
  },
  id: {
    translation: translationID,
    navbar: navbarID,
    home: homeID,
    faq: faqID,
    serviceData: serviceDataID,
    contactUs: contactUsID,
  },
  zh: {
    // translation: translationZH,
    navbar: navbarZH,
    home: homeZH,
    faq: faqZH,
    serviceData: serviceDataZH,
    contactUs: contactUsZH,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "id",
  fallbackLng: "id",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
