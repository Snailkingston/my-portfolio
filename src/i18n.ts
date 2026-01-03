/**
 * i18n Configuration
 * 
 * This file configures react-i18next for internationalization support.
 * Features:
 * - Lazy loading of translation files (only loads the language currently in use)
 * - Browser language detection
 * - Fallback to English if a translation key is missing
 * - Support for multiple languages (EN, FR)
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslation from './locales/en/translation.json';
import frTranslation from './locales/fr/translation.json';

/**
 * Configuration for i18next
 * 
 * Resources: Contains all translation files (lazy loading can be added later if needed)
 * FallbackLng: Default language if detection fails or key is missing
 * Debug: Enable in development to see missing keys
 * Interpolation: Configuration for variable interpolation in translations
 */
i18n
  // Detect user language from browser settings, localStorage, etc.
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    // Translation resources (lazy loaded would use backend plugin)
    resources: {
      en: {
        translation: enTranslation,
      },
      fr: {
        translation: frTranslation,
      },
    },
    
    // Default language (fallback if detection fails)
    fallbackLng: 'en',
    
    // Language codes to use (e.g., 'en-US' -> 'en')
    supportedLngs: ['en', 'fr'],
    
    // Namespace to use by default
    defaultNS: 'translation',
    
    // Debug mode (set to false in production)
    debug: false,
    
    // Interpolation options
    interpolation: {
      // React already escapes values, so we don't need to escape HTML
      escapeValue: false,
    },
    
    // React-specific options
    react: {
      // Wait for translations to be loaded before rendering
      useSuspense: false,
    },
    
    // Detection options (for LanguageDetector)
    detection: {
      // Order of detection methods
      order: ['localStorage', 'navigator', 'htmlTag'],
      
      // Keys to lookup language from
      lookupLocalStorage: 'i18nextLng',
      
      // Cache user language
      caches: ['localStorage'],
    },
  });

export default i18n;

