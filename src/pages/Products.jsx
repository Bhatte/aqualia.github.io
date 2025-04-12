import React from "react";

const Products = () => {
  return (
    <div className="mx-auto px-6 lg:px-8 mt-10 sm:mt-20 md:mt-30">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-2xl font-semibold text-neutral-50">
          Our Solutions
        </h1>
        <div className="mt-8 text-lg text-neutral-100">
          <p className="mb-8">
            Beyond our consulting services, we've developed innovative products that solve 
            specific challenges with our unique blend of security expertise and AI capabilities.
            Each solution represents our commitment to creating technology that delivers 
            immediate, tangible value.
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
              Gradience revolutionizes the academic assessment process by intelligently automating 
              the grading workflow. Powered by state-of-the-art AI, it reduces grading time by up to 90% 
              while increasing accuracy and consistency. The system analyzes both qualitative and 
              quantitative aspects of student work, providing fair evaluations and detailed, constructive 
              feedback that helps students understand precisely how to improve.
            </p>
            <div className="mt-4 space-y-3">
              <p><span className="font-medium">Key benefits:</span></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dramatically reduces instructor workload while improving feedback quality</li>
                <li>Ensures consistent evaluation standards across all submissions</li>
                <li>Provides students with specific, actionable improvement guidance</li>
                <li>Scales effortlessly from small classes to large institutions</li>
              </ul>
            </div>
            <p className="mt-6">
              <a 
                href="https://gradience.ie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-neutral-200 transition-colors duration-300 font-medium"
              >
                Explore Gradience →
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
              WatsTheStory transforms how people consume news by bringing personalized, 
              high-quality content directly to WhatsApp. Our AI-powered platform cuts through 
              information overload, delivering only the news that matters to you, when you want it, 
              and in your preferred format—including voice narration for on-the-go consumption.
            </p>
            <div className="mt-4 space-y-3">
              <p><span className="font-medium">Key features:</span></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Smart content curation that learns your interests and priorities</li>
                <li>Flexible delivery scheduling that fits your daily routine</li>
                <li>Voice narration with customizable reader preferences</li>
                <li>Zero-clutter experience with no ads or distractions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
