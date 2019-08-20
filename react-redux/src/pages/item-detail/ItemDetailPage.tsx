import React from "react";
import Item from "../../components/item/Item";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../state/state.model";
import { UIDivider } from "../../ui/Divider";
import "./ItemDetailPage.scss";
import ReviewList from "../../components/review/list/ReviewList";
import NewReview from "../../components/review/new/NewReview";
import { postReview } from "../../state/review/post/post-review.actions";

interface ItemDetailPageProps {
  id: number;
}

const REVIEW_LIMIT = 3;

const ItemDetailPage: React.FC<ItemDetailPageProps> = ({ id }) => {
  const dispatch = useDispatch();
  const { byIds: itemsById } = useSelector((state: AppState) => state.normalizedItems);
  const { byIds: reviewsById } = useSelector((state: AppState) => state.normalizedReviews);
  const { loading } = useSelector((state: AppState) => state.asyncReviewPost);
  const asyncItem = itemsById[id];

  const reviews =
    (asyncItem &&
      asyncItem.data &&
      asyncItem.data.reviews &&
      asyncItem.data.reviews.map(id => reviewsById[id])) ||
    [];

  const isReviewsLoading = reviews.some(({ loading }) => loading);

  const showReviews = !isReviewsLoading && window.location.href.indexOf("no-reviews") === -1;

  return (
    <div className={"item-detail-page"}>
      <Item item={asyncItem} />
      <UIDivider />
      {showReviews && (
        <div className={"reviews"}>
          <h2>Reviews</h2>
          <UIDivider />
          <ReviewList reviews={reviews} limit={REVIEW_LIMIT} />
          <p>
            Showing {reviews.length < REVIEW_LIMIT ? reviews.length : REVIEW_LIMIT} out of{" "}
            {reviews.length}
          </p>
          <UIDivider />
        </div>
      )}
      {showReviews && (
        <>
          <NewReview
            disabled={loading}
            onSubmit={({ rating, description }) => dispatch(postReview(rating, description))}
          />
        </>
      )}
    </div>
  );
};

export default ItemDetailPage;
