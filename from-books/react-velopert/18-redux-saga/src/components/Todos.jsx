import React from 'react';

const TodoItem = ({ todo, onRemove, onToggle }) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : '' }}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onRemove,
  onToggle,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');
  };

  const handleChange = (e) => onChangeInput(e.target.value);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button>등록</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
