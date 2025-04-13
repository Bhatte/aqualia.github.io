import React from "react";

const Services = () => {
  return (
    <div className="mx-auto px-6 lg:px-8 mt-10 sm:mt-20 md:mt-30">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-2xl font-semibold text-neutral-50">
          Our Services
        </h1>
        
        <div className="mt-8 text-lg text-neutral-100">
          <p>
            We deliver solutions built on deep expertise and real-world experience. 
            Every service is tailored to your specific business context—because effective security and AI 
            implementation isn't about applying generic templates, but crafting strategies that align with 
            your unique objectives.
          </p>
        </div>
        
        <div className="mt-12">
          <div>
            <h2 className="font-display text-xl font-semibold text-neutral-50">
              Cybersecurity Fortification
            </h2>
          </div>
          <div className="mt-4 text-lg text-neutral-100 space-y-6">
            <p>
              In today's threat landscape, conventional security approaches fall short. Our cybersecurity 
              services deliver multi-layered protection with measurable results, designed to safeguard your 
              critical assets while enabling rather than impeding business growth. We translate complex 
              security requirements into practical, implementable strategies with clear business value.
            </p>
            <div className="pl-6">
              <ul className="list-disc space-y-2">
                <li>
                  <span className="font-medium">Threat Intelligence & Risk Modeling:</span> Predictive identification of 
                  vulnerabilities specific to your business model and technology stack, with prioritized 
                  remediation pathways.
                </li>
                <li>
                  <span className="font-medium">Security Architecture Design:</span> Custom security frameworks aligned with 
                  business workflows that balance robust protection with operational efficiency.
                </li>
                <li>
                  <span className="font-medium">Compliance Engineering:</span> Transform regulatory requirements from 
                  bureaucratic overhead into strategic security advantages with our streamlined implementation approach.
                </li>
                <li>
                  <span className="font-medium">Advanced Penetration Testing:</span> Discover vulnerabilities before attackers do with 
                  our comprehensive offensive security testing across web applications, mobile platforms, cloud infrastructure, 
                  and IoT systems.
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <div>
            <h2 className="font-display text-xl font-semibold text-neutral-50">
              Strategic AI Implementation
            </h2>
          </div>
          <div className="mt-4 text-lg text-neutral-100 space-y-6">
            <p>
              AI's transformative potential is only realized when deployed with strategic precision. 
              Our AI consultancy cuts through the hype to identify specific areas where AI can deliver 
              quantifiable improvements for your business, creating tailored solutions that generate 
              measurable ROI from day one.
            </p>
            <div className="pl-6">
              <ul className="list-disc space-y-2">
                <li>
                  <span className="font-medium">AI Opportunity Assessment:</span> Identify high-impact AI implementation 
                  opportunities within your organization with our systematic evaluation framework that prioritizes 
                  initiatives with the highest potential ROI.
                </li>
                <li>
                  <span className="font-medium">Intelligent Process Automation:</span> Transform operational efficiency with 
                  custom AI solutions that automate complex workflows while enhancing decision quality through 
                  predictive intelligence.
                </li>
                <li>
                  <span className="font-medium">AI Security Integration:</span> Strengthen your security posture with AI-powered 
                  threat detection and response capabilities that evolve ahead of emerging threats.
                </li>
                <li>
                  <span className="font-medium">AI Implementation & Optimization:</span> End-to-end development, deployment and 
                  continuous refinement of AI systems designed to deliver increasing value over time.
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
