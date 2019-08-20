import { UIDivider } from "../../ui/Divider";
import ReviewList, { REVIEW_LIST_QUERY } from "./review-list/ReviewList";
import PostReview from "./post-review/PostReview";
import React, { useState } from "react";
import { PureQueryOptions } from "apollo-client";
import { ITEM_DETAILS_QUERY } from "../item/ItemDetails";

interface ReviewsProps {
  itemId: number;
}

export const Reviews = ({ itemId }: ReviewsProps) => {
  const [page, setPage] = useState<number>(0);
  const [size, setSize] = useState<number>(3);

  const postReviewRefetch: PureQueryOptions[] = [
      {
          query: REVIEW_LIST_QUERY,
          variables: { id: itemId, page, size }
      },
      {
          query: ITEM_DETAILS_QUERY,
          variables: { id: itemId }
      }
  ];

  return (
    <div className={"reviews"}>
      <h2>Reviews</h2>
      <UIDivider />
      <ReviewList itemId={itemId} page={page} size={size} />
      <UIDivider />
      <PostReview itemId={itemId} refetch={postReviewRefetch}/>
    </div>
  );
};
