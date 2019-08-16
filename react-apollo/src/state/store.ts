import { applyMiddleware, combineReducers, createStore } from "redux";
import itemReducer from "./item/item.reducer";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import {
  fetchItemEpic,
  fetchItemReviewsAfterItemSuccessEpic,
  fetchItemReviewsEpic
} from "./item/item.epics";
import { ItemActionsUnion } from "./item/item.actions";
import { AppState } from "./state.model";
import reviewReducer from "./review/review.reducer";
import { fetchReviewEpic } from "./review/review.epics";
import postReviewReducer from "./review/post/post-review.reducer";
import { fetchReviewAfterPost, postReviewEpic } from "./review/post/post-review.epics";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  normalizedItems: itemReducer,
  normalizedReviews: reviewReducer,
  asyncReviewPost: postReviewReducer
});

const rootEpic = combineEpics(
  fetchItemEpic,
  fetchReviewEpic,
  postReviewEpic,
  fetchReviewAfterPost,
  fetchItemReviewsEpic,
  fetchItemReviewsAfterItemSuccessEpic
);

const epicMiddleware = createEpicMiddleware<ItemActionsUnion, ItemActionsUnion, AppState>();

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)));
epicMiddleware.run(rootEpic);
