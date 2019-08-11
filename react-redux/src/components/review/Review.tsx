import * as React from "react";
import { ReviewModel } from "../../state/review/review.model";
import Rating from "../rating/Rating";
import classNames from "classnames";
import "./Review.scss";
import { Async } from "../../state/state.utils";
import HttpError from "../../http-error/HttpError";

interface ReviewProps {
  className?: string;
  review: Async<ReviewModel>;
}

const Review = ({ review: { data, loading, error }, className = "" }: ReviewProps) => {
  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <HttpError error={error} />;
  }

  if (!data) {
    return <p>No Data!</p>;
  }
  const { rating, description } = data;
  return (
    <div className={classNames("review", className)}>
      <div className={"review__side"}>
        <div className={"user"}>
          <img
            src={
              "https://icon-library.net/images/no-profile-picture-icon-female/no-profile-picture-icon-female-0.jpg"
            }
            alt={"user"}
          />
          <span>Username</span>
        </div>
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
