import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const buttonVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

const Button = ({ 
  children, 
  to, 
  href, 
  type = "primary", 
  className = "", 
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center px-5 py-3 rounded-md font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:ring-neutral-500";
  
  const typeClasses = {
    primary: "bg-neutral-700 hover:bg-neutral-600 text-neutral-50",
    secondary: "bg-neutral-800 hover:bg-neutral-700 text-neutral-100",
    outline: "border border-neutral-600 text-neutral-300 hover:bg-neutral-700/50 hover:text-neutral-100",
    text: "text-neutral-400 hover:text-neutral-200"
  };
  
  const allClasses = `${baseClasses} ${typeClasses[type]} ${className}`;
  
  // Render external link if href is provided
  if (href) {
    return (
      <motion.a
        href={href}
        className={allClasses}
        target="_blank"
        rel="noopener noreferrer"
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        {...props}
      >
        {children}
      </motion.a>
    );
  }
  
  // Render router Link if to is provided
  if (to) {
    return (
      <motion.div
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
      >
        <Link
          to={to}
          className={allClasses}
          {...props}
        >
          {children}
        </Link>
      </motion.div>
    );
  }
  
  // Render button as default
  return (
    <motion.button
      className={allClasses}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button; 