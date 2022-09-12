import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todos {
  input: string;
  todos: Todo[];
}

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

let id = 3;
const initialState: Todos = {
  input: "",
  todos: [
    {
      id: 1,
      text: "리덕스 기초 배우기",
      done: true,
    },
    {
      id: 2,
      text: "리액트와 리덕스 사용하기",
      done: false,
    },
  ],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    changeInput: (state, { payload: input }: PayloadAction<string>) => {
      state.input = input;
    },
    insert: (state, { payload: text }: PayloadAction<string>) => {
      const newTodo = {
        id: id++,
        text,
        done: false,
      };
      state.todos.push(newTodo);
    },
    toggle: (state, { payload: id }: PayloadAction<number>) => {
      const index = state.todos.findIndex((todo) => todo.id === id);
      state.todos[index].done = !state.todos[index].done;
    },
    remove: (state, { payload: id }: PayloadAction<number>) => {
      const index = state.todos.findIndex((todo) => todo.id === id);
      state.todos.splice(index, 1);
    },
  },
});

export const { changeInput, insert, toggle, remove } = todosSlice.actions;

export default todosSlice.reducer;
