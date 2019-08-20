import * as React from "react";
import "./ItemDetails.scss";
import { UIDivider } from "../../ui/Divider";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { GQLItem } from "../../../.generated/gql.model";
import Seller from "../seller/Seller";
import Rating from "../rating/Rating";

export const ITEM_DETAILS_QUERY = gql`
  query item($id: Int!) {
    item(id: $id) {
      id
      name
      description
      image
      seller {
        name
      }
      averageRating
    }
  }
`;

interface ItemDetailsProps {
  id: number;
}

const ItemDetails: React.FC<ItemDetailsProps> = ({ id }) => {
  const { loading, error, data } = useQuery<Record<"item", GQLItem>>(
    ITEM_DETAILS_QUERY,
    { variables: { id } }
  );

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
      return <p>error</p>;
  }

  if (!data) {
    return <p>No Data!</p>;
  }

  const { image, name, description, averageRating } = data.item;

  return (
    <div className={"item"}>
      <h2>{name}</h2>
      <div className={"item__sub-header"}>
        <Rating rating={averageRating} />
        <Seller id={id} />
      </div>
      <UIDivider />
      <img className={"item__image"} src={image} alt={"item"} />
      <UIDivider />
      <h3>Description</h3>
      <p>{description}</p>
    </div>
  );
};

export default ItemDetails;
