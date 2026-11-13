import WorkCard from "@/components/WorkCard";
import SectionHeading from "@/components/SectionHeading";
import { otherProjects } from "@/data/projects";
import { otherProjectsCopy } from "@/data/site";

const OtherProjects = () => {
  return (
    <section id="other-projects" className="mb-24 sm:mb-32">
      <SectionHeading title={otherProjectsCopy.title} subtitle={otherProjectsCopy.subtitle} />
      <div className="px-5 xs:px-4 mx-auto max-w-[1240px] grid grid-cols-1 md:grid-cols-3 gap-4">
        {otherProjects.map((project) => (
          <WorkCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
};

export default OtherProjects;
