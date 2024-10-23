import { StyleSheet } from 'react-native';
import { Profile } from '../components/Profile';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../stacks/HomeStack';

type ProfileScreenProps = {};

const ProfileScreen = ({}: ProfileScreenProps) => {
  const route = useRoute();
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList, 'Profile'>>();
  const { userId, displayName } = route.params;

  return <Profile userId={userId} />;
};

const styles = StyleSheet.create({
  container: {},
});

export default ProfileScreen;
