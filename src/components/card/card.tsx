import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
    title?: string;
    imgSrc?: string;
    link?: string;
}

const BOUNCE_EFFECT = "transition-transform duration-300 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] group-hover:scale-[1.1]"
const CARD_SHAPE_PATH = "M 32 0 H 384 A 32 32 0 0 1 416 32 V 352 A 40 40 0 0 1 376 392 H 360 A 60 60 0 0 0 300 452 V 468 A 40 40 0 0 1 260 508 H 32 A 32 32 0 0 1 0 476 V 32 A 32 32 0 0 1 32 0 Z";
const SVG_MASK_URL = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 416 508'%3E%3Cpath d='${CARD_SHAPE_PATH}' fill='black'/%3E%3C/svg%3E")`;

const ImageBG = () => (
    <div className={`absolute top-[-45px] inset-x-0 ${BOUNCE_EFFECT} rounded-[35px]`}>
        <div className='w-3/4 h-16 rounded-full mx-auto bg-[#757575]'></div>
        <div className='w-[88%] h-16 rounded-full mx-auto bg-[#9E9D9D] mt-[-45px]'></div>
    </div>
)

export default function Card({ title, imgSrc, link }: CardProps) {

    return (
        <Link href={link ?? "#"} className="flex group relative isolate w-full max-w-[416px] aspect-[416/508] shrink-0">

            <div
                className="absolute inset-0 z-10 flex flex-col bg-white/12 backdrop-blur-sm group-hover:bg-primary transition-colors duration-300 cursor-pointer"
                style={{
                    WebkitMaskImage: SVG_MASK_URL,
                    maskImage: SVG_MASK_URL,
                }}
            >
                {/* Title */}
                <div className="relative pb-36 text-2xl font-semibold text-white pt-8">
                    <h2 className='px-6 pb-4 border-b-2 border-white/50 mr-1 ml-[1px]'>{title}</h2>
                    <div className='absolute inset-y-0 inset-0 right-[2px] rounded-[32px] ring-2 ring-white/50 ring-inset pointer-events-none'></div>
                </div>

                {/* Image */}
                <div className="relative w-full flex-grow -mt-16">
                    {title && <ImageBG />}
                    <Image
                        src={imgSrc || "/images/leaf.png"}
                        alt={title || "background image"}
                        fill
                        className={`object-cover rounded-[35px] pr-[2px] ${BOUNCE_EFFECT}`}
                    />
                </div>
            </div>

            {/* Arrow button */}
            <div className="absolute bottom-0 right-0 z-20 flex w-[25%] aspect-square items-center justify-center rounded-full bg-[#1D2939] text-white group-hover:bg-primary transition-colors duration-300 shadow-xl">
                <Image src="/icons/arrow.svg" alt="arrow" width={70} height={70} className='w-1/2 h-1/2' />
            </div>
        </Link>
    )
}