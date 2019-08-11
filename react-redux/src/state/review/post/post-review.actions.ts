import { Action } from "redux";

export enum PostReviewActionType {
  POST = "[ReviewState] Post review",
  POST_SUCCESS = "[ReviewState] Post review success",
  POST_ERROR = "[ReviewState] Post review error"
}

/*
 * POST
 */
export interface PostReview extends Action<PostReviewActionType.POST> {
  payload: {
    rating: number;
    description?: string;
  };
}

export function postReview(rating: number, description?: string): PostReviewActionsUnion {
  return {
    type: PostReviewActionType.POST,
    payload: {
      rating,
      description
    }
  };
}

export interface PostReviewSuccess extends Action<PostReviewActionType.POST_SUCCESS> {
  payload: {
    id: number;
  };
}

export function postReviewSuccessAction(id: number): PostReviewActionsUnion {
  return {
    type: PostReviewActionType.POST_SUCCESS,
    payload: {
      id
    }
  };
}

export interface PostReviewError extends Action<PostReviewActionType.POST_ERROR> {
  payload: {
    status: number;
  };
}

export function postReviewErrorAction(status: number): PostReviewActionsUnion {
  return {
    type: PostReviewActionType.POST_ERROR,
    payload: {
      status
    }
  };
}

export type PostReviewActionsUnion = PostReview | PostReviewSuccess | PostReviewError;
