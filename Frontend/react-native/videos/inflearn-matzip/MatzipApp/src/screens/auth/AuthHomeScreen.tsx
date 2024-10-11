import { View } from 'react-native';
import { AuthStackParamList } from '../../navigations/stack/AuthStackNavigator';
import { authNavigations } from '../../constants';
import { StackScreenProps } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomButton } from '../../components/CustomButton';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
> & {};

const AuthHomeScreen = ({ navigation }: AuthHomeScreenProps) => {
  return (
    <SafeAreaView>
      <View>
        <CustomButton
          label="로그인화면으로 이동"
          onPress={() => navigation.navigate(authNavigations.LOGIN)}
        />
        <CustomButton
          label="회원가입으로 이동"
          variant="outlined"
          onPress={() => navigation.navigate(authNavigations.SIGNUP)}
        />
      </View>
    </SafeAreaView>
  );
};

export default AuthHomeScreen;
