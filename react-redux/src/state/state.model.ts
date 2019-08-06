import { Async, Normalized } from "./state.utils";

export interface AppState {
  item: Normalized<Async<ReduxItem>>;
}

export interface ReduxItem {
  id: string;
  name: string;
  description: string;
  image: string;
  averageRating: number;
}

export interface ReduxUser {
  id: string;
  name: string;
}
