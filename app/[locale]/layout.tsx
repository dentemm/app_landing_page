import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/ThemeProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import "../../assets/css/globals.css";

type LayoutProps = {
    children: React.ReactNode;
    params: { locale: string }
}

const geistSans = localFont({
  src: "../../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t('meta.title'),
      template: `%s | ${t('meta.title')}`,
    },
    description: t('meta.description'),
    openGraph: {
      type: "website",
      title: t('og.title'),
      description: t('og.description'),
      url: process.env.NEXT_PUBLIC_SITE_URL,
      siteName: 'Rouleur',
      images: [
        {
          url: '/images/rouleur_logo.png',
          alt: 'rouleur'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: t('og.title'),
      description: t('og.description'),
      creator: 'Tim Claes'
    },
      alternates: {
        canonical: `${baseUrl}${locale === 'en' ? '' : `/${locale}`}`,
      languages: {
        [locale]: `${baseUrl}${locale === 'en' ? '' : `/${locale}`}`,
      },
    },
  }
}

export default async function RootLayout({
  children,
  params: { locale }
}: LayoutProps) {

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preload"
          href="/images/app_store.svg"
          as="image"
        />
        <link
          rel="preload"
          href="/images/google_play.svg"
          as="image"
        />
        <link rel="icon" href="/header_icon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <NextIntlClientProvider locale={locale} messages={messages}>
                {children}
            </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

