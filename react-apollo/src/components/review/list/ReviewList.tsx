import { UIDivider } from "../../../ui/Divider";
import Review from "../Review";
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GQLItem } from "../../../../.generated/gql.model";
import gql from "graphql-tag";
import HttpError from "../../../http-error/HttpError";
import Pagination from "../../pagination/Pagination";
import { REVIEW_FRAGMENT } from "../../../client/fragments/review.fragments";
import { PAGE_FRAGMENT } from "../../../client/fragments/page.fragments";

interface ReviewListProps {
  itemId: number;
  page?: number;
  size?: number;
}

export const REVIEW_LIST_QUERY = gql`
  query Item($id: Int!, $page: Int!, $size: Int!) {
    item(id: $id) {
      id
      reviews(page: $page, size: $size) {
        ...PageFragment
        content {
          ...ReviewFragment
        }
      }
    }
  }
  ${PAGE_FRAGMENT}
  ${REVIEW_FRAGMENT}
`;

const ReviewList: React.FC<ReviewListProps> = ({
  itemId,
  page = 0,
  size = 3
}) => {
  const { loading, error, data } = useQuery<Record<"item", GQLItem>>(
    REVIEW_LIST_QUERY,
    { variables: { id: itemId, page, size } }
  );

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    console.log(error);
    return <HttpError error={error as any} />;
  }

  if (!data) {
    return <p>No Data!</p>;
  }

  return (
    <div>
      <ul>
        {data!.item.reviews.content.map((review, index) => (
          <li key={index}>
            <Review review={review} />
            <UIDivider />
          </li>
        ))}
      </ul>
      <Pagination page={data!.item.reviews} />
    </div>
  );
};

export default ReviewList;
