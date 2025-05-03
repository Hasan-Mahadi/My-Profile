import { animate, motion } from "framer-motion";

// variants
const  staitAnimation = {
    initial:{
        top: "0%"
    },
    animate: {
        top:"100%"
    },
    exit: {
        top: ["100%", "0%"],
    },

}

 
// calculate the revarse index for staggred delay

const revarseIndex = (index) => {
    const totalStep = 6;
    return totalStep - index - 1;
}

const Stair = () => {
  return (
   <>
      
      {/* render 6 motion divs, each representing a step of the stairs. */}
      
     {[...Array(6)].map((_, index)=> {
        return (
        <motion.div  key={index} variants={staitAnimation} initial="initial" animate="animate" exit="exit" transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: revarseIndex(index) * 0.1,
        }}
        className="h-full w-full bg-white relative "
        
        /> 
    )
     })}
    </>
  );
};

export default Stair
