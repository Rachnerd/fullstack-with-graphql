import React from "react";
import Item from "../../components/item/Item";
import "./ItemDetailPage.scss";
import { Reviews } from "../../components/review/reviews/Reviews";

interface ItemDetailPageProps {
  id: number;
}

const ItemDetailPage: React.FC<ItemDetailPageProps> = ({ id }) => {
  const showReviews = window.location.href.indexOf("no-reviews") === -1;

  return (
    <div className={"item-detail-page"}>
      <Item id={id} />
      <div style={{ width: "50px" }} />
      <span style={{ opacity: showReviews ? 1 : 0 }}>
        <Reviews itemId={id} />
      </span>
    </div>
  );
};

export default ItemDetailPage;
