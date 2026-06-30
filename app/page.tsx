import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { PortfolioGallery } from "@/components/sections/portfolio-gallery";
import { Services } from "@/components/sections/services";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { FeaturedConcepts } from "@/components/sections/featured-concepts";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <PortfolioGallery />
      <Services />
      <WhyChooseUs />
      <FeaturedConcepts />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
