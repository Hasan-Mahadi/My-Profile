import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
 
  

const Home = () => {
  return <section className="h-full">

       <div className="container mx-auto h-full">
       
        <div className="flex flex-col  xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            
            <span className="text-xl">Full Stack Developer</span>
            <h1 className="h1 mb-7">Hello I'm <br /> <span className="text-accent">Md.Hasan</span></h1>
            <p className="max-w-[500px]  mb-9 text-white/80">I'm a passionate Full Stack Developer with expertise in the MERN stack, dedicated to crafting clean, efficient, and scalable web applications.  strong foundation in both frontend and backend. I  focusing on Software Engineering!</p>
            

            {/* btn and socials */}

            <div className="flex flex-col xl:flex-row items-center gap-8 ">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0 ">
                <Socials containerStyle="flex gap-6" iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent  hover:text-primary hover:transition-all duration-500" />
              
              
              </div>
            </div>
          </div>

             {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
           <Photo/>
            </div>
        </div>

        </div>
         
         <Stats/>
    </section>
   
};

export default Home;
