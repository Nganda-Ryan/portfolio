"use client";

import { GithubIcon, LinkIcon } from "@animateicons/react/lucide";
import type { ProjectLink } from "@/data/projects";

function isRepoLink(link: ProjectLink): boolean {
  if (link.label.toLowerCase() === "repo") return true;
  try {
    const host = new URL(link.href).hostname.toLowerCase();
    return host === "github.com" || host.endsWith(".github.io") || host === "gitlab.com";
  } catch {
    return false;
  }
}

type ProjectExternalLinkProps = {
  link: ProjectLink;
  className?: string;
};

const ProjectExternalLink = ({ link, className = "" }: ProjectExternalLinkProps) => {
  const Icon = isRepoLink(link) ? GithubIcon : LinkIcon;

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      title={link.label}
      className={`inline-flex shrink-0 gap-2 items-center text-teal-400 transition-colors hover:text-teal-300 ${className}`}
    >
      <Icon size={18} color="currentColor" aria-hidden />
      <span>{link.label}</span>
    </a>
  );
};

export default ProjectExternalLink;
