import { combineReducers } from "redux";
import todos from "./todos";

const rootReducer = combineReducers({ todos });

export default rootReducer;

// 루트 리듀서의 반환값 유추
export type RootState = ReturnType<typeof rootReducer>;
