import { TextInput } from 'react-native';
import { BorderedInput } from './BorderedInput';
import { useRef } from 'react';
import { Form } from '../screens/SignInScreen';

type SignFormProps = {
  isSignUp?: boolean;
  onSubmit: () => void;
  form: Form;
  createChangeTextHandler: (key: keyof Form) => (text: string) => void;
};

const SignForm = ({
  isSignUp,
  onSubmit,
  form,
  createChangeTextHandler,
}: SignFormProps) => {
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

  return (
    <>
      <BorderedInput
        hasMarginBottom
        placeholder="이메일"
        value={form.email}
        onChangeText={createChangeTextHandler('email')}
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete="email"
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current?.focus()}
      />
      <BorderedInput
        ref={passwordRef}
        hasMarginBottom={isSignUp}
        placeholder="비밀번호"
        value={form.password}
        onChangeText={createChangeTextHandler('password')}
        secureTextEntry
        returnKeyType={isSignUp ? 'next' : 'done'}
        onSubmitEditing={() => {
          if (isSignUp) {
            confirmPasswordRef.current?.focus();
          } else {
            onSubmit();
          }
        }}
      />
      {isSignUp && (
        <BorderedInput
          ref={confirmPasswordRef}
          placeholder="비밀번호 확인"
          value={form.confirmPassword}
          onChangeText={createChangeTextHandler('confirmPassword')}
          secureTextEntry
          returnKeyType="done"
          onSubmitEditing={onSubmit}
        />
      )}
    </>
  );
};

export default SignForm;
