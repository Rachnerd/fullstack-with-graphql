import React from "react";
import { useQuery } from "@apollo/react-hooks";
import {
  GQLItem,
  GQLReview,
  GQLReviewPage
} from "../../../../.generated/gql.model";
import gql from "graphql-tag";
import HttpError from "../../../http-error/HttpError";

interface ReviewListProps {
  id: number;
  page?: number;
  size?: number;
}

type ReviewPaginationData = Record<
  "item",
  Record<
    "reviews",
    Pick<GQLReviewPage, "number" | "totalPages" | "totalElements">
  >
>;

const ReviewPagination: React.FC<ReviewListProps> = ({
  id,
  page = 0,
  size = 3
}) => {
  const { loading, error, data } = useQuery<ReviewPaginationData>(
    gql`
      query item($id: Int!, $page: Int!, $size: Int!) {
        item(id: $id) {
          reviews(page: $page, size: $size) {
            number
            totalPages
            totalElements
            size
          }
        }
      }
    `,
    { variables: { id, page, size } }
  );

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <HttpError error={error as any} />;
  }

  if (!data) {
    return <p>No Data!</p>;
  }

  const { number, totalElements, totalPages } = data.item.reviews;

  return (
    <div>
      <p>
        Page {number + 1} / {totalPages}
      </p>
      <p>Page size {size}</p>
      <p>Reviews in total: {totalElements} </p>
    </div>
  );
};

export default ReviewPagination;
