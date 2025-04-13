import React from "react";
import HighlightCard from "./HighlightCard";
import { motion } from "framer-motion";

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Highlights = () => {
  const details = [
    {
      title: "Time-Tested Security Expertise",
      description:
        "At Aqualia, we're not just consultants—we're security architects with battle-tested experience safeguarding mission-critical systems, including international airport infrastructure. Our approach combines deep technical expertise with strategic foresight."
    },
    {
      title: "Tailored Protection for Growing Businesses",
      description:
        "SMEs and startups face unique security challenges: sophisticated threats targeting limited resources. We specialize in right-sizing enterprise-grade protection for growing companies, making advanced cybersecurity accessible without enterprise budgets. Our solutions scale with your business, providing comprehensive protection that's communicated in clear business terms—not technical jargon that leaves you wondering what you're paying for."
    },
    {
      title: "AI Solutions with Measurable Impact",
      description:
        "AI isn't just a buzzword at Aqualia—it's a strategic tool we deploy to create tangible business outcomes. We cut through the complexity to identify precisely where AI can deliver the highest ROI for your organization. From predictive threat intelligence to workflow automation, our AI implementations consistently deliver quantifiable improvements to security posture, operational efficiency, and bottom-line results."
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="py-32 px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {details.map((detail) => (
          <HighlightCard
            key={detail.title}
            title={detail.title}
            description={detail.description}
            variants={itemVariants}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Highlights;
