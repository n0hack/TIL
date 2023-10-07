import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../modules';
import { changeFiled, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

const LoginForm = () => {
  const { login: form } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(changeFiled({ form: 'login', key: name, value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  return <AuthForm type="login" form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default LoginForm;
