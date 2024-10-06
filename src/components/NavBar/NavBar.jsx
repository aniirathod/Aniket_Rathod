import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { HoverEffect, SlidingWindow } from "../index";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navLinks = [
    {
      path: "/",
      link: "Home",
    },
    {
      path: "https://drive.google.com/file/d/1YyKrvqQSuJ0hjWdxrCGfsVRiNkdgQc4O/view?usp=drivesdk",
      link: "Resume",
    },
    {
      path: "/contact",
      link: "Contact",
    },
  ];

  //slide window open
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  // creating the varient for when the navbar is in view the navbar comes from above
  const container = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
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
    exit: {
      opacity: 0,
      y: 50,
    },
  };

  // State to manage the visibility of the navbar
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const scrollThreshold = 600;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > scrollThreshold) {
        setIsVisible(false); // Hide when scrolling down past the threshold
      } else {
        setIsVisible(true); // Show when scrolling up
      }
      lastScrollY = window.scrollY;
    };

    const debounceScroll = () => {
      clearTimeout(window.scrollDebounceTimeout);
      window.scrollDebounceTimeout = setTimeout(handleScroll, 100);
    };

    window.addEventListener("scroll", debounceScroll);

    return () => {
      window.removeEventListener("scroll", debounceScroll);
      clearTimeout(window.scrollDebounceTimeout); // Cleanup timeout
    };
  }, []);

  return (
    <motion.div className="w-11/12 m-auto" data-scroll-section data-scroll>
      <motion.div
        variants={container}
        initial="initial"
        animate={isVisible ? "animate" : "exit"}
        className={`fixed z-50 flex items-center justify-between w-11/12 pt-8 overflow-hidden mix-blend-difference`}
      >
        {/* left */}
        <motion.div variants={item} className="w-1/3">
          <Link
            to="/"
            className="z-30 flex flex-col text-sm font-semibold tracking-wide xs:text-lg lg:flex-row lg:gap-2 lg:text-xl xl:text-2xl"
          >
            <div className=" first-letter:text-yellow-400">Aniket</div>
            <div className=" first-letter:text-yellow-400">Rathod</div>
          </Link>
        </motion.div>

        {/* Center */}
        <motion.div
          variants={item}
          className="flex items-center justify-center w-1/6 h-full "
        >
          <svg
            width="29"
            height="32"
            viewBox="0 0 29 32"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1.59633 28.6667L0 32L18.6239 22.9333L21.6835 16L1.59633 28.6667Z"></path>
            <path d="M1.72936 28.1333L5.58716 25.7333L18.0917 8L14.5 0L1.72936 28.1333Z"></path>
            <path d="M22.0826 16.1333L19.0229 23.0667L22.6147 28.2667L29 32L22.0826 16.1333Z"></path>
            <path d="M14.5 32L22.6147 28.6667L28.2018 32H14.5Z"></path>
          </svg>
        </motion.div>

        {/* Right */}
        {/* menu icon for phones */}
        <motion.div
          variants={item}
          className="flex flex-col items-end justify-end w-1/3 gap-2 lg:hidden h-9"
          onClick={handleToggle}
        >
          <div
            className={`block h-1   bg-white/70 transform transition-all duration-500 ease-in-out rounded-full ${
              isOpen ? "w-1/5 sm:w-1/12 " : "w-1/4 sm:w-1/6"
            } `}
          ></div>
          <div
            className={`block h-1   bg-white/70 transform transition-all duration-500 ease-in-out rounded-full ${
              isOpen ? "w-1/4 sm:w-1/6" : "w-1/5 sm:w-1/6"
            }`}
          ></div>
          <div
            className={`block h-1   bg-white/70 transform transition-all duration-500 ease-in-out rounded-full ${
              isOpen ? "w-1/5" : "w-1/4 sm:w-1/6"
            } `}
          ></div>
        </motion.div>
        {/* menu content for big screens */}
        <div className="justify-end hidden w-1/3 text-base font-semibold tracking-tight h-7 lg:flex">
          <ul className="flex px-5 overflow-hidden list-none xl:gap-20 lg:gap-14 ">
            {navLinks.map((links, index) => (
              <motion.div
                variants={item}
                key={index}
                className="relative cursor-pointer group"
              >
                <HoverEffect>
                  <li>
                    <Link to={links.path} target={index == 1 ? "_blank" : ""}>
                      {links.link}
                    </Link>
                  </li>
                </HoverEffect>
              </motion.div>
            ))}
          </ul>
        </div>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <SlidingWindow
            isOpen={isOpen}
            navLinks={navLinks}
            setIsOpen={setIsOpen}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NavBar;
