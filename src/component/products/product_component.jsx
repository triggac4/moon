import React, { useEffect, useState } from "react";
import RatingStar from "./rating_component";
import useRating from "../../hooks/useRatings";

const ProductComponent = ({ image, price, name, rating, onAdd }) => {
  const ratings = useRating(
    (rating, fraction, key) => {
      rating.push(<RatingStar key={key} fraction={fraction} />);
    },
    [5,rating]
  );
  return (
    <div className="flex flex-col items-center justify-between gap-4 w-full rounded-md overflow-hidden bg-white shadow-lg">
      <img
        src={image}
        alt="product image"
        className="w-full h-[300px] object-cover object-center hover:scale-105 transition-all hover:saturate-0"
      />

      <h4 className="font-bold text-center text-lg text-cyan-900">{price}</h4>
      <p className="text-base text-center font-light text-cyan-900">{name}</p>
      <div className="flex gap-0 justify-center">{ratings}</div>
      <button
        className="text-xl font-bold mb-4 text-cyan-900 hover:scale-105 transition-all"
        onClick={onAdd}
      >
        Add to Basket
      </button>
    </div>
  );
};
export default ProductComponent;
