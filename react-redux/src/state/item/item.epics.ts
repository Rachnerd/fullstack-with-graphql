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
import { switchMap } from "rxjs/operators";
import { ItemModel } from "./item.model";
import { fetchReview, ReviewActionsUnion } from "../review/review.actions";

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

export const fetchItemReviewsEpic: Epic<
  ItemActionsUnion | ReviewActionsUnion,
  ItemActionsUnion | ReviewActionsUnion,
  AppState
> = action$ =>
  action$
    .ofType<FetchItemSuccess>(ItemActionType.FETCH_SUCCESS)
    .pipe(switchMap(({ payload: { reviewIds } }) => reviewIds.map(fetchReview)));
