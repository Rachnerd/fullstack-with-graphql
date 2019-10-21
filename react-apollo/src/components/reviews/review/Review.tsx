import * as React from "react";
import Rating from "../../rating/Rating";
import classNames from "classnames";
import "./Review.scss";
import { GQLReview, GQLUser } from "../../../.generated/gql.model";
import User from "../../user/User";

interface ReviewProps {
  review: Pick<GQLReview, "id" | "rating" | "description"> &
    Record<"author", Pick<GQLUser, "name" | "image">>;
}

const Review = ({ review }: ReviewProps) => {
  const { rating, description } = review;
  return (
    <div className={classNames("review")}>
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
