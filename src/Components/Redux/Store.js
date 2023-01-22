import { combineReducers, createStore } from "redux";
import { reducer } from "./reducer";

const rootReducer = combineReducers({
  reducer,
});

export const store = createStore(rootReducer);
