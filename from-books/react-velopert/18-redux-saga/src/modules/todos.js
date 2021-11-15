import { createAction, createReducer } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import produce from 'immer';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const REMOVE = 'todos/REMOVE';
const TOGGLE = 'todos/TOGGLE';

export const changeInput = createAction(CHANGE_INPUT, (input) => ({
  payload: input,
}));
export const insert = createAction(INSERT, (text) => ({
  payload: { id: nanoid(), text, done: false },
}));
export const remove = createAction(REMOVE, (id) => ({ payload: id }));
export const toggle = createAction(TOGGLE, (id) => ({ payload: id }));

const initialState = {
  input: '',
  todos: [
    { id: nanoid(), text: '리덕스 기초 배우기', done: true },
    { id: nanoid(), text: '리액트와 리덕스 사용하기', done: false },
  ],
};

const todos = createReducer(initialState, {
  [CHANGE_INPUT]: (state, { payload: input }) =>
    produce(state, (draft) => {
      draft.input = input;
    }),
  [INSERT]: (state, { payload: todo }) =>
    produce(state, (draft) => {
      draft.todos.push(todo);
    }),
  [REMOVE]: (state, { payload: id }) =>
    produce(state, (draft) => {
      draft.todos.splice(
        draft.todos.findIndex((todo) => todo.id === id),
        1
      );
    }),
  [TOGGLE]: (state, { payload: id }) => ({
    ...state,
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ),
  }),
});

export default todos;
