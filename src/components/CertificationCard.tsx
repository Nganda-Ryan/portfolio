import Image from "next/image";
import { CertificationItem } from "@/data/certifications";
import ScrollAnimation from "./ScrollAnimation";

const CertificationCard = ({ certification }: { certification: CertificationItem }) => {
  return (
    <ScrollAnimation animation="fade-up">
      <article className="holographic-card rounded-lg border border-border overflow-hidden h-full">
        <div className="relative h-56 sm:h-64 bg-surface">
          <Image
            src={certification.image}
            alt={certification.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain p-4"
          />
        </div>
        <div className="p-6 space-y-2">
          <p className="text-xs uppercase tracking-widest text-teal-400 font-semibold">
            {certification.category}
          </p>
          <h3 className="poppins-font font-bold text-xl">{certification.name}</h3>
          <p className="text-muted">{certification.issuer}</p>
          <p className="text-sm text-muted-2">
            {certification.issued ? `Issued ${certification.issued}` : "Credential"}
            {certification.credentialId ? ` · ID ${certification.credentialId}` : ""}
          </p>
          {certification.verifyUrl ? (
            <a
              href={certification.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block pt-2 text-teal-400 font-semibold hover:text-teal-300"
            >
              Verify credential ↗
            </a>
          ) : null}
        </div>
      </article>
    </ScrollAnimation>
  );
};

export default CertificationCard;
