import { FeedStackParamList } from '@/navigations/stack/FeedStackNavigator';
import { HeaderButton } from './HeaderButton';
import { colors } from '@/constants';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { MainDrawerParamList } from '@/navigations/drawer/MainDrawerNavigator';

type FeedHomeHeaderLeftProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<FeedStackParamList>,
    DrawerNavigationProp<MainDrawerParamList>
  >;
};

const FeedHomeHeaderLeft = ({ navigation }: FeedHomeHeaderLeftProps) => {
  return (
    <HeaderButton
      icon={<Ionicons name="menu" color={colors.BLACK} size={25} />}
      onPress={() => {
        navigation.openDrawer();
      }}
    />
  );
};

export { FeedHomeHeaderLeft };
