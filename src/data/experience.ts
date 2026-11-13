export type ExperienceItem = {
  id: string;
  country: string;
  city: string;
  job: string;
  companySite: string;
  companyName: string;
  companyLogo: string;
  linkedin: string;
  description: string[];
  contributions: string[];
  focus: string;
  techs: string[];
  startYear: string;
  endYear: string;
};

export const experience: ExperienceItem[] = [
  {
    id: "aron",
    country: "Cameroon",
    city: "Yaoundé",
    job: "Full-Stack Developer",
    companySite: "",
    companyName: "ARON",
    companyLogo: "/google_logo.svg",
    linkedin: "#",
    description: [
      "Contribute to the development and evolution of business web applications, working across frontend interfaces and backend services.",
      "Work with technologies such as React, Vue.js, NestJS and Spring Boot to implement application features, develop APIs and translate business requirements into maintainable software.",
      "Participate in the development lifecycle, from understanding functional requirements to implementing and improving application features.",
    ],
    contributions: [
      "Development of full-stack business web applications.",
      "API design and implementation with NestJS and Spring Boot.",
      "Translation of functional requirements into maintainable application features.",
    ],
    focus: "Full-Stack Development · Backend Services · API Development · Business Applications",
    techs: ["React", "Next.js", "Vue.js", "NestJS", "Spring Boot"],
    startYear: "2024",
    endYear: "Present",
  },
  {
    id: "noeli",
    country: "Cameroon",
    city: "Yaoundé",
    job: "Full-Stack Developer",
    companySite: "",
    companyName: "NOELI",
    companyLogo: "/openai_logo.svg",
    linkedin: "https://cm.linkedin.com/in/noeli-cloud-393a1618a",
    description: [
      "Contributed to the development and customization of business applications, including Salesforce solutions built with Apex and Lightning Web Components.",
      "Worked on business workflows, platform customization and application features, with exposure to both enterprise Salesforce environments and modern web development technologies.",
      "Contributed to implementing solutions aligned with operational requirements and existing business processes.",
    ],
    contributions: [
      "Development of Salesforce business applications for enterprise environments.",
      "Customization with Apex and Lightning Web Components.",
      "Implementation and maintenance of integrations with external systems.",
    ],
    focus: "Salesforce Development · Enterprise Applications · Apex · Lightning Web Components · Integrations",
    techs: ["Salesforce", "Apex", "LWC", "Integrations", "JavaScript"],
    startYear: "2022",
    endYear: "2024",
  },
];
