import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { TodoList } from "./components/TodoList";
import { effect, signal } from "@preact/signals-react";

type Todo = {
  id: string;
  name: string;
  completed: boolean;
};

const LOCAL_STORAGE_KEY = "TODOS";

// signal을 export 하여 다른 곳에서도 사용 가능하지만, 테스팅이 어려워 props로 전달하는 것을 권장함
// signal을 실제 사용하는 곳에서만 리렌더링이 발생함
const todos = signal<Todo[]>(getTodos());

export type Todos = typeof todos;

function getTodos() {
  const value = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (value === null) return [];
  return JSON.parse(value);
}

effect(() => {
  // useEffect와 달리 의존성 배열을 사용하지 않음
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos.value));
});

const App = () => {
  console.log("Render App");

  function addTodo(name: string) {
    todos.value = [
      ...todos.value,
      { id: crypto.randomUUID(), name, completed: false },
    ];
  }

  function toggleTodo(id: string, completed: boolean) {
    todos.value = todos.value.map((todo) => {
      if (todo.id === id) return { ...todo, completed };
      return todo;
    });
  }

  return (
    <div className="wrawpper">
      <Navbar todos={todos} />
      <main>
        <TodoList todos={todos} addTodo={addTodo} toggleTodo={toggleTodo} />
      </main>
      <Sidebar />
    </div>
  );
};

export default App;
