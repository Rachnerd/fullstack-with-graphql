import { Epic } from "redux-observable";
import {
    FetchReview,
    fetchReviewErrorAction,
    fetchReviewSuccessAction,
    ReviewActionsUnion,
    ReviewActionType
} from "./review.actions";
import { AppState } from "../state.model";
import { mergeMap } from "rxjs/operators";
import { ReviewModel } from "./review.model";

const BACKEND = "http://localhost:8080";

export const fetchReviewEpic: Epic<ReviewActionsUnion, ReviewActionsUnion, AppState> = action$ =>
  action$.ofType<FetchReview>(ReviewActionType.FETCH).pipe(
    mergeMap(async ({ payload: { id } }) => {
      const response = await fetch(`${BACKEND}/reviews/${id}`);
      if (!response.ok) {
        return fetchReviewErrorAction(id, response.status);
      }
      const review = (await response.json()) as ReviewModel;
      return fetchReviewSuccessAction(review);
    })
  );
