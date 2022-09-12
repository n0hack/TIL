import { combineReducers } from "redux";
import counter from "./counter";
import sample from "./sample";
import github from "./github/reducer";

const rootReducer = combineReducers({ counter, sample, github });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
