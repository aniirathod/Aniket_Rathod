import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const TextReveal = ({ text, char = [], classname = "", duration, delay }) => {
  const [revealOrder, setRevealOrder] = useState([]);
  const words = text.split(" ");
  const generateRandomOrder = (length) => {
    const indices = Array.from({ length }, (_, index) => index);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  };

  useEffect(() => {
    if (words.length > 0) {
      setRevealOrder(generateRandomOrder(words.length));
    }
  }, [text]);

  const wordVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: [0, 1, 0.5, 0, 1],
      transition: {
        delay: revealOrder[i] * delay, // Control the delay based on revealOrder
        duration: duration,
        ease: [0.37, 0, 0.63, 1],
      },
    }),
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div ref={ref}>
      {isInView &&
        words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            className={`inline-block mr-1 ${
              char.includes(word) ? "text-yellow-300/80" : ""
            } ${classname}`}
          >
            {word}
          </motion.span>
        ))}
    </motion.div>
  );
};

export default TextReveal;
