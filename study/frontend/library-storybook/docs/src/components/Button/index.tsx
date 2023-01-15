import React from 'react';
import tw, { css } from 'twin.macro';

interface Props {
  primary?: boolean;
  label?: string;
}

const Button = ({ primary, label }: Props) => {
  return (
    <button
      css={css`
        background-color: ${primary ? 'red' : 'blue'};
      `}
    >
      {label}
    </button>
  );
};

export default Button;
