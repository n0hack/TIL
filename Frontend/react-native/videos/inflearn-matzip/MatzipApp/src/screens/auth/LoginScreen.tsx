import { SafeAreaView, StyleSheet, View } from 'react-native';
import { InputField } from '../../components/InputField';
import { CustomButton } from '../../components/CustomButton';
import { useForm } from '../../hooks/useForm';
import { validateLogin } from '../../utils';

type LoginScreenProps = {};

const LoginScreen = ({}: LoginScreenProps) => {
  const login = useForm({
    initialValue: { email: '', password: '' },
    validate: validateLogin,
  });

  const handleSubmit = () => {
    console.log(login.values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          inputMode="email"
          touched={login.touched.email}
          error={login.errors.email}
          {...login.getTextInputProps('email')}
        />
        <InputField
          placeholder="비밀번호"
          secureTextEntry
          touched={login.touched.password}
          error={login.errors.password}
          {...login.getTextInputProps('password')}
        />
      </View>
      <CustomButton
        label="로그인"
        variant="filled"
        size="large"
        onPress={handleSubmit}
      />
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
