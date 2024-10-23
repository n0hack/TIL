import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import { InputField } from '@/components/InputField';
import { CustomButton } from '@/components/CustomButton';
import { useForm } from '@/hooks/useForm';
import { validateLogin } from '@/utils';
import { useRef } from 'react';
import useAuth from '@/hooks/queries/useAuth';

type LoginScreenProps = {};

const LoginScreen = ({}: LoginScreenProps) => {
  const passwordRef = useRef<TextInput>(null);
  const { loginMutation } = useAuth();
  const login = useForm({
    initialValue: { email: '', password: '' },
    validate: validateLogin,
  });

  const handleSubmit = () => {
    loginMutation.mutate(login.values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          autoFocus
          placeholder="이메일"
          inputMode="email"
          touched={login.touched.email}
          error={login.errors.email}
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => passwordRef.current?.focus()}
          {...login.getTextInputProps('email')}
        />
        <InputField
          ref={passwordRef}
          placeholder="비밀번호"
          secureTextEntry
          touched={login.touched.password}
          error={login.errors.password}
          returnKeyType="join"
          onSubmitEditing={handleSubmit}
          {...login.getTextInputProps('password')}
        />
      </View>
      <CustomButton label="로그인" variant="filled" size="large" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 30,
  },
});

export default LoginScreen;
