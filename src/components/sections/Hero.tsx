import Image from "next/image";
import { FolderTreeIcon } from "@animateicons/react/lucide";
import DownloadPdfButton from "@/components/DownloadPdfButton";
import { hero } from "@/data/site";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const Hero = () => {
  return (
    <section id="hero" className="mt-24 scroll-mt-28">
      <div className="relative flex justify-between flex-col lg:flex-row w-full overflow-hidden mx-auto max-w-[1240px] sm:mt-20">
        <div className="px-4 pt-0 pb-7 sm:p-7 lg:w-[60%] text-base">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-2">
            {hero.greeting} 👋
          </h1>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-400 mb-3">
            {hero.title}
          </h2>
          <p className="text-base font-semibold text-muted mb-6">
            {hero.subtitle}
          </p>
          {hero.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mb-4 text-muted leading-relaxed">
              {paragraph}
            </p>
          ))}
          <p className="mb-4 text-sm sm:text-base text-muted-2 italic leading-relaxed">
            {hero.closing}
          </p>
          <div className="flex flex-wrap gap-2 mt-6 mb-8">
            {hero.techChips.map((chip) => (
              <Badge key={chip} customCss="text-sm">
                {chip}
              </Badge>
            ))}
          </div>
          <div className="flex flex-nowrap items-center gap-2 sm:gap-4">
            <Button href="#work">
              <span className="inline-flex items-center gap-2">
                Explore my work
                <FolderTreeIcon size={18} color="currentColor" />
              </span>
            </Button>
            <DownloadPdfButton label="Download resume" />
          </div>
          <p className="mt-6 text-sm text-muted-2">{hero.location}</p>
        </div>
        <div className="w-full lg:w-[40%] lg:max-w-[940px] max-w-[752px] h-full mb-[12%] mx-auto lg:mx-0">
          <div className="max-w-3/4 sm:max-w-1/2 lg:max-w-3/4 h-full mx-auto relative inset-0">
            <div>
              <Image
                src="/ryan-colored-office-2.jpg"
                sizes="100vw"
                width={472}
                height={529}
                alt="Steve Loïc Nganda Onana"
                className="w-full s-mask"
              />
            </div>
            <div className="absolute max-w-[30%] top-auto right-auto bottom-[5%] left-[-17%] -rotate-15">
              <Image
                src="/ThumbsUp_Shadow.svg"
                width={400}
                height={514}
                sizes="100vw"
                alt=""
                className="block max-w-full align-middle overflow-clip"
              />
              <Image
                src="/ThumbsUp.png"
                width={400}
                height={514}
                sizes="100vw"
                alt=""
                className="absolute inset-0 max-w-full align-middle"
              />
            </div>
            <div className="absolute max-w-[32%] top-auto right-[-18%] bottom-[3%] left-auto rotate-35">
              <Image
                src="/Pineapple_Shadow.svg"
                width={400}
                height={760}
                alt=""
                className="block max-w-full align-middle overflow-clip"
              />
              <Image
                src="/Pineapple.png"
                width={400}
                height={760}
                alt=""
                className="absolute inset-0 max-w-full align-middle"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
