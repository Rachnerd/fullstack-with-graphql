import { Epic } from "redux-observable";
import {
  FetchItem,
  fetchItemErrorAction,
  FetchItemSuccess,
  fetchItemSuccessAction,
  ItemActionsUnion,
  ItemActionType
} from "./item.actions";
import { AppState } from "../state.model";
import { map, switchMap } from "rxjs/operators";
import { ItemModel } from "./item.model";
import { ReviewModel } from "../review/review.model";
import {
  fetchItemReviews,
  FetchItemReviews,
  fetchItemReviewsErrorAction,
  fetchItemReviewsSuccessAction,
  ItemReviewsActionsUnion,
  ItemReviewsActionType
} from "./item-reviews.actions";

const BACKEND = "http://localhost:8080";

export const fetchItemEpic: Epic<ItemActionsUnion, ItemActionsUnion, AppState> = action$ =>
  action$.ofType<FetchItem>(ItemActionType.FETCH).pipe(
    switchMap(async ({ payload: { id } }) => {
      const response = await fetch(`${BACKEND}/items/${id}`);
      if (!response.ok) {
        return fetchItemErrorAction(id, response.status);
      }
      const item = (await response.json()) as ItemModel;
      return fetchItemSuccessAction(item);
    })
  );

export const fetchItemReviewsAfterItemSuccessEpic: Epic<
  ItemActionsUnion | ItemReviewsActionsUnion,
  ItemActionsUnion | ItemReviewsActionsUnion,
  AppState
> = action$ =>
  action$
    .ofType<FetchItemSuccess>(ItemActionType.FETCH_SUCCESS)
    .pipe(map(({ payload: { id } }) => fetchItemReviews(id)));

export const fetchItemReviewsEpic: Epic<
  ItemReviewsActionsUnion,
  ItemReviewsActionsUnion,
  AppState
> = action$ =>
  action$.ofType<FetchItemReviews>(ItemReviewsActionType.FETCH).pipe(
    switchMap(async ({ payload: { id } }) => {
      const response = await fetch(`${BACKEND}/items/${id}/reviews`);
      if (!response.ok) {
        return fetchItemReviewsErrorAction(id, response.status);
      }
      const { content } = (await response.json()) as Record<"content",  ReviewModel[]>;
      return fetchItemReviewsSuccessAction(id, content);
    })
  )