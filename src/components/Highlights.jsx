import React from "react";
import HighlightCard from "./HighlightCard";

const Highlights = () => {
  const details = [
    {
      title: "Empowering Digital Excellence",
      description:
        "At Aqualia, we empower startups and organizations to navigate and thrive in a digitally connected world. Our premium consultancy services go beyond mere advice; they are a gateway to unparalleled expertise in Cyber Security and AI/ML—forged from real-world experience in safeguarding the IT infrastructure of an international airport.",
    },
    {
      title: "Tailored Cyber Security Solutions",
      description:
        "We specialize in serving small to medium-sized startups, offering vast experience that makes a crucial difference. In a world where digital challenges are as dynamic as they are dangerous, we provide the reliable anchor and proactive strategies that keep your digital assets and data secure. From off-the-shelf system hardening to bespoke AI/ML implementation strategies, we deliver solutions that are tailored to your specific needs, communicated in terms you’ll understand.",
    },
    {
      title: "AI/ML Consulting for Business Improvement",
      description:
        "When it comes to harnessing the power of AI/ML for business enhancement, we guide you through the myriad of options to find the optimal approach that aligns with your organizational goals and resources.",
    },
  ];

  return (
    <div className="py-32 max-w-7xl px-6 lg:px-8 ">
      {details.map((detail) => (
        <HighlightCard
          key={detail.title}
          title={detail.title}
          description={detail.description}
        />
      ))}
    </div>
  );
};

export default Highlights;
