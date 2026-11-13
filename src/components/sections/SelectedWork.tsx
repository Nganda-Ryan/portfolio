import WorkCard from "@/components/WorkCard";
import SectionHeading from "@/components/SectionHeading";
import { featuredProjects } from "@/data/projects";
import { selectedWorkCopy } from "@/data/site";

const SelectedWork = () => {
  return (
    <section id="work" className="mb-24 sm:mb-32 scroll-mt-28">
      <SectionHeading title={selectedWorkCopy.title} subtitle={selectedWorkCopy.subtitle} />
      <div className="px-5 xs:px-4 mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <WorkCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
