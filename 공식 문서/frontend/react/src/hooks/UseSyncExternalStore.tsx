import React, { useSyncExternalStore } from 'react';
import { todosStore } from './todoStore';

const UseSyncExternalStore = () => {
  const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);

  return (
    <div>
      <button onClick={() => todosStore.addTodo()}>추가</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseSyncExternalStore;
