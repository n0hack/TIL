/* eslint-disable */
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoForm from './TodoForm';

describe('<TodoForm />', () => {
  // 리팩토링
  const setup = (props = {}) => {
    const utils = render(<TodoForm {...props} />);
    const { getByText, getByPlaceholderText } = utils;
    const input = getByPlaceholderText('할 일을 입력하세요');
    const button = getByText('등록');
    return {
      ...utils,
      input,
      button,
    };
  };

  it('has input and a button', () => {
    const { input, button } = setup();
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it('changes input', async () => {
    const { input } = setup();
    userEvent.type(input, 'TDD 배우기');
    expect(input).toHaveDisplayValue('TDD 배우기');
  });

  it('calls onInsert and clears input', () => {
    const onInsert = jest.fn();
    const { input, button } = setup({ onInsert });

    userEvent.type(input, 'TDD 배우기');
    userEvent.click(button);

    expect(onInsert).toBeCalledWith('TDD 배우기');
    expect(input).toHaveDisplayValue('');
  });
});
