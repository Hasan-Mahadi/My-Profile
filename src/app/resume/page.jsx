 "use client"

import { ScrollArea } from '@/components/ui/scroll-area';
import {Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';

 import { FaGithub, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
 
  import { SiTailwindcss, SiNextdotjs, SiTypescript, SiRedux, SiExpress, SiMongodb, SiFirebase, SiPostman, SiNpm, SiVercel, SiNetlify, SiJsonwebtokens, SiShadcnui} from 'react-icons/si';



  //about data

  const about = {
    
      title: 'About me',
      description:'I,m a passionate Full Stack Developer with expertise in the MERN stack, dedicated to crafting clean, efficient, and scalable web applications. strong foundation in both frontend and backend. I focusing on Software Engineering!',
      info:[
        {
          fieldName: "Name",
          fieldValue: "Md.Hasan"
        },
        {
          fieldName: "Phone",
          fieldValue: "(+880) 1766-627499"
        },
        {
          fieldName: "Experience",
          fieldValue: "1+ Year"
        },
        {
          fieldName: "Nationality",
          fieldValue: "Bangladesh"
        },
        {
          fieldName: "Email",
          fieldValue: "hasanmahadiius22@gmail.com"
        },
        {
          fieldName: "Discord",
          fieldValue: "Hasan Mahadi"
        },
        {
          fieldName: "Freelance",
          fieldValue: "Available"
        },
        {
          fieldName: "Languages",
          fieldValue: "English, Bangla"
        },
      ]
    }
  

  //experience data

  const experience = {
    icon:'/assets/resume/badge.svg',
    title: 'My experience',
    description:"I'm a passionate Full Stack Developer with expertise in the MERN stack, dedicated to crafting clean, efficient, and scalable web applications. strong foundation in both frontend and backend. I focusing on Software Engineering!",
    items: [
      {
        company: "Incoming",
        position: "Incoming",
        duration: "Incoming"
      },
      {
        company: "Incoming",
        position: "Incoming",
        duration: "Incoming"
      },
      {
        company: "Incoming",
        position: "Incoming",
        duration: "Incoming"
      },
      {
        company: "Mondelez International",
        position: "Sales & Marketing Specialist",
        duration: "2022-2025"
      },
    ]
  }


  // education data

  const education = {
  icon:'/assets/resume/edu.svg',
  title: 'My education',
  description: "I'm a passionate Full Stack Developer with expertise in the MERN stack, dedicated to crafting clean, efficient, and scalable web applications. strong foundation in both frontend and backend. I focusing on Software Engineering!",
  items: [
    {
      institution: "University of Scholars",
      degree: "Bsc in Computer Science & Engineering",
      duration: "2022-Running"
    },
    {
      institution: "Programming Hero",
      degree: "Full Stack Developer (L-2)",
      duration: "2024"
    },
    {
      institution: "Programming Hero",
      degree: "MERN Stack Developer (L-1)",
      duration: "2023"
    },
    {
      institution: "Programming Hero",
      degree: "MERN Stack Developer (L-1)",
      duration: "2023"
    }
    
  ]
}


 // skills data

 const skills = {
  title:"My skills",
  description:"I'm a passionate Full Stack Developer with expertise in the MERN stack, dedicated to crafting clean, efficient, and scalable web applications. strong foundation in both frontend and backend. I focusing on Software Engineering!",
  skillList: [
     
     
      {
    icon: <FaJs className="text-yellow-400" />,
    name: 'JavaScript',
  },
  {
    icon: <SiTypescript className="text-blue-600" />,
    name: 'TypeScript',
  },
  {
    icon: <FaReact className="text-cyan-400" />,
    name: 'React.js',
  },
  {
    icon: <SiNextdotjs className="text-black dark:text-white" />,
    name: 'Next.js',
  },
  {
    icon: <SiRedux className="text-purple-500" />,
    name: 'Redux / RTK',
  },
  {
    icon: <SiTailwindcss className="text-sky-400" />,
    name: 'Tailwind CSS',
  },
   { icon: <SiJsonwebtokens className="text-emerald-500" />,
     name: 'JWT'
     },
  { icon: <SiShadcnui className="text-fuchsia-500" />,
     name: 'shadcn/ui'
     },
  {
    icon: <FaNodeJs className="text-green-600" />,
    name: 'Node.js',
  },
  {
    icon: <SiExpress className="text-gray-600" />,
    name: 'Express.js',
  },
  {
    icon: <SiMongodb className="text-green-500" />,
    name: 'MongoDB',
  },
  {
    icon: <SiFirebase className="text-orange-400" />,
    name: 'Firebase',
  },
   
  {
    icon: <SiPostman className="text-orange-500" />,
    name: 'Postman',
  },
  {
    icon: <FaGithub className="text-black dark:text-white" />,
    name: 'GitHub',
  },
  {
    icon: <SiNpm className="text-red-500" />,
    name: 'npm',
  },
  {
    icon: <SiVercel className="text-black dark:text-white" />,
    name: 'Vercel',
  },
  {
    icon: <SiNetlify className="text-green-500" />,
    name: 'Netlify',
  },

     
  ]

 }


 
 

const Resume = () => {
  return <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease:"easeIn" },
  }}  
  className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className="container mx-auto">
        <Tabs defaultValue="About me" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about me">About me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className='min-h-[70vh] w-full'>
            <TabsContent value="about me" className="w-full">about me</TabsContent>
            <TabsContent value="education" className="w-full">education</TabsContent>

            </div>
        </Tabs>
      </div>
    </motion.div>
  
}

export default Resume
