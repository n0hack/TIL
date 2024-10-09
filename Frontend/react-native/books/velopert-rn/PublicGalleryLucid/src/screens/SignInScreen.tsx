import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../stacks/RootStack';
import { useContext, useState } from 'react';
import SignInForm from '../components/SignForm';
import SignButtons from '../components/SignButtons';
import { signIn, signUp } from '../lib/auth';
import { getUser } from '../lib/users';
import { UserContext } from '../contexts/UserContext';

type SignInScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SignIn'
> & {};

export type Form = {
  email: string;
  password: string;
  confirmPassword: string;
};

const SignInScreen = ({ navigation, route }: SignInScreenProps) => {
  const [form, setForm] = useState<Form>({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const { isSignUp } = route.params ?? {};
  const { setUser } = useContext(UserContext);

  const createChangeTextHandler =
    (key: keyof typeof form) => (text: string) => {
      setForm({ ...form, [key]: text });
    };

  const onSubmit = async () => {
    Keyboard.dismiss();
    const { email, password, confirmPassword } = form;

    if (isSignUp && password !== confirmPassword) {
      Alert.alert('실패', '비밀번호가 일치하지 않습니다.');
      return;
    }

    setLoading(true);
    try {
      const { user } = isSignUp
        ? await signUp({ email, password })
        : await signIn({ email, password });
      const profile = await getUser(user.uid);
      if (!profile) {
        navigation.navigate('Welcome', { uid: user.uid });
      } else {
        setUser(profile);
      }
    } catch (e) {
      const messages = {
        'auth/email-already-in-use': '이미 가입된 이메일입니다.',
        'auth/user-not-found': '존재하지 않는 계정입니다.',
      };
      console.log(e);
      const msg =
        messages[(e as any).code as keyof typeof messages] ||
        `${isSignUp ? '가입' : '로그인'} 실패`;

      Alert.alert('실패', msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyvbaordAvoidingView}
      behavior={Platform.select({ ios: 'padding' })}
    >
      <SafeAreaView style={styles.fullscreen}>
        <Text style={styles.text}>PublicGallery</Text>
        <View style={styles.form}>
          <SignInForm
            form={form}
            createChangeTextHandler={createChangeTextHandler}
            onSubmit={onSubmit}
            isSignUp={isSignUp}
          />
          <SignButtons
            onSubmit={onSubmit}
            isSignUp={isSignUp}
            loading={loading}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyvbaordAvoidingView: {
    flex: 1,
  },
  fullscreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  form: {
    marginTop: 64,
    width: '100%',
    paddingHorizontal: 16,
  },
});

export default SignInScreen;
