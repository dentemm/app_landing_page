'use client'
import { useState } from "react";
import Link from "next/link";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useTranslations } from "next-intl";
import { cn } from "@/utils/cn";
import Logo from "./Logo";
import { LangSwitcher } from "./LangSwitcher";

export default function Header() {
    const { scrollY } = useScroll();
    const [ hasScrolled, setHasScrolled ] = useState(false);
    const t = useTranslations();

    useMotionValueEvent(scrollY, 'change', (latest) => {
        setHasScrolled(latest > 20);
    });

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div
            className={cn(
                'fixed top-0 z-50 w-full flex justify-center',
                hasScrolled ? 'shadow-lg bg-black/[0.9]' : '',
            )}
        >
            <div className="w-full max-w-[1536px] flex justify-between items-center py-4 px-8 md:px-16">
                <div>
                    <Logo className='h-16' />
                </div>
                <div className="hidden lg:flex gap-4 lg:gap-8 text-2xl font-semibold text-white">
                    <Link 
                        href="/"
                        onClick={(e) => handleScroll(e, '#home')}
                    >
                        {t('home')}
                    </Link>
                    <Link 
                        href="#feature"
                        onClick={(e) => handleScroll(e, '#feature')}
                    >
                        {t('feature')}
                    </Link>
                    <Link 
                        href="#testimonial"
                        onClick={(e) => handleScroll(e, '#testimonial')}
                    >
                        {t('testimonial')}
                    </Link>
                </div>
                <div className="flex items-center gap-x-6">
                    {/* <ThemeSwitcher /> */}
                    <LangSwitcher className="w-10 md:w-40" />
                </div>
            </div>
        </div>
    )
}