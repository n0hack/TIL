import { Todos } from "../App";
import { computed } from "@preact/signals-react";

type Props = {
  todos: Todos;
};

const Navbar = ({ todos }: Props) => {
  console.log("Render Navbar");

  const compltedTodosCount = computed(() => {
    return todos.value.filter((todo) => todo.completed).length;
  });

  return (
    <nav>
      <div>Completed: {compltedTodosCount.value}</div>
      <a href="/">Todos</a>
      <a href="/account">Account</a>
    </nav>
  );
};

export { Navbar };
