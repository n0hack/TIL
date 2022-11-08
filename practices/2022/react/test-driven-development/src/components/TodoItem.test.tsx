/* eslint-disable */
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoItem from './TodoItem';

describe('<TodoItem />', () => {
  const sampleTodo = {
    id: 1,
    text: 'TDD 배우기',
    done: false,
  };

  const setup = (props = {}) => {
    const initialProps = { todo: sampleTodo };
    const utils = render(<TodoItem {...initialProps} {...props} />);
    const { getByText } = utils;
    const todo = (props as any).todo || initialProps.todo;
    const span = getByText(todo.text);
    const button = getByText('삭제');
    return {
      ...utils,
      span,
      button,
    };
  };

  it('has span and button', () => {
    const { span, button } = setup();
    expect(span).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it('shows line-throught on span when done is true', () => {
    const { span } = setup({ todo: { ...sampleTodo, done: true } });
    expect(span).toHaveStyle('text-decoration: line-through');
  });

  it('does not show line-throught on span when done is false', () => {
    const { span } = setup({ todo: { ...sampleTodo, done: false } });
    expect(span).not.toHaveStyle('text-decoration: line-through');
  });

  it('calls onToggle', () => {
    const onToggle = jest.fn();
    const { span } = setup({ onToggle });
    userEvent.click(span);
    expect(onToggle).toBeCalledWith(sampleTodo.id);
  });

  it('calls onRemove', () => {
    const onRemove = jest.fn();
    const { button } = setup({ onRemove });
    userEvent.click(button);
    expect(onRemove).toBeCalledWith(sampleTodo.id);
  });
});
