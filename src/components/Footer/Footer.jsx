import React, { useState, useCallback } from "react";
import { HoverEffect, ScrambleTextReveal } from "../index";

const Footer = () => {
  const links = [
    { name: "LinkedIn", path: "https://www.linkedin.com/in/aniket-rathod0" },
    { name: "Github", path: "https://github.com/aniirathod" },
    { name: "Email", path: "mailto:aniketnr5023@gmail.com" },
    { name: "X", path: "https://x.com/Aniket__Rathod" },
  ];

  const date = new Date();
  return (
    <div className="flex flex-col items-center justify-between w-full px-10 pt-8 md:py-7 border-y-2 max-lg:gap-5 xl:py-10 md:flex-row lg:px-28 border-gray-500/70 rounded-3xl">
      <div>
        <ul className="flex gap-10 text-sm font-bold h-7 lg:gap-20 xs:gap-14 ">
          {links.map((link) => (
            <div
              className="relative overflow-hidden cursor-pointer group "
              key={link.name}
            >
              <HoverEffect classname="pb-2 group-hover:-translate-y-7 ">
                <li className="cursor-pointer">
                  <a href={link.path} target="blank">
                    {<ScrambleTextReveal text={link.name} />}
                  </a>
                </li>
              </HoverEffect>
            </div>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="text-xs tracking-wide xs:text-sm text-white/70">
          @{date.getFullYear()} Aniket Rathod Made With
          <span> &#129293;</span>{" "}
        </h1>
      </div>
    </div>
  );
};

export default Footer;
