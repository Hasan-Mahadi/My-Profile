"use client";
import DownloadCV from "@/components/DownloadCV";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import Work from "./projects/page";
import Services from "./services/page";
import Contact from "./contact/page";
import SkillsShowcase from "@/components/SkillsShowcase";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col  xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-7">
              Hello I'm <br /> <span className="">Md.Hasan</span>
            </h1>

            <div className="h-12 md:h-14 lg:h-16 text-xl md:text-2xl lg:text-3xl font-medium text-accent">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1500,
                  "MERN Specialist",
                  1500,
                  "Wix Developer",
                  1500,
                  "Software Engineer",
                  1500,
                  "Tech Enthusiast",
                  1500,
                ]}
                wrapper="span"
                speed={100}
                repeat={Infinity}
              />
            </div>
            <p className="max-w-[500px]  mb-9 text-white/80">
              I'm a passionate Full Stack Developer with expertise in the MERN
              stack, dedicated to crafting clean, efficient, and scalable web
              applications. strong foundation in both frontend and backend. I
              focusing on Software Engineering!
            </p>

            {/* btn and socials */}

            <div className="flex flex-col xl:flex-row items-center gap-8 ">
              <DownloadCV />

              <div className="mb-8 xl:mb-0 ">
                <Socials
                  containerStyle="flex gap-6"
                  iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent  hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />

      <SkillsShowcase />

      <h1
        data-aos="flip-right"
        data-aos-delay="100"
        data-aos-duration="800"
        className="text-xl lg:mt-20 mt-10 sm:text-2xl md:text-3xl lg:text-4xl 
  font-bold leading-tight text-center text-white"
      >
        Projects Showcase
      </h1>
      <Work />

      <Services/>

      <Contact/>
    </section>
  );
};

export default Home;
