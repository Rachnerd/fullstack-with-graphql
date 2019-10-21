import { UIDivider } from "../../../ui/Divider";
import { Review } from "../review/Review";
import React from "react";
import { useItemReviewsQuery } from "../../../.generated/gql.model";
import { PaginationInfo } from "../../pagination-info/PaginationInfo";

interface ReviewListProps {
  itemId: number;
}

export const ReviewList: React.FC<ReviewListProps> = ({ itemId }) => {
  const { loading, error, data } = useItemReviewsQuery({
    variables: { id: itemId, page: 0, size: 3 }
  });

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error!</p>;
  }

  if (!data || !data.item) {
    return <p>No Data!</p>;
  }
  const { reviews } = data.item;

  return (
    <div>
      <ul>
        {reviews.content.map(review => (
          <li key={review.id}>
            <Review review={review} />
            <UIDivider />
          </li>
        ))}
      </ul>
      <PaginationInfo page={reviews} />
    </div>
  );
};
