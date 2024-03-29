import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import './TodoListItem.scss';
import clsx from 'clsx';

export type Todo = {
  id: number;
  text: string;
  checked: boolean;
};

type TodoListItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
  style?: React.CSSProperties;
};

const TodoListItem = ({ todo: { id, text, checked }, onToggle, onRemove, style }: TodoListItemProps) => {
  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <div className={clsx('checkbox', checked ? 'checked' : '')} onClick={() => onToggle(id)}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
