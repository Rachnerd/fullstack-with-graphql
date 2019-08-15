import { ActionWithPayload } from "../state.utils";
import { ReviewModel } from "../review/review.model";

export enum ItemReviewsActionType {
  FETCH = "[ItemState] Fetch item reviews",
  FETCH_SUCCESS = "[ItemState] Fetch item reviews success",
  FETCH_ERROR = "[ItemState] Fetch item reviews error"
}

export type FetchItemReviews = ActionWithPayload<ItemReviewsActionType.FETCH, { id: number }>;

export function fetchItemReviews(id: number): ItemReviewsActionsUnion {
  return {
    type: ItemReviewsActionType.FETCH,
    payload: {
      id
    }
  };
}

export type FetchItemSuccess = ActionWithPayload<
  ItemReviewsActionType.FETCH_SUCCESS,
  {
    id: number;
    reviews: ReviewModel[];
  }
>;

export function fetchItemReviewsSuccessAction(id: number, reviews: ReviewModel[]): ItemReviewsActionsUnion {
  return {
    type: ItemReviewsActionType.FETCH_SUCCESS,
    payload: {
      id,
      reviews
    }
  };
}

export type FetchItemReviewsError = ActionWithPayload<
  ItemReviewsActionType.FETCH_ERROR,
  {
    id: number;
    status: number;
  }
>;
export function fetchItemReviewsErrorAction(id: number, status: number): ItemReviewsActionsUnion {
  return {
    type: ItemReviewsActionType.FETCH_ERROR,
    payload: {
      id,
      status
    }
  };
}

export type ItemReviewsActionsUnion = FetchItemReviews | FetchItemSuccess | FetchItemReviewsError;
