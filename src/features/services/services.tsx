import Image from "next/image";
import Leafs from "./components/leafs";
import Card from "@/components/card/card";

export default function Services() {
    return (
        <section className="relative rounded-[38px] overflow-hidden py-20 lg:pt-25">
            {/* background color*/}
            <div className="absolute bg-secondary inset-0 z-0"></div>
            {/* background image */}
            <Image src="/images/services-bg.png" alt="services" width={1000} height={1000} className="absolute w-full h-full object-cover inset-0" />
            <Leafs />
            {/* title */}
            <div className="z-10 relative px-8 container mx-auto">
                <div className="flex flex-col justify-center gap-4 lg:flex-row lg:justify-between">
                    <h3 className="text-white text-2xl lg:text-5xl font-semibold">My <span className="text-primary">Services</span></h3>
                    <p className="text-white font-semibold lg:max-w-1/2">I build high-performance, accessible, and scalable web applications. Bridging the gap between complex logic and intuitive user experiences.</p>
                </div>
            </div>
            {/* cards */}
            <div className="container mx-auto flex flex-col items-center justify-center gap-8 mt-20 lg:flex-row lg:justify-between ">
                <Card title="Accessibility" imgSrc="/images/services/accessibility.png" link="#" />
                <Card  imgSrc="/images/services/performance.png" link="#" />
                <Card  imgSrc="/images/services/seo.png" link="#" />
            </div>
        </section>
    )
}
