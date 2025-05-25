"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

import { FaGithub, FaJs, FaNodeJs, FaReact } from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPostman,
  SiNpm,
  SiVercel,
  SiNetlify,
  SiJsonwebtokens,
  SiShadcnui,
} from "react-icons/si";

//about data

const about = {
  title: "About me",
  description:
    "I,m a passionate Full Stack Developer with expertise in the MERN stack, dedicated to crafting clean, efficient, and scalable web applications. strong foundation in both frontend and backend. I focusing on Software Engineering!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Md.Hasan",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+880) 1766-627499",
    },
    {
      fieldName: "Education",
      fieldValue: "Dpt of CSE",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Year",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladesh",
    },

    {
      fieldName: "Discord",
      fieldValue: "Hasan Mahadi",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Bangla",
    },
    {
      fieldName: "Email",
      fieldValue: "hasanmahadiius22@gmail.com",
    },
  ],
};

//experience data

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "I'm a passionate Full Stack Developer with expertise in the MERN stack, dedicated to crafting clean, efficient, and scalable web applications. strong foundation in both frontend and backend. I focusing on Software Engineering!",
  items: [
    {
      company: "Mondelez International",
      position: "Sales & Marketing Specialist",
      duration: "2022-2025",
    },
    {
      company: "Incoming",
      position: "Incoming",
      duration: "Incoming",
    },
    {
      company: "Incoming",
      position: "Incoming",
      duration: "Incoming",
    },
    {
      company: "Incoming",
      position: "Incoming",
      duration: "Incoming",
    },
    {
      company: "Incoming",
      position: "Incoming",
      duration: "Incoming",
    },
    {
      company: "Incoming",
      position: "Incoming",
      duration: "Incoming",
    },
  ],
};

// education data

const education = {
  icon: "/assets/resume/edu.svg",
  title: "My education",
  description:
    "I'm a passionate Full Stack Developer with expertise in the MERN stack, dedicated to crafting clean, efficient, and scalable web applications. strong foundation in both frontend and backend. I focusing on Software Engineering!",
  items: [
    {
      institution: "University of Scholars",
      degree: "Bsc in Computer Science & Engineering",
      duration: "2022-Running",
    },
    {
      institution: "Programming Hero",
      degree: "Full Stack Developer (L-2)",
      duration: "2024",
    },
    {
      institution: "Programming Hero",
      degree: "MERN Stack Developer (L-1)",
      duration: "2023",
    },
    {
      institution: "Programming Hero",
      degree: "MERN Stack Developer (L-1)",
      duration: "2023",
    },
    {
      institution: "Programming Hero",
      degree: "MERN Stack Developer (L-1)",
      duration: "2023",
    },
  ],
};

// skills data

const skills = {
  title: "My skills",
  description:
    "I'm a passionate Full Stack Developer with expertise in the MERN stack, dedicated to crafting clean, efficient, and scalable web applications. strong foundation in both frontend and backend. I focusing on Software Engineering!",
  skillList: [
    {
      icon: <FaJs className="text-yellow-400" />,
      name: "JavaScript",
    },
    {
      icon: <SiTypescript className="text-blue-600" />,
      name: "TypeScript",
    },
    {
      icon: <FaReact className="text-cyan-400" />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs className="text-black dark:text-white" />,
      name: "Next.js",
    },
    {
      icon: <SiRedux className="text-purple-500" />,
      name: "Redux / RTK",
    },
    {
      icon: <SiTailwindcss className="text-sky-400" />,
      name: "Tailwind CSS",
    },

    { icon: <SiShadcnui className="text-fuchsia-500" />, name: "shadcn/ui" },
    {
      icon: <FaNodeJs className="text-green-600" />,
      name: "Node.js",
    },
    {
      icon: <SiExpress className="text-gray-600" />,
      name: "Express.js",
    },
    {
      icon: <SiMongodb className="text-green-500" />,
      name: "MongoDB",
    },
    { icon: <SiJsonwebtokens className="text-emerald-500" />, name: "JWT" },
    {
      icon: <SiFirebase className="text-orange-400" />,
      name: "Firebase",
    },

    {
      icon: <SiPostman className="text-orange-500" />,
      name: "Postman",
    },
    {
      icon: <FaGithub className="text-black dark:text-white" />,
      name: "GitHub",
    },
    {
      icon: <SiNpm className="text-red-500" />,
      name: "npm",
    },
    {
      icon: <SiVercel className="text-black dark:text-white" />,
      name: "Vercel",
    },
    {
      icon: <SiNetlify className="text-green-500" />,
      name: "Netlify",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="About me"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about me">About me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* <TabsContent value="about me" className="w-full text-center xl:text-left"> */}
            {/* <div className="flex flex-col gap-[30px]"> */}
            {/* <h3 className="text-4xl font-bold">{about.title}</h3> */}
            {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p> */}
            {/* <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0"> */}
            {/* {about.info.map((item, index) => { */}
            {/* // return <li key={index} className="flex items-center justify-center xl:justify-start  gap-4"> */}
            {/* <span className="text-accent"> {item.fieldName}</span>: */}
            {/* <span className="text-xl  ">{item.fieldValue}</span> */}

            {/* </li> */}
            {/* // })} */}
            {/* </ul> */}
            {/* </div> */}
            {/* </TabsContent> */}

            <TabsContent
              value="about me"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] items-center xl:items-start">
                <h3 className="text-4xl font-bold">{about.title}</h3>

                {/* Image part */}
                <img
                  src="https://i.postimg.cc/Gmcn1NrZ/2.png"
                  alt="About Image"
                  className="w-[200px] h-auto rounded-xl shadow-lg"
                />

                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-accent"> {item.fieldName}</span>:
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px]  text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px]  text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl 
            flex flex-col justify-center  items-center  lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-xl max-w-[260px] min-h-[68px] 
             text-center lg:text-left"
                          >
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px]  rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col  gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-5xl  group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="bg-white text-black">
                              <p className="capitalize"> {skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px]  text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px]  text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl 
                         flex flex-col justify-center  items-center  lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-xl max-w-[260px] min-h-[68px] 
                          text-center lg:text-left"
                          >
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px]  rounded-full bg-accent "></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
