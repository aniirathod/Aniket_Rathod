import React from "react";
import { ImageEffect, ScrambleTextReveal, TextReveal } from "../index";
import { Link } from "react-router-dom";
import inspireImg from "../../assets/images/Inspire_Inform.webp";
import worksImg from "../../assets/images/WorksClone.webp";
import { motion, useInView } from "framer-motion";

const Projects = () => {
  const gitIcon = "https://img.icons8.com/glyph-neue/64/FFFFFF/github.png";
  const allProjects = [
    {
      src: inspireImg,
      name: "Inspire Inform",
      techStack: "Tech:   React JS, Tailwind CSS, Framer Motion, Appwrite",
      github: "https://github.com/aniirathod/Inspire_and_Inform",
      link: "https://inspire-and-inform.vercel.app/",
    },
    {
      src: worksImg,
      name: "Works-Web UI ",
      techStack: "Tech:   Html, CSS , JavaScript, Locomotive JS",
      github: "https://github.com/aniirathod/Works-website-UI",
      link: "https://aniirathod.github.io/Works-website-UI/",
    },
  ];

  return (
    <>
      <div className="w-11/12 pt-16 mx-auto ">
        <div className="w-11/12 text-5xl font-semibold tracking-wide lg:text-6xl lg:font-light lg:tracking-widest mb-7 lg:mb-16">
          <div>{<ScrambleTextReveal text="WORK" />}</div>
        </div>

        <div className="flex flex-wrap justify-between w-full ">
          {allProjects.map((ele, index) => (
            <div
              key={index}
              className={` lg:mb-80 mb-24  w-full sm:w-[45%]  ${
                index % 5 === 0 || index % 5 === 3 || index % 5 === 4
                  ? "lg:w-[55%] xl:w-[50rem] lg:h-[65vh] h-96  "
                  : "lg:w-[40%] xl:w-[30rem] lg:h-[75vh] h-96 "
              } ${index % 2 != 0 ? "lg:-mt-32" : ""}`}
            >
              <Link to={ele.link} target="blank">
                <div className="">
                  <ImageEffect
                    src={ele.src}
                    classname={` ${
                      index % 5 === 0 || index % 5 === 3 || index % 5 === 4
                        ? "xl:w-[50rem] lg:h-[65vh] h-72 w-full  object-cover"
                        : "xl:w-[30rem] lg:h-[75vh] h-72 w-full"
                    }`}
                  />
                </div>
              </Link>
              <div className="w-full mt-2 tracking-wide border-b-2 border-gray-400/50 text-white/70">
                <div className="flex items-center justify-between px-2 text-2xl font-bold lg:text-3xl ">
                  <div className="text-white/90">
                    <ScrambleTextReveal text={ele.name} />
                  </div>
                  <div className="flex items-end gap-6">
                    <div>
                      <Link to={ele.github} target="blank">
                        <img src={gitIcon} alt="GitHub" className="w-6 h-6" />
                      </Link>
                    </div>
                    <div className="text-base font-medium">
                      <Link to={ele.link} target="blank">
                        Visit
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="h-16 px-2 pt-3 text-xs font-medium sm:text-sm lg:text-sm">
                  <TextReveal
                    text={ele.techStack}
                    duration={"0.4"}
                    delay={"0.05"}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
