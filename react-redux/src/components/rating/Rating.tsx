import { default as React, HTMLAttributes, ReactNode } from "react";
import "./Rating.scss";

interface RatingProps {
  rating: number;
  max?: number;
}

const Rating = ({
  rating,
  max = 5,
  ...htmlAttributes
}: RatingProps & HTMLAttributes<HTMLSpanElement>) => {
  const stars: ReactNode[] = [];
  for (let i = 0; i < max; i++) {
    const addHalfStar = rating - i < 1 && rating - i > 0;
    stars.push(
      <span
        key={`rating-${i}`}
        className={`fa fa-star${addHalfStar ? "-half-o" : ""} ${
          i < rating ? "rating--checked" : ""
        }`}
      />
    );
  }
  return <span {...htmlAttributes}>{stars}</span>;
};

export default Rating;
