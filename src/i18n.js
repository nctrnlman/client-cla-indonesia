import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// English
import translationEN from "./locales/en/translation.json";
import navbarEN from "./locales/en/navbar.json";
import footerEN from "./locales/en/footer.json";
import homeEN from "./locales/en/home.json";
import faqEN from "./locales/en/faq.json";
import subscriptionEN from "./locales/en/subscription.json";
import contactUsEN from "./locales/en/contactUs.json";
import serviceDataEN from "./locales/en/serviceData.json";
import otherServiceEN from "./locales/en/otherService.json";
import legalityPackageEN from "./locales/en/legalityPackage.json";
import packageSubscriptionEN from "./locales/en/packageSubscription.json";
import aboutEN from "./locales/en/about.json";
import trainingPackageEN from "./locales/en/trainingPackage.json";
import legalAssociateEN from "./locales/en/legalAssociate.json";
import contactUsLTEN from "./locales/en/contactUsLT.json";

// Indonesia
import translationID from "./locales/id/translation.json";
import navbarID from "./locales/id/navbar.json";
import footerID from "./locales/id/footer.json";
import homeID from "./locales/id/home.json";
import faqID from "./locales/id/faq.json";
import subscriptionID from "./locales/id/subscription.json";
import contactUsID from "./locales/id/contactUs.json";
import serviceDataID from "./locales/id/serviceData.json";
import otherServiceID from "./locales/id/otherService.json";
import legalityPackageID from "./locales/id/legalityPackage.json";
import packageSubscriptionID from "./locales/id/packageSubscription.json";
import aboutID from "./locales/id/about.json";
import trainingPackageID from "./locales/id/trainingPackage.json";
import legalAssociateID from "./locales/id/legalAssociate.json";
import contactUsLTID from "./locales/id/contactUsLT.json";

// Chinese
import translationZH from "./locales/zh/translation.json";
import navbarZH from "./locales/zh/navbar.json";
import footerZH from "./locales/zh/footer.json";
import homeZH from "./locales/zh/home.json";
import faqZH from "./locales/zh/faq.json";
import subscriptionZH from "./locales/zh/subscription.json";
import contactUsZH from "./locales/zh/contactUs.json";
import serviceDataZH from "./locales/zh/serviceData.json";
import otherServiceZH from "./locales/zh/otherService.json";
import legalityPackageZH from "./locales/zh/legalityPackage.json";
import packageSubscriptionZH from "./locales/zh/packageSubscription.json";
import aboutZH from "./locales/zh/about.json";
import trainingPackageZH from "./locales/zh/trainingPackage.json";
import legalAssociateZH from "./locales/zh/legalAssociate.json";
import contactUsLTZH from "./locales/zh/contactUsLT.json";

const resources = {
  en: {
    translation: translationEN,
    navbar: navbarEN,
    footer: footerEN,
    home: homeEN,
    faq: faqEN,
    subscription: subscriptionEN,
    serviceData: serviceDataEN,
    otherService: otherServiceEN,
    legalityPackage: legalityPackageEN,
    contactUs: contactUsEN,
    packageSubscription: packageSubscriptionEN,
    about: aboutEN,
    trainingPackage: trainingPackageEN,
    legalAssociate: legalAssociateEN,
    contactUsLT: contactUsLTEN,
  },
  id: {
    translation: translationID,
    navbar: navbarID,
    footer: footerID,
    home: homeID,
    faq: faqID,
    subscription: subscriptionID,
    serviceData: serviceDataID,
    otherService: otherServiceID,
    legalityPackage: legalityPackageID,
    contactUs: contactUsID,
    packageSubscription: packageSubscriptionID,
    about: aboutID,
    trainingPackage: trainingPackageID,
    legalAssociate: legalAssociateID,
    contactUsLT: contactUsLTID,
  },
  zh: {
    translation: translationZH,
    navbar: navbarZH,
    footer: footerZH,
    home: homeZH,
    faq: faqZH,
    subscription: subscriptionZH,
    serviceData: serviceDataZH,
    otherService: otherServiceZH,
    legalityPackage: legalityPackageZH,
    contactUs: contactUsZH,
    packageSubscription: packageSubscriptionZH,
    about: aboutZH,
    trainingPackage: trainingPackageZH,
    legalAssociate: legalAssociateZH,
    contactUsLT: contactUsLTZH,
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
