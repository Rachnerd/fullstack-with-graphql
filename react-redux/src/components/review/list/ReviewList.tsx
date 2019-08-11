import { UIDivider } from "../../../ui/Divider";
import Review from "../Review";
import React from "react";
import { ReviewModel } from "../../../state/review/review.model";
import { Async } from "../../../state/state.utils";

interface ReviewListProps {
  reviews: Async<ReviewModel>[];
  limit?: number;
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews, limit = 3 }) => {
  return (
    <ul>
      {reviews.slice(0, limit - 1).map((review, index) => (
        <li key={index}>
          <Review review={review} />
          <UIDivider />
        </li>
      ))}
    </ul>
  );
};

export default ReviewList;
