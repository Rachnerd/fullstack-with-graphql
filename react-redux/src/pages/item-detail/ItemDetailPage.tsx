import React from "react";
import Item from "../../components/item/Item";
import { useSelector } from "react-redux";
import { AppState } from "../../state/state.model";
import { UIDivider } from "../../ui/Divider";
import "./ItemDetailPage.scss";
import ReviewList from "../../components/review/list/ReviewList";
import { ReviewModel } from "../../state/review/review.model";
import NewReview from "../../components/review/new/NewReview";

interface ItemDetailPageProps {
  id: string;
}

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

const reviews = [review, review2, review3];

const ItemDetailPage: React.FC<ItemDetailPageProps> = ({ id }) => {
  const { byIds: itemsById } = useSelector((state: AppState) => state.normalizedItems);
  // const [rating, setRating] = useState<number>(0);

  const showReviews = window.location.href.indexOf("no-reviews") === -1;
  const showNewReview = true;

  return (
    <div className={"item-detail-page"}>
      <Item item={itemsById[id]} />
      <UIDivider />
      {showReviews && (
        <div className={"reviews"}>
          <h2>Reviews</h2>
          <UIDivider />
          <ReviewList reviews={reviews} />
        </div>
      )}
      {showNewReview && (
        <>
          <NewReview />
        </>
      )}
      {/*<ConfigurableRating rating={rating} onSelectRating={setRating} /> {rating}*/}
    </div>
  );
};

export default ItemDetailPage;
