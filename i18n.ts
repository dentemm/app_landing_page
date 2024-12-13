export const defaultLocale = 'nl';
export const locales = ['nl', 'en', 'fr'];

export default {
  defaultLocale,
  locales,
  localePrefix: 'always',
  // Ensure static generation works
  localeDetection: false
} as const;