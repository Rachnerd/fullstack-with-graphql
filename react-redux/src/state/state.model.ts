import { Async, Normalized } from "./state.utils";
import { ItemModel } from "./item/item.model";
import { ReviewModel } from "./review/review.model";

export enum HTTP_STATUS_CODE {
  UNAUTHORIZED = 401,
  NOT_FOUND = 404
}

export interface AppState {
  normalizedItems: Normalized<Async<ItemModel>>;
  normalizedReviews: Normalized<Async<ReviewModel>>;
  asyncReviewPost: Async<boolean>;
}
