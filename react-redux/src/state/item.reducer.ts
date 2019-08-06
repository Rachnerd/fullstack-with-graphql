import { ItemActionsUnion, ItemActionType } from "./item.actions";
import { ReduxItem } from "./state.model";
import { Async, Normalized } from "./state.utils";

type ItemState = Normalized<Async<ReduxItem>>;

const initialState: ItemState = { byIds: {}, allIds: [] };

const itemReducer = (state: ItemState = initialState, action: ItemActionsUnion): ItemState => {
  switch (action.type) {
    case ItemActionType.FETCH: {
      const { id } = action.payload;
      console.log('Fetch')
      return {
        allIds: [...state.allIds, ...(state.allIds.indexOf(id) === -1 ? [id] : [])],
        byIds: {
          ...state.byIds,
          [id]: { data: undefined, error: undefined, loading: true }
        }
      };
    }
    case ItemActionType.FETCH_SUCCESS: {
      const { id, item } = action.payload;
      return {
        allIds: state.allIds,
        byIds: {
          ...state.byIds,
          [id]: { data: item, error: undefined, loading: false }
        }
      };
    }
    case ItemActionType.FETCH_ERROR: {
      const { id, error } = action.payload;
      return {
        allIds: state.allIds,
        byIds: {
          ...state.byIds,
          [id]: { data: undefined, error, loading: false }
        }
      };
    }
    default:
      return state;
  }
};

export default itemReducer;
