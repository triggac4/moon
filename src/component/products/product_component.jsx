import React, { useEffect,useState} from "react";
import RatingStar from "./rating_component";

const ProductComponent = ({ image, price, name, rating, onAdd }) => {
  let RatingComp = [];
  const [ratings,setRatings]=useState([]);
  useEffect(() => {
    //loop through 5 times
    let currentRating = rating;
    for (let i = 0; i < 5; i++) {
      RatingComp.push(<RatingStar key={i} fraction={currentRating} />);
      currentRating -= 1;
    }
    setRatings(RatingComp);
    RatingComp=[]
  }, []);
  return (
    <div className="flex flex-col items-center gap-4 w-full rounded-md overflow-hidden bg-white shadow-lg">
      <img
        src={image}
        alt="product image"
        className="w-full h-[300px] object-cover object-center hover:scale-105 transition-all hover:saturate-0"
      />
      
      <h4 className="font-bold text-lg text-cyan-900">{price}</h4>
      <p className="text-base font-light text-cyan-900">{name}</p>
      <div className="flex gap-0 justify-center">{ratings}</div>
      <button className="text-xl font-bold mb-4 text-cyan-900 hover:scale-105 transition-all" onClick={onAdd}>
        Add to Basket
      </button>
    </div>
  );
};
export default ProductComponent;
