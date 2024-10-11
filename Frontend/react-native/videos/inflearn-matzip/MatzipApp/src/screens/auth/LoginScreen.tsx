import { SafeAreaView, StyleSheet, View } from 'react-native';
import { InputField } from '../../components/InputField';
import { useState } from 'react';

type LoginScreenProps = {};

const LoginScreen = ({}: LoginScreenProps) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const handleChangeText = (key: keyof typeof values) => (text: string) => {
    setValues({ ...values, [key]: text });
  };

  const handleBlur = (key: keyof typeof touched) => {
    setTouched({ ...touched, [key]: true });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          inputMode="email"
          value={values.email}
          onChangeText={handleChangeText('email')}
          onBlur={() => handleBlur('email')}
          touched={touched.email}
          error="이메일을 입력하세요."
        />
        <InputField
          placeholder="비밀번호"
          secureTextEntry
          value={values.password}
          onChangeText={handleChangeText('password')}
          onBlur={() => handleBlur('password')}
          touched={touched.password}
          error="비밀번호를 입력하세요."
        />
      </View>
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
  },
});

export default LoginScreen;
