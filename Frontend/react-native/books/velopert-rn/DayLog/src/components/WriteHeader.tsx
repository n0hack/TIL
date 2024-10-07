import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import { RootStackParamList } from '../screens/RootStack';
import { TransparentCircleButton } from './TransparentCircleButton';

type WriteHeaderProps = {
  onSave: () => void;
};

const WriteHeader = ({ onSave }: WriteHeaderProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onGoBack = () => {
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <TransparentCircleButton name="arrow-back" color="#424242" onPress={onGoBack} />
      <View style={styles.buttons}>
        <TransparentCircleButton name="delete-forever" color="#ef5350" hasMarginRight />
        <TransparentCircleButton name="check" color="#009688" onPress={onSave} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export { WriteHeader };
