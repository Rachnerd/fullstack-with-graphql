import { ReduxItem } from "./state.model";
import { Action } from "redux";

export enum ItemActionType {
  FETCH = "[ItemState] Fetch item",
  FETCH_SUCCESS = "[ItemState] Fetch item success",
  FETCH_ERROR = "[ItemState] Fetch item error"
}

export function fetchItem(id: string): ItemActionsUnion {
  return {
    type: ItemActionType.FETCH,
    payload: {
      id
    }
  };
}
export interface FetchItem extends Action<ItemActionType.FETCH> {
  payload: {
    id: string;
  };
}

export interface FetchItemSuccess extends Action<ItemActionType.FETCH_SUCCESS> {
  payload: {
    id: string;
    item: ReduxItem;
  };
}
export function fetchItemSuccess(id: string, item: ReduxItem): ItemActionsUnion {
  return {
    type: ItemActionType.FETCH_SUCCESS,
    payload: {
      id,
      item
    }
  };
}

export interface FetchItemError extends Action<ItemActionType.FETCH_ERROR> {
  payload: {
    id: string;
    error: Error;
  };
}

export function fetchItemError(id: string, error: Error): ItemActionsUnion {
  return {
    type: ItemActionType.FETCH_ERROR,
    payload: {
      id,
      error
    }
  };
}

export type ItemActionsUnion = FetchItem | FetchItemSuccess | FetchItemError;
