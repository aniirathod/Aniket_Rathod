import React, { useEffect, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import useMousePosition from "../../utils/useMousePosition";
import { useCursorContext } from "../../context/CursorContext";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { isHovered } = useCursorContext();
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const spring = { stiffness: 500, damping: 30 };
  const size = isHovered ? 78 : 24;

  //mouse position by useMouserPosition hook
  const { x, y } = useMousePosition();

  const springX = useSpring(xPoint, spring);
  const springY = useSpring(yPoint, spring);

  const updateCursorPosition = useCallback(() => {
    xPoint.set(x - size / 2);
    yPoint.set(y - size / 2);
  }, [x, y, size, xPoint, yPoint]);

  useEffect(() => {
    updateCursorPosition();
  }, [updateCursorPosition]);

  useEffect(() => {
    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor hidden lg:block  w-6 h-6 rounded-full border-white border z-[99999] fixed top-0 left-0 pointer-events-none mix-blend-difference transition-opacity duration-300"
        style={{
          x: springX,
          y: springY,
          opacity: isVisible ? 1 : 0,
          width: size,
          height: size,
        }}
      ></motion.div>
    </>
  );
};

export default CustomCursor;
