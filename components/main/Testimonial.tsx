import React from 'react';
import { useTranslations } from 'next-intl';
import { Icons } from '../icons';

export default function Testimonial () {
    const t = useTranslations();

    return (
        <div id='testimonial' className='bg-background flex justify-center'>
            <div className='w-full max-w-[1536px] p-8 md:p-16'>
                <p className='text-center text-[20px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] 2xl:text-[56px] font-bold'>{t('testimonial')}</p>
                <p className='text-center text-[32px] md:text-[36px] 2xl:text-[40px]'>
                    {t('reason_title')}
                </p>
                <div className='pt-12'>
                    <div className='w-full flex flex-wrap justify-center gap-12'>
                        {
                            [1, 2, 3].map(index => (
                                <div key={`testimonial_${index}`} className='w-full lg:w-[400px] 2xl:w-[30%] shadow-testimonial flex flex-col justify-between text-center rounded-xl p-6 pt-4'>
                                    <p className='font-bold text-[#C94773] text-[24px] md:text-[32px] 2xl:text-[40px]'>{t(`testimonial_name_${index}`)}</p>
                                    <p className='py-2 mb-2 text-[16px] md:text-[24px] 2xl:text-[32px]'>{t(`testimonial_content_${index}`)}</p>
                                    <div className='flex justify-center gap-x-4'>
                                        {
                                            [1, 2, 3, 4, 5].map((starIndex) => (
                                                <Icons.star key={`star_index_${starIndex}`} fill='gold' color='gold' size={36} />
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}