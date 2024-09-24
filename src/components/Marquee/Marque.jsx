import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const Marque = ({ classname = "", children, duration }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <div
        className={`whitespace-nowrap  w-full flex overflow-hidden ${classname}  `}
        ref={ref}
      >
        <motion.div
          className="flex "
          initial={{ x: "0%", y: "100%" }}
          animate={isInView ? { x: "-100%", y: "0%" } : ""}
          transition={{
            x: {
              repeat: Infinity,
              ease: "linear",
              duration: duration,
            },
            y: {
              duration: 1,
              ease: [0.37, 0, 0.63, 1],
            },
          }}
        >
          {children}
        </motion.div>
        <motion.div
          className="flex "
          initial={{ x: "0%", y: "100%" }}
          animate={isInView ? { x: "-100%", y: "0%" } : ""}
          transition={{
            x: {
              repeat: Infinity,
              ease: "linear",
              duration: duration,
            },
            y: {
              duration: 1,
              ease: [0.37, 0, 0.63, 1],
            },
          }}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
};

export default Marque;
