import { ButtonHTMLAttributes } from 'react';

function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      style={
        {
          /* custom styles */
        }
      }
      {...props}
    />
  );
}

export default Button;
