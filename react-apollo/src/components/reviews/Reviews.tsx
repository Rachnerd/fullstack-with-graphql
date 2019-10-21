import { UIDivider } from "../../ui/Divider";
import { ReviewList } from "./review-list/ReviewList";
import { PostReview } from "./post-review/PostReview";
import React from "react";

interface ReviewsProps {
  itemId: number;
}

export const Reviews = ({ itemId }: ReviewsProps) => {
  return (
    <div className={"reviews"}>
      <h2>Reviews</h2>
      <UIDivider />
      <ReviewList itemId={itemId} />
      <UIDivider />
      <PostReview itemId={itemId} />
    </div>
  );
};
