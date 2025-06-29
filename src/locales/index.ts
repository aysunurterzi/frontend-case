import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

// Import translation resources
import enCommon from './en/common.json';
import trCommon from './tr/common.json';

// Translation resources
const resources = {
  en: {
    common: enCommon,
  },
  tr: {
    common: trCommon,
  },
};

i18n
  .use(LanguageDetector) // Browser language detection
  .use(initReactI18next) // React integration
  .init({
    resources,
    fallbackLng: 'en', // Fallback language
    debug: false, // Debug modunu kapatıldı

    // Default namespace
    defaultNS: 'common',
    ns: ['common'],

    interpolation: {
      escapeValue: false, // React already escapes values
    },

    detection: {
      // Language detection options
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
  });

export default i18n; 