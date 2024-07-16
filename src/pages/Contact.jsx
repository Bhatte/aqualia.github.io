import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="max-w-7xl px-6 lg:px-8 mt-10 sm:mt-20 md:mt-30">
      <h1 className="font-display text-2xl font-semibold text-neutral-50">
        Contact Us
      </h1>
      <div className="mt-8 text-xl  text-neutral-100">
        <p className="mb-8">
          Mail us at{" "}
          <Link
            to="mailto:hello@aqualia.ie"
            // onClick={(e) => {
            //   window.location = "mailto:hello@aqualia.ie";
            //   e.preventDefault();
            // }}
          >
            hello@aqualia.ie
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Contact;
