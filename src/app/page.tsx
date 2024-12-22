import CodeCard from "@/components/CodeCard";
import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  const expertise = [
    {
      id: "EXP01",
      title: "Software",
      tech: ['Development'],
      description: "Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.",
      logo: "/computer.svg"
    },
    {
      id: "EXP02",
      title: "Frontend Dev",
      tech: ['React, NextJS'],
      description: "Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.",
      logo: "/react.svg"
    },
    {
      id: "EXP03",
      title: "Flutter Dev",
      tech: ["Android", "iOS"],
      description: "Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.",
      logo: "/flutter.svg"
    },
    // {
    //   id: "EXP04",
    //   title: "Frontend Dev",
    //   tech: ["React", "NextJS"],
    //   description: "Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.",
    //   logo: "/react.svg"
    // },
  ]
  
  return (
    <div className="min-h-screen overflow-hidden font-[family-name:var(--font-geist-sans)]">
      <Header />
      {/* Landing */}
      <section className="w-full p-0 object-fill relative overflow-hidden">
        <div className="lg:max-w-[940px] max-w-[752px] h-full mx-auto mb-[12%]">
          <div className="max-w-3/4 h-full mx-auto relative inset-0">
            <div>
              <Image
                src="/FrontWindowMain.svg"
                sizes="100vw"
                width={867}
                height={550}
                alt="FrontWindowMain"
                className="relative max-w-full align-middle"
                priority 
              />
              <Image
                src="/FrontWindowBackLayer.svg"
                sizes="100vw"
                width={867}
                height={550}
                alt="FrontWindowMain"
                className="absolute inset-0 max-w-full align-middle"
              />
              <div className="flex justify-center items-center flex-nowrap absolute inset-0 max-w-full align-middle honk-font text-3xl xxs:text-4xl xs:text-5xl sm:text-6xl md:text-7xl l">
                STEVE WORLD✨
              </div>
            </div>
            <div className="absolute max-w-[34%] top-auto right-auto bottom-[-15%] left-[-18%] -rotate-15">
              <Image
                src="/ThumbsUp_Shadow.svg"
                width={400}
                height={514}
                sizes="100vw"
                alt="FrontWindowMain"
                className="block max-w-full align-middle overflow-clip"
              />
              <Image
                src="/ThumbsUp.png"
                width={400}
                height={514}
                sizes="100vw"
                alt="FrontWindowMain"
                className="absolute inset-0 max-w-full align-middle"
              />
            </div>
            <div className="absolute max-w-[36%] top-auto right-[-25%] bottom-[-23%] left-auto rotate-35">
              <Image
                src="/Pineapple_Shadow.svg"
                width={400}
                height={760}
                alt="FrontWindowMain"
                className="block max-w-full align-middle overflow-clip"
              />
      
              <Image
                src="/Pineapple.png"
                width={400}
                height={760}
                alt="FrontWindowMain"
                className="absolute inset-0 max-w-full align-middle"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vertical line */}
      <section className="relative flex justify-center items-center">
        <Image
          src="/DottedVerticalLine.svg"
          sizes="100vw"
          width={24}
          height={360}
          alt="FrontWindowMain"
          className="max-h-[44vw] md:max-h-[440px] relative bottom-[13.3vw]"
        />
      </section>

      <section className="relative flex justify-center items-center bottom-[22vw] sm:bottom-[20vw]">
        <Image
          src="/MenuUnderlineWavy.svg"
          sizes="100vw"
          width={500}
          height={10}
          alt="MenuUnderlineWavy"
          className="w-screen relative"
        />
      </section>

      <div className="relative bottom-[12vw]">
        <section className="flex justify-center">
          <div className="flex items-stretch flex-wrap justify-center px-5 sm:px-0 md:flex-row md:mx-10 max-w-[1140px] gap-1 xxs:gap-2 md:gap-0">
            {
              expertise.map(exp => {
                return <CodeCard 
                  key={exp.id}
                  title={exp.title}
                  tech={exp.tech}
                  description={exp.description}
                  logo={exp.logo}
                />
              })
            }
          </div>
        </section>
        <section>
          <div className="relative w-fit mx-auto opacity-20 -m-5">
            <Image
              src="/hello-world-html-code.webp"
              sizes="100vw"
              width={768}
              height={384}
              alt="hello-world-html-code"
              className="max-h-[291px] max-w-[582px] relative"
          />
          </div>
        </section>
      </div>
    </div>
  );
}
