import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="mx-auto px-6 lg:px-8 mt-10 sm:mt-20 md:mt-30">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-2xl font-semibold text-neutral-50">
          Contact Us
        </h1>
        <div className="mt-8 text-lg text-neutral-100">
          <p className="mb-8">
            Mail us at{" "}
            <Link
              to="mailto:hello@aqualia.ie"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              hello@aqualia.ie
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
