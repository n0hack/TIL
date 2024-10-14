type UserInformation = {
  email: string;
  password: string;
};

export function validateLogin(values: UserInformation) {
  const errors = {
    email: '',
    password: '',
  };

  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
    errors.email = '올바른 이메일 형식이 아닙니다.';
  }

  if (!(values.password.length >= 8 && values.password.length < 20)) {
    errors.password = '비밀번호는 8자 이상 20자 미만이어야 합니다.';
  }

  return errors;
}
