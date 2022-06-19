import { createReducer } from "@reduxjs/toolkit";
import { TodosState } from "./types";
import { addTodo, toggleTodo, removeTodo } from "./actions";

const initialState: TodosState = [];

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(addTodo, (state, action) =>
    state.concat({
      id: action.payload.id,
      text: action.payload.text,
      done: false,
    })
  );
  builder.addCase(toggleTodo, (state, action) =>
    state.map((todo) =>
      todo.id === action.payload ? { ...todo, done: !todo.done } : todo
    )
  );
  builder.addCase(removeTodo, (state, action) =>
    state.filter((todo) => todo.id !== action.payload)
  );
});

export default reducer;
