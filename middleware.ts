import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, localePrefix, locales } from "./i18n/request";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
    locales: locales,
    defaultLocale: defaultLocale,
    localePrefix: localePrefix
});

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname.includes('/.well-known/')) {
        return NextResponse.next();
    }

    for (const locale of locales) {
        if (pathname.startsWith(`/${locale}/`)) {
            const invalidPath = pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}/`;
            if (invalidPath) {
                return NextResponse.redirect(new URL(`/${locale}`, request.url));
            }
        }
    }

    if (!pathname.startsWith('/_next') &&
        !pathname.startsWith('/api') &&
        !pathname.startsWith('/images') &&
        pathname !== '/' &&
        !locales.some(locale => pathname === `/${locale}`)) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return intlMiddleware(request);
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|header_icon.ico|images).*)',
        '/(fr|nl|en)/:path*',
    ]
}