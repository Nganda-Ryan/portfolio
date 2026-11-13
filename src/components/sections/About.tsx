import SectionHeading from "@/components/SectionHeading";
import { about } from "@/data/site";

const About = () => {
  return (
    <section id="about" className="mb-24 sm:mb-32 scroll-mt-28">
      <SectionHeading title={about.title} />
      <div className="px-5 xs:px-4 mx-auto max-w-[760px] space-y-4 text-muted leading-relaxed text-lg">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
};

export default About;
