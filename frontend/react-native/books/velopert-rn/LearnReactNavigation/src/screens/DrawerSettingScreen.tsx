import { DrawerScreenProps } from '@react-navigation/drawer';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../App';

type DrawerSettingScreenProps = DrawerScreenProps<RootStackParamList, 'Setting'> & {};

const DrawerSettingScreen = ({ navigation }: DrawerSettingScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>Setting</Text>
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default DrawerSettingScreen;
