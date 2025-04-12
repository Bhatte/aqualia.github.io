import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const NumberCounter = ({ 
  end, 
  duration = 2, 
  delay = 0.5,
  prefix = "",
  suffix = "",
  className = ""
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      
      let startTime;
      let animationFrame;
      
      const updateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        
        if (progress < 1) {
          setCount(Math.floor(end * Math.min(progress, 1)));
          animationFrame = requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };
      
      // Add delay before starting animation
      setTimeout(() => {
        animationFrame = requestAnimationFrame(updateCount);
      }, delay * 1000);
      
      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [isInView, end, duration, delay, hasAnimated]);
  
  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {prefix}{Math.floor(count)}{suffix}
    </motion.span>
  );
};

export default NumberCounter; 