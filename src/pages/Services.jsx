import React from "react";

const Services = () => {
  return (
    <div className="mx-auto px-6 lg:px-8 mt-10 sm:mt-20 md:mt-30">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-2xl font-semibold text-neutral-50">
          Our Services
        </h1>
        <div className="mt-12">
          <div>
            <h2 className="font-display text-xl font-semibold text-neutral-50">
              IT Security Consulting
            </h2>
          </div>
          <div className="mt-4 text-lg text-neutral-100 space-y-6">
            <p>
              In today's digital landscape, IT security is not just a luxury; it's
              a necessity. Our IT Security Consulting services are designed to
              protect your business from the ever-evolving threats that lurk in
              the cyber world. We understand the importance of safeguarding your
              data and operations, and our comprehensive approach ensures that
              your assets are secure, compliance is met, and peace of mind is
              guaranteed.
            </p>
            <div className="pl-6">
              <ul className="list-disc space-y-2">
                <li>
                  Risk Assessment: Identify and evaluate potential vulnerabilities
                  within your IT infrastructure.
                </li>
                <li>
                  Cybersecurity Framework Implementation: Deploy industry-standard
                  security measures tailored to your business needs.
                </li>
                <li>
                  Compliance and Governance: Ensure your business meets all
                  regulatory and legal cybersecurity requirements.
                </li>
                <li>
                  Penetration Testing: Perform comprehensive Web, Mobile and
                  Infrastructure penetration testing to meet your requirements.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div>
            <h2 className="font-display text-xl font-semibold text-neutral-50">
              AI Consulting
            </h2>
          </div>
          <div className="mt-4 text-lg text-neutral-100 space-y-6">
            <p>
              Artificial Intelligence(AI) is revolutionizing the way businesses
              operate, offering unprecedented insights and automation
              capabilities. Our AI Consulting services bring cutting-edge
              expertise to your doorstep, transforming complex data into
              actionable strategies that drive growth and innovation.
            </p>
            <div className="pl-6">
              <ul className="list-disc space-y-2">
                <li>
                  AI Strategy Development: Craft a bespoke AI roadmap aligned with
                  your business objectives.
                </li>
                <li>
                  AI-Powered Automation: Implement intelligent systems that
                  enhance productivity and decision-making.
                </li>
                <li>
                  Ongoing Support and Optimization: Provide continuous improvement
                  and maintenance for your AI solutions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
