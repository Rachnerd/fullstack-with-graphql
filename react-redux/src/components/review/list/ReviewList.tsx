import { UIDivider } from "../../../ui/Divider";
import Review from "../Review";
import React from "react";
import { ReviewModel } from "../../../state/review/review.model";

interface ReviewListProps {
  reviews: ReviewModel[];
}

const ReviewList: React.FC<ReviewListProps> = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review, index) => (
        <li key={index}>
          <Review review={review} />
          <UIDivider />
        </li>
      ))}
    </ul>
  );
};

export default ReviewList;
