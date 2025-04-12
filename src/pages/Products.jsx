import React from "react";

const Products = () => {
  return (
    <div className="mx-auto px-6 lg:px-8 mt-10 sm:mt-20 md:mt-30">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-2xl font-semibold text-neutral-50">
          Products
        </h1>
        <div className="mt-8 text-lg text-neutral-100">
          <p className="mb-8">
            Our AI services have been instrumental across various sectors.
          </p>
        </div>
        <div className="mt-12">
          <div>
            <h2 className="font-display text-xl font-semibold text-neutral-50">
              Gradience
            </h2>
          </div>
          <div className="mt-4 text-lg text-neutral-100">
            <p>
              Gradience is a system that assists teachers in grading
              assignments, performing the majority of the labour-intensive tasks.
              It provides confidence to institutions of unbiased grading towards
              their students. Assignments and papers can be graded 10-100x faster,
              ensuring impartial evaluation and delivering comprehensive feedback
              of superior quality.
            </p>
            <p className="mt-2">
              <a 
                href="https://gradience.ie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                Visit Gradience Website
              </a>
            </p>
          </div>
        </div>
        <div className="mt-12">
          <div>
            <h2 className="font-display text-xl font-semibold text-neutral-50">
              WatsTheStory
            </h2>
          </div>
          <div className="mt-4 text-lg text-neutral-100">
            <p>
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
    </div>
  );
};

export default Products;
