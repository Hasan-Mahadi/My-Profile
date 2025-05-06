"use client";

import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const stats = [
  {
    num: 1,
    text: "Years of experience",
  },
  {
    num: 12,
    text: "Projects completed",
  },
  {
    num: 10,
    text: "Technologies mastered",
  },
  {
    num: 500,
    text: "Code commits",
  },
];

const Stats = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className=" pb-12 mt-5 xl:pb-0">
      <div className="container mx-auto">
        <h1
          data-aos="flip-right"
          data-aos-delay="100"
          data-aos-duration="800"
          className="text-xl pb-8 sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center text-white"
        >
          Crafting FullStack
        </h1>

        <div className="grid grid-cols-2 lg:grid-cols-4 flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl  xl:text-6xl  font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
