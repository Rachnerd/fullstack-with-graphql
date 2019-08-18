import { UIDivider } from "../../../ui/Divider";
import ReviewList, { REVIEW_LIST_QUERY } from "../list/ReviewList";
import PostReview from "../post/PostReview";
import React, { useState } from "react";
import { PureQueryOptions } from "apollo-client";

interface ReviewsProps {
  itemId: number;
}

export const Reviews = ({ itemId }: ReviewsProps) => {
  const [page, setPage] = useState<number>(0);
  const [size, setSize] = useState<number>(3);

  const postReviewRefetchOptions: PureQueryOptions[] = [
    {
      query: REVIEW_LIST_QUERY,
      variables: { id: itemId, page, size }
    }
  ];

  return (
    <div className={"reviews"}>
      <h2>Reviews</h2>
      <UIDivider />
      <ReviewList itemId={itemId} page={page} size={size} />
      <UIDivider />
      <PostReview itemId={itemId} refetchQueries={postReviewRefetchOptions} />
    </div>
  );
};
