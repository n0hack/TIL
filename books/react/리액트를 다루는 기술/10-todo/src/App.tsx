import { useCallback, useRef, useState } from "react";
import type { ITodo } from "types/todo";
import TodoTemplate from "@components/TodoTemplate";
import TodoInsert from "@components/TodoInsert";
import TodoList from "@components/TodoList";

function createBulkTodos() {
  const array: ITodo[] = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({ id: i, text: `할 일 ${i}`, checked: false });
  }
  return array;
}

function App() {
  const [todos, setTodos] = useState<ITodo[]>(createBulkTodos);

  const nextId = useRef(4);

  const onInsert = useCallback((text: string) => {
    const todo = { id: nextId.current, text, checked: false };
    setTodos((prev) => prev.concat(todo));
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id: number) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
