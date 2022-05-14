import React from "react";

const Card = ({ img }) => {
  return (
    <div className="w-5/12 relative">
      <img
        src={img}
        alt="card image"
        className="w-full h-full object-cover object-center"
      />
      <div></div>
    </div>
  );
};

export default Card;
