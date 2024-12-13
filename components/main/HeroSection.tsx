'use client'

import React from 'react';
import { CustomImage } from '../custom/CustomImage';
import { useTranslations } from 'next-intl';
import { AppStoreDownloadBtn, GooglePlayDownloadBtn } from '../custom/CustomDownloadBtn';
import { Carousel, CarouselItem, CarouselContent } from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const HeroSection = () => {
    const t = useTranslations();
    return (
        <div 
            id='home' 
            className="h-screen w-full flex justify-center relative"
        >
            {/* Background layer */}
            <div className="absolute inset-0 bg-hero-background bg-cover bg-center">
                <div className="absolute inset-0 backdrop-blur-[8px]"></div>
            </div>
            {/* Content layer */}
            <div className='relative w-full max-w-[1536px] flex flex-col md:flex-row justify-around md:justify-between items-center pt-24 px-8 md:px-16'>
                <div className='w-full md:w-1/2 order-2 md:order-1 lg:pt-16 text-white'>
                    <p className='text-[20px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] 2xl:text-[56px] text-center md:text-left font-bold leading-tight'>{t('hero_title')}</p>
                    <p className='text-[16px] sm:text-[20px] md:text-[22px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] text-center md:text-left font-normal mt-2 mb-16'>{t('hero_content')}</p>
                    <div className='flex flex-wrap justify-center sm:justify-around gap-4'>
                        <AppStoreDownloadBtn />
                        <GooglePlayDownloadBtn />
                    </div>
                </div>
                <div className='w-full md:w-1/2 order-1 md:order-2 flex justify-center items-center'>
                    <Carousel
                        opts={{
                            align: 'start',
                            loop: true
                        }}
                        plugins={[
                            Autoplay({
                                delay: 2000,
                            })
                        ]}
                        className='w-[150px] sm:w-[200px] md:w-[300px]'
                    >
                        <CarouselContent>
                            {Array.from({ length: 9 }).map((_, index) => (
                                <CarouselItem key={index}>
                                    <CustomImage src={`/images/hero_section/hero_section_${index + 1}.png`} alt={`hero_section_${index + 1}`} className='w-[150px] sm:w-[200px] md:w-[300px]' priority />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;