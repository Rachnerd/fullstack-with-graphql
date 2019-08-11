import { Async, Normalized } from "./state.utils";

const initialState = { byIds: {}, allIds: [] };

export const createAsyncReducer = <
  T extends { id: number },
  Union extends { type: string; payload: T | { id: number } | { id: number; status: number } }
>(
  triggerType: Union["type"],
  successType: Union["type"],
  errorType: Union["type"]
) => (state: Normalized<Async<T>> = initialState, action: Union): Normalized<Async<T>> => {
  switch (action.type) {
    case triggerType: {
      const { id } = action.payload;
      return {
        allIds: [
          ...state.allIds,
          ...(state.allIds.indexOf(id.toString()) === -1 ? [id.toString()] : [])
        ],
        byIds: {
          ...state.byIds,
          [id]: { data: undefined, error: undefined, loading: true }
        }
      };
    }
    case successType: {
      console.log(successType)
      const data = action.payload;
      return {
        allIds: state.allIds,
        byIds: {
          ...state.byIds,
          [data.id]: { data, error: undefined, loading: false }
        }
      };
    }
    case errorType: {
      console.log(errorType)
      const { id, status } = action.payload as { id: number; status: number };
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
