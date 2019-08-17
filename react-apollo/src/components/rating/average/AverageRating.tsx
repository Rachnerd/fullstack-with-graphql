import Rating from "../Rating";
import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GQLItem } from "../../../../.generated/gql.model";
import gql from "graphql-tag";
import HttpError from "../../../http-error/HttpError";

export const AverageRating = ({ id }: { id: number }) => {
  const { loading, error, data } = useQuery<Record<"item", GQLItem>>(
    gql`
      query item($id: Int!) {
        item(id: $id) {
          averageRating
        }
      }
    `,
    { variables: { id } }
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

  return <Rating rating={data.item.averageRating} />;
};
