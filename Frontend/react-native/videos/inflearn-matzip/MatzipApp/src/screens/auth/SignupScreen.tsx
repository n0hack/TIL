import { SafeAreaView, StyleSheet, View } from 'react-native';
import { InputField } from '../../components/InputField';
import { useForm } from '../../hooks/useForm';
import { validateSignup } from '../../utils';
import { CustomButton } from '../../components/CustomButton';

type SignupScreenProps = {};

const SignupScreen = ({}: SignupScreenProps) => {
  const signup = useForm({
    initialValue: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validate: validateSignup,
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          inputMode="email"
          touched={signup.touched.email}
          error={signup.errors.email}
          {...signup.getTextInputProps('email')}
        />
        <InputField
          placeholder="비밀번호"
          secureTextEntry
          touched={signup.touched.password}
          error={signup.errors.password}
          {...signup.getTextInputProps('password')}
        />
        <InputField
          placeholder="비밀번호 확인"
          secureTextEntry
          touched={signup.touched.passwordConfirm}
          error={signup.errors.passwordConfirm}
          {...signup.getTextInputProps('passwordConfirm')}
        />
      </View>
      <CustomButton label="회원가입" />
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

export default SignupScreen;
