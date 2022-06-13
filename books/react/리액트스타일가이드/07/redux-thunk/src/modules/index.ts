import { combineReducers } from "redux";
import counter from "./counter";
import github from "./github";

const rootReducer = combineReducers({ counter, github });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
