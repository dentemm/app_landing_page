import React from 'react';
import { useTranslations } from 'next-intl';
import { Icons } from '../icons';
import { CustomImage } from '../custom/CustomImage';

export default function FeatureSection () {
    const t = useTranslations();

    return (
        <div id='feature' className='bg-background'>
            <div className="flex flex-col items-center bg-[url('/images/bg_feature_section.png')] bg-cover bg-center">
                <div className='w-full max-w-[1536px]'>
                    <div className='flex flex-wrap items-center py-16 px-8 md:px-16'>
                        <div className='w-full md:w-1/2 order-2 md:order-1'>
                        <p className='text-[20px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] 2xl:text-[56px] text-center md:text-left font-bold leading-tight'>{t('feature_title_one')}</p>
                            <div>
                                <p className='pt-4 md:pt-8 text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] leading-6 md:leading-10'>{t('team_overivew_content')}</p>
                            </div>
                            <div className='pt-[70px]'>
                                <p className='font-bold text-[24px] sm:text[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px] leading-10'>{t('user_benefits')}</p>
                                <div className='pt-4 md:pt-8 flex flex-col gap-1'>
                                    <div className='flex gap-x-2'>
                                        <Icons.check className='min-w-[16px] min-h-[16px]' />
                                        <p className='text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]'>{t('user_benefits_content_one')}</p>
                                    </div>
                                    <div className='flex gap-x-2'>
                                        <Icons.check className='min-w-[16px] min-h-[16px]' />
                                        <p className='text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]'>{t('user_benefits_content_second')}</p>
                                    </div>
                                    <div className='flex gap-x-2'>
                                        <Icons.check className='min-w-[16px] min-h-[16px]' />
                                        <p className='text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]'>{t('user_benefits_content_third')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 order-1 md:order-2 flex justify-center'>
                            <CustomImage src={'/images/feature_phone.png'} alt='feature_phone' className='w-[500px] h-auto' />
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-wrap items-center'>
                    <div className='w-full md:w-1/2'>
                        <CustomImage src={'/images/season_game_image.png'} alt='season_game_image' className='w-full md:w-[400px] lg:w-[700px] h-auto' />
                    </div>
                    <div className='w-full md:w-1/2 p-8 md:pr-16 max-w-[768px]'>
                        <p className='font-bold text-[20px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] 2xl:text-[56px] leading-7 text-end'>{t('feature_title_second')}</p>
                        <div className='w-full flex justify-end'>
                            <div className='w-2/3'>
                                <p className='pt-8 text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] leading-6 md:leading-10 text-end'>{t('second_feature_content')}</p>
                            </div>
                        </div>
                        <div className='pt-8 flex items-center gap-x-2 justify-end'>
                            <p className='text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]'><strong>Spring Classics</strong></p>
                            <Icons.check className='min-w-[16px] min-h-[16px]' />
                        </div>
                        <div className='flex items-center gap-x-2 justify-end'>
                            <p className='text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]'><strong>Giro d&apos;Italia</strong></p>
                            <Icons.check className='min-w-[16px] min-h-[16px]' />
                        </div>
                        <div className='flex items-center gap-x-2 justify-end'>
                            <p className='text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]'><strong>Tour de France</strong></p>
                            <Icons.check className='min-w-[16px] min-h-[16px]' />
                        </div>
                        <div className='flex items-center gap-x-2 justify-end'>
                            <p className='text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]'><strong>Vuelta à España</strong></p>
                            <Icons.check className='min-w-[16px] min-h-[16px]' />
                        </div>
                        <p className='pt-10 text-[20px] md:text-[24px] lg:text-[28px] 2xl:text-[32px] text-end'>{t('season_content')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}