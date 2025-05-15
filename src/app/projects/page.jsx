// "use client";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { BsArrowUpRight, BsGithub } from "react-icons/bs";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import Link from "next/link";
// import Image from "next/image";
// import WorkSliderBtns from "@/components/WorkSliderBtns";

// const projects = [
//   {
//     num: "01",
//     category: "fullstack",
//     title: "Project 1",
//     description:
//       "Your one-stop online destination for books of all genres. Whether you're a passionate reader, a student, or looking for the perfect gift, we have something for everyone.",
//     stack: [
//       { name: "MERN" },
//       { name: "Typscript" },
//       { name: "Redux" },
//       { name: "Shadcn" },
//       { name: "tailwindcss" },
//     ],
//     image: "/assets/Projects-1-ss.png",
//     live: "https://book-shop-app-five.vercel.app/",
//     github: "https://github.com/Hasan-Mahadi/Book-Shop-Frontend-Site.git",
//   },
//   {
//     num: "02",
//     category: "fullstack",
//     title: "Project 2",
//     description:
//       "Your one-stop online destination for Student and Tutor. you're a passionate reader, a student, or looking for the perfect Teacher, we have something for everyone.",
//     stack: [
//       { name: "MERN" },
//       { name: "Typscript" },
//       { name: "Next.js" },
//       { name: "Shadcn" },
//     ],
//     image: "/assets/Projects-Tutor-ss.png",
//     live: "https://tutor-link-frontend-nine.vercel.app/",
//     github: "https://github.com/Hasan-Mahadi/Tutor-Link-Frontend-Team-Projects.git",
//   },
//   {
//     num: "03",
//     category: "Frontend",
//     title: "Project 3",
//     description:
//       " I'm a passionate Full Stack Developer with expertise in the MERN stack, dedicated to crafting clean, efficient, and scalable web applications. ",
//     stack: [{ name: "Next.js" }, { name: "Node.js" }, { name: "tailwindcss" }],
//     image: "/assets/Projects-3-.png",
//     live: "",
//     github: "",
//   },
// ];

// const Work = () => {
//   const [project, setProject] = useState(projects[0]);

//   const handleSlideChange = (swiper) => {
//     const currentIndex = swiper.activeIndex;

//     setProject(projects[currentIndex]);
//   };

//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       animate={{
//         opacity: 1,
//         transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
//       }}
//       className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
//     >
//       <div className="container mx-auto">
//         <div className="flex flex-col xl:flex-row xl:gap-[30px] ">
//           <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
//             <div className="flex flex-col  gap-[30px] h-[50%]">
//               <div className="text-8xl leading-none font-extrabold text-transparent  text-outline">
//                 {project.num}
//               </div>

//               <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all  duration-500  capitalize">
//                 {project.category} projects
//               </h2>
//               <p className="text-white/60">{project.description}</p>
//               <ul className="flex gap-4">
//                 {project.stack.map((item, index) => {
//                   return (
//                     <li key={index} className="text-xl text-accent">
//                       {item.name},{index !== project.stack.length - 1 && ","}
//                     </li>
//                   );
//                 })}
//               </ul>

//               <div className="border border-white/20"></div>
//               <div className="flex items-center  gap-4">
//                 <Link href={project.live}>
//                   <TooltipProvider delayDuration={100}>
//                     <Tooltip>
//                       <TooltipTrigger
//                         className="w-[70px] h-[70px] rounded-full bg-white/5
//                        flex justify-center items-center group"
//                       >
//                         <BsArrowUpRight className="text-white text-3xl group-hover:text-accent  " />
//                       </TooltipTrigger>
//                       <TooltipContent className="bg-white text-black">
//                         <p>Live Projects</p>
//                       </TooltipContent>
//                     </Tooltip>
//                   </TooltipProvider>
//                 </Link>

//                 <Link href={project.github}>
//                   <TooltipProvider delayDuration={100}>
//                     <Tooltip>
//                       <TooltipTrigger
//                         className="w-[70px] h-[70px] rounded-full bg-white/5
//       flex justify-center items-center group"
//                       >
//                         <BsGithub className="text-white text-3xl group-hover:text-accent  " />
//                       </TooltipTrigger>
//                       <TooltipContent className="bg-white text-black">
//                         <p>Github repository</p>
//                       </TooltipContent>
//                     </Tooltip>
//                   </TooltipProvider>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="w-full xl:w-[50%]">
//             <Swiper
//               spaceBetween={30}
//               slidesPerView={1}
//               className="xl:h-[520px] mb-12"
//               onSlideChange={handleSlideChange}
//             >
//               {projects.map((project, index) => {
//                 return (
//                   <SwiperSlide key={index} className="w-full ">
//                     <div className="h-[460px]  relative group flex justify-center items-center bg-pink-50/20">
//                       <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
//                       <div className="relative w-full h-full ">
//                         <Image
//                           src={project.image}
//                           fill
//                           className="object-cover"
//                           alt=""
//                         />
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                 );
//               })}

