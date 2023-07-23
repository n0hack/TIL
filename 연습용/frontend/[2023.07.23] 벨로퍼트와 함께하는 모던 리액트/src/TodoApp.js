import { createGlobalStyle } from 'styled-components';
import React from 'react';
import TodoTemplate from './components/todo/TodoTemplate';
import TodoHead from './components/todo/TodoHead';
import TodoList from './components/todo/TodoList';
import TodoCreate from './components/todo/TodoCreate';
import { TodoProvider } from './contexts/TodoContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function TodoApp() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default TodoApp;
