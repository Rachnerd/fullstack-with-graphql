import { Async, Normalized } from "./state.utils";
import { ItemModel } from "./item/item.model";
import { ReviewModel } from "./review/review.model";

export enum HTTP_STATUS_CODE {
  UNAUTHORIZED = 401,
  NOT_FOUND = 404
}

export interface AppState {
  normalizedItems: {
    allIds: string[];
    byIds: {
      [id: string]: {
        loading: boolean;
        data?: ItemModel;
        error?: number;
      };
    };
  };
  normalizedReviews: {
    allIds: string[];
    byIds: {
      loading: boolean;
      data?: ReviewModel;
      error?: number;
    };
  };
  asyncReviewPost: {
    loading: boolean;
    data?: boolean;
    error?: number;
  };
}