//               <WorkSliderBtns containerStyles="flex gap-2 absolute right-0  bottom-[calc{50%_-_22px}] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none  " btnStyles="bg-accent hover:bg-accent-hover text-primary  text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Work;

"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub, BsX } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "BookShop - E-commerce Platform",
    description:
      "A complete online bookstore with user authentication, product catalog, shopping cart, and payment processing.",
    stack: [
      { name: "MERN" },
      { name: "TypeScript" },
      { name: "Redux" },
      { name: "Shadcn" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/Projects-1-ss.png",
    live: "https://book-shop-app-five.vercel.app/",
    github: "https://github.com/Hasan-Mahadi/Book-Shop-Frontend-Site.git",
    details: {
      features: [
        "User authentication with JWT",
        "Product search and filtering",
        "Shopping cart functionality",
        "Admin dashboard",
        "Payment integration",
      ],
      challenges:
        "Implementing real-time inventory updates while maintaining performance",
      solutions:
        "Used Redux for state management and optimized database queries",
    },
  },
  {
    num: "02",
    category: "fullstack",
    title: "TutorLink - Education Platform",
    description:
      "A platform connecting students with tutors featuring scheduling and progress tracking.",
    stack: [
      { name: "MERN" },
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "Shadcn" },
    ],
    image: "/assets/Projects-Tutor-ss.png",
    live: "https://tutor-link-frontend-nine.vercel.app/",
    github:
      "https://github.com/Hasan-Mahadi/Tutor-Link-Frontend-Team-Projects.git",
    details: {
      features: [
        "Tutor-student matching",
        "Video call integration",
        "Scheduling system",
        "Progress tracking",
      ],
      challenges:
        "Implementing real-time video calls across different networks",
      solutions:
        "Used WebRTC with fallback options and connection optimization",
    },
  },
  {
    num: "03",
    category: "frontend",
    title: "Portfolio Showcase",
    description:
      "A modern portfolio website to showcase my projects and skills.",
    stack: [
      { name: "Next.js" },
      { name: "Framer Motion" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/Projects-3-.png",
    live: "https://my-portfolio-three-blush-47.vercel.app/",
    github: "https://github.com/Hasan-Mahadi/My-Profile.git",
    details: {
      features: [
        "Interactive animations",
        "Responsive design",
        "Project showcase",
        "Dark/light mode",
      ],
      challenges: "Balancing animations with performance",
      solutions: "Optimized animations using Framer Motion and lazy loading",
    },
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [showDetails, setShowDetails] = useState(false);
  const [currentDetails, setCurrentDetails] = useState(null);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  const openDetails = (project) => {
    setCurrentDetails(project.details);
    setShowDetails(true);
  };

  const closeDetails = () => {
    setShowDetails(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 relative"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <p className="text-white/80">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 rounded-full text-accent text-sm"
                  >
                    {item.name}
                  </span>
                ))}
              </div>

              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger
                          className="w-[70px] h-[70px] rounded-full bg-white/5
                           flex justify-center items-center group hover:bg-accent/20 transition-all"
                        >
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent transition-all" />
                        </TooltipTrigger>
                        <TooltipContent className="bg-white text-black">
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {project.github && (
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger
                          className="w-[70px] h-[70px] rounded-full bg-white/5
                          flex justify-center items-center group hover:bg-accent/20 transition-all"
                        >
                          <BsGithub className="text-white text-3xl group-hover:text-accent transition-all" />
                        </TooltipTrigger>
                        <TooltipContent className="bg-white text-black">
                          <p>GitHub Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                <button
                  onClick={() => openDetails(project)}
                  className="px-6 py-3 bg-accent hover:bg-accent-hover text-primary rounded-lg font-medium transition-all"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover group-hover:scale-105 transition-all duration-500"
                        alt={project.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full"
              />
            </Swiper>
          </div>
        </div>
      </div>

      {/* Details Modal */}
      {showDetails && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="bg-gray-900 border border-white/20 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative"
          >
            <button
              onClick={closeDetails}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-all"
            >
              <BsX size={28} />
            </button>

            <h3 className="text-2xl font-bold text-white mb-4">
              Project Details
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-accent text-lg mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-2 text-white/80">
                  {currentDetails?.features?.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-accent text-lg mb-2">Challenges:</h4>
                <p className="text-white/80">{currentDetails?.challenges}</p>
              </div>

              <div>
                <h4 className="text-accent text-lg mb-2">Solutions:</h4>
                <p className="text-white/80">{currentDetails?.solutions}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Work;
