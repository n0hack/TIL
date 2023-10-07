import React, { useCallback } from 'react';
import TodoListItem, { Todo } from './TodoListItem';
import { List, ListRowRenderer } from 'react-virtualized';
import './TodoList.scss';

type TodoListProps = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

const TodoList = ({ todos, onToggle, onRemove }: TodoListProps) => {
  const rowRenderer: ListRowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return <TodoListItem key={key} todo={todo} onToggle={onToggle} onRemove={onRemove} style={style} />;
    },
    [onRemove, onToggle, todos],
  );

  return (
    <List
      className="TodoList"
      rowHeight={57}
      width={512}
      height={513}
      rowCount={todos.length}
      rowRenderer={rowRenderer}
      style={{ outline: 'none' }}
    />
  );
};

export default React.memo(TodoList);
