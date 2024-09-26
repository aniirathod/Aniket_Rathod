import React, { useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const SlidingWindow = ({ isOpen, navLinks, setIsOpen }) => {
  const navigate = useNavigate();

  const slidingVariant = {
    initial: {
      y: "-100%",
    },
    animate: {
      y: isOpen ? "0%" : "-100%",
      transition: {
        type: "spring",
        duration: 1,
        damping: 25,
      },
    },
    exit: {
      y: "-115%",
      transition: {
        type: "spring",
        damping: 30,
        duration: 1,
      },
    },
  };

  const pageVariant = {
    initial: {
      y: "-100%",
    },
    animate: {
      y: isOpen ? "0%" : "-100%",
      transition: {
        type: "spring",
        duration: 1,
        damping: 25,
      },
    },
    exit: {
      y: "-115%",
      transition: {
        type: "spring",
        duration: 1,
        damping: 30,
      },
    },
  };

  const links = useMemo(
    () => [
      { name: "LinkedIn", path: "https://www.linkedin.com/in/aniket-rathod0" },
      { name: "Github", path: "https://github.com/aniirathod" },
      { name: "Email", path: "mailto:aniketnr5023@gmail.com" },
      { name: "X", path: "https://x.com/Aniket__Rathod" },
    ],
    []
  );

  //when the content is in view the text comes from below

  const container = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.02,
      },
    },
  };
  const item = {
    initial: {
      opacity: 0,
      y: 50,
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

  const date = new Date();

  useEffect(() => {
    // Disable scrolling when the window is open
    if (isOpen) {
      document.body.classList.add("overflow-hidden", "h-screen");
    } else {
      document.body.classList.remove("overflow-hidden", "h-screen");
    }

    // Clean up on unmount
    return () => {
      document.body.classList.remove("overflow-hidden", "h-screen");
    };
  }, [isOpen]);

  return (
    <div className="relative h-screen overflow-hidden ">
      {isOpen && (
        <motion.div
          className="fixed top-0 right-0 z-30 flex items-center w-full h-full text-white bg-black "
          variants={slidingVariant}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <motion.div
            className="p-4"
            variants={container}
            initial="initial"
            animate="animate"
          >
            <div className="">
              <ul>
                {navLinks.map((links) => (
                  <li
                    key={links.link}
                    className="mb-3 overflow-hidden text-5xl font-semibold tracking-tighter md:text-6xl text-white/90"
                  >
                    <motion.div
                      variants={item}
                      onClick={() => {
                        navigate(links.path);
                        setIsOpen(false);
                      }}
                    >
                      {links.link}
                    </motion.div>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-1 mt-10">
                {links.map((socialLinks, index) => (
                  <li
                    key={index}
                    className="overflow-hidden text-2xl font-medium tracking-tighter text-white/90"
                  >
                    <motion.div variants={item}>
                      <Link to={socialLinks.path} target="blank">
                        {socialLinks.name}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>

              <div>
                <div className="overflow-hidden">
                  <motion.h1
                    variants={item}
                    className="fixed text-sm font-medium text-center uppercase bottom-10 font"
                  >
                    Aniket Rathod @{date.getFullYear()} || All rights reserved
                  </motion.h1>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      <motion.div
        className="fixed right-0 z-20 w-full h-full bg-white top-24"
        variants={pageVariant}
        initial="initial"
        animate="animate"
        exit="exit"
      ></motion.div>
    </div>
  );
};

export default SlidingWindow;
