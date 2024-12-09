import React from "react";
import { useTranslations } from "next-intl";
import { CustomImage } from "../custom/CustomImage";

export default function CommunitySection () {
    const t = useTranslations();

    return (
        <div className="w-full bg-convert_bg text-white">
            <div className="w-full flex justify-center bg-community-background dark:bg-[url('/images/bg_community_section.png')] bg-cover bg-right bg-no-repeat">
                <div className="w-full max-w-[1500px] flex flex-wrap items-center p-8 md:p-16">
                    <div className="w-full md:w-1/2 order-2 md:order-1 dark:text-black">
                        <p className="font-extrabold text-[32px] sm:text-[50px] lg:text-[72px] xl:text-[84px] 2xl:text-[96px] leading-[3rem] lg:leading-[4rem] xl:leading-[5rem] 2xl:leading-[6rem]">{t('community_title')}</p>
                        <p className="pt-4 md:pt-10 text-[20px] md:text-[24px] lg:text-[28px] 2xl:text-[32px]">{t('community_content')}</p>
                        <p className="pt-8 text-[24px] md:text-[28px] 2xl:text-[32px]">{t('mini_league')}</p>
                    </div>
                    <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
                        <CustomImage src={'/images/community_phone.png'} alt="community_phone" className='w-[300px] md:w-[500px] h-auto' />
                    </div>
                </div>
            </div>
        </div>
    )
}