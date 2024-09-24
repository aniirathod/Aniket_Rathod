import React, { useCallback, useMemo, useState } from "react";
import { HoverEffect, TextReveal } from "../index";
import { motion } from "framer-motion";
import ScrambleTextReveal from "../TextReveal/ScrambleTextReveal";

const Hero = () => {
  const links = useMemo(
    () => [
      { name: "LinkedIn", path: "https://www.linkedin.com/in/aniket-rathod0" },
      { name: "Github", path: "https://github.com/aniirathod" },
      { name: "Email", path: "mailto:aniketnr5023@gmail.com" },
      { name: "X", path: "" },
    ],
    []
  );

  const marqueText = useMemo(
    () => ["Modern", "High Quality", "Fresh", "Experience"],
    []
  );

  const intro = ` I'm Aniket Rathod ,a web enthusiast turning ideas into interactive realities and crafting digital landscapes where imagination meets technology.`;

  const container = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        duration: 0.02,
      },
    },
  };

  const item = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
  };

  //Transition is taking place on after one

  const [transistionStage, setTransistionStage] = useState(0);
  const handleTransition = useCallback(() => {
    setTransistionStage((prev) => prev + 1);
  }, []);

  // Transition to take place one after one of moder,high quality, fresh, experinces

  const [complete, setComplete] = useState(0);
  const handleMarque = useCallback(() => {
    setComplete((prev) => prev + 1);
  }, []);

  return (
    <>
      <motion.div
        className="w-full min-h-screen pt-36 xs:pt-44 sm:pt-50 md:pt-52 lg:pt-44 xl:pt-48  "
        variants={container}
        initial="initial"
        animate="animate"
        data-scroll
        data-scroll-section
        data-scroll-speed="0.1"
      >
        <div className=" relative  w-full h-[35vh] sm:h-[40vh]  lg:h-[30vh] flex flex-col justify-center items-center  select-none ">
          <div className=" w-full flex justify-center overflow-hidden text-5xl font-semibold uppercase sm:text-6xl md:text-7xl xs:text-6xl lg:text-7xl xl:text-8xl lg:tracking-wider ">
            <motion.div variants={item}> Crafting</motion.div>
          </div>
          <div className="flex flex-col overflow-hidden text-5xl font-semibold text-center uppercase sm:text-6xl md:text-7xl xs:text-6xl lg:text-6xl xl:text-7xl lg:tracking-wider lg:flex-row">
            <motion.div variants={item}>FRONT-END</motion.div>{" "}
            <motion.div variants={item} className="lg:ml-5">
              Experiences
            </motion.div>
          </div>
          {/*Marquee text*/}
          <div className="absolute w-11/12 max-lg:top-0 text-white/70">
            <div className="flex justify-between text-xs font-semibold sm:text-base md:text-base lg:text-xs xl:text-sm">
              {marqueText.map((text, index) => (
                <div
                  key={index}
                  className={`${index == 1 ? "lg:pr-[41vw]" : "pr-0"} ${
                    index == 2 && "hidden lg:block md:block "
                  } ${index == 3 && "hidden lg:block md:block"}`}
                >
                  {complete >= index && (
                    <ScrambleTextReveal
                      text={text}
                      onComplete={handleMarque}
                      duration={0.5}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" w-11/12 mx-auto h-[30vh] flex lg:items-center justify-between flex-wrap text-white/70 xl:px-24 ">
          {transistionStage >= 0 && (
            <div className="overflow-hidden text-xs font-medium uppercase sm:text-base xl:text-base lg:text-sm md:1/3 lg:w-1/3 lg:pl-24">
              <ScrambleTextReveal
                text="Developer"
                onComplete={handleTransition}
              />
            </div>
          )}
          <div className="overflow-hidden text-xs font-medium uppercase sm:text-base lg:text-sm xl:text-base text-start">
            {transistionStage >= 1 && (
              <div>
                <ScrambleTextReveal
                  text="Based in India"
                  onComplete={handleTransition}
                />
              </div>
            )}
          </div>
          <motion.div className="w-11/12 h-full text-sm font-semibold uppercase max-md:mx-auto xs:text-base md:w-1/3 pt-14 md:pt-0 lg:flex items-center  lg:text-sm xl:text-base lg:pl-20 xl:pl-32 text-pretty">
            {transistionStage >= 1 && (
              <div>
                <TextReveal
                  text={intro}
                  char={["Aniket", "Rathod"]}
                  delay={0.1}
                />
              </div>
            )}
          </motion.div>
        </div>
        <div className="flex justify-center w-full mt-14 xs:mt-8 md:-mt-5 lg:mt-10">
          <ul className="flex gap-10 text-sm font-bold sm:text-base lg:text-sm h-7 lg:gap-20 xs:gap-14 ">
            {links.map((link) => (
              <div
                className="relative overflow-hidden cursor-pointer group "
                key={link.name}
              >
                <HoverEffect classname="pb-2 group-hover:-translate-y-7 ">
                  <li className="cursor-pointer">
                    <a href={link.path} target="blank">
                      {transistionStage >= 1 && (
                        <ScrambleTextReveal
                          text={link.name}
                          onComplete={handleTransition}
                        />
                      )}
                    </a>
                  </li>
                </HoverEffect>
              </div>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
