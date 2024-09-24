import React, { useState, useCallback } from "react";
import { HoverEffect, ScrambleTextReveal } from "../index";

const Footer = () => {
  const links = [
    { name: "LinkedIn", path: "https://www.linkedin.com/in/aniket-rathod0" },
    { name: "Github", path: "https://github.com/aniirathod" },
    { name: "Email", path: "mailto:aniketnr5023@gmail.com" },
    { name: "X", path: "" },
  ];

  const date = new Date();
  return (
    <div className="flex flex-col w-full items-center justify-between px-10 border-y-2 pt-9  py-10 max-lg:gap-8  lg:flex-row lg:px-28 border-gray-500/70 rounded-3xl">
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
        <h1 className="text-sm tracking-wide text-white/70">
          @{date.getFullYear()} Aniket Rathod Made With
          <span> &#129293;</span>{" "}
        </h1>
      </div>
    </div>
  );
};

export default Footer;
