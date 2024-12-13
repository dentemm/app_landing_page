'use client'
import React from 'react';
import { useTranslations } from 'next-intl';
import { AppStoreDownloadBtn, GooglePlayDownloadBtn } from '../custom/CustomDownloadBtn';
import Link from 'next/link';
import { CustomImage } from '../custom/CustomImage';
import Logo from '../header/Logo';

export default function Footer () {
    const t = useTranslations();
    return (
        <div className='bg-[#000000]'>
            <div className="bg-[url('/images/bg_footer_section.png')] bg-cover bg-center flex justify-center">
                <div className='w-full max-w-[1536px] flex flex-wrap justify-between items-center gap-12 md:gap-0 p-8 md:p-16'>
                    <div className='w-full md:w-1/3 flex flex-col items-center gap-8'>
                        <Logo />
                        <Link className='mt-6 cursor-pointer bg-white rounded-lg' href={"https://x.com/RouleurBike"} target="_blank" aria-label='twitter for rouleur'>
                            <CustomImage
                                src="/images/twitterx-icon.png"
                                alt="Twitter"
                                className='w-[30px] h-[30px]'
                            />
                        </Link>
                    </div>
                    <div className='w-full md:w-1/3 flex flex-col items-center gap-8'>
                        <AppStoreDownloadBtn />
                        <GooglePlayDownloadBtn />
                        <Link
                            href="https://thinkmobile-public.s3.eu-central-1.amazonaws.com/Privacy-Policy-Termify.html"
                            target="_blank"
                            className='text-[12px] md:text-[20px] text-white hover:underline cursor-pointer'
                            aria-label="View privacy policy"
                        >
                            {t('privacy_policy')}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}