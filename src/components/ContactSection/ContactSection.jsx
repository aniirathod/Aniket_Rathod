import React, { useState, useCallback, useEffect } from "react";
import { HoverEffect, TextReveal, ScrambleTextReveal } from "../index";

const ContactSection = () => {
  const links = [
    { name: "LinkedIn", path: "https://www.linkedin.com/in/aniket-rathod0" },
    { name: "Github", path: "https://github.com/aniirathod" },
    { name: "Email", path: "mailto:aniketnr5023@gmail.com" },
    { name: "X", path: "" },
  ];

  const [transistionStage, setTransistionStage] = useState(0);
  const handleTransition = useCallback(() => {
    setTransistionStage((prev) => prev + 1);
  });

  // getting current year

  const date = new Date();

  const [time, setTime] = useState(date);
  useEffect(() => {
    // Update the time every second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <div className="w-11/12 px-8 pt-10 pb-5 mx-auto border-2 xs:pt-16 lg:px-24 border-white/20 rounded-xl">
        {/* Upper part  */}
        <div className="flex flex-wrap justify-between w-full ">
          <div className="w-full sm:w-1/2 lg:w-1/3 ">
            <h1 className="xs:text-4xl text-[1.75rem] sm:text-4xl leading-8 text-white xl:text-5xl text-pretty font-medium lg:leading-10 xl:leading-[3.8rem] tracking-tight lg:text-white/90">
              <TextReveal
                text="Let's   Create Something   great Together   ."
                delay={0.1}
              />
            </h1>
            <h6 className="pt-8 text-xs tracking-wider text-white/50 xs:text-sm lg:text-xs">
              <TextReveal
                text="Based In India - Working Worldwide"
                delay={0.3}
              />
            </h6>
          </div>
          <div className="flex flex-col lg:justify-center gap-4 pt-16 text-xl lg:gap-5 xl:gap-10 xs:pt-20 xs:text-[1.7rem]  sm:text-4xl lg:pt-32 lg:text-3xl xl:text-4xl font-markazi text-white ">
            <a
              href="mailto:aniketnr5023@gmail.com"
              className="flex items-end xs:gap-4 "
            >
              {" "}
              <span className="text-2xl xs:text-4xl lg:text-4xl lg:pr-1">
                &#8594;
              </span>{" "}
              <ScrambleTextReveal text="SEND ME AN EMAIL" />
            </a>
            <div className="flex items-center gap-4 text-xs font-medium lg:text-sm lg:justify-end">
              <span className="text-white/50">
                {" "}
                <ScrambleTextReveal text="Local Time :" />
              </span>
              <span className="text-sm font-bold">
                <TextReveal text={time.toLocaleTimeString()} delay={0.1} />
              </span>
            </div>
          </div>
        </div>

        {/* Lower Part */}
        <div className="relative flex flex-wrap items-center justify-between w-full pt-24 border-t mt-7 xs:mt-10 lg:mt-16 border-white/30 lg:pt-9">
          {/* Logo */}
          <div>
            {" "}
            <div className="">
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
            </div>
          </div>

          {/* Social Links */}

          <div className="flex justify-center max-lg:w-full top-3 max-lg:absolute">
            <ul className="flex justify-center h-6 gap-5 px-2 overflow-hidden text-sm font-bold sm:w-full sm:text-base sm:gap-36 lg:px-0 lg:gap-20 xs:gap-12">
              {links.map((link) => (
                <div className="relative cursor-pointer group " key={link.name}>
                  <HoverEffect classname="pb-2 group-hover:-translate-y-9 ">
                    <li className="cursor-pointer">
                      <a href={link.path} target="blank">
                        {transistionStage >= 0 && (
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

          {/* Copyright */}
          <div className="text-[0.6rem] lg:text-xs sm:text-[0.7rem] text-end text-white/60">
            <h1>
              @{date.getFullYear()} Icons by{" "}
              <a href="https://icons8.com/">Icons8</a>
            </h1>

            <h1>
              Made with <span className="text-white">&#129293;</span> by Aniket
              Rathod
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
