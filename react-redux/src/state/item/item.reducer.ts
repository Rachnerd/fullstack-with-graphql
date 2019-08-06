import { ItemActionsUnion, ItemActionType } from "./item.actions";
import { Async, Normalized } from "../state.utils";
import { ReduxItem } from "./item.model";

type ItemState = Normalized<Async<ReduxItem>>;

const initialState: ItemState = { byIds: {}, allIds: [] };

const itemReducer = (state: ItemState = initialState, action: ItemActionsUnion): ItemState => {
  switch (action.type) {
    case ItemActionType.FETCH: {
      const { id } = action.payload;
      return {
        allIds: [...state.allIds, ...(state.allIds.indexOf(id) === -1 ? [id] : [])],
        byIds: {
          ...state.byIds,
          [id]: { data: undefined, error: undefined, loading: true }
        }
      };
    }
    case ItemActionType.FETCH_SUCCESS: {
      const { item } = action.payload;
      return {
        allIds: state.allIds,
        byIds: {
          ...state.byIds,
          [item.id]: { data: item, error: undefined, loading: false }
        }
      };
    }
    case ItemActionType.FETCH_ERROR: {
      const { id, status } = action.payload;
      return {
        allIds: state.allIds,
        byIds: {
          ...state.byIds,
          [id]: { data: undefined, error: status, loading: false }
        }
      };
    }
    default:
      return state;
  }
};

export default itemReducer;
