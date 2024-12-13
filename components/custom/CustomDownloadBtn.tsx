'use client'
import React from "react";
import Link from "next/link";
import { CustomImage } from "./CustomImage";

export function AppStoreDownloadBtn () {
    return (
        <Link className="shadow-download-btn rounded-xl" href={'https://apps.apple.com/us/app/rouleur-app/id6474559420'} target="_blank">
            <CustomImage src="/images/app_store.svg" alt="app_store" className="w-[280px] h-auto" />
        </Link>
    )
}

export function GooglePlayDownloadBtn () {
    return (
        <Link className="shadow-download-btn rounded-xl" href={'https://play.google.com/store/apps/details?id=be.thinkmobile.rouleur'} target="_blank">
            <CustomImage src="/images/google_play.svg" alt="google_play" className="w-[280px] h-auto" />
        </Link>
    )
}