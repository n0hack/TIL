/* eslint-disable */
import { render, screen } from '@testing-library/react';
import Profile from './Profile';

describe('<Profile />', () => {
  it('match snapshot', () => {
    const utils = render(<Profile username="ming" name="밍" />);
    expect(utils.container).toMatchSnapshot();
  });

  it('shows the props correctly', () => {
    const utils = render(<Profile username="ming" name="밍" />);
    utils.getByText('ming');
    utils.getByText('(밍)');
    utils.getByText(/밍/);
  });
});
