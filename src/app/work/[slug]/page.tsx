import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";
import Badge from "@/components/ui/Badge";
import { featuredProjects, getProjectBySlug, isStructuredRole } from "@/data/projects";
import ProjectMedia from "@/components/ProjectMedia";
import ProjectExternalLink from "@/components/ProjectExternalLink";
// import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Case study not found" };
  }

  const title = project.client ? `${project.title} | ${project.client}` : project.title;
  return {
    title: `${title}, Case Study`,
    description: project.blurb,
  };
}

const forthcomingCopy = {
  role: "Details of what I personally designed, developed or maintained on this project will be added here.",
  architecture: "A simple diagram of the main components and their interactions will be added here once verified.",
  challenges: "One or two real technical problems and how they were resolved will be documented here.",
};

function toParagraphs(value: string | string[]) {
  return Array.isArray(value) ? value : [value];
}

function SectionHeading({ title, forthcoming = false }: { title: string; forthcoming?: boolean }) {
  return (
    <div className="flex items-baseline gap-3">
      <h2 className="poppins-font font-bold text-2xl">{title}</h2>
      {forthcoming && (
        <span className="text-xs uppercase tracking-widest text-muted-3">Forthcoming</span>
      )}
    </div>
  );
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project || !project.featured) {
    notFound();
  }

  const displayTitle = project.client ? `${project.title} | ${project.client}` : project.title;
  const caseStudy = project.caseStudy;

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="pt-28 pb-16 px-5 xs:px-4 mx-auto max-w-[940px]">
        <Link href="/#work" className="text-teal-400 hover:text-teal-300 text-sm font-semibold">
          ← Back to selected work
        </Link>
        <p className="mt-8 text-xs uppercase tracking-widest text-teal-400 font-semibold">
          {project.featuredLabel ?? project.category}
        </p>
        <h1 className="mt-3 poppins-font font-bold text-4xl sm:text-5xl">{displayTitle}</h1>
        <p className="mt-4 text-xl text-muted">{project.headline}</p>

        <div className="relative mt-8 h-64 sm:h-80 rounded-lg overflow-hidden border border-purple-300">
          <ProjectMedia
            src={project.img}
            alt={displayTitle}
            category={project.category}
            sizes="(max-width: 940px) 100vw, 940px"
            className="object-cover object-center"
          />
        </div>

        <section className="mt-10">
          <h2 className="poppins-font font-bold text-2xl mb-4">Overview</h2>
          <div className="space-y-4 text-muted leading-relaxed">
            {project.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="poppins-font font-bold text-2xl mb-4">Key Engineering Areas</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted">
            {project.keyAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="poppins-font font-bold text-2xl mb-4">Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </section>

        {project.links.length > 0 && (
          <section className="mt-10">
            <h2 className="poppins-font font-bold text-2xl mb-4">Links</h2>
            <div className="flex flex-wrap items-center gap-4">
              {project.links.map((link) => (
                <ProjectExternalLink key={link.href} link={link} />
              ))}
            </div>
          </section>
        )}

        <section className="mt-10">
          <SectionHeading title="My Role" forthcoming={!caseStudy?.role} />
          {caseStudy?.role ? (
            isStructuredRole(caseStudy.role) ? (
              <div className="mt-4 space-y-6 text-muted leading-relaxed">
                {toParagraphs(caseStudy.role.intro).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {caseStudy.role.sections?.map((section) => (
                  <div key={section.title}>
                    <h3 className="font-semibold text-foreground">{section.title}</h3>
                    <ul className="mt-2 list-disc pl-5 space-y-2">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-4 space-y-4 text-muted leading-relaxed">
                {toParagraphs(caseStudy.role).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )
          ) : (
            <p className="mt-3 text-muted-2 italic leading-relaxed">{forthcomingCopy.role}</p>
          )}
        </section>

        {/* <section className="mt-10">
          <SectionHeading title="Architecture" forthcoming={!caseStudy?.architecture} />
          {caseStudy?.architecture ? (
            <div className="mt-4 space-y-8">
              {caseStudy.architecture.diagrams.map((diagram) => (
                <div key={diagram.image}>
                  {diagram.title && <h3 className="font-semibold text-lg">{diagram.title}</h3>}
                  <div className={`space-y-4 text-muted leading-relaxed ${diagram.title ? "mt-2" : ""}`}>
                    {toParagraphs(diagram.summary).map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <figure className="mt-4 overflow-x-auto rounded-lg border border-purple-300">
                    <Image
                      src={diagram.image}
                      alt={diagram.title ? `${diagram.title} architecture` : "Architecture diagram"}
                      width={diagram.width}
                      height={diagram.height}
                      className="h-auto w-full min-w-[860px] max-w-none"
                      sizes="(max-width: 940px) 100vw, 900px"
                    />
                  </figure>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-muted-2 italic leading-relaxed">{forthcomingCopy.architecture}</p>
          )}
        </section> */}

        <section className="mt-10">
          <SectionHeading title="Technical Challenges" forthcoming={!caseStudy?.challenges.length} />
          {caseStudy?.challenges.length ? (
            <div className="mt-4 space-y-6">
              {caseStudy.challenges.map((challenge) => (
                <div key={challenge.title}>
                  <h3 className="font-semibold">{challenge.title}</h3>
                  <div className="mt-2 space-y-3 text-muted leading-relaxed">
                    {toParagraphs(challenge.body).map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-muted-2 italic leading-relaxed">{forthcomingCopy.challenges}</p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
