import React from "react";

const Products = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-10 sm:mt-20 md:mt-30">
      <h1 className="font-display text-2xl font-semibold text-neutral-50">
        Products
      </h1>
      <div className="mt-8 text-xl  text-neutral-100">
        <p className="mb-8">
          Our AI services have been instrumental across various sectors.
        </p>
      </div>
      <div className="mt-8 text-xl  text-neutral-100">
        <div>
          <h2 className="font-display text-xl font-semibold text-neutral-50">
            Assisted Grading
          </h2>
        </div>
        <div className="space-y-6 ">
          <p className="pt-2">
            Assisted Grading is a system that assists teachers in grading
            assignments, performing the majority of the labour-intensive tasks.
            It provides confidence to institutions of unbiased grading towards
            their students. Assignments and papers can be graded 10-100x faster,
            ensuring impartial evaluation and delivering comprehensive feedback
            of superior quality.
          </p>
        </div>
      </div>
      <div className="mt-8 text-xl  text-neutral-100">
        <div>
          <h2 className="font-display text-xl font-semibold text-neutral-50">
            WatsTheStory
          </h2>
        </div>
        <div className="space-y-6 ">
          <p className="pt-2">
            WatsTheStory is a platform that allows users to experience news like
            never before on WhatsApp. It offers a single platform to avoid the
            clutter of multiple apps and unwanted spam, options for news
            delivery times that fit unique schedules, the ability to have
            content read in a preferred voice, and a curated feed that
            highlights only the topics that truly interest users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
