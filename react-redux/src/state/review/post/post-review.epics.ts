import { Epic } from "redux-observable";
import { delay, map, mergeMap, tap } from "rxjs/operators";
import {
  PostReview,
  PostReviewActionsUnion,
  PostReviewActionType,
  postReviewErrorAction,
  PostReviewSuccess,
  postReviewSuccessAction
} from "./post-review.actions";
import { AppState } from "../../state.model";
import { fetchReview, ReviewActionsUnion } from "../review.actions";

const BACKEND = "http://localhost:8080";

export const postReviewEpic: Epic<
  PostReviewActionsUnion,
  PostReviewActionsUnion,
  AppState
> = action$ =>
  action$.ofType<PostReview>(PostReviewActionType.POST).pipe(
    mergeMap(async ({ payload: { description, rating } }) => {
      const response = await fetch(`${BACKEND}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ description, rating, itemId: "1" }) // body data type must match "Content-Type" header
      });

      if (!response.ok) {
        return postReviewErrorAction(response.status);
      }
      const id = response.headers.get("Location");
      return postReviewSuccessAction(parseInt(id!));
    }),
    delay(1000)
  );

export const fetchNewReviewEpic: Epic<
  PostReviewActionsUnion | ReviewActionsUnion,
  PostReviewActionsUnion | ReviewActionsUnion,
  AppState
> = action$ =>
  action$.ofType<PostReviewSuccess>(PostReviewActionType.POST_SUCCESS).pipe(
    tap(() => window.postMessage("scroll-down2", "*")),
    map(({ payload: { id } }) => fetchReview(id))
  );
