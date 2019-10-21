import * as React from "react";
import { Rating } from "../../rating/Rating";
import "./Review.scss";
import { GQLReview } from "../../../.generated/gql.model";
import { User, UserSubset } from "../../user/User";

type ReviewSubset = Pick<GQLReview, "id" | "rating" | "description"> &
  Record<"author", UserSubset>;

interface ReviewProps {
  review: ReviewSubset;
}

export const Review = ({ review }: ReviewProps) => {
  const { rating, description } = review;
  return (
    <div className={"review"}>
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
