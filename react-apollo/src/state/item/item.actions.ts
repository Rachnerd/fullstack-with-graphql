import { ItemModel } from "./item.model";
import { ActionWithPayload } from "../state.utils";

export enum ItemActionType {
  FETCH = "[ItemState] Fetch item",
  FETCH_SUCCESS = "[ItemState] Fetch item success",
  FETCH_ERROR = "[ItemState] Fetch item error"
}

export type FetchItem = ActionWithPayload<ItemActionType.FETCH, { id: number }>;

export function fetchItem(id: number): ItemActionsUnion {
  return {
    type: ItemActionType.FETCH,
    payload: {
      id
    }
  };
}

export type FetchItemSuccess = ActionWithPayload<ItemActionType.FETCH_SUCCESS, ItemModel>;

export function fetchItemSuccessAction(item: ItemModel): ItemActionsUnion {
  return {
    type: ItemActionType.FETCH_SUCCESS,
    payload: item
  };
}

export type FetchItemError = ActionWithPayload<
  ItemActionType.FETCH_ERROR,
  {
    id: number;
    status: number;
  }
>;
export function fetchItemErrorAction(id: number, status: number): ItemActionsUnion {
  return {
    type: ItemActionType.FETCH_ERROR,
    payload: {
      id,
      status
    }
  };
}

export type ItemActionsUnion = FetchItem | FetchItemSuccess | FetchItemError;
