import CodeCard from "@/components/CodeCard";
import Image from "next/image";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import TypingEffect from "@/components/TypingEffect/TypingEffect";
import Carousel from "@/components/Carousel/Carousel";
import Footer from "@/components/Footer/Footer";
import { StripBgColor } from "./types/type";

export default function Home() {
  const expertise = [
    {
      id: "EXP01",
      title: "Frontend Dev",
      tech: ['NextJS', 'VueJS'],
      description: "Front-end developer with 4 years of experience in creating responsive and high-performance web applications using JavaScript, TypeScript, NextJS, and VueJS. Skilled in delivering intuitive and accessible user experiences.",
      logo: "/react.svg",
      stripColor: StripBgColor.Blue
    },
    {
      id: "EXP02",
      title: "Backend Dev",
      tech: ['Spring Boot, NestJS, Express.js'],
      description: "Back-end developer with 3 years of experience in scalable architectures and secure applications, skilled in Java, TypeScript, Spring Boot, and NestJS, specializing in efficient RESTful APIs and business-driven solutions.",
      logo: "/computer.svg",
      stripColor: StripBgColor.Green
    },
    {
      id: "EXP03",
      title: "Flutter Dev",
      tech: ['Apex', 'LWC', 'Aura', 'Visualforce'],
      description: "Salesforce developer with 3+ years of experience in Apex, LWC, Aura, and Visualforce, specializing in triggers, asynchronous operations, API integrations, and custom components.",
      logo: "/salesforce-icon.svg",
      stripColor: StripBgColor.Indigo
    },
    {
      id: "EXP04",
      title: "Frontend Dev",
      tech: ['CSS', ' Tailwind CSS', ' Semantic UI'],
      description: "Front-end developer with expertise in advanced CSS, including 3D effects, and proficiency in Tailwind CSS, Semantic UI and Bootstrap. Skilled in crafting responsive, highly customizable designs with a focus on performance and scalability.",
      logo: "/interface-ui-ux-icon.svg",
      stripColor: StripBgColor.Pink
    },
    {
      id: "EXP05",
      title: "Other tool",
      tech: ['Git', 'Gitlab', ' Docker', '...'],
      description: "Experienced in using version control tools (Git, GitHub, GitLab, Bitbucket) and containerization technologies like Docker and Kubernetes. Familiar with managing clusters, deploying applications, and leveraging Swarm for container orchestration in daily workflows.",
      logo: "/gear-svgrepo.svg",
      stripColor: StripBgColor.Gray
    },
    {
      id: "EXP06",
      title: "Cloud, Database",
      tech: ['MySQL', 'MongoDB', 'Firebase', '...'],
      description: "Skilled in cloud and database technologies, with expertise in PostgreSQL, MongoDB, Firebase, Cloudflare, and Cloudinary, focused on building scalable, secure applications with optimized performance and seamless media integration.",
      logo: "/gear-svgrepo.svg",
      stripColor: StripBgColor.Red
    },
  ]

  const projects = [
    {
      id: "proj1",
      title: "ARON - Restaurant Menu and Ticket Management System",
      img: "/restaurant-admin-plates.png",
      demo: "https://nwaar-restaurant-admin.netlify.app/",
      repo: "#",
      description: "Created a web application with Vue.js, Tailwind CSS, Cloudflare, and Cloudinary, enabling restaurants to design detailed menus and track customer orders (in preparation, ongoing, completed)."
    },
    {
      id: "proj2",
      title: "ARON - Restaurant Order Management System",
      img: "/restaurant-client-laptop_mobile.png",
      demo: "https://nwaar-restaurant-client.netlify.app/",
      repo: "#",
      description: "A web application built with Vue.js, Tailwind CSS, and Cloudflare, replacing physical menus in restaurants. It enables customers to browse, order, and customize their meals digitally."
    },
    {
      id: "proj3",
      title: "Take a look",
      img: "/take-a-look.png",
      demo: "#",
      repo: "#",
      description: "A Chrome extension built with React and Tailwind CSS for easy link sharing to social networks, with an admin page for adding new sharing options."
    },
    {
      id: "proj4",
      title: "SHI-FU-MI",
      img: "/shi-fu-mi-desktop-top.png",
      demo: "#",
      repo: "#",
      description: "A fun and engaging rock-paper-scissors game with a cartoon theme, built using Next.js and Tailwind CSS. It combines playful visuals with smooth functionality for an enjoyable gaming experience"
    },
    {
      id: "proj5",
      title: "Portfolio",
      img: "/portfolio-client-desktop.png",
      demo: "#",
      repo: "#",
      description: "Built a personal portfolio using Next.js and Tailwind CSS to effectively showcase my skills, featuring engaging effects and a clean, intuitive navigation experience."
    },
    {
      id: "proj6",
      title: "Gespro+ - ITW",
      img: "/itw.png",
      demo: "https://www.itw.com/",
      repo: "#",
      description: "Led a Salesforce project digitizing the APQP process, designing the system, leveraging no-code tools, and creating test classes for functionality."
    },
    {
      id: "proj7",
      title: "NOELI - Wheater Component",
      img: "/weather-app.png",
      demo: "#",
      repo: "#",
      description: "A Lightning Web Component (LWC) designed to graphically display weather information for a selected area. Users can filter and select zones through an intuitive process for tailored weather visualization."
    },
    {
      id: "proj8",
      title: "All the roads of Chittagong",
      img: "/card.png",
      demo: "#",
      repo: "#",
      description: "A visually engaging card created with HTML and CSS 3D effects. It opens interactively on hover to reveal a lorem ipsum text, showcasing dynamic and modern design."
    },
    {
      id: "proj9",
      title: "Random quote generator",
      img: "/ramdom-quote-generator.png",
      demo: "#",
      repo: "#",
      description: "Built a React and Spring Boot app for random quotes with secure authentication, tested with Testcontainers and Mockito."
    },
    {
      id: "proj10",
      title: "Todo App",
      img: "/todo-react-spring.png",
      demo: "#",
      repo: "#",
      description: "A full-stack to-do app with React frontend and Spring Boot backend, featuring secure user authentication for personalized task management."
    },
  ]

  const experienceCards = [
    
    {
      id: "exp02",
      country: "Cameroon",
      city: "Yaounde",
      job: "Full-Stack Developer",
      compagnySite: "#",
      compagnyName: "ARON",
      compagnyLogo: "/google_logo.svg",
      linkedin: "#",
      description: "I worked as a Full-Stack Developer and Salesforce Specialist, contributing to web applications with React and Vue.js while building scalable APIs using NestJS and Spring Boot. I also delivered three Salesforce projects for Italian companies in the energy, automotive, and healthcare sectors, customizing solutions with Apex and LWC to enhance business workflows.",
      techs: ["ReactJS", "NextJS", "Vue.js", "Salesforce", "LWC", "Apex", "NodeJS", "Spring Boot"],
      startYear: "2024",
      endYear: "Present",
    },{
      id: "exp01",
      country: "Cameroon",
      city: "Yaounde",
      job: "Full-Stack Developer",
      compagnySite: "",
      compagnyName: "NOELI",
      compagnyLogo: "/openai_logo.svg",
      linkedin: "https://cm.linkedin.com/in/noeli-cloud-393a1618a",
      description: "I worked as a Full-Stack Developer and Salesforce Specialist, contributing to web applications with React and Vue.js while building scalable APIs using NestJS and Spring Boot. I also delivered three Salesforce projects for Italian companies in the energy, automotive, and healthcare sectors, customizing solutions with Apex and LWC to enhance business workflows.",
      techs: ["ReactJS", "NextJS", "Vue.js", "Salesforce", "LWC", "Apex", "NodeJS", "Spring Boot", "NestJS"],
      startYear: "2022",
      endYear: "2024",
    },
  ];

  const animatedTexts = [
    "Full-stack Developer",
    "DevOps Practitioner",
    "Waffle eater 🧇",
  ];

  const certifictions = [
    { 
        src: "/certification-Platform_Developer_I.png",
        alt: "certification-gcp",
        bg: "bg-blue-50"
    },
    { 
        src: "/certification-gcp.png",
        alt: "certification-gcp",
        bg: "bg-white/10 backdrop-blur-lg rounded-lg shadow-lg"
    },
  ];

  
  return (
    <div className="min-h-screen overflow-hidden font-[family-name:var(--font-geist-sans)]">
      <Header />
      {/* Landing */}
      <section className="mt-24">
        <div className="relative flex justify-between flex-col lg:flex-row w-full overflow-hidden mx-auto max-w-[1240px] sm:mt-20">
          <div className="p-7 pt-0 lg:w-[60%] text-lg">
            <h1 className="text-4xl font-extrabold mb-2">Salut ! 👋</h1>
            <h2 className="text-2xl font-extrabold mb-6">
              <TypingEffect texts={animatedTexts}/>
            </h2>
            <p>

              Hi there! I&apos;m <span className="font-extrabold text-teal-400 text-lg">NGANDA ONANA Steve</span>. — Software Engineer, 
              Fullstack developer <span className="font-extrabold text-teal-400 text-lg">(React, Next.js, Vue.js, NestJS, Spring Boot)</span> 
              &nbsp;and <span className="font-extrabold text-teal-400 text-lg">Salesforce developer</span>
              I&apos;m the kind of person who sees a blank screen as a playground for creativity and challenges as puzzles waiting to be solved.
              <br />
              But hey, life isn&apos;t all code. When I&apos;m not crafting clean, collaborative solutions, you&apos;ll find me sharing knowledge or 
              rocking out on my guitar.or indulging in waffles (the official fuel for brilliance, trust me). I bring a mix of creativity, 
              professionalism, and a touch of humor to deliver solutions that truly solve problems and make an impact. 👨🏽‍💻🎸🧇
          
            </p>
          </div>
          <div className="w-full lg:w-[40%] lg:max-w-[940px] max-w-[752px] h-full mb-[12%] mx-auto lg:mx-0">
            <div className="max-w-3/4 sm:max-w-1/2 lg:max-w-3/4 h-full  mx-auto relative inset-0">
              {/* frame */}
              <div>
                <Image
                  src="/ryan-colored-office-2.jpg"
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
        <section id="section2">
          <div className=" mb-8 sm:mb-11 flex sm:justify-center ml-5 sm:ml-0 justify-start flex-nowrap align-middle poppins-font font-bold text-3xl sm:text-4xl lg:text-5xl">
            Expertise
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5 sm:px-0 md:mx-10 max-w-[1240px] gap-1 xxs:gap-2 md:gap-0">
              {
                expertise.map(exp => {
                  return <CodeCard 
                    key={exp.id}
                    title={exp.title}
                    tech={exp.tech}
                    description={exp.description}
                    logo={exp.logo}
                    stripColor={exp.stripColor}
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
        <section id="section3" className="mb-40 sm:mb-48 ">
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
                  description={proj.description}
                />
              })
            }
          </div>
        </section>


        {/* Experience */}
        <section className="mb-32">
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
                  linkedin={exp.linkedin}
                />
              })
            }
          </div>
        </section>


        {/* Certification */}
        <section id="section4" className="mb-10 sm:mb-32">
          <div className=" sm:mb-16 flex sm:justify-center ml-5 sm:ml-0 justify-start flex-nowrap align-middle poppins-font font-bold text-3xl sm:text-4xl lg:text-5xl">
            Certification
          </div>
          <div className="px-5 xs:px-4 mx-auto max-w-[940px]">
          <Carousel images={certifictions}/>
          </div>
        </section>
        

        {/* Footer */}
        <Footer></Footer>

      </div>
    </div>
  );
}
