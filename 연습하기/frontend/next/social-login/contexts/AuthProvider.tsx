'use client';

import apiClient from '@/api';
import React, { createContext, useEffect, useState } from 'react';

type Auth = {
  nickname: string;
  profileImage: string;
};

type AuthContextValue = {
  auth?: Auth;
  logout?: () => void;
};

export const AuthContext = createContext<AuthContextValue>({});

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<Auth>();

  const logout = async () => {
    apiClient
      .post('/auth/logout')
      .then(() => setAuth(undefined))
      .catch(console.error);
  };

  useEffect(() => {
    if (!auth) {
      apiClient
        .get('/auth/myInfo')
        .then((res) => setAuth(res.data))
        .catch(console.error);
    }
  }, [auth]);

  return <AuthContext.Provider value={{ auth, logout }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
