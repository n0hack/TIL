import React from "react";
import clsx from "clsx";
import styled from "styled-components";
import styles from "./index.module.scss";

interface Props extends React.HTMLAttributes<HTMLInputElement> {}

const Input = (props: Props) => {
  return <Component className={clsx(styles.input)} {...props} />;
};

export default Input;

const Component = styled.input``;
