export type CertificationItem = {
  id: string;
  name: string;
  issuer: string;
  category: string;
  image: string;
  alt: string;
  credentialId?: string;
  issued?: string;
  verifyUrl?: string;
};

export const certifications: CertificationItem[] = [
  {
    id: "salesforce-pd1",
    name: "Salesforce Certified Platform Developer I",
    issuer: "Salesforce",
    category: "Platform Development",
    image: "/certification-Platform_Developer_I.png",
    alt: "Salesforce Certified Platform Developer I",
  },
  {
    id: "gcp",
    name: "Google Cloud credential",
    issuer: "Google Cloud",
    category: "Cloud",
    image: "/certification-gcp.png",
    alt: "Google Cloud certification",
  },
];
