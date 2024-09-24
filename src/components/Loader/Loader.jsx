import React, { useEffect, useState } from "react";
import { delay, motion, useAnimation } from "framer-motion";
import { Progress } from "../index.js";
const Loader = ({ onLoadingComplete }) => {
  //Loading status
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // creating sequence animation
  const svgAnimation = useAnimation();
  const pageTransition = useAnimation();
  const textTransition = useAnimation();

  // progress count
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          setLoading(false);
          clearInterval(interval);
          return prev;
        }
      });
    }, 30);

    //creating sequences
    const sequence = async () => {
      if (loading) {
        await Promise.all([
          new Promise((resolve) =>
            setTimeout(() => {
              svgAnimation.start("animate").then(resolve);
            }, 0)
          ),
          new Promise((resolve) =>
            setTimeout(() => {
              textTransition.start("animate").then(resolve);
            }, 300)
          ),
        ]);
      } else {
        // Once loading is done, start page transition
        await pageTransition.start({ y: "-100%" });
        onLoadingComplete();
      }
    };
    sequence();
  }, [svgAnimation, loading, pageTransition]);

  // svg animation
  const pathVarient = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: [1, 0.5, 1, 0.5, 1],
      transition: {
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const svgVarientLarge = {
    initial: {
      opacity: 1,
      y: "0%",
      x: "0%",
      scale: 1,
    },
    animate: {
      opacity: 1,
      scale: 0.2,
      y: "0%",
      x: "-10%",
      transition: {
        duration: 0.2,
        type: "spring",
        damping: 15,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: [1, 0.5, 0],
    },
  };
  const svgVarientMedium = {
    initial: {
      opacity: 1,
      y: "0%",
      x: "0%",
      scale: 1,
    },
    animate: {
      opacity: 1,
      scale: 0.25,
      y: "-20%",
      x: "0%",
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 15,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: [1, 0.5, 0],
    },
  };
  const svgVarientSmall = {
    initial: {
      opacity: 1,
      y: "0%",
      x: "0%",
      scale: 1,
    },
    animate: {
      opacity: 1,
      scale: 0.25,
      y: "-10%",
      x: "0%",
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 15,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: [1, 0.5, 0],
    },
  };

  // text varient

  const textVariant = {
    initial: {
      opacity: 1,
      x: "11rem",
    },
    animate: {
      opacity: 1,
      x: "0",
    },
  };

  // svg Paths
  const paths = [
    "M1.59633 28.6667L0 32L18.6239 22.9333L21.6835 16L1.59633 28.6667Z",
    "M1.72936 28.1333L5.58716 25.7333L18.0917 8L14.5 0L1.72936 28.1333Z",
    "M22.0826 16.1333L19.0229 23.0667L22.6147 28.2667L29 32L22.0826 16.1333Z",
    "M14.5 32L22.6147 28.6667L28.2018 32H14.5Z",
  ];

  // Responsive viewBox values
  const viewBoxSmall = "-3 0 35 33";
  const viewBoxMedium = "-7 0 44 33";
  const viewBoxLarge = "-7 0 44 33";

  return (
    <div className="container relative ">
      {/* First page blackish */}
      <motion.div
        className="absolute z-50 flex flex-col items-center justify-center w-screen min-h-screen bg-blackish lg:flex-row "
        initial={{ y: "0%" }}
        animate={pageTransition}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Svg and Text reveal */}
        <div className="flex items-center justify-center w-full -mt-28 md:mt-0 h-1/2 md:h-1/2 md:w-1/3 ">
          <motion.svg
            className=""
            viewBox={
              window.innerWidth < 768
                ? viewBoxSmall
                : window.innerWidth < 1024
                ? viewBoxMedium
                : viewBoxLarge
            }
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            variants={
              window.innerWidth < 768
                ? svgVarientSmall
                : window.innerWidth < 1024
                ? svgVarientMedium
                : svgVarientLarge
            }
            initial="initial"
            animate={svgAnimation}
          >
            {paths.map((path) => (
              <motion.path
                key={path}
                d={path}
                fill="white"
                variants={pathVarient}
                initial="initial"
                animate="animate"
              ></motion.path>
            ))}
          </motion.svg>
        </div>

        <motion.div className="absolute flex items-center justify-center overflow-hidden text-2xl tracking-widest text-justify -mt-15 lg:mt-8 lg:ml-36 xl:text-3xl ">
          {"WELCOME".split("").map((word, index) => (
            <motion.span
              key={index}
              className="inline-block"
              variants={textVariant}
              initial="initial"
              animate={textTransition}
              transition={{
                duration: 0.1,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.1,
                type: "spring",
                bounce: 0.25,
                mass: 0.1,
              }}
            >
              {word === " " ? "\u00A0" : word}
            </motion.span>
          ))}
        </motion.div>

        <Progress classname=" right-72">{`${progress} % `}</Progress>
        <Progress classname=" left-72">{`${progress} % `}</Progress>
      </motion.div>

      {/* second page white */}
      <motion.div
        className="absolute top-0 flex items-center justify-center w-screen min-h-screen bg-white "
        initial={{ y: "0%" }}
        animate={pageTransition}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.1,
        }}
      >
        <span className="text-white">Whiteeeeeeeee.</span>
      </motion.div>
    </div>
  );
};

export default Loader;
