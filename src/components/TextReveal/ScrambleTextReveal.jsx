import React, { useEffect, useState, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";

const ScrambleTextReveal = ({ text, onComplete }) => {
  const [displayText, setDisplayText] = useState(text);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const shuffleInterval = useRef(null);
  const timeout = useRef(null);

  const startShuffling = () => {
    let iteration = 0;

    shuffleInterval.current = setInterval(() => {
      setDisplayText((prevText) =>
        prevText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(shuffleInterval.current);
        setDisplayText(text); // Restore original text
        if (onComplete) onComplete();
      }

      iteration += 1 / 4;
    }, 30);

    timeout.current = setTimeout(() => {
      clearInterval(shuffleInterval.current);
      setDisplayText(text); // Restore original text
    }, 3000);
  };

  useEffect(() => {
    startShuffling(); // Trigger shuffling animation on component mount

    // Cleanup function to clear intervals and timeouts when component unmounts
    return () => {
      clearInterval(shuffleInterval.current);
      clearTimeout(timeout.current);
    };
  }, [text]);

  const scrambleVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  };

  //when the conetent is in view
  const containerRef = useRef(null);
  const textIsInView = useInView(containerRef, { once: true });
  return (
    <motion.div ref={containerRef}>
      {displayText.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={scrambleVariant}
          initial="initial"
          animate={textIsInView ? "animate" : ""}
          transition={{
            duration: 0.3,
            ease: [0.37, 0, 0.63, 1],
            delay: index * 0.1,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default ScrambleTextReveal;
