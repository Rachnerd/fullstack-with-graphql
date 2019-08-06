export interface Normalized<T> {
  allIds: string[];
  byIds: { [id: string]: T };
}

export interface Async<T> {
  data?: T;
  loading: boolean;
  error?: Error;
}
