// "use client";
// import { useEffect, useState } from "react";
// import { FaGithub, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
// import {
//   SiTailwindcss,
//   SiNextdotjs,
//   SiTypescript,
//   SiRedux,
//   SiExpress,
//   SiMongodb,
//   SiFirebase,
//   SiPostman,
//   SiNpm,
//   SiVercel,
//   SiNetlify,
//   SiJsonwebtokens,
//   SiShadcnui,
// } from "react-icons/si";

// const skills = [
//   { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
//   { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
//   { icon: <FaReact className="text-cyan-400" />, name: "React.js" },
//   {
//     icon: <SiNextdotjs className="text-black dark:text-white" />,
//     name: "Next.js",
//   },
//   { icon: <SiRedux className="text-purple-500" />, name: "Redux / RTK" },
//   { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
//   { icon: <SiShadcnui className="text-fuchsia-500" />, name: "shadcn/ui" },
//   { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
//   { icon: <SiExpress className="text-gray-600" />, name: "Express.js" },
//   { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
//   { icon: <SiJsonwebtokens className="text-emerald-500" />, name: "JWT" },
//   { icon: <SiFirebase className="text-orange-400" />, name: "Firebase" },
//   { icon: <SiPostman className="text-orange-500" />, name: "Postman" },
//   { icon: <FaGithub className="text-black dark:text-white" />, name: "GitHub" },
//   { icon: <SiNpm className="text-red-500" />, name: "npm" },
//   { icon: <SiVercel className="text-black dark:text-white" />, name: "Vercel" },
//   { icon: <SiNetlify className="text-green-500" />, name: "Netlify" },
// ];

// const SkillsShowcase = () => {
//   const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (!isPaused) {
//         setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
//       }
//     }, 2000); // Change skill every 2 seconds

//     return () => clearInterval(interval);
//   }, [isPaused]);

//   const currentSkill = skills[currentSkillIndex];

//   return (
//     <div className="py-12 lg:mt-14 mt-2 bg-primary rounded-xl">
//       <div className="container mx-auto px-4">
//         <h2
//           className="text-3xl md:text-4xl font-bold text-center mb-8"
//           data-aos="flip-right"
//           data-aos-delay="100"
//           data-aos-duration="800"
//         >
//           My Tech Stack
//         </h2>

//         {/* Marquee Headline */}
//         <div
//           className="mb-12 py-4 bg-white/5 rounded-lg border border-white/10 overflow-hidden"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           <div className="flex items-center justify-center space-x-8 animate-marquee whitespace-nowrap">
//             {skills.map((skill, index) => (
//               <div
//                 key={index}
//                 className={`inline-flex items-center mx-4 transition-all duration-300 ${
//                   index === currentSkillIndex
//                     ? "scale-110 text-accent"
//                     : "opacity-70"
//                 }`}
//               >
//                 <span className="text-3xl mr-3">{skill.icon}</span>
//                 <span className="text-xl font-medium">{skill.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Featured Skill (Larger Display) */}
//         <div className="flex flex-col items-center">
//           <div className="text-8xl mb-6 transition-all duration-500">
//             {currentSkill.icon}
//           </div>
//           <h3 className="text-4xl font-bold mb-2">{currentSkill.name}</h3>
//           <p className="text-white/70 max-w-md text-center">
//             Currently showing skill {currentSkillIndex + 1} of {skills.length}
//           </p>

//           {/* Progress Dots */}
//           <div className="flex mt-6 space-x-2">
//             {skills.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentSkillIndex(index)}
//                 className={`w-3 h-3 rounded-full transition-all ${
//                   index === currentSkillIndex
//                     ? "bg-accent scale-125"
//                     : "bg-white/30 hover:bg-white/50"
//                 }`}
//                 aria-label={`View ${skills[index].name} skill`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillsShowcase;


"use client";
import { useEffect, useState } from "react";
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
  SiNestjs,
  SiPostgresql,
  SiDocker,
  SiPrisma,
} from "react-icons/si";
import { TbBrandWix } from "react-icons/tb";

const skills = [
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
  { icon: <FaReact className="text-cyan-400" />, name: "React.js" },
  {
    icon: <SiNextdotjs className="text-black dark:text-white" />,
    name: "Next.js",
  },
  { icon: <SiNestjs className="text-red-500" />, name: "Nest.js" },
  { icon: <SiRedux className="text-purple-500" />, name: "Redux / RTK" },
  { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
  { icon: <SiShadcnui className="text-fuchsia-500" />, name: "shadcn/ui" },
  { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
  { icon: <SiExpress className="text-gray-600" />, name: "Express.js" },
  { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
  { icon: <SiPostgresql className="text-blue-700" />, name: "PostgreSQL" },
  { icon: <SiPrisma className="text-teal-500" />, name: "Prisma" },
  { icon: <SiJsonwebtokens className="text-emerald-500" />, name: "JWT" },
  { icon: <SiFirebase className="text-orange-400" />, name: "Firebase" },
  { icon: <TbBrandWix className="text-blue-500" />, name: "Wix Development" },
  { icon: <SiDocker className="text-blue-400" />, name: "Docker" },
  { icon: <SiPostman className="text-orange-500" />, name: "Postman" },
  { icon: <FaGithub className="text-black dark:text-white" />, name: "GitHub" },
  { icon: <SiNpm className="text-red-500" />, name: "npm" },
  { icon: <SiVercel className="text-black dark:text-white" />, name: "Vercel" },
  { icon: <SiNetlify className="text-green-500" />, name: "Netlify" },
];

const SkillsShowcase = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
      }
    }, 2000); // Change skill every 2 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentSkill = skills[currentSkillIndex];

  return (
    <div className="py-12 lg:mt-14 mt-2 bg-primary rounded-xl">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          data-aos="flip-right"
          data-aos-delay="100"
          data-aos-duration="800"
        >
          My Tech Stack
        </h2>

        {/* Marquee Headline */}
        <div
          className="mb-12 py-4 bg-white/5 rounded-lg border border-white/10 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex items-center justify-center space-x-8 animate-marquee whitespace-nowrap">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`inline-flex items-center mx-4 transition-all duration-300 ${
                  index === currentSkillIndex
                    ? "scale-110 text-accent"
                    : "opacity-70"
                }`}
              >
                <span className="text-3xl mr-3">{skill.icon}</span>
                <span className="text-xl font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Skill (Larger Display) */}
        <div className="flex flex-col items-center">
          <div className="text-8xl mb-6 transition-all duration-500">
            {currentSkill.icon}
          </div>
          <h3 className="text-4xl font-bold mb-2">{currentSkill.name}</h3>
          <p className="text-white/70 max-w-md text-center">
            Currently showing skill {currentSkillIndex + 1} of {skills.length}
          </p>

          {/* Progress Dots */}
          <div className="flex mt-6 space-x-2 flex-wrap justify-center gap-1">
            {skills.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSkillIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSkillIndex
                    ? "bg-accent scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`View ${skills[index].name} skill`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsShowcase;