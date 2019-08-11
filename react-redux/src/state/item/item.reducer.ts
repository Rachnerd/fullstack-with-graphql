import { ItemActionsUnion, ItemActionType } from "./item.actions";
import { ItemModel } from "./item.model";
import { createAsyncReducer } from "../async.reducer";

const itemReducer = createAsyncReducer<ItemModel, ItemActionsUnion>(
  ItemActionType.FETCH,
  ItemActionType.FETCH_SUCCESS,
  ItemActionType.FETCH_ERROR
);

export default itemReducer;
