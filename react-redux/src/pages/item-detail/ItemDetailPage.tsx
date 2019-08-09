import React, { useState } from "react";
import Item from "../../components/item/Item";
import { useSelector } from "react-redux";
import { AppState } from "../../state/state.model";
import ConfigurableRating from "../../components/rating/configurable/ConfigurableRating";
import Review from "../../components/review/Review";
import { ReviewModel } from "../../state/review/review.model";
import { UIDivider } from "../../ui/Divider";
import "./ItemDetailPage.scss";

interface ItemDetailPageProps {
  id: string;
}

const ItemDetailPage: React.FC<ItemDetailPageProps> = ({ id }) => {
  const { byIds: itemsById } = useSelector((state: AppState) => state.normalizedItems);
  const [rating, setRating] = useState<number>(0);
  const review: ReviewModel = {
    description: "Exactly what I was looking for.",
    id: "1",
    rating: 1,
    itemId: "",
    userId: ""
  };
  const review2: ReviewModel = {
    id: "2",
    rating: 4,
    itemId: "",
    userId: ""
  };
  const review3: ReviewModel = {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    id: "3",
    rating: 3,
    itemId: "",
    userId: ""
  };
  return (
    <div className={"item-detail-page"}>
      <Item item={itemsById[id]} />
      <UIDivider />
      {window.location.href.indexOf("no-reviews") === -1 ? (
        <>
          <h2>Reviews</h2>
          <UIDivider />
          <Review review={review} />
          <UIDivider />
          <Review review={review2} />
          <UIDivider />
          <Review review={review3} />
          <UIDivider />
        </>
      ) : null}
      {/*<ConfigurableRating rating={rating} onSelectRating={setRating} /> {rating}*/}
    </div>
  );
};

export default ItemDetailPage;
