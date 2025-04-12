import React from "react";
import { Link } from "react-router-dom";

const OurMission = () => {
  return (
    <div className="pt-12 sm:pt-16">
      <h2 className="font-display text-xl font-semibold text-neutral-50">
        Our Mission
      </h2>
      <div className="mt-8 space-y-6 text-lg text-neutral-100">
        <p>
          Our mission is to pave the way for organizations to excel in an
          increasingly digital world. We are dedicated to making cybersecurity
          and AI not only accessible but also understandable, even for small to
          medium-sized businesses. We believe in delivering proactive, custom
          solutions to secure and future-proof your digital assets, all while
          providing superior customer service to nurture a safe, informed, and
          efficient digital environment.
        </p>
        <p>
          <Link to="/contact" className="hover:underline">
            'Join us'{" "}
          </Link>
          at Aqualia, where your digital security and advancement are our top
          priority.
        </p>
      </div>
    </div>
  );
};

export default OurMission;
