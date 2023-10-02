import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  cyan?: boolean;
  fullWidth?: boolean;
};

const Button = ({ cyan, fullWidth, ...props }: ButtonProps) => {
  return <StyledButton $cyan={cyan} $fullWidth={fullWidth} {...props} />;
};

const StyledButton = styled.button<{
  $cyan?: boolean;
  $fullWidth?: boolean;
}>(({ $cyan, $fullWidth }) => [
  css`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;

    background: ${palette.gray[8]};
    &:hover {
      background: ${palette.gray[6]};
    }
  `,
  $fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `,
  $cyan &&
    css`
      background: ${palette.cyan[5]};
      &:hover {
        background: ${palette.cyan[4]};
      }
    `,
]);

export default Button;
