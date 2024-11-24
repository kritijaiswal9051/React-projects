import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./StarRating.css";

function StarRating({ noOfStar = 10 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };
  const handleMouseMove = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };
  return (
    <div className="star">
      <h2>Star-Rating</h2>
      {[...Array(noOfStar)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= (hover || rating) ? "active" : "inactive"}
            size={40}
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave()}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
