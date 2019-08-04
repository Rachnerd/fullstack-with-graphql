import { default as React, ReactNode } from "react";
import "./Rating.scss";

interface RatingProps {
  className?: string;
  score: number;
  max?: number;
}

const Rating = ({ score, max = 5, className = "" }: RatingProps) => {
  const stars: ReactNode[] = [];
  for (let i = 0; i < max; i++) {
    stars.push(
      <span key={`rating-${i}`} className={`fa fa-star ${i < score ? "rating--checked" : ""}`} />
    );
  }
  return <div className={className}>Rating: {stars}</div>;
};

export default Rating;
