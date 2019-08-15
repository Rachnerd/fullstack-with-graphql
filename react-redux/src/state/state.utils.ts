import { Action } from "redux";

export interface Normalized<T> {
  allIds: string[];
  byIds: { [id: string]: T };
}

export interface Async<T> {
  loading: boolean;
  data?: T;
  error?: number;
}

export interface ActionWithPayload<T, P> extends Action<T> {
  payload: P;
}

export const INITIAL_NORMALIZED_DATA: Normalized<any>  = { byIds: {}, allIds: []};

export const addIfNotExist = <T>(collection: T[], value: T) => [
  ...collection,
  ...(collection.indexOf(value) === -1 ? [value] : [])
];
