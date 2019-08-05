import * as React from "react";
import "./Item.scss";
import { UIDivider } from "../../ui/Divider";
import { ReduxItem } from "../../state/state.model";
import Rating from "../../ui/Rating";
import Seller from "../seller/Seller";

interface ItemProps {
  item: ReduxItem;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const { averageRating, image, name, seller } = item;
  return (
    <div className={"item"}>
      <h2>{name}</h2>
      <div className={"item__sub-header"}>
        <Rating score={averageRating} />
        <Seller seller={seller} />
      </div>
      <UIDivider />
      <img className={"item__image"} src={image} alt={"item"} />
      <UIDivider />
      <h2>Item description</h2>
      <p>{item.description}</p>
    </div>
  );
};

export default Item;
