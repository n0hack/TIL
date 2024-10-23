import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import MainTab from './MainTab';
import { subscribeAuth } from '../lib/auth';
import { getUser } from '../lib/users';
import UploadScreen from '../screens/UploadScreen';
import { ImagePickerResponse } from 'react-native-image-picker';
import BootSplash from 'react-native-bootsplash';

export type RootStackParamList = {
  SignIn?: {
    isSignUp: boolean;
  };
  Welcome: {
    uid: string;
  };
  MainTab?: undefined;
  Upload: {
    res: ImagePickerResponse;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    // 로그인 상태 체크 및 유저 정보 가져오기
    const unsubscribe = subscribeAuth(async (currentUser) => {
      // 호출 이후 바로 구독을 해제함으로써, 한 번만 호출되도록 함
      unsubscribe();
      if (!currentUser) {
        await BootSplash.hide({ fade: true });
        return;
      }
      const profile = await getUser(currentUser.uid);
      if (!profile) {
        return;
      }
      setUser(profile);
    });
  }, [setUser]);

  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen
            name="MainTab"
            component={MainTab}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Upload"
            component={UploadScreen}
            options={{ title: '새 게시물', headerBackTitle: '뒤로가기' }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export { RootStack };
