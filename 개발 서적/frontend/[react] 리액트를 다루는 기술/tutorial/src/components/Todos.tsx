import React from 'react';
import { Todo } from '../modules/todos';

type TodoItemProps = {
  todo: Todo;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
};

const TodoItem = ({ todo, onRemove, onToggle }: TodoItemProps) => {
  return (
    <div>
      <input type="checkbox" onClick={() => onToggle(todo.id)} checked={todo.done} />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

type TodosProps = {
  input: string;
  todos: Todo[];
  onChangeInput: (input: string) => void;
  onInsert: (input: string) => void;
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
};

const Todos = ({ input, todos, onChangeInput, onInsert, onRemove, onToggle }: TodosProps) => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeInput(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
