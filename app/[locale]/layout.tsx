import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import "../../assets/css/globals.css";

// Import messages directly
import enMessages from '@/assets/locales/en.json';
import nlMessages from '@/assets/locales/nl.json';
import frMessages from '@/assets/locales/fr.json';
import MetaData from "@/components/meta/MetaData";

// Define supported locales
const locales = ['en', 'nl', 'fr'];

const messages: Record<string, typeof enMessages> = {
  en: enMessages,
  nl: nlMessages,
  fr: frMessages,
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

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

export default function RootLayout({
  children,
  params: { locale }
}: LayoutProps) {

  const localeMessages = messages[locale as keyof typeof messages];

  return (
    <NextIntlClientProvider locale={locale} messages={localeMessages}>
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
        <MetaData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          {children}
      </body>
    </html>
    </NextIntlClientProvider>
  );
}

