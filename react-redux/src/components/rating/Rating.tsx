import { default as React, HTMLAttributes, ReactNode } from "react";
import "./Rating.scss";
import classNames from "classnames";

interface RatingProps {
  rating: number;
  max?: number;
}

const MAX_DEFAULT = 5;

const Rating = ({
  rating,
  max = MAX_DEFAULT,
  className,
  ...htmlAttributes
}: RatingProps & HTMLAttributes<HTMLSpanElement>) => {
  const stars: ReactNode[] = [];
  for (let i = 0; i < max; i++) {
    const addHalfStar = rating - i < 1 && rating - i > 0;
    stars.push(
      <span
        key={`rating-${i}`}
        className={classNames("fa", {
          "fa-star": !addHalfStar,
          "fa-star-half-o": addHalfStar,
          "rating--active": i < rating
        })}
      />
    );
  }

  return (
    <div {...htmlAttributes} className={classNames("rating", className)}>
      {stars}
    </div>
  );
};

export default Rating;
