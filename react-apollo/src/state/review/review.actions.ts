import { ReviewModel } from "./review.model";
import { ActionWithPayload } from "../state.utils";

export enum ReviewActionType {
  FETCH = "[ReviewState] Fetch review",
  FETCH_SUCCESS = "[ReviewState] Fetch review success",
  FETCH_ERROR = "[ReviewState] Fetch review error"
}

export type FetchReview = ActionWithPayload<
  ReviewActionType.FETCH,
  {
    id: number;
  }
>;

export function fetchReview(id: number): ReviewActionsUnion {
  return {
    type: ReviewActionType.FETCH,
    payload: {
      id
    }
  };
}

export type FetchReviewSuccess = ActionWithPayload<ReviewActionType.FETCH_SUCCESS, ReviewModel>;

export function fetchReviewSuccessAction(review: ReviewModel): ReviewActionsUnion {
  return {
    type: ReviewActionType.FETCH_SUCCESS,
    payload: review
  };
}

export type FetchReviewError = ActionWithPayload<
  ReviewActionType.FETCH_ERROR,
  {
    id: number;
    status: number;
  }
>;

export function fetchReviewErrorAction(id: number, status: number): ReviewActionsUnion {
  return {
    type: ReviewActionType.FETCH_ERROR,
    payload: {
      id,
      status
    }
  };
}

export type ReviewActionsUnion = FetchReview | FetchReviewSuccess | FetchReviewError;
