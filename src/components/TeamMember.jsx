import React from "react";

const TeamMember = (props) => {
  return (
    <li>
      <div>
        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
          <img
            alt=""
            loading="lazy"
            width="1800"
            height="1800"
            decoding="async"
            data-nimg="1"
            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
            // srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fleslie-alexander.cf5840d1.jpg&amp;w=1920&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fleslie-alexander.cf5840d1.jpg&amp;w=3840&amp;q=75 2x"
            src={props.url}
            style={{ color: "transparent" }}
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
              {props.name}
            </p>
            <p className="mt-2 text-sm text-white">{props.role}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TeamMember;
