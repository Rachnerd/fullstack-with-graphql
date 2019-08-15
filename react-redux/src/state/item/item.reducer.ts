import { ItemActionsUnion, ItemActionType } from "./item.actions";
import { ItemModel } from "./item.model";
import { addIfNotExist, Async, INITIAL_NORMALIZED_DATA, Normalized } from "../state.utils";
import { ItemReviewsActionsUnion, ItemReviewsActionType } from "./item-reviews.actions";

const itemReducer = (
  state: Normalized<Async<ItemModel>> = INITIAL_NORMALIZED_DATA,
  action: ItemActionsUnion | ItemReviewsActionsUnion
): Normalized<Async<ItemModel>> => {
  switch (action.type) {
    case ItemActionType.FETCH: {
      const { id } = action.payload;
      return {
        allIds: addIfNotExist(state.allIds, id.toString()),
        byIds: {
          ...state.byIds,
          [id]: { data: undefined, error: undefined, loading: true }
        }
      };
    }
    case ItemActionType.FETCH_SUCCESS: {
      const data = action.payload;
      return {
        allIds: state.allIds,
        byIds: {
          ...state.byIds,
          [data.id]: { data, error: undefined, loading: false }
        }
      };
    }
    case ItemReviewsActionType.FETCH_SUCCESS: {
      const id = action.payload.id;
      const reviewIds = action.payload.reviews.map(({ id }) => id);
      return {
        allIds: state.allIds,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            data: {
                ...state.byIds[id].data,
                reviews: reviewIds
            }
          }
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
