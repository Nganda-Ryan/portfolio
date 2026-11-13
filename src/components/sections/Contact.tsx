import DownloadPdfButton from "@/components/DownloadPdfButton";
import Button from "@/components/ui/Button";
import { contact, siteLinks } from "@/data/site";

const Contact = () => {
  return (
    <section id="contact" className="mb-16 sm:mb-24 scroll-mt-28">
      <div className="px-5 xs:px-4 mx-auto max-w-[760px] text-center">
        <h2 className="poppins-font font-bold text-3xl sm:text-4xl lg:text-5xl">
          {contact.title}
        </h2>
        <p className="mt-4 text-2xl text-teal-400 font-semibold">{contact.subtitle}</p>
        <p className="mt-6 text-muted text-lg leading-relaxed">{contact.body}</p>
        <p className="mt-4 text-sm text-muted-2">{contact.availability}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={siteLinks.mailto}>Email me</Button>
          <Button href={siteLinks.whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp me
          </Button>
          <Button href={siteLinks.linkedin} target="_blank" rel="noopener noreferrer">
            Connect on LinkedIn
          </Button>
          <Button href={siteLinks.github} target="_blank" rel="noopener noreferrer">
            Explore GitHub
          </Button>
          <DownloadPdfButton label="Download resume" />
        </div>
        <p className="mt-8 text-muted-2">
          <a href={siteLinks.mailto} className="hover:text-teal-400">
            {siteLinks.email}
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
