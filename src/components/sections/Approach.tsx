import SectionHeading from "@/components/SectionHeading";
import { approach } from "@/data/site";
import ScrollAnimation from "@/components/ScrollAnimation";

const Approach = () => {
  return (
    <section id="approach" className="mb-24 sm:mb-32 scroll-mt-28">
      <SectionHeading title={approach.title} subtitle={approach.subtitle} />
      <div className="px-5 xs:px-4 mx-auto max-w-[940px] space-y-6">
        {approach.principles.map((principle) => (
          <ScrollAnimation key={principle.number} animation="fade-right">
            <article className="holographic-card rounded-lg border border-border p-6 sm:p-8">
              <p className="text-teal-400 font-mono text-sm mb-2">{principle.number}</p>
              <h3 className="poppins-font font-bold text-xl sm:text-2xl">{principle.title}</h3>
              <p className="mt-3 text-muted leading-relaxed">{principle.body}</p>
            </article>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Approach;
