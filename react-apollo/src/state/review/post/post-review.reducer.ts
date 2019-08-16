import { Async } from "../../state.utils";
import { PostReviewActionsUnion, PostReviewActionType } from "./post-review.actions";

const postReviewReducer = (
  state: Async<boolean> = { data: undefined, error: undefined, loading: false },
  action: PostReviewActionsUnion
): Async<boolean> => {
  switch (action.type) {
    case PostReviewActionType.POST: {
      return { data: undefined, error: undefined, loading: true };
    }
    case PostReviewActionType.POST_SUCCESS: {
      return { data: true, error: undefined, loading: false };
    }
    case PostReviewActionType.POST_ERROR: {
      const { status } = action.payload as { status: number };
      return { data: undefined, error: status, loading: false };
    }
    default:
      return state;
  }
};

export default postReviewReducer;
