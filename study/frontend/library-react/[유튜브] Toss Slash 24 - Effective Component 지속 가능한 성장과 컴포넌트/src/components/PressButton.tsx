import React, { ComponentProps } from 'react';
import useLongPress from '../hooks/useLongPress';
import Button from './Button';

interface Props extends ComponentProps<typeof Button> {}

const PressButton = (props: Props) => {
  const longPressProps = useLongPress();

  return <Button {...longPressProps} {...props} />;
};

export default PressButton;
