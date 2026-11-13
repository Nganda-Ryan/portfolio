'use client'
import { Download } from "lucide-react";
import Image from "next/image";
import { siteLinks } from "@/data/site";

const Footer: React.FC = () => {
    const year = new Date().getFullYear();
    const handleDownload = () => {
      const link = document.createElement("a");
      link.href = siteLinks.resume;
      link.download = "Steve-Loic-NGANDA-ONANA-Resume.pdf";
      link.click();
    }
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center mt-10 h-auto py-10 px-5 md:px-10 bg-footer text-muted-2">
      <div className="flex space-x-5 mb-6 md:mb-0">
        <button type="button" onClick={handleDownload} aria-label="Download resume">
          <Download className="text-foreground hover:text-muted"/>
        </button>
        <a
          href={siteLinks.mailto}
          className="transition transform hover:scale-110 hover:text-gray-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/email-icon.svg"
            alt="Email"
            width={28}
            height={28}
            className="w-7 h-7 invert dark:invert-0"
          />
        </a>
        <a
          href={siteLinks.whatsapp}
          className="transition transform hover:scale-110 hover:text-gray-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/whatsapp-icon.svg"
            alt="WhatsApp"
            width={28}
            height={28}
            className="w-7 h-7 invert dark:invert-0"
          />
        </a>
        <a
          href={siteLinks.linkedin}
          className="transition transform hover:scale-110 hover:text-gray-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/linkedin-icon.svg"
            alt="LinkedIn"
            width={28}
            height={28}
            className="w-7 h-7 invert dark:invert-0"
          />
        </a>
        <a
          href={siteLinks.github}
          className="transition transform hover:scale-110 hover:text-gray-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/github-icon.svg"
            alt="GitHub"
            width={28}
            height={28}
            className="w-7 h-7 invert dark:invert-0"
          />
        </a>
      </div>

      <div className="text-center text-sm md:text-base">
        <p className="text-muted-3">
          © {year} Steve Loïc NGANDA ONANA. Designed & built with care.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
