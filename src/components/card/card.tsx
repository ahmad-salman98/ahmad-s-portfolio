import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CardProps {
    title?: string;
    imgSrc?: string;
    link?: string;
}

export default function Card({ title, imgSrc, link }: CardProps) {
    const cardShapePath = "M 32 0 H 318 A 32 32 0 0 1 350 32 V 264 A 40 40 0 0 1 310 304 H 294 A 60 60 0 0 0 234 364 V 380 A 40 40 0 0 1 194 420 H 32 A 32 32 0 0 1 0 388 V 32 A 32 32 0 0 1 32 0 Z";
    const svgMask = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 350 420'%3E%3Cpath d='${cardShapePath}' fill='black'/%3E%3C/svg%3E")`;

    return (
        <div className="group relative h-[420px] w-[350px]">
            <div
                className="absolute inset-0 bg-gray-500/20 backdrop-blur-[3px]"
                style={{
                    WebkitMaskImage: svgMask,
                    maskImage: svgMask,
                }}
            >
                {/* title */}
                {title && (
                    <div className='border-2 border-white/50 rounded-[32px]'>
                        <h2 className="relative z-10 mb-35  text-2xl font-semibold text-white border-b-2 border-white/50 pb-4 px-6 pt-8">
                            {title}
                        </h2>
                    </div>
                )}

                {/* image */}
                <div className={`relative z-10 h-full ${title ? 'mt-[-100px]' : ''}`}>
                    {title && (
                        <>
                        <canvas className='w-3/4 h-16 rounded-full mx-auto bg-[#757575]'></canvas>
                        <canvas className='w-8/9 h-16 rounded-full mx-auto bg-[#9E9D9D] mt-[-45px]'></canvas>
                        </>
                    )}
                    <Image src={imgSrc || "/images/leaf.png"} alt={title || "background image"} width={100} height={100} className={`w-full h-full object-cover ${title ? 'mt-[-45px] rounded-[35px]' : ''}`} />
                </div>
            </div>
            {/* link */}
            <Link
                href={link ?? "#"}
                className="absolute bottom-0 right-0 z-20 flex h-26 w-26 items-center justify-center rounded-full bg-[#1A1F2E] text-white shadow-xl transition-transform hover:scale-110 active:scale-95"
            >
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </Link>
        </div>
    );
}