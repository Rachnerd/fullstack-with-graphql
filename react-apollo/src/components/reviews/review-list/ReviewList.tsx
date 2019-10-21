import { UIDivider } from "../../../ui/Divider";
import Review from "../review/Review";
import React from "react";
import { useItemReviewsQuery } from "../../../.generated/gql.model";
import Pagination from "../../pagination/Pagination";

interface ReviewListProps {
  itemId: number;
  page?: number;
  size?: number;
}

const ReviewList: React.FC<ReviewListProps> = ({
  itemId,
  page = 0,
  size = 3
}) => {
  const { loading, error, data } = useItemReviewsQuery({
    variables: { id: itemId, page, size }
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
        {reviews.content.map((review, index) => (
          <li key={index}>
            {review.id && <Review review={review} />}
            <UIDivider />
          </li>
        ))}
      </ul>
      <Pagination page={reviews} />
    </div>
  );
};

export default ReviewList;
