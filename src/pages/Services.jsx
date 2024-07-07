import React from "react";

const Services = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-10 sm:mt-20 md:mt-30">
      <h1 className="font-display text-2xl font-semibold text-neutral-50">
        Our Services
      </h1>
      <div className="mt-8 text-xl  text-neutral-100">
        <div>
          <h2 className="font-display text-xl font-semibold text-neutral-50">
            IT Security Consulting
          </h2>
        </div>
        <div className="space-y-6 ">
          <p className="pt-2">
            In today’s digital landscape, IT security is not just a luxury; it’s
            a necessity. Our IT Security Consulting services are designed to
            protect your business from the ever-evolving threats that lurk in
            the cyber world. We understand the importance of safeguarding your
            data and operations, and our comprehensive approach ensures that
            your assets are secure, compliance is met, and peace of mind is
            guaranteed.
          </p>
          <div className="px-10">
            <ul className="list-disc">
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
      <div className="mt-8 text-xl  text-neutral-100">
        <div>
          <h2 className="font-display text-xl font-semibold text-neutral-50">
            AI/ML Consulting
          </h2>
        </div>
        <div className="space-y-6 ">
          <p className="pt-2">
            Artificial Intelligence (AI) and Machine Learning (ML) are
            revolutionizing the way businesses operate, offering unprecedented
            insights and automation capabilities. Our AI/ML Consulting services
            bring cutting-edge expertise to your doorstep, transforming complex
            data into actionable strategies that drive growth and innovation.
          </p>
          <div className="px-10">
            <ul className="list-disc">
              <li>
                AI Strategy Development: Craft a bespoke AI roadmap aligned with
                your business objectives.
              </li>
              <li>
                ML Model Building: Create predictive models that turn data into
                a competitive advantage.
              </li>
              <li>
                AI-Powered Automation: Implement intelligent systems that
                enhance productivity and decision-making.
              </li>
              <li>
                Ongoing Support and Optimization: Provide continuous improvement
                and maintenance for your AI/ML solutions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
