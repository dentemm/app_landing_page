export const defaultLocale = 'nl';
export const locales = ['nl', 'en', 'fr'] // add your supported locales here

export type Locale = (typeof locales)[number];

export default {
  defaultLocale,
  locales,
  // Optional: Specify additional locales for specific paths
  // localeDetection: false // set to false to disable automatic locale detection
} as const; 