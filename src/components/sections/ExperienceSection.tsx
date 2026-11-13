import ExperienceCard from "@/components/ExperienceCard";
import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/data/experience";

const ExperienceSection = () => {
  return (
    <section id="experience" className="mb-24 sm:mb-32 scroll-mt-28">
      <SectionHeading title="Experience" />
      <div className="px-5 xs:px-4 mx-auto max-w-[940px]">
        {experience.map((item) => (
          <ExperienceCard
            key={item.id}
            job={item.job}
            country={item.country}
            city={item.city}
            description={item.description}
            contributions={item.contributions}
            focus={item.focus}
            startYear={item.startYear}
            endYear={item.endYear}
            companyLogo={item.companyLogo}
            companyName={item.companyName}
            companySite={item.companySite}
            techs={item.techs}
            linkedin={item.linkedin}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
