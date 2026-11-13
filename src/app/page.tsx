import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";
import OtherProjects from "@/components/sections/OtherProjects";
import Expertise from "@/components/sections/Expertise";
import Approach from "@/components/sections/Approach";
import ExperienceSection from "@/components/sections/ExperienceSection";
import Certifications from "@/components/sections/Certifications";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Hero />

      <section className="relative flex justify-center items-center mt-8 sm:mt-4 sm:top-4">
        <Image
          src="/MenuUnderlineWavy.svg"
          sizes="100vw"
          width={500}
          height={10}
          alt=""
          className="w-screen relative"
        />
      </section>

      <div className="mt-14 lg:mt-20">
        <SelectedWork />
        <OtherProjects />
        <Expertise />
        <Approach />
        <ExperienceSection />
        <Certifications />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
