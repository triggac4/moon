import React from "react";
import useRating from "../../hooks/useRatings";
import RatingStar from "../products/rating_component";

const Card = ({ img, inStock, price }) => {
  return (
    <div className="w-full md:w-5/12 h-[500px] bg-white relative rounded-md overflow-clip">
      <img
        src={img}
        alt="card image"
        className="w-full h-full object-cover object-center"
      />
      <div className="opacity-0 absolute top-0 left-0 hover:opacity-100 z-10 w-full h-full bg-cyan-900/75 transition-all flex items-end">
        <div className="flex flex-col justify-center w-full items-center h-2/5 bg-cyan-200">
          <p className="font-light w-full bg-red-800 text-center text-lg text-cyan-100">
            {`${inStock?"AVAILABLE":"OUT OF STOCK"}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
