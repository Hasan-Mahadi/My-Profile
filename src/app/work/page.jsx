"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {Swiper, SwiperSlide } from "swiper";
import "swiper/css";
import {BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";


const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Project 1",
    description:"",
    stack: [{ name:"Next.js"}, {  name:"Node.js"},  { name:"tailwindcss"},],
    image: "",
    live:"",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Project 2",
    description:"",
    stack: [{ name:"Next.js"}, {  name:"Node.js"},  { name:"tailwindcss"},],
    image: "",
    live:"",
    github: "",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Project 3",
    description:"",
    stack: [{ name:"Next.js"}, {  name:"Node.js"},  { name:"tailwindcss"},],
    image: "",
    live:"",
    github: "",
  }
]
const Work = () => {
  const [project, setProject] = useState(projects[0]);

  return <motion.section initial={{opacity:0}}  animate={{opacity:1}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0" >
      
      <div className="container mx-auto">
         <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
             <div>
              <div className="text-8xl leading-none font-extrabold text-transparent  text-outline">
                {project.num}

                </div>
                <h2 className="">{project.category} projects</h2>
             </div>

            </div>
          <div className="w-full xl:w-[50%]">slider</div>
         </div>

        </div>
    </motion.section>
  
}

export default Work
