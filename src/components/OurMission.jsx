import React from "react";
import { Link } from "react-router-dom";
import Button from "./ui/Button";

const OurMission = () => {
  return (
    <div className="pt-12 sm:pt-16">
      <h2 className="font-display text-xl font-semibold text-neutral-50">
        Our Mission
      </h2>
      
      <div className="mt-8 space-y-6 text-lg text-neutral-100">
        <p>
          Our mission is to democratize world-class cybersecurity and AI capabilities, 
          making them accessible and actionable for organizations at every stage of growth. 
          In an increasingly complex digital landscape, we stand as the bridge between advanced 
          technology and practical business implementation—translating sophisticated solutions 
          into clear competitive advantages for our clients.
        </p>
        
        <p>
          We're committed to proactive protection that anticipates threats before they emerge, 
          and AI implementations that deliver concrete ROI. Every engagement is guided by our 
          core belief: that security and innovation are not technical exercises, but business 
          imperatives that require precision, expertise, and strategic vision.
        </p>
        
        <div className="mt-8">
          <Button
            to="/contact"
            type="primary"
          >
            Partner with us today
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
