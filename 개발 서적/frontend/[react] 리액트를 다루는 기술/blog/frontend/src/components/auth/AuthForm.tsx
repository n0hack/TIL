import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import { Link } from 'react-router-dom';
import { AuthState } from '../../modules/auth';

type AuthFormProps = {
  type: keyof AuthState;
  form: AuthState[keyof AuthState];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const textMap: Record<keyof AuthState, string> = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type, form, onChange, onSubmit }: AuthFormProps) => {
  const text = textMap[type];

  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          value={form.password}
          onChange={onChange}
        />
        {type === 'register' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            value={(form as AuthState['register']).passwordConfirm}
            onChange={onChange}
          />
        )}
        <Button cyan fullWidth style={{ marginTop: '1rem' }}>
          {text}
        </Button>
      </form>
      <Footer>{type === 'login' ? <Link to="/register">회원가입</Link> : <Link to="/login">로그인</Link>}</Footer>
    </AuthFormBlock>
  );
};

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;

  &:focus {
    color: ${palette.gray[7]};
    border-bottom: 1px solid ${palette.gray[7]};
  }

  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

export default AuthForm;
