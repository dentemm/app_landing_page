'use client';

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
const MetaData = () => {

  const locale = useLocale();
  const t = useTranslations();

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  return (
    <>
      <meta name="description" content={t('meta.description')} />
      <meta name="keywords" content={t('meta.keywords')} />
      <meta name="author" content={t('meta.author')} />
      <link rel="canonical" href={`${baseUrl}${locale === 'nl' ? '' : `/${locale}`}`}/>
      <meta property="og:title" content={t('meta.title')} />
      <meta property="og:description" content={t('meta.description')} />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:image" content="/images/rouleur_logo.png" />
      <meta property="og:site_name" content="Rouleur" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t('meta.title')} />
      <meta name="twitter:description" content={t('meta.description')} />
      <meta name="twitter:creator" content="Tim Claes" />
      <meta name="twitter:image" content="/images/rouleur_logo.png" />
      <meta name="twitter:image:alt" content="rouleur" />
      <meta name="twitter:site" content="@rouleur" />

    </>
  );
};

export default MetaData;