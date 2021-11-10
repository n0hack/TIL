import { useCallback, useRef, useState, useReducer } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({ id: i, text: `할 일 ${i}`, checked: false });
  }
  return array;
}

function reducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, undefined, createBulkTodos);
  // const [todos, setTodos] = useState(createBulkTodos());

  const nextId = useRef(2501);
  // const [todos, setTodos] = useState([
  //   { id: 1, text: '리액트의 기초 알아보기', checked: true },
  //   { id: 2, text: '컴포넌트 스타일링해 보기', checked: true },
  //   { id: 3, text: '일정 관리 앱 만들어 보기', checked: false },
  // ]);

  // const nextId = useRef(4);

  // const handleInsert = useCallback(
  //   (text) => {
  //     const todo = { id: nextId.current, text, checked: false };
  //     setTodos(todos.concat(todo));
  //     nextId.current += 1;
  //   },
  //   [todos]
  // );
  // const handleInsert = useCallback((text) => {
  //   const todo = { id: nextId.current, text, checked: false };
  //   // 최신 상태를 불러올 필요 없이 업데이트하는 방법만 알려주므로 리렌더링 시 새로 생성하지 않음
  //   setTodos((todos) => todos.concat(todo));
  //   nextId.current += 1;
  // }, []);
  const handleInsert = useCallback((text) => {
    const todo = { id: nextId.current, text, checked: false };
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1;
  }, []);

  const handleRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  const handleToggle = useCallback((id) => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

  // 직접 업데이트하는 방법 외에 상태 업데이트를 어떻게 할 지 정의해주는 함수를 보내주면 됨
  // const handleRemove = useCallback(
  //   (id) => {
  //     setTodos(todos.filter((todo) => todo.id !== id));
  //   },
  //   [todos]
  // );
  // const handleRemove = useCallback((id) => {
  //   // 함수형 업데이트를 하면 방법만 알려주기 때문에, 참조할 필요 x
  //   setTodos((todos) => todos.filter((todo) => todo.id !== id));
  // }, []);

  // const handleToggle = useCallback(
  //   (id) => {
  //     setTodos(
  //       todos.map((todo) =>
  //         todo.id === id ? { ...todo, checked: !todo.checked } : todo
  //       )
  //     );
  //   },
  //   [todos]
  // );
  // const handleToggle = useCallback((id) => {
  //   setTodos((todos) =>
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, checked: !todo.checked } : todo
  //     )
  //   );
  // }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={handleInsert} />
      <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle} />
    </TodoTemplate>
  );
}

export default App;
