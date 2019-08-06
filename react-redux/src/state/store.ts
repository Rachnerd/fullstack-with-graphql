import { applyMiddleware, combineReducers, createStore } from "redux";
import itemReducer from "./item/item.reducer";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { fetchItemEpic } from "./item/item.epics";
import { ItemActionsUnion } from "./item/item.actions";
import { AppState } from "./state.model";

const rootReducer = combineReducers({ normalizedItems: itemReducer });
const rootEpic = combineEpics(fetchItemEpic);

const epicMiddleware = createEpicMiddleware<ItemActionsUnion, ItemActionsUnion, AppState>();

export default createStore(rootReducer, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);
