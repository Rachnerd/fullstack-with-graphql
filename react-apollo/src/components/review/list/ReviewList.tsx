import { UIDivider } from "../../../ui/Divider";
import Review from "../Review";
import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GQLItem } from "../../../../.generated/gql.model";
import gql from "graphql-tag";
import HttpError from "../../../http-error/HttpError";

interface ReviewListProps {
  id: number;
  page?: number;
  size?: number;
}

const ReviewList: React.FC<ReviewListProps> = ({ id, page = 0, size = 3 }) => {
  const { loading, error, data } = useQuery<Record<"item", GQLItem>>(
    gql`
      query item($id: Int!, $page: Int!, $size: Int!) {
        item(id: $id) {
          reviews(page: $page, size: $size) {
            content {
              description
              rating
              author {
                name
                image
              }
            }
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

  return (
    <ul>
      {data!.item.reviews.content.map((review, index) => (
        <li key={index}>
          <Review review={review} />
          <UIDivider />
        </li>
      ))}
    </ul>
  );
};

export default ReviewList;
