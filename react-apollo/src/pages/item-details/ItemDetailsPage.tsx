import React from "react";
import { ItemDetails } from "../../components/item/ItemDetails";
import "./ItemDetailsPage.scss";
import { Reviews } from "../../components/reviews/Reviews";
import { UISeparator } from "../../ui/Divider";

interface ItemDetailPageProps {
  id: number;
}

export const ItemDetailsPage: React.FC<ItemDetailPageProps> = ({ id }) => (
  <div className={"item-detail-page"}>
    <ItemDetails id={id} />
    <UISeparator />
    <Reviews itemId={id} />
  </div>
);
