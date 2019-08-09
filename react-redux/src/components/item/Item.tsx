import * as React from "react";
import "./Item.scss";
import { UIDivider } from "../../ui/Divider";
import { ItemModel } from "../../state/item/item.model";

import Rating from "../rating/Rating";
import { Async } from "../../state/state.utils";
import HttpError from "../../http-error/HttpError";

interface ItemProps {
  item: Async<ItemModel>;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const { loading, data, error } = item;

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <HttpError error={error} />;
  }

  if (!data) {
    return <p>No Data!</p>;
  }

  const {
    averageRating,
    image,
    name,
    description
  } = data;
  return (
    <div className={"item"}>
      <h2>{name}</h2>
      <div className={"item__sub-header"}>
        <Rating rating={averageRating} />
        {/*<Seller seller={seller} />*/}
      </div>
      <UIDivider />
      <img className={"item__image"} src={image} alt={"item"} />
      <UIDivider />
      <h2>Item description</h2>
      <p>{description}</p>
    </div>
  );
};

export default Item;
