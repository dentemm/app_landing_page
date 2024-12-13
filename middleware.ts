import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['nl', 'en', 'fr'],
    
    // Used when no locale matches
    defaultLocale: 'nl',

    // Used for static export
    localePrefix: 'as-needed'
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(nl|en|fr)/:path*']
};