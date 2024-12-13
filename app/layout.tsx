import localFont from "next/font/local";
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';

import "../assets/css/globals.css";

// Import messages directly
import MetaData from "@/components/meta/MetaData";

// Define supported locales
const locales = ['en', 'nl', 'fr'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LayoutProps = {
    children: React.ReactNode;
    params: { locale: string }
}

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: LayoutProps) {

  const locale = "nl";

  return (
    <I18nextProvider i18n={i18n}>
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
    </I18nextProvider>
  );
}
