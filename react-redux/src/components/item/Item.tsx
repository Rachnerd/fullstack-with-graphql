import * as React from "react";
import "./Item.scss";
import { UIDivider } from "../../ui/Divider";
import { ReduxItem } from "../../state/item/item.model";

import Rating from "../../ui/Rating";

interface ItemProps {
  item: ReduxItem;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const {
    averageRating,
    image = "https://media.istockphoto.com/photos/broken-claw-hammer-picture-id611296672?k=6&m=611296672&s=612x612&w=0&h=4SgFrxnuU2IVsDTWFmzvxD_cEWaNVCL5sKTdu-edsGI=",
    name
  } = item;
  return (
    <div className={"item"}>
      <h2>{name}</h2>
      <div className={"item__sub-header"}>
        <Rating score={averageRating} />
        {/*<Seller seller={seller} />*/}
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
