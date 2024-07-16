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
    <div className="mx-auto max-w-2xl lg:max-w-none px-6 lg:px-8 mt-10 sm:mt-20 md:mt-30">
      <h1>
        <span className="block font-display font-semibold text-xl text-neutral-50">
          About us
        </span>
        <span className="sr-only"> - </span>
      </h1>
      <div>
        <h2>
          <span className="mt-6 block max-w-5xl font-display text-7xl font-medium tracking-tight text-neutral-50 [text-wrap:balance] sm:text-6xl">
            We're Aqualia
          </span>
        </h2>
        <div className="mt-6 max-w-3xl text-2xl text-neutral-100">
          <p>
            We believe that our strength lies in our collaborative approach,
            which puts our clients at the center of everything we do.
          </p>
          <div className="mt-10 max-w-2xl space-y-6 text-xl">
            <p>
              The company was started by two friends who noticed that developer
              studios were charging clients double what an in-house team would
              cost. Since the beginning, we have been committed to doing things
              differently by charging triple instead.
            </p>
            {/* <p>
              At Studio, we’re more than just colleagues — we’re a family. This
              means we pay very little and expect people to work late. We want
              our employees to bring their whole selves to work. In return, we
              just ask that they keep themselves there until at least 6:30pm.
            </p> */}
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
  );
};

export default About;
