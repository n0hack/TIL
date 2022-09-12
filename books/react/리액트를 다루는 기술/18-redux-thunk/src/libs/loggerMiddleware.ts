import { Action, Dispatch, MiddlewareAPI } from "redux";

const loggerMiddleware =
  ({ getState }: MiddlewareAPI) =>
  (next: Dispatch) =>
  (action: Action) => {
    console.group(action && action.type);
    console.log("이전 상태", getState());
    console.log("액션", action);
    next(action);
    console.log("다음 상태", getState());
    console.groupEnd();
  };

export default loggerMiddleware;
