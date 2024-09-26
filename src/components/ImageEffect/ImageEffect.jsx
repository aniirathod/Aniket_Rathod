import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const ImageEffect = ({ src, text, classname = "" }) => {
  const imgRef = useRef(null);

  const imgIsInView = useInView(imgRef, { amount: 0.2, once: true });
  return (
    <motion.div
      className={` w-full h-full overflow-hidden rounded-2xl`}
      ref={imgRef}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={imgIsInView ? { opacity: 1 } : ""}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.37, 0, 0.63, 1] }}
      >
        <img
          src={src}
          alt={text}
          className={` xl:hover:scale-110 duration-200 transition-all ease-[0.37, 0, 0.63, 1]  ${classname}`}
        />
      </motion.div>
    </motion.div>
  );
};

export default ImageEffect;
