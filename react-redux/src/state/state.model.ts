import { Async, Normalized } from "./state.utils";
import { ReduxItem } from "./item/item.model";

export enum HTTP_STATUS_CODE {
  UNAUTHORIZED = 401
}

export interface AppState {
  normalizedItems: Normalized<Async<ReduxItem>>;
}
