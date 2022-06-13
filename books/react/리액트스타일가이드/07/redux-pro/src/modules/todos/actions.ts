import { createAction } from "@reduxjs/toolkit";

const ADD_TODO = "todos/ADD_TODO" as const;
const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
const REMOVE_TODO = "todos/REMOVE_TODO" as const;

let nextId = 1;

// export const addTodo = (text: string) => ({
//   type: ADD_TODO,
//   payload: { id: nextId++, text },
// });
// export const toggleTodo = (id: number) => ({ type: TOGGLE_TODO, payload: id });
// export const removeTodo = (id: number) => ({ type: REMOVE_TODO, payload: id });

export const addTodo = createAction(ADD_TODO, (text: string) => ({
  payload: { id: nextId++, text },
}));
export const toggleTodo = createAction<number>(TOGGLE_TODO);
export const removeTodo = createAction<number>(REMOVE_TODO);
