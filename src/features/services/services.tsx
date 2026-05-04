import Leafs from "./components/leafs";
import Card from "@/components/card/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import SectionBG from "@/components/sectionBG/sectionBG";

export default function Services() {
    const servicesData = [
        { title: "Accessibility", imgSrc: "/images/services/accessibility.png", link: "#" },
        { title: "Performance", imgSrc: "/images/services/performance.png", link: "#" },
        { title: "SEO", imgSrc: "/images/services/seo.png", link: "#" },
        { title: "Scalability", imgSrc: "/images/services/scalability.png", link: "#" },
    ];

    return (
        <SectionBG>
            <Leafs />
            {/* title */}
            <div className="z-10 relative container">
                <div className="flex flex-col justify-center gap-4 lg:flex-row lg:justify-between">
                    <h3 className="text-white text-2xl lg:text-5xl font-semibold">My <span className="text-primary">Services</span></h3>
                    <p className="text-white font-semibold lg:max-w-1/2">I build high-performance, accessible, and scalable web applications. Bridging the gap between complex logic and intuitive user experiences.</p>
                </div>
            </div>

            {/* cards */}

            <Carousel
                opts={{
                    align: "start",
                    loop: false,
                }}
                className="container mt-20"
            >
                <CarouselContent
                    className="-ml-4"
                    viewportClassName="px-2 sm:px-3"
                >
                    {servicesData.map((service, index) => (
                        <CarouselItem
                            key={index}
                            className="pl-4 basis-[90%] sm:basis-[70%] md:basis-[44.44%] lg:basis-1/3 flex justify-center"
                        >
                            <Card title={service.title} imgSrc={service.imgSrc} link={service.link} />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="hidden bg-[#1D2939] text-white border-none hover:bg-primary md:flex scale-150 cursor-pointer" />
                <CarouselNext className="hidden bg-[#1D2939] text-white border-none hover:bg-primary md:flex scale-150 cursor-pointer" />
            </Carousel>
        </SectionBG>
    )
}
