import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
    title?: string;
    imgSrc?: string;
    link?: string;
}
interface CardShapeProps {
    cardShapePath: string;
}

const BOUNCE_EFFECT = "transition-transform duration-300 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)] group-hover:scale-[1.1]"

const CardShape = ({ cardShapePath }: CardShapeProps) => {
    return (
        <svg
            className="pointer-events-none absolute inset-0 z-50 h-full w-full"
            viewBox="0 0 416 508"
            fill="none"
        >
            <path
                d={cardShapePath}
                className="stroke-white/50"
                strokeWidth="4"
            />
        </svg>
    )
}

const ImageBG = () => (
    <div className={`absolute top-[-45px] inset-x-0 ${BOUNCE_EFFECT} rounded-[35px]`}>
        <canvas className='w-3/4 h-16 rounded-full mx-auto bg-[#757575]'></canvas>
        <canvas className='w-8/9 h-16 rounded-full mx-auto bg-[#9E9D9D] mt-[-45px]'></canvas>
    </div>

)


export default function Card({ title, imgSrc, link }: CardProps) {
    const cardShapePath = "M 32 0 H 384 A 32 32 0 0 1 416 32 V 352 A 40 40 0 0 1 376 392 H 360 A 60 60 0 0 0 300 452 V 468 A 40 40 0 0 1 260 508 H 32 A 32 32 0 0 1 0 476 V 32 A 32 32 0 0 1 32 0 Z";
    const svgMask = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 416 508' preserveAspectRatio='none'%3E%3Cpath d='${cardShapePath}' fill='black'/%3E%3C/svg%3E")`;

    return (
        <Link href={link ?? "#"} className="group relative h-[508px] w-[416px] shrink-0">
            <div
                className="absolute inset-0 z-10 flex flex-col bg-white/12 backdrop-blur-sm group-hover:bg-primary transition-all duration-300 cursor-pointer"
                style={{
                    WebkitMaskImage: svgMask,
                    maskImage: svgMask,
                }}            >
                {/* title */}
                {title && (
                    <h2 className="relative z-10 mb-20 text-2xl font-semibold text-white border-b-2 border-white/50 pb-4 px-6 pt-8">
                        {title}
                    </h2>
                )}

                {/* image */}
                <div className="relative w-full flex-grow">
                    {title && <ImageBG />}

                    <Image
                        src={imgSrc || "/images/leaf.png"}
                        alt={title || "background image"}
                        fill
                        className={`object-cover rounded-[35px] ${BOUNCE_EFFECT}`}                    />
                </div>

                <CardShape cardShapePath={cardShapePath} />
            </div>

            {/* arrow button */}
            <div className="absolute bottom-0 right-0 z-20 flex h-[104px] w-[104px] items-center justify-center rounded-full bg-[#1A1F2E] group-hover:bg-primary transition-all duration-300">
                <Image src="/icons/arrow.svg" alt="arrow" width={70} height={70} />
            </div>
        </Link>
    );
}