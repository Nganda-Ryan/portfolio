import { StripBgColor } from "@/app/types/type";

export type ExpertiseItem = {
  id: string;
  title: string;
  tech: string[];
  description: string;
  logo: string;
  stripColor: StripBgColor;
};

export const expertise: ExpertiseItem[] = [
  {
    id: "backend-api",
    title: "Backend & API Engineering",
    tech: ["Java", "Spring Boot", "TypeScript", "NestJS", "Node.js", "Express.js", "REST APIs"],
    description:
      "I build backend services and APIs that support business applications, manage business logic and facilitate communication between systems.",
    logo: "/computer.svg",
    stripColor: StripBgColor.Green,
  },
  {
    id: "enterprise-salesforce",
    title: "Enterprise Platforms & Salesforce",
    tech: ["Apex", "Lightning Web Components", "Aura", "Visualforce", "Salesforce Flow", "Salesforce CPQ"],
    description:
      "I develop and customize enterprise solutions on Salesforce, from business process automation to custom components, platform integrations and application support.",
    logo: "/salesforce-icon.svg",
    stripColor: StripBgColor.Indigo,
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    tech: ["React", "Next.js", "Vue.js", "JavaScript", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    description:
      "I build responsive web applications with a focus on usability, maintainable component structures and clear interactions between frontend interfaces and backend services.",
    logo: "/react.svg",
    stripColor: StripBgColor.Blue,
  },
  {
    id: "data-integrations",
    title: "Data, Integrations & Delivery",
    tech: [
      "PostgreSQL",
      "Firebase",
      "REST",
      "SOAP",
      "Docker",
      "GitHub Actions",
      "GitLab CI/CD",
      "Cloudflare",
    ],
    description:
      "I work with relational and document databases, connect third-party platforms and use development tools to support consistent application delivery.",
    logo: "/server.svg",
    stripColor: StripBgColor.Red,
  },
];
