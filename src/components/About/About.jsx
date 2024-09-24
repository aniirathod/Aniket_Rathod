import React, { useRef } from "react";
import ScrambleTextReveal from "../TextReveal/ScrambleTextReveal";

import { ImageEffect, TextReveal } from "../index";
import myImage from "../../assets/images/Aniket_Profile.webp";

const About = () => {
  const text =
    "Passionate about web technology, I excel at transforming creative ideas into dynamic, user-friendly web experiences, crafting clean and emotional interfaces.Currently in the final year of my BE degree from SPPU University, I aim to secure a challenging role while exploring freelance opportunities to bring diverse projects to life.";

  return (
    <div className="flex flex-col justify-between w-11/12 m-auto pb-9 lg:flex-row">
      <div className="w-1/3 py-8 text-lg font-semibold sm:text-2xl lg:py-0 lg:text-lg ">
        <ScrambleTextReveal text="About" />
      </div>
      <div className="flex justify-center w-full lg:w-1/3">
        <div className="w-7/12 h-72 sm:h-96 sm:w-6/12 lg:w-7/12 lg:h-72">
          <ImageEffect
            src={myImage}
            classname="object-cover w-full h-full rounded-2xl"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/3">
        <div className="px-6 text-base sm:text-xl sm:tracking-wide sm:leading-8 pt-14 lg:pt-0 lg:px-9 lg:text-xs xl:text-sm lg:font-semibold lg:text-white/70  lg:tracking-wider lg:leading-4 xl:leading-6 lg:uppercase">
          <TextReveal text={text} duration={0.2} delay={0.02} />
        </div>
      </div>
    </div>
  );
};

export default About;
