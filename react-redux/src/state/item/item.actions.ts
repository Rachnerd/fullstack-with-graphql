import { Action } from "redux";
import { ReduxItem } from "./item.model";

export enum ItemActionType {
  FETCH = "[ItemState] Fetch item",
  FETCH_SUCCESS = "[ItemState] Fetch item success",
  FETCH_ERROR = "[ItemState] Fetch item error"
}

export interface FetchItem extends Action<ItemActionType.FETCH> {
  payload: {
    id: string;
  };
}

export function fetchItem(id: string): ItemActionsUnion {
  return {
    type: ItemActionType.FETCH,
    payload: {
      id
    }
  };
}

export interface FetchItemSuccess extends Action<ItemActionType.FETCH_SUCCESS> {
  payload: {
    item: ReduxItem;
  };
}
export function fetchItemSuccessAction(item: ReduxItem): ItemActionsUnion {
  return {
    type: ItemActionType.FETCH_SUCCESS,
    payload: {
      item
    }
  };
}

export interface FetchItemError extends Action<ItemActionType.FETCH_ERROR> {
  payload: {
    id: string;
    status: number;
  };
}

export function fetchItemErrorAction(id: string, status: number): ItemActionsUnion {
  return {
    type: ItemActionType.FETCH_ERROR,
    payload: {
      id,
      status
    }
  };
}

export type ItemActionsUnion = FetchItem | FetchItemSuccess | FetchItemError;
