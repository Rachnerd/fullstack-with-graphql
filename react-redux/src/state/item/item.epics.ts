import { Epic } from "redux-observable";
import {
  FetchItem,
  fetchItemErrorAction,
  fetchItemSuccessAction,
  ItemActionsUnion,
  ItemActionType
} from "./item.actions";
import { AppState } from "../state.model";
import { switchMap } from "rxjs/operators";
import { ReduxItem } from "./item.model";

const BACKEND = "http://localhost:8080";

export const fetchItemEpic: Epic<ItemActionsUnion, ItemActionsUnion, AppState> = action$ =>
  action$.ofType<FetchItem>(ItemActionType.FETCH).pipe(
    switchMap(async ({ payload: { id } }) => {
      const response = await fetch(`${BACKEND}/items/${id}`);
      if (!response.ok) {
        return fetchItemErrorAction(id, response.status);
      }
      const item = (await response.json()) as ReduxItem;
      return fetchItemSuccessAction(item);
    })
  );
