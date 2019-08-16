import { ReviewActionsUnion, ReviewActionType } from "./review.actions";
import { ReviewModel } from "./review.model";
import { addIfNotExist, Async, INITIAL_NORMALIZED_DATA, Normalized } from "../state.utils";
import { ItemReviewsActionsUnion, ItemReviewsActionType } from "../item/item-reviews.actions";

const reviewReducer = (
  state: Normalized<Async<ReviewModel>> = INITIAL_NORMALIZED_DATA,
  action: ReviewActionsUnion | ItemReviewsActionsUnion
): Normalized<Async<ReviewModel>> => {
  switch (action.type) {
    case ReviewActionType.FETCH: {
      const { id } = action.payload;
      return {
        allIds: addIfNotExist(state.allIds, id.toString()),
        byIds: {
          ...state.byIds,
          [id]: { data: undefined, error: undefined, loading: true }
        }
      };
    }
    case ReviewActionType.FETCH_SUCCESS: {
      const data = action.payload;
      return {
        allIds: state.allIds,
        byIds: {
          ...state.byIds,
          [data.id]: { data, error: undefined, loading: false }
        }
      };
    }
    case ItemReviewsActionType.FETCH_SUCCESS: {
      const itemReviews = action.payload.reviews;
      return {
        allIds: itemReviews.reduce(
          (allIds, { id }) => addIfNotExist(allIds, id.toString()),
          state.allIds
        ),
        byIds: itemReviews.reduce(
          (byIds, review) => ({
            ...byIds,
            [review.id]: { data: review, loading: false, error: undefined }
          }),
          state.byIds
        )
      };
    }
    case ReviewActionType.FETCH_ERROR: {
      const { id, status } = action.payload;
      return {
        allIds: state.allIds,
        byIds: {
          ...state.byIds,
          [id]: { data: undefined, error: status, loading: false }
        }
      };
    }
    default:
      return state;
  }
};

export default reviewReducer;
