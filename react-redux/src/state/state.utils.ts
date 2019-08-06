export interface Normalized<T> {
  allIds: string[];
  byIds: { [id: string]: T };
}

export interface Async<T> {
  loading: boolean;
  data?: T;
  error?: number;
}
