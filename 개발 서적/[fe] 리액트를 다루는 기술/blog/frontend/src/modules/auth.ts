import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type AuthState = {
  register: {
    username: string;
    password: string;
    passwordConfirm: string;
  };
  login: {
    username: string;
    password: string;
  };
};

type ChangeFiledPayload = {
  form: keyof AuthState;
  key: string;
  value: string;
};

const MODULE_NAME = 'auth';

const initialState: AuthState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
};

const authSlice = createSlice({
  name: MODULE_NAME,
  initialState,
  reducers: {
    changeFiled: (state, { payload: { form, key, value } }: PayloadAction<ChangeFiledPayload>) => {
      state[form][key as keyof AuthState[keyof AuthState]] = value;
    },
    initializeForm: (state, { payload: form }: PayloadAction<keyof AuthState>) => {
      if (form === 'login') {
        state.login = initialState.login;
      } else if (form === 'register') {
        state.register = initialState.register;
      }
    },
  },
});

export const { changeFiled, initializeForm } = authSlice.actions;

export default authSlice.reducer;
