import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodosState = {
  input: string;
  todos: Todo[];
};

let id = 4;

const initialState: TodosState = {
  input: '',
  todos: [
    {
      id: 1,
      text: 'Redux Toolkit 배우기',
      done: true,
    },
    {
      id: 2,
      text: 'TypeScript 배우기',
      done: true,
    },
    {
      id: 3,
      text: 'TypeScript 와 Redux Toolkit 사용하기',
      done: false,
    },
  ],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    changeInput: (state, { payload: input }: PayloadAction<string>) => {
      state.input = input;
    },
    insert: (state, { payload: input }: PayloadAction<string>) => {
      const todo = {
        id: id++,
        text: input,
        done: false,
      };
      state.todos.push(todo);
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
