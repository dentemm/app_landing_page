import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { LogoProps } from "./types";

const Logo: React.FC<LogoProps> = ({
    className = '',
}) => {
    return (
        <div className={cn('flex items-center gap-x-4', className)}>
            <Image src="/images/rouleur_logo.png" alt="rouleur_logo" className="rounded-full shadow-[0_10px_10px_rgba(184, 224, 210)]" width={48} height={48} />
            <div className="flex flex-col">
                <p className="hidden md:block font-semibold text-[#00AADC] text-[40px]">Rouleur</p>
                <p className="hidden md:block font-thin text-[#00AADC] text-[18px] -mt-3">Cycling Manager</p>
            </div>
        </div>
    )
}

export default Logo;