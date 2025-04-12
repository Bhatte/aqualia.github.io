import React from "react";
import { motion } from "framer-motion";

const ScrollReveal = ({
  children,
  direction = "up", // up, down, left, right
  distance = 50,
  delay = 0,
  duration = 0.7,
  once = true,
  threshold = 0.1,
  className = "",
}) => {
  // Define the variants based on the direction
  const getVariants = () => {
    const directions = {
      up: { y: distance },
      down: { y: -distance },
      left: { x: distance },
      right: { x: -distance },
    };

    return {
      hidden: {
        opacity: 0,
        ...directions[direction],
      },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration,
          delay,
          ease: "easeOut",
        },
      },
    };
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal; 