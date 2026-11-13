import CertificationCard from "@/components/CertificationCard";
import SectionHeading from "@/components/SectionHeading";
import { certifications } from "@/data/certifications";
import { certificationsCopy } from "@/data/site";

const Certifications = () => {
  return (
    <section id="certifications" className="mb-24 sm:mb-32 scroll-mt-28">
      <SectionHeading title={certificationsCopy.title} subtitle={certificationsCopy.subtitle} />
      <div className="px-5 xs:px-4 mx-auto max-w-[940px] grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((certification) => (
          <CertificationCard key={certification.id} certification={certification} />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
