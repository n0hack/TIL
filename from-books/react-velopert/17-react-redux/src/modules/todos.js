// 액션 정의 (모듈명/액션명)
// 모듈명을 함께 적어주는 이유는 규모가 커졌을 때, 중복을 방지하기 위함
// const CHANGE_INPUT = 'todos/CHANGE_INPUT';
// const INSERT = 'todos/INSERT';
// const TOGGLE = 'todos/TOGGLE';
// const REMOVE = 'todos/REMOVE';
// // 액션 생성 함수
// let id = 3;
// export const changeInput = (input) => ({ type: CHANGE_INPUT, input });
// export const insert = (text) => ({
//   type: INSERT,
//   todo: { id: id++, text, done: false },
// });
// export const toggle = (id) => ({ type: TOGGLE, id });
// export const remove = (id) => ({ type: REMOVE, id });

import { createAction, createReducer } from '@reduxjs/toolkit';
import produce from 'immer';

let id = 3;
export const changeInput = createAction('CHANGE_INPUT');
export const insert = createAction('INSERT', (text) => {
  console.log(text);
  return { payload: { id: id++, text, done: false } };
});
export const remove = createAction('REMOVE');
export const toggle = createAction('TOGGLE');

// 초기값
const initialState = {
  input: '',
  todos: [
    { id: 1, text: '리덕스 기초 배우기', done: true },
    { id: 2, text: '리액트와 리덕스 사용하기', done: false },
  ],
};

const todos = createReducer(initialState, {
  [changeInput.type]: (state, { payload: input }) => ({ ...state, input }),
  [insert.type]: (state, { payload: todo }) =>
    produce(state, (draft) => {
      draft.todos.push(todo);
    }),
  // [insert.type]: (state, { payload: todo }) => ({
  //   ...state,
  //   todos: state.todos.concat(todo),
  // }),
  [remove.type]: (state, { payload: id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  }),
  [toggle.type]: (state, { payload: id }) => ({
    ...state,
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ),
  }),
});

// 업데이트 함수
// function todos(state = initialState, action) {
//   switch (action.type) {
//     case 'CHANGE_INPUT':
//       return { ...state, input: action.payload };
//     case 'INSERT':
//       console.log(action);
//       return { ...state, todos: state.todos.concat(action.payload) };
//     case 'TOGGLE':
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.payload ? { ...todo, done: !todo.done } : todo
//         ),
//       };
//     case 'REMOVE':
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// }

export default todos;
