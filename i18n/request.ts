import { Pathnames } from "next-intl/routing";
import { getRequestConfig } from "next-intl/server";

export const locales = ['en', 'nl', 'fr'];

export const localePrefix = "as-needed";

export const localeNames: Record<string, { name: string; country: string }> = {
    en: {
        name: 'English',
        country: 'GB'
    },
    nl: {
        name: 'Nederlands',
        country: 'NL'
    },
    fr: {
        name: 'Français',
        country: 'FR'
    }
};

export const pathnames = {
    '/': '/',
} satisfies Pathnames<typeof locales>;

export const defaultLocale = 'nl';

export default getRequestConfig(async () => {
    return {
        messages: (await import(`../assets/locales/${defaultLocale}.json`)).default,
        onError(error) {
            console.error(error);
        },
        getMessageFallback({ key }) {
            return key;
        },
    }
})