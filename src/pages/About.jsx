import React, { useState } from "react";
import TeamMember from "../components/TeamMember";
import OurMission from "../components/OurMission";

const About = () => {
  const team = [
    {
      name: "Tejas",
      role: "Co-founder",
      url: "src/assets/images/dries-vincent.jpg",
    },
    {
      name: "Steve",
      role: "Co-founder",
      url: "src/assets/images/dries-vincent.jpg",
    },
  ];
  const showteam = false;

  return (
    // <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-10 sm:mt-20 md:mt-30'>About</div>
    <div className="mx-auto px-6 lg:px-8 mt-10 sm:mt-20 md:mt-30">
      <div className="max-w-4xl mx-auto">
        <div>
          <h2>
            <span className="block font-display text-5xl sm:text-6xl font-medium tracking-tight text-neutral-50 [text-wrap:balance]">
              The Aqualia Difference
            </span>
          </h2>
          <div className="mt-6 text-xl text-neutral-100">
            <p>
              Where technical excellence meets practical business value. Our clients don't just 
              receive security services—they gain a strategic partner invested in their success.
            </p>
            <div className="mt-10 space-y-6 text-lg">
              <p>
                Founded by security engineers with deep expertise in critical infrastructure protection 
                and AI development, Aqualia emerged from a simple realization: organizations of 
                all sizes deserve enterprise-grade security and intelligent technology solutions, 
                delivered with clarity and purpose. Our team combines specialized knowledge in advanced 
                threat mitigation with a pragmatic approach to implementation that prioritizes your 
                business objectives.
              </p>
              <p>
                What sets us apart is our holistic perspective—we view cybersecurity and AI not as 
                isolated technical functions, but as core business enablers that, when implemented 
                thoughtfully, create competitive advantage and open new possibilities for growth and 
                innovation.
              </p>
            </div>
          </div>
        </div>
        <OurMission />
        {showteam && (
          <div>
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <div>
                <h2 className="font-display text-xl font-semibold text-neutral-50">
                  Our team
                </h2>
              </div>
              <div className="lg:col-span-4">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {team.map((member) => (
                    <TeamMember
                      key={member.name}
                      name={member.name}
                      role={member.role}
                      url={member.url}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
