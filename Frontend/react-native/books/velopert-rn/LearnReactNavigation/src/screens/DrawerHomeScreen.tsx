import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../App';
import { DrawerScreenProps } from '@react-navigation/drawer';

type DrawerHomeScreenProps = DrawerScreenProps<RootStackParamList> & {};

const DrawerHomeScreen = ({ navigation }: DrawerHomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Drawer 열기" onPress={() => navigation.openDrawer()} />
      <Button title="Setting 열기" onPress={() => navigation.navigate('Setting')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default DrawerHomeScreen;
