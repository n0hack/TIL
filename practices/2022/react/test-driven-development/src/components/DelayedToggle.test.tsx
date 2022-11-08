/* eslint-disable */
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DelayedToggle from './DelayedToggle';

describe('<DelayedToggle />', () => {
  it('reveals text when toggle ON', async () => {
    const { getByText } = render(<DelayedToggle />);
    const toggleButton = getByText('토글');
    userEvent.click(toggleButton);
    // 대기 기본시간 1초
    await waitFor(() => getByText('야호!'), { timeout: 3000 });
  });

  it('toggles text ON/OFF', async () => {
    const { getByText } = render(<DelayedToggle />);
    const toggleButton = getByText('토글');
    userEvent.click(toggleButton);
    const text = await waitFor(() => getByText('ON'), { timeout: 3000 });
    expect(text).toHaveTextContent('ON');
  });

  it('changes something when button is clicked', async () => {
    const { getByText } = render(<DelayedToggle />);
    const toggleButton = getByText('토글');
    userEvent.click(toggleButton);
    await waitFor(() => expect(screen.getByText('ON')), {
      timeout: 2000,
    });
  });

  it('removes text when toggle is OFF', async () => {
    const { getByText } = render(<DelayedToggle />);
    const toggleButton = getByText('토글');
    userEvent.click(toggleButton);
    // await waitFor(
    //   () => {
    //   },
    //   { timeout: 2000 }
    // );
    await waitFor(
      () => {
        getByText('야호!');
        userEvent.click(toggleButton);
      },
      { timeout: 2000 }
    );
    await waitForElementToBeRemoved(() => getByText('야호!'), {
      timeout: 5000,
    });
  });
});
