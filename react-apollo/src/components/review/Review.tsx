import * as React from "react";
import { ReviewModel } from "../../state/review/review.model";
import Rating from "../rating/Rating";
import classNames from "classnames";
import "./Review.scss";
import { Async } from "../../state/state.utils";
import HttpError from "../../http-error/HttpError";
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
        <User user={{
          loading: false,
          data: {
            id: 1,
            image:  'https://s3.amazonaws.com/media-p.slid.es/uploads/305120/images/3895531/DSC_0893_1.1_0.9r.jpg',
            name: "Rachnerd"
          }
        }} />

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
