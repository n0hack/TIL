import { gql, useApolloClient, useMutation } from '@apollo/client';
import { SignUpDocument } from '@gql/graphql';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

type IForm = {
  username: string;
  email: string;
  password: string;
};

const SignupPage = () => {
  const navigate = useNavigate();
  const client = useApolloClient();
  const [values, setValues] = useState<IForm>({
    username: '',
    email: '',
    password: '',
  });
  const [signUp] = useMutation(SignUpDocument, {
    onCompleted: (data) => {
      // JWT 토큰 저장
      localStorage.setItem('token', data.signUp);
      // 로컬 캐시 업데이트 (로그인)
      client.writeQuery({ query: gql``, data: { isLoggedIn: true } });
      navigate('/');
    },
  });

  const onChange = <T extends keyof IForm>(key: T) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => setValues((values) => ({ ...values, [key]: e.target.value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUp({ variables: { ...values } });
  };

  useEffect(() => {
    document.title = '회원가입 - Notedly';
  }, []);

  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          required
          onChange={onChange('username')}
        />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="email" required onChange={onChange('email')} />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required
          onChange={onChange('password')}
        />
        <button type="submit">Submit</button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid #f5f4f0;
  max-width: 500px;
  padding: 1em;
  margin: 0 auto;
`;

const Form = styled.form`
  label,
  input {
    display: block;
    line-height: 2em;
  }

  input {
    width: 100%;
    margin-bottom: 1em;
  }
`;

export default SignupPage;
