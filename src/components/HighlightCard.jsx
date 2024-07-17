import React from "react";

const HighlightCard = (props) => {
  return (
    <div className="py-5 flex flex-col lg:flex-row">
      <h3 className="pt-3 font-semibold text-lg text-gray-50 basis-2/5 lg:self-center">
        {props.title}
      </h3>
      <p className="pt-2 text-md text-gray-100 basis-3/5">
        {props.description}
      </p>
    </div>
  );
};

export default HighlightCard;
