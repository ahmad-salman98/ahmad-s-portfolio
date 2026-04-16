import Image from "next/image";

export default function Hero() {
    const yearsOfExperience = new Date().getFullYear() - 2023;
    return (
        <section className="flex flex-col items-center text-secondary" id="home">
            {/* hello */}
            <div className="relative mt-10">
                <Image src="/icons/three.svg" alt="three" width={32} height={33} className="w-8 h-8 absolute top-[-32px] right-[-22px]" />
                <span className="px-8 py-2 rounded-full border text-xl font-bold ">Hello</span>
            </div>
            {/* name */}
            <div className="mt-8 text-center relative md:mb-[-50px]">
                <p className="text-4xl mr-2 font-bold inline md:text-6xl">I&apos;m</p> <p className="text-4xl font-bold text-primary inline-block md:text-6xl">Ahmad</p> <p className="text-4xl font-bold inline md:text-6xl">,</p>
                <p className="text-4xl font-bold mt-4 md:text-6xl">Frontend Developer</p>
                <Image src="/icons/three-xl.svg" alt="three" width={74} height={85} className="absolute bottom-[-55px] left-[-55px] scale-50 md:bottom-[-70px] md:left-[-70px] md:scale-100" />
            </div>
            {/* quote */}
            <div className="container flex flex-col items-center gap-16 mt-20 px-4 w-full sm:flex-row sm:mt-20 sm:justify-between md:mt-40 lg:absolute lg:top-1/4">
                <div className="flex flex-col max-w-[340px]">
                    <span className="text-4xl leading-none h-6 md:text-6xl md:h-10">
                        &ldquo;
                    </span>
                    <p className="text-lg">Ahmad&apos;s proficiency, dedication, and professionalism make him a standout candidate who would be a valuable addition to any development team.</p>
                </div>

                <div className="flex flex-col items-end">
                    <div className="flex">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Image src="/icons/star.svg" alt="start" width={28} height={32} key={index} />
                        ))}
                    </div>
                    <p className="text-4xl font-bold mt-3 md:text-4xl">+{yearsOfExperience} Years</p>
                    <p className="text-sm">Experience</p>
                </div>
            </div>
            {/* smile image */}
            <div className="relative flex justify-center overflow-hidden min-h-140 w-full min-w-[360px]">
                <Image src="/images/smile.png" alt="smile" width={450} height={100} className="absolute z-10 top-0" />
                <canvas className="absolute bg-primary top-50 h-180 w-180 opacity-70 rounded-full md:top-45" id="smile-canvas"></canvas>
            </div>
        </section>
    )
}
