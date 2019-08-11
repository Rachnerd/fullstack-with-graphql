import { ReviewActionsUnion, ReviewActionType } from "./review.actions";
import { ReviewModel } from "./review.model";
import { createAsyncReducer } from "../async.reducer";

const reviewReducer = createAsyncReducer<ReviewModel, ReviewActionsUnion>(
  ReviewActionType.FETCH,
  ReviewActionType.FETCH_SUCCESS,
  ReviewActionType.FETCH_ERROR
);

export default reviewReducer;
