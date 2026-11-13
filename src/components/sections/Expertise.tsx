import CodeCard from "@/components/CodeCard";
import SectionHeading from "@/components/SectionHeading";
import { expertise } from "@/data/expertise";
import { expertiseCopy } from "@/data/site";

const Expertise = () => {
  return (
    <section id="expertise" className="mb-24 sm:mb-32 scroll-mt-28">
      <SectionHeading title={expertiseCopy.title} />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 px-4 sm:px-0 md:mx-10 max-w-[1240px] gap-3">
          {expertise.map((item) => (
            <CodeCard
              key={item.id}
              title={item.title}
              tech={item.tech}
              description={item.description}
              logo={item.logo}
              stripColor={item.stripColor}
            />
          ))}
        </div>
      </div>
      <p className="text-center mt-8 text-sm text-muted-2">{expertiseCopy.familiarWith}</p>
    </section>
  );
};

export default Expertise;
