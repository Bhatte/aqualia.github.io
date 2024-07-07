import React from "react";

const Hero = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-10 sm:mt-20 md:mt-30">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-50 [text-wrap:balance] sm:text-7xl">
            Award-winning development studio based in Ireland.
          </h1>
          <p className="mt-6 text-xl text-neutral-100">
            We are a development studio working at the intersection of design
            and technology. It’s a really busy intersection though — a lot of
            our staff have been involved in hit and runs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
