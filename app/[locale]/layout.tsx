import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import "../../assets/css/globals.css";

// Import messages directly
import enMessages from '@/assets/locales/en.json';
import nlMessages from '@/assets/locales/nl.json';
import frMessages from '@/assets/locales/fr.json';
import MetaData from "@/components/meta/MetaData";

const messages: Record<string, typeof enMessages> = {
  en: enMessages,
  nl: nlMessages,
  fr: frMessages,
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }, { locale: 'fr' }];
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

export const metadata = {
  icons: {
    icon: '/header_icon.ico',
  },
}

export default function RootLayout({
  children,
  params: { locale }
}: LayoutProps) {
  const localeMessages = messages[locale as keyof typeof messages] || messages['nl'];

  return (
    <NextIntlClientProvider locale={locale} messages={localeMessages} timeZone="Europe/Brussels" now={new Date()}>
      <html lang={locale} suppressHydrationWarning>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link 
            rel="preconnect" 
            href="https://fonts.googleapis.com" 
            crossOrigin="anonymous"
          />
          <MetaData />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}
        </body>
      </html>
    </NextIntlClientProvider>
  );
}

