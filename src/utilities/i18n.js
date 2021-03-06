import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import backend from "i18next-http-backend";
import languageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(backend) // for /public/locales
  .use(languageDetector)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "tr"],

    defaultNS: "common",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
