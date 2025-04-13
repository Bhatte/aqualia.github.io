import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto px-6 lg:px-8 mt-10 sm:mt-20 md:mt-30"
    >
      <div className="max-w-4xl mx-auto">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-5xl font-medium tracking-tight text-neutral-50"
          >
            <span className="whitespace-nowrap">Enterprise-Grade Security.</span> <span className="whitespace-nowrap">AI-Powered Insights.</span> <span className="whitespace-nowrap">Scaled for You.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-neutral-100"
          >
            We bring sophisticated cybersecurity and practical AI solutions to growing businesses, acting as your dedicated partner in navigating the digital frontier securely and intelligently.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
