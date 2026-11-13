import Link from "next/link";
import { Project } from "@/data/projects";
import ScrollAnimation from "./ScrollAnimation";
import Badge from "./ui/Badge";
import ProjectMedia from "./ProjectMedia";
import ProjectExternalLink from "./ProjectExternalLink";

type WorkCardProps = {
  project: Project;
  featured?: boolean;
};

const WorkCard = ({ project, featured = false }: WorkCardProps) => {
  const displayTitle = project.client ? `${project.title}, ${project.client}` : project.title;

  return (
    <ScrollAnimation animation="fade-up">
      <article
        className={`holographic-card rounded-lg border border-slate-900/[0.06] dark:border-white/[0.05] overflow-hidden flex ${
          featured
            ? "h-[28rem] flex-col lg:h-auto lg:min-h-[20rem] lg:flex-row"
            : "h-[28rem] flex-col"
        }`}
      >
        <div
          className={`relative w-full shrink-0 overflow-hidden ${
            featured
              ? "h-1/2 lg:h-auto lg:min-h-[260px] lg:w-1/2"
              : "h-1/2"
          }`}
        >
          <ProjectMedia
            src={project.img}
            alt={displayTitle}
            category={project.category}
            sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 100vw, 50vw"}
            className="object-cover object-center"
          />
        </div>
        <div
          className={`flex min-h-0 flex-1 flex-col p-3 sm:p-4 ${
            featured ? "lg:w-1/2 lg:justify-between lg:p-6" : ""
          }`}
        >
          <div className="flex min-h-0 flex-col">
            <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-widest text-teal-400 font-semibold">
              {project.featuredLabel && <span>{project.featuredLabel}</span>}
              <span className="text-muted-2">{project.category}</span>
            </div>
            <h3 className="mt-1.5 poppins-font font-bold text-lg sm:text-xl leading-snug">{displayTitle}</h3>
            <p className="mt-1 text-sm text-foreground">{project.headline}</p>
            <p className="mt-1.5 text-muted text-sm leading-snug line-clamp-2">{project.blurb}</p>
            <div className="mt-2 flex flex-wrap gap-1.5 mb-2">
              {project.stack.slice(0, featured ? 6 : 4).map((tech) => (
                <Badge key={tech} customCss="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          {(project.links.length > 0 || project.featured) && (
            <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              {project.links.length > 0 && (
                <div className="flex flex-wrap items-center gap-3">
                  {project.links.map((link) => (
                    <ProjectExternalLink key={`${link.label}-${link.href}`} link={link} />
                  ))}
                </div>
              )}
              {project.featured && (
                <Link
                  href={`/work/${project.slug}`}
                  className="w-fit shrink-0 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors"
                >
                  Read case study ↗
                </Link>
              )}
            </div>
          )}
        </div>
      </article>
    </ScrollAnimation>
  );
};

export default WorkCard;
