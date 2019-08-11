import { Action } from "redux";
import { ItemModel } from "./item.model";

export enum ItemActionType {
  FETCH = "[ItemState] Fetch item",
  FETCH_SUCCESS = "[ItemState] Fetch item success",
  FETCH_ERROR = "[ItemState] Fetch item error"
}

export interface FetchItem extends Action<ItemActionType.FETCH> {
  payload: {
    id: number;
  };
}

export function fetchItem(id: number): ItemActionsUnion {
  return {
    type: ItemActionType.FETCH,
    payload: {
      id
    }
  };
}

export interface FetchItemSuccess extends Action<ItemActionType.FETCH_SUCCESS> {
  payload: ItemModel;
}
export function fetchItemSuccessAction(item: ItemModel): ItemActionsUnion {
  return {
    type: ItemActionType.FETCH_SUCCESS,
    payload: item
  };
}

export interface FetchItemError extends Action<ItemActionType.FETCH_ERROR> {
  payload: {
    id: number;
    status: number;
  };
}

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
