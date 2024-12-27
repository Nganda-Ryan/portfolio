import CodeCard from "@/components/CodeCard";
import Image from "next/image";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import TypingEffect from "@/components/TypingEffect/TypingEffect";
import Carousel from "@/components/Carousel/Carousel";

export default function Home() {
  const expertise = [
    {
      id: "EXP01",
      title: "Backend Dev",
      tech: ['Spring Boot, NestJS'],
      description: "Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript.",
      logo: "/computer.svg"
    },
    {
      id: "EXP02",
      title: "Frontend Dev",
      tech: ['NextJS', 'VueJS'],
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

  const projects = [
    {
      id: "proj1",
      title: "Tryotel – Cross-Platform Travel App",
      img: "/proj1.jpg",
      demo: "#",
      repo: "#",
    },
    {
      id: "proj2",
      title: "Tryotel Web (B2C)",
      img: "/proj2.jpg",
      demo: "#",
      repo: "#",
    },
    {
      id: "proj3",
      title: "AI Lab Granada",
      img: "/proj3.jpg",
      demo: "#",
      repo: "#",
    },
    {
      id: "proj4",
      title: "All the roads of Chittagong",
      img: "/proj4.jpg",
      demo: "#",
      repo: "#",
    },
  ]

  const experienceCards = [
    {
      id: "exp01",
      country: "United States",
      city: "San Francisco",
      job: "Machine Learning ING",
      compagnySite: "https://openai.com",
      compagnyName: "OpenAI",
      compagnyLogo: "/openai_logo.svg",
      linkedin: "https://www.linkedin.com/company/openai/",
      description: "Worked on developing and deploying advanced machine learning models and APIs, including GPT technology.",
      techs: ["Python", "TensorFlow", "PyTorch", "Docker"],
      startYear: "2021",
      endYear: "Present",
    },
    {
      id: "exp02",
      country: "United States",
      city: "Mountain View",
      job: "Software Engineer",
      compagnySite: "https://google.com",
      compagnyName: "Google",
      compagnyLogo: "/google_logo.svg",
      linkedin: "https://www.linkedin.com/company/google/",
      description: "Contributed to various Google services, ensuring high performance and scalability for millions of users.",
      techs: ["JavaScript", "Kubernetes", "React", "TypeScript"],
      startYear: "2018",
      endYear: "2021",
    },
    { 
      id: "exp03",
      country: "United States",
      city: "Redmond",
      job: "Cloud Engineer",
      compagnySite: "https://microsoft.com",
      compagnyName: "Microsoft",
      compagnyLogo: "/microsoft-logo.svg",
      linkedin: "https://www.linkedin.com/company/microsoft/",
      description: "Specialized in Azure cloud infrastructure, building scalable and secure cloud solutions for enterprise clients.",
      techs: ["Azure", "C#", ".NET", "Terraform"],
      startYear: "2016",
      endYear: "2020",
    },
  ];

  const animatedTexts = [
    "Full-stack Developer",
    "DevOps Practitioner",
    "Amateur guitarist 🎸",
    "Waffle eater 🧇",
  ];

  
  return (
    <div className="min-h-screen overflow-hidden font-[family-name:var(--font-geist-sans)]">
      <Header />
      {/* Landing */}
      <section>
        <div className="relative flex justify-between flex-col lg:flex-row w-full overflow-hidden mx-auto max-w-[1240px] sm:mt-20">
          <div className="p-7 lg:w-1/2 text-lg">
            <h1 className="text-4xl font-extrabold mb-2">Salut ! 👋</h1>
            <h2 className="text-2xl font-extrabold mb-6">
              <TypingEffect texts={animatedTexts}/>
            </h2>
            <p>
                Hi there! I&apos;m <span className="font-extrabold text-teal-400 text-lg">NGANDA ONANA Steve</span>, a fullstack developer specializing in React (Next.js), Vue.js, NestJS, 
              and Spring Boot. Curious, passionate, and always up for a challenge, I love bringing unique touches to every project 
              I work on.
              <br />
              Beyond coding, I’m a big fan of playing the guitar, diving into video games, and enjoying waffles (my secret creative fuel). 
              Oh, and I’m all about clean code, collaboration, and turning ideas into something extraordinary. 🎸🎮🧇
            
            </p>
          </div>
          <div className="w-full lg:w-1/2 lg:max-w-[940px] max-w-[752px] h-full mb-[12%] mx-auto lg:mx-0">
            <div className="max-w-3/4 h-full mx-auto relative inset-0">
              {/* frame */}
              <div>
                <Image
                  src="/ryan-violet.png"
                  sizes="100vw"
                  width={472}
                  height={529}
                  alt="Ryan"
                  className="w-full s-mask"
                />
              </div>
              
              {/* ThumbsUp */}
              <div className="hidden absolute max-w-[30%] top-auto right-auto bottom-[5%] left-[-17%] -rotate-15">
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

              {/* Pineapple */}
              <div className="hidden absolute max-w-[32%] top-auto right-[-18%] bottom-[3%] left-auto rotate-35">
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
              
              {/* ryan */}
              {/* <div className="s-mask absolute flex items-center justify-center top-4 bottom-0 right-0 left-0 text-9xl">
                <Image
                  src="/ryan-violet.png"
                  sizes="100vw"
                  width={472}
                  height={529}
                  alt="Ryan"
                  className="h-[110%] w-auto"
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Wavy line */}
      <section className="relative flex justify-center items-center sm:-top-12">
        <Image
          src="/MenuUnderlineWavy.svg"
          sizes="100vw"
          width={500}
          height={10}
          alt="MenuUnderlineWavy"
          className="w-screen relative"
        />
      </section>

      <div className="mt-14 lg:mt-20">
        {/* expertice */}
        <section>
          <div className=" mb-8 sm:mb-11 flex sm:justify-center ml-5 sm:ml-0 justify-start flex-nowrap align-middle poppins-font font-bold text-3xl sm:text-4xl lg:text-5xl">
            Expertise
          </div>
          <div className="flex justify-center">
            <div className="flex items-stretch flex-wrap justify-center px-5 sm:px-0 md:flex-row md:mx-10 max-w-[1240px] gap-1 xxs:gap-2 md:gap-0">
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
          </div>
        </section>

        {/* hello-world-html-code */}
        <section className="mb-5">
          <div className="relative w-fit mx-auto opacity-20 -m-5">
            <Image
              src="/hello-world-html-code.webp"
              sizes="100vw"
              width={768}
              height={384}
              alt="hello-world-html-code"
              className="max-h-[291px] xs:max-w-[582px] relative"
          />
          </div>
        </section>

        {/* Projects */}
        <section className="mb-32 sm:mb-56">
          <div className=" mb-8 sm:mb-14 flex sm:justify-center ml-5 sm:ml-0 justify-start flex-nowrap align-middle poppins-font font-bold text-3xl sm:text-4xl lg:text-5xl">
            Projects
          </div>
          <div className="px-5 xs:px-4 mx-auto max-w-[1240px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {
              projects.map(proj => {
                return <ProjectCard 
                  key={proj.id}
                  title={proj.title}
                  img={proj.img}
                  demo={proj.demo}
                  repo={proj.repo}
                />
              })
            }
          </div>
        </section>


        {/* Experience */}
        <section className="mb-32 sm:mb-56">
          <div className=" mb-8 sm:mb-14 flex sm:justify-center ml-5 sm:ml-0 justify-start flex-nowrap align-middle poppins-font font-bold text-3xl sm:text-4xl lg:text-5xl">
            Experience
          </div>
          <div className="px-5 xs:px-4 mx-auto max-w-[940px]">
            {
              experienceCards.map(exp => {
                return <ExperienceCard 
                  key={exp.id}
                  job={exp.job}
                  country={exp.country}
                  city={exp.city}
                  description={exp.description}
                  startYear={exp.startYear}
                  endYear={exp.endYear}
                  compagnyLogo={exp.compagnyLogo}
                  compagnyName={exp.compagnyName}
                  compagnySite={exp.compagnySite}
                  techs={exp.techs}
                />
              })
            }
          </div>
        </section>


        {/* Certification */}
        <section>
          <div className="sm:mb-14 flex sm:justify-center ml-5 sm:ml-0 justify-start flex-nowrap align-middle poppins-font font-bold text-3xl sm:text-4xl lg:text-5xl">
            Certification
          </div>
          <div className="px-5 xs:px-4 mx-auto max-w-[940px]">
          <Carousel />
          </div>
        </section>
        

      </div>
    </div>
  );
}
