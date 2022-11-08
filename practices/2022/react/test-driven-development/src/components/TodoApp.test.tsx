/* eslint-disable */
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoApp from './TodoApp';

describe('<TodoApp />', () => {
  it('renders TodoForm and TodoList', () => {
    const { getByText, getByTestId } = render(<TodoApp />);
    getByText('등록');
    getByTestId('TodoList');
  });

  it('renders two defaults todos', () => {
    const { getByText } = render(<TodoApp />);
    getByText('TDD 배우기');
    getByText('@testing-library/react 사용하기');
  });

  it('creates new todo', async () => {
    const { getByPlaceholderText, getByText } = render(<TodoApp />);
    const input = getByPlaceholderText('할 일을 입력하세요');
    fireEvent.change(input, { target: { value: '새 항목 추가하기' } });
    userEvent.click(getByText('등록'));
    getByText('새 항목 추가하기');
  });

  it('toggles todo', () => {
    const { getByText } = render(<TodoApp />);
    const todoText = getByText('TDD 배우기');
    expect(todoText).toHaveStyle('text-decoration: line-through;');
    userEvent.click(todoText);
    expect(todoText).not.toHaveStyle('text-decoration: line-through;');
    userEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: line-through;');
  });

  it('removes todo', () => {
    const { getByText } = render(<TodoApp />);
    const todoText = getByText('TDD 배우기');
    const removeButton = todoText.nextSibling;
    userEvent.click(removeButton as Element);
    expect(todoText).not.toBeInTheDocument();
  });
});
