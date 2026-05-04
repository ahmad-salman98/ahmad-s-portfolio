import Image from "next/image";
import Quote from "../../../../public/icons/quote";

interface TestimonialProps {
    name: string;
    position: string;
    testimonial: string;
    imageSrc: string;
}

export default function TestimonialCard({ name, position, testimonial, imageSrc }: TestimonialProps) {
    return (
        <div className="w-full max-w-[600px] mx-auto min-h-[265px] bg-white/15 rounded-[24px] p-5 flex flex-col gap-8 backdrop-blur-[2px]">
            <div className="flex items-start justify-between w-full gap-3">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <Image src={imageSrc || "/images/leaf.png"} alt="Testimonial" className="object-cover rounded-full w-[55px] h-[55px]" width={55} height={55} />
                        <div className="text-white">
                            <p className="text-lg font-semibold">{name}</p>
                            <p className="text-sm font-light">{position}</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Image src="/icons/star.svg" alt="star" width={28} height={32} key={index} />
                        ))}
                    </div>
                </div>

                <div className="flex gap-2">
                    <Quote color="#667085" opacity={0.5} />
                    <Quote color="#667085" opacity={0.5} />
                </div>
            </div>
            <p className="text-white">
                {testimonial}
            </p>
        </div>
    )
}
