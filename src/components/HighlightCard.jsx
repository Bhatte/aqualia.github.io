import React from "react";
import { motion } from "framer-motion";

const HighlightCard = ({ title, description, variants }) => {
  return (
    <motion.article
      variants={variants}
      className="py-8 first:pt-0 flex flex-col lg:flex-row gap-4 lg:gap-8 border-b border-neutral-800 last:border-none"
    >
      <h3 className="font-semibold text-xl text-neutral-50 basis-2/5 lg:self-start">
        {title}
      </h3>
      <p className="text-lg text-neutral-100 basis-3/5">
        {description}
      </p>
    </motion.article>
  );
};

export default HighlightCard;
