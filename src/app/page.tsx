import Experience from "@/features/experience/experience";
import Hero from "@/features/hero/hero";
import Services from "@/features/services/services";
import Testimonials from "@/features/testamonials/testimonials";

export default function Home() {
  return (
    <div className="pt-[100px]">
      <Hero />
      <Services  />
      <Experience />
      <Testimonials className="mt-10"/>
    </div>
  );
}
