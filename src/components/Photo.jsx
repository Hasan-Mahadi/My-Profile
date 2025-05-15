//  "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";


 
 
// const Photo = () => {
//   return <div className="w-full h-full relative">
//     <motion.div initial={{opacity:0}}  animate={{opacity:1, transition:{delay:2, duration:0.4, ease:"easeIn" }, }}>
//         <motion.div initial={{opacity:0}}  animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease:"easeInOut" }, }} className="w-[298px]  h-[270px] xl:w-[498px] xl:h-[430px] mix-blend-lighten  absolute ">
//             <Image src="/assets/my-photo-professional-23.png" priority quality={100}  fill alt="photo" className="object-contain"/>
//         </motion.div>

//         {/* circle */}
//         <motion.svg className="w-[300px] xl:w-[506px] h-[304px] xl:h-[490px]"
//          fill="transparent" 
//          viewBox="0 0 506 506"
//          xmlns="http://www.w3.org/2000/svg"
//          >
//             <motion.circle 
//             cx="253"
//             cy="253"
//             r="250"
//             stroke="#00ff99"
//             strokeWidth="4"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             initial={{strokeDasharray: "24 10 0 0"}}
//             animate={{
//                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
//                rotate:[120,360],
//             }}
//             transition={{
//                 duration:20,
//                 repeat:Infinity,
//                 repeatType:"reverse"
//             }}

//             > 

//             </motion.circle>
//         </motion.svg>
//     </motion.div>
      
//     </div>
  
// }

// export default Photo





"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiMongodb, SiTailwindcss } from "react-icons/si";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.8, duration: 0.6, ease: "easeInOut" },
        }}
        className="relative w-[280px] h-[280px] xl:w-[380px] xl:h-[380px]"
      >
        {/* Main Photo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: { delay: 1, duration: 0.6 },
          }}
          className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10"
        >
          <Image
            src="/assets/my-photo-professional-23.png"
            priority
            quality={100}
            fill
            alt="Professional portrait"
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>

        {/* Floating Tech Icons */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {[
            "text-blue-500",
            "text-purple-500",
            "text-green-500",
            "text-yellow-500",
            "text-red-500",
            "text-pink-500",
          ].map((color, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 1.2 + i * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              className={`absolute text-xl xl:text-2xl ${color}`}
              style={{
                x: `${Math.cos((i * 60 * Math.PI) / 180) * 140}px`,
                y: `${Math.sin((i * 60 * Math.PI) / 180) * 140}px`,
              }}
            >
              {i % 6 === 0 && <FaReact />}
              {i % 6 === 1 && <SiNextdotjs />}
              {i % 6 === 2 && <SiTypescript />}
              {i % 6 === 3 && <FaNodeJs />}
              {i % 6 === 4 && <SiMongodb />}
              {i % 6 === 5 && <SiTailwindcss />}
            </motion.div>
          ))}
        </motion.div>

        {/* Pulsing Rings */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{
            delay: 1.5,
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 rounded-full border-2 border-accent"
        />
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1.3, opacity: 0.1 }}
          transition={{
            delay: 1.7,
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 rounded-full border border-accent/50"
        />

        {/* Glowing Dot */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0.4, 0.8] }}
          transition={{
            delay: 2,
            duration: 3,
            repeat: Infinity,
          }}
          className="absolute top-1/2 left-1/2 w-2 h-2 -mt-1 -ml-1 rounded-full bg-accent shadow-glow"
        />
      </motion.div>

      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>
    </div>
  );
};

export default Photo;
