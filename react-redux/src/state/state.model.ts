import { Async, Normalized } from "./state.utils";
import { ReduxItem } from "./item/item.model";

export enum HTTP_STATUS_CODE {
  UNAUTHORIZED = 401,
  NOT_FOUND = 404
}

export interface AppState {
  normalizedItems: Normalized<Async<ReduxItem>>;
}
