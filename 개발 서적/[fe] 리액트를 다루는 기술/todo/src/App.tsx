import { TodoTemplate } from './components/TodoTemplate';
import { TodoInsert } from './components/TodoInsert';
import { useCallback, useReducer, useRef, useState } from 'react';
import { Todo } from './components/TodoListItem';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array: Todo[] = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

type Action = { type: 'INSERT'; todo: Todo } | { type: 'REMOVE'; id: number } | { type: 'TOGGLE'; id: number };

function todoReducer(todos: Todo[], action: Action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'TOGGLE':
      return todos.map((todo) => (todo.id === action.id ? { ...todo, checked: !todo.checked } : todo));
    case 'REMOVE':
      return todos.filter((todo) => todo.id !== action.id);
  }
}

function App() {
  // const [todos, setTodos] = useState<Todo[]>(createBulkTodos);
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  const nextId = useRef(2501);

  const onInsert = useCallback((text: string) => {
    const todo: Todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    // setTodos((todos) => todos.concat(todo));
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1;
  }, []);

  // 함수형 업데이트를 사용하면 방법만 알림으로써 최적화 가능
  // 아니면 useReducer를 사용해서 동일하게 최적화 가능
  const onToggle = useCallback((id: number) => {
    dispatch({ type: 'TOGGLE', id });
    // setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
  }, []);

  const onRemove = useCallback((id: number) => {
    dispatch({ type: 'REMOVE', id });
    // setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </TodoTemplate>
  );
}

export default App;
