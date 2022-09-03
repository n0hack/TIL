import React from "react";
import clsx from "clsx";
import styled from "styled-components";
import styles from "./index.module.scss";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = (props: Props) => {
  return (
    <Component className={clsx(styles.button)} {...props}>
      {props.children}
    </Component>
  );
};

export default Button;

const Component = styled.button``;
