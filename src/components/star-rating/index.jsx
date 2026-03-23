import { FaStar } from "react-icons/fa";
import { useState } from "react";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(index) {
    console.log(index);
  }

  function handleMouseEnter(index) {
    console.log(index);
  }

  function handleMouseLeave(index) {
    console.log(index);
  }

  return (
    <>
      <div className="star-rating">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              size={40}
            />
          );
        })}
      </div>
    </>
  );
}
