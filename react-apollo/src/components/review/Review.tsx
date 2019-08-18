import * as React from "react";
import Rating from "../rating/Rating";
import classNames from "classnames";
import "./Review.scss";
import User from "../user/User";
import { GQLReview } from "../../../.generated/gql.model";

interface ReviewProps {
  className?: string;
  review: GQLReview;
}

const Review = ({ review, className = "" }: ReviewProps) => {
  const { rating, description } = review;
  return (
    <div className={classNames("review", className)}>
      <div className={"review__side"}>
        <User user={review.author} />
        <Rating rating={rating} />
      </div>
      {description && (
        <div className={"review__content"}>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};
export default Review;
