import * as React from "react";
import "./ItemDetails.scss";
import { UIDivider } from "../../ui/Divider";
import Seller from "../seller/Seller";
import Rating from "../rating/Rating";
import { useItemDetailsQuery } from "../../.generated/gql.model";

interface ItemDetailsProps {
  id: number;
}

export const ItemDetails: React.FC<ItemDetailsProps> = ({ id }) => {
  const { loading, error, data } = useItemDetailsQuery({ variables: { id } });

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>error</p>;
  }

  if (!data || !data.item) {
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
