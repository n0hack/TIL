import React from 'react';
import { cva, cx, RecipeVariantProps } from '../../styled-system/css';

const button = cva({
  base: {
    p: '8px 16px',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  variants: {
    size: {
      small: {
        fontSize: '14px',
        padding: '4px 8px',
      },
      medium: {
        fontSize: '16px',
        padding: '8px 16px',
      },
      large: {
        fontSize: '18px',
        padding: '12px 24px',
      },
    },
    color: {
      primary: {
        backgroundColor: 'blue',
        color: 'white',
      },
      secondary: {
        backgroundColor: 'gray',
        color: 'black',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
  },
  compoundVariants: [
    {
      size: 'small',
      color: 'primary',
      css: {
        border: '2px solid blue',
      },
    },
    // apply when both large size and secondary color are selected and the button is disabled
    {
      size: 'large',
      color: 'secondary',
      disabled: true,
      css: {
        backgroundColor: 'lightgray',
        color: 'darkgray',
        border: 'none',
      },
    },
    // apply when both small or medium size, and secondary color variants are applied
    {
      size: ['small', 'medium'],
      color: 'secondary',
      css: {
        fontWeight: 'extrabold',
      },
    },
  ],
});

type ButtonProps = {
  children?: React.ReactNode;
  css?: string;
  className?: string;
} & RecipeVariantProps<typeof button>;

export const Button = ({ children, css: cssProp, className, ...rest }: ButtonProps) => {
  return <button className={cx(button(rest), cssProp, className)}>{children}</button>;
};
