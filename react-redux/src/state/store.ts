import { createStore, combineReducers } from "redux";
import item from "./item.reducer";

const rootReducer = combineReducers({ item });

export default createStore(rootReducer);
