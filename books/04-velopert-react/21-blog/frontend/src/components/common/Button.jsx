import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../constants/palette';
import { Link } from '../../../node_modules/react-router-dom/index';

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: #fff;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.cyan &&
    css`
      background: ${palette.cyan[5]};
      &:hover {
        background: ${palette.cyan[4]};
      }
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;
const StyledLink = styled(Link)`
  ${buttonStyle}
`;

const Button = (props) => {
  return props.to ? (
    <StyledLink {...props} cyan={props.cyan ? 1 : 0} />
  ) : (
    <StyledButton {...props} />
  );
};

/* Link(a태그)를 사용하는 것 권장 (접근성, 표준) */
// const Button = ({ to, ...rest }) => {
//   const navigate = useNavigate();
//   const onClick = (e) => {
//     if (to) {
//       navigate(to);
//     }
//     if (rest.onClick) {
//       rest.onClick(e);
//     }
//   };

//   return <StyledButton {...rest} onClick={onClick} />;
// };

export default Button;
