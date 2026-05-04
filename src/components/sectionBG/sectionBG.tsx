import Image from "next/image";

export default function SectionBG({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <section className={`relative rounded-[38px] overflow-hidden py-20 lg:pt-25 ${className}`}>
            <div className="absolute bg-secondary inset-0 z-0"></div>
            <Image src="/images/services-bg.png" alt="services" width={1000} height={1000} className="absolute w-full h-full object-cover inset-0" />
            {children}
        </section >
    )
}
