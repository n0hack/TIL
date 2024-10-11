import { Button, View } from 'react-native';
import { AuthStackParamList } from '../../navigations/stack/AuthStackNavigator';
import { authNavigations } from '../../constants';
import { StackScreenProps } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
> & {};

const AuthHomeScreen = ({ navigation }: AuthHomeScreenProps) => {
  return (
    <SafeAreaView>
      <View>
        <Button
          title="Login"
          onPress={() => navigation.navigate(authNavigations.LOGIN)}
        />
      </View>
    </SafeAreaView>
  );
};

export default AuthHomeScreen;
