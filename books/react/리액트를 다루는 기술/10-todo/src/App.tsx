import { useCallback, useRef, useState } from "react";
import type { ITodo } from "types/todo";
import TodoTemplate from "@components/TodoTemplate";
import TodoInsert from "@components/TodoInsert";
import TodoList from "@components/TodoList";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: 1,
      text: "리액트의 기초 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링해 보기",
      checked: true,
    },
    {
      id: 3,
      text: "일정 관리 앱 만들어 보기",
      checked: false,
    },
  ]);

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
