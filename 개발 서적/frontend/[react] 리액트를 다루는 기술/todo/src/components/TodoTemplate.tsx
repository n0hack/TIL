import React, { PropsWithChildren } from 'react';
import './TodoTemplate.scss';

type TodoTemplateProps = {};

const TodoTemplate = ({ children }: PropsWithChildren<TodoTemplateProps>) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export { TodoTemplate };
