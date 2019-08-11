import { applyMiddleware, combineReducers, createStore } from "redux";
import itemReducer from "./item/item.reducer";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { fetchItemEpic, fetchItemReviewsEpic } from "./item/item.epics";
import { ItemActionsUnion } from "./item/item.actions";
import { AppState } from "./state.model";
import reviewReducer from "./review/review.reducer";
import { fetchReviewEpic } from "./review/review.epics";
import postReviewReducer from "./review/post/post-review.reducer";
import { fetchNewReviewEpic, postReviewEpic } from "./review/post/post-review.epics";

const rootReducer = combineReducers({
  normalizedItems: itemReducer,
  normalizedReviews: reviewReducer,
  normalizedReviewPosts: postReviewReducer
});
const rootEpic = combineEpics(
  fetchItemEpic,
  fetchItemReviewsEpic,
  fetchReviewEpic,
  postReviewEpic,
  fetchNewReviewEpic
);

const epicMiddleware = createEpicMiddleware<ItemActionsUnion, ItemActionsUnion, AppState>();

export default createStore(rootReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);
