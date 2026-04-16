import Image from "next/image";
import Leafs from "./components/leafs";
import Card from "@/components/card/card";

export default function Services() {
    return (
        <section className="relative rounded-[38px] overflow-hidden py-20 lg:pt-25">
            {/* background color & image */}
            <div className="absolute bg-secondary inset-0 z-0"></div>
            <Image src="/images/services-bg.png" alt="services" width={1000} height={1000} className="absolute w-full h-full object-cover inset-0" />

            {/* leafs */}
            <Leafs />

            {/* title */}
            <div className="z-10 relative container">
                <div className="flex flex-col justify-center gap-4 lg:flex-row lg:justify-between">
                    <h3 className="text-white text-2xl lg:text-5xl font-semibold">My <span className="text-primary">Services</span></h3>
                    <p className="text-white font-semibold lg:max-w-1/2">I build high-performance, accessible, and scalable web applications. Bridging the gap between complex logic and intuitive user experiences.</p>
                </div>
            </div>

            {/* cards */}
            <div className="container flex flex-col items-center justify-between mt-20 lg:flex-row lg:justify-between ">
                <Card title="Accessibility" imgSrc="/images/services/accessibility.png" link="#" />
                <Card title="Performance" imgSrc="/images/services/performance.png" link="#" />
                <Card title="SEO" imgSrc="/images/services/seo.png" link="#" />
                <Card title="Scalability" imgSrc="/images/services/scalability.png" link="#" />
            </div>
        </section>
    )
}
