import React from "react";
import ItemDetails from "../../components/item/ItemDetails";
import "./ItemDetailsPage.scss";
import { Reviews } from "../../components/reviews/Reviews";

interface ItemDetailPageProps {
  id: number;
}

const ItemDetailsPage: React.FC<ItemDetailPageProps> = ({ id }) => {
  const showReviews = window.location.href.indexOf("no-reviews") === -1;

  return (
    <div className={"item-detail-page"}>
      <ItemDetails id={id} />
      <div style={{ width: "50px" }} />
      <span style={{ opacity: showReviews ? 1 : 0 }}>
        <Reviews itemId={id} />
      </span>
    </div>
  );
};

export default ItemDetailsPage;
