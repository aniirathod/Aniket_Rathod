import React, { useRef } from "react";
import { TextReveal, ScrambleTextReveal, SkillIcon } from "../index";

const Skills = () => {
  //Skills texts
  const skills =
    "Html - Css - JavaScript - React.Js - Tailwind CSS - GSAP - Framer Motion - Redux - Java - MySQL - Git - GitHub .";

  return (
    <section className="flex flex-col justify-between w-11/12 m-auto pt-7 sm:pt-16 lg:flex-row">
      <div className="w-1/3 py-4 text-lg font-semibold sm:text-2xl lg:py-0 lg:text-lg ">
        <ScrambleTextReveal text="Skills" />
      </div>
      <div className="flex w-full lg:w-3/5 ">
        <div className="flex flex-wrap px-6 text-base leading-8 tracking-wide sm:leading-9 sm:text-2xl xs:text-lg lg:px-0 lg:text-xl xl:text-2xl lg:font-light lg:tracking-tight lg:text-white/80 ">
          <TextReveal text={skills} duration={0.5} delay={0.02} classname="" />

          <div className="pt-4">
            <SkillIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
