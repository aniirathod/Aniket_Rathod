import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// registering the scrolltrigger

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Line = ({ classname = "" }) => {
  const containerRef = useRef();
  const pathref = useRef();
  let initialPath = "M 0 40 Q 700 40 1400 40";

  useGSAP(
    () => {
      // When the animation come into view
      gsap.from(pathref.current, {
        attr: { d: `M 0 40 Q 0 40 0 40` },
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: pathref.current,
        },
      });

      const container = containerRef.current;

      const handleMouseMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        let rpath = `M 0 40 Q 700 ${e.clientY - rect.top} 1400 40`;

        gsap.to(pathref.current, {
          attr: { d: rpath },
          duration: 1,
          ease: "expo.out",
        });
      };

      const handleMouseleave = () => {
        gsap.to(pathref.current, {
          attr: { d: initialPath },
          duration: 2,
          ease: "elastic.out(1,0.1)",
        });
      };

      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseleave);
      // Clean up the event listener on component unmount
      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mousemove", handleMouseleave);
      };
    },
    { scope: containerRef }
  );

  return (
    <>
      <div ref={containerRef} className={`lg:h-28 ${classname}    `}>
        <svg viewBox="0 0 1400 100" className="px-4 lg:px-8">
          <path
            ref={pathref}
            d={initialPath}
            stroke="#E8E8E9"
            strokeWidth={window.innerWidth < 768 ? 1 : 0.3}
            fill="transparent"
          />
        </svg>
      </div>
    </>
  );
};

export default Line;
