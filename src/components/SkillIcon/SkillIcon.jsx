import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import GSAP from "../../assets/images/GSAP.png";
import Framer from "../../assets/images/Framerpng.png";

const SkillIcon = () => {
  const icons = [
    {
      link: "https://img.icons8.com/color/48/html-5--v1.png",
      alt: "Html",
    },
    {
      link: "https://img.icons8.com/color/48/css3.png",
      alt: "Css",
    },
    {
      link: "https://img.icons8.com/fluency/48/javascript.png",
      alt: "JavaScript",
    },
    {
      link: "https://img.icons8.com/color/48/react-native.png",
      alt: "react",
    },
    {
      link: "https://img.icons8.com/fluency/48/tailwind_css.png",
      alt: "Tailwind CSS",
    },
    {
      link: GSAP,
      alt: "GSAP",
    },
    {
      link: Framer,
      alt: "Framer Motion",
    },
    {
      link: "https://img.icons8.com/color/48/redux.png",
      alt: "Redux",
    },
    {
      link: "https://img.icons8.com/color/48/java-coffee-cup-logo.png",
      alt: "Java",
    },
    {
      link: "https://img.icons8.com/color/48/my-sql.png",
      alt: "MySql",
    },
    {
      link: "https://img.icons8.com/color/48/git.png",
      alt: "Git",
    },
    {
      link: "https://img.icons8.com/glyph-neue/64/FFFFFF/github.png  ",
      alt: "GitHub",
    },
  ];
  const container = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.23,
      },
    },
  };

  const imgitem = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,

      transition: {
        duration: 0.8,
        ease: [0.37, 0, 0.63, 1],
      },
    },
  };

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <motion.div
      variants={container}
      initial="initial"
      animate={isInView ? "animate" : ""}
      className="flex flex-wrap w-full gap-7 "
      ref={containerRef}
    >
      {icons.map((icon, index) => (
        <motion.div
          variants={imgitem}
          key={index}
          className="sm:pt-8 lg:py-2 xl:py-2"
        >
          <motion.div>
            <img
              src={icon.link}
              alt={icon.alt}
              className="w-10 h-10 sm:w-14 sm:h-14 lg:w-10 lg:h-10 xl:w-14 xl:h-14"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillIcon;
