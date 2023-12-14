import React from 'react';
import { signal } from '@preact/signals';

const todos = signal([{ text: 'Preact 공부' }, { text: '운동' }]);

const text = signal('');

const Todo = () => {
  const addTodo = () => {
    todos.value = [...todos.value, { text: text.value }];
    text.value = '';
  };

  const removeTodo = (todo: (typeof todos.value)[number]) => {
    todos.value = todos.value.filter((t) => t !== todo);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    text.value = e.target.value;
  };

  return (
    <div>
      <input value={text.value} onChange={onChange} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.value.map((todo) => (
          <li key={todo.text}>
            {todo.text} <button onClick={() => removeTodo(todo)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
