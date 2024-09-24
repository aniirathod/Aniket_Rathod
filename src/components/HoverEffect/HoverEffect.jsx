import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useCursorContext } from "../../context/CursorContext";

const HoverEffect = ({ children, classname = "" }) => {
  const ref = useRef(null);
  const { isHovered, onCursorEnter, onCursorLeave } = useCursorContext();
  const strength = 0.6; // Adjust this for stronger or weaker magnetic pull
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Magnetic effect
  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const handleMouseMove = (e) => {
      if (isHovered) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;

        mouseX.set(deltaX * strength);
        mouseY.set(deltaY * strength);
      }
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isHovered, mouseX, mouseY]);
  return (
    <motion.div
      ref={ref}
      className={`relative inline-block group `}
      style={{
        x: useTransform(mouseX, (x) => x),
        y: useTransform(mouseY, (y) => y),
        transition: "transform 0.3s",
      }}
    >
      <div
        className={`group-hover:-translate-y-7 transition-all ease-[cubic-bezier(0.7, 0, 0.84, 0)] duration-300 ${classname}`}
      >
        {children}
      </div>
      <span className="absolute left-0 top-5 w-full h-[1px] bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
      <div
        className={`group-hover:-translate-y-6 transition-all ease-[cubic-bezier(0.7, 0, 0.84, 0)] duration-300 h-full text-yellow-300 ${classname}`}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default HoverEffect;
