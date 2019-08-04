import Rating from "../../ui/Rating";
import Seller from "../../seller/Seller";
import { UIDivider } from "../../ui/Divider";
import * as React from "react";
import "./ItemHeader.scss";

const ItemHeader = ({ item }: any) => {
  const { averageRating, image, name, user } = item;
  return (
    <div className={"item-header"}>
      <h2 className={"item-header__title"}>{name}</h2>
      <div className={"item-header__sub-title"}>
        <Rating className={"item-header__rating"} score={averageRating} />
        <Seller className={"item-header__seller"} id={user.id} name={user.name} />
      </div>
      <UIDivider />
      <img className={"item-header__image"} src={image} alt={"item"} />
    </div>
  );
};

export default ItemHeader;
