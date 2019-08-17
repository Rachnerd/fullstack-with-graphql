import React from "react";
import Item from "../../components/item/Item";
import "./ItemDetailPage.scss";
import { UIDivider } from "../../ui/Divider";
import ReviewList from "../../components/review/list/ReviewList";
import NewReview from "../../components/review/new/NewReview";

interface ItemDetailPageProps {
  id: number;
}

const ItemDetailPage: React.FC<ItemDetailPageProps> = ({ id }) => {
  const showReviews = window.location.href.indexOf("no-reviews") === -1;
  return (
    <div className={"item-detail-page"}>
      <Item id={id} />
      <UIDivider />
      {showReviews && (
        <div className={"reviews"}>
          <h2>Reviews</h2>
          <UIDivider />
          <ReviewList id={id} page={0} size={3} />
        </div>
      )}
      {showReviews && (
        <>
          <UIDivider />
          <NewReview itemId={id} />
        </>
      )}
    </div>
  );
};

export default ItemDetailPage;
