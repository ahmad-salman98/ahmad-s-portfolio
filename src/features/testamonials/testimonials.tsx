import SectionBG from "@/components/sectionBG/sectionBG";
import TestimonialCard from "./components/card";

interface Testimonial {
    name: string;
    position: string;
    testimonial: string;
}

const TESTIMONIALS: Testimonial[] = [
    {
        name: "Abdallah Hussein",
        position: "QA Engineer | ISTQB® CTFL-AT, CTFL",
        testimonial: "An extremely talented, diligent, and professional developer. Ahmad's work is of the highest quality, and he consistently goes above and beyond to ensure project success. He is a standout candidate and a valuable addition to any team."
    },
    {
        name: "Fawzi Al-azraq",
        position: "Senior Software Engineer",
        testimonial: "Ahmad's expertise in React and Next.js makes him a strong candidate for building user interfaces and web applications. His soft skills make him a valuable asset to any team that values effective communication and problem-solving."
    }
]



export default function Testimonials({ className }: { className?: string }) {
    return (
        <SectionBG className={className}>
            <div className="container">
                <h3 className="text-white text-4xl lg:text-5xl font-semibold relative text-center leading-tight mb-4">
                    Testimonials That <br /> Speak to <span className="text-primary">My Results</span>
                </h3>
                <p className="text-white lg:max-w-1/2 relative text-center mb-12 mx-auto">
                Turning complex requirements into maintainable frontend architectures. Trusted by peers and leaders for reliable, high-quality execution.
                </p>PROD behavior

                <div className="z-10 relative flex flex-col lg:flex-row gap-5">
                    {TESTIMONIALS.map((Testimonial, index) => (
                        <TestimonialCard key={Testimonial.name} {...Testimonial} imageSrc={`/images/testimonials/${index + 1}.jpeg`} />
                    ))}
                </div>
            </div>
        </SectionBG>
    )
}
