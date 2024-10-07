import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, StyleSheet, View } from 'react-native';
import { RootStackParamList } from '../App';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'> & {};

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Button title="Detail 1 열기" onPress={() => navigation.navigate('Detail', { id: 1 })} />
      <Button title="Detail 2 열기" onPress={() => navigation.navigate('Detail', { id: 2 })} />
      <Button title="Detail 3 열기" onPress={() => navigation.navigate('Detail', { id: 3 })} />
      <Button title="Headerless 열기" onPress={() => navigation.navigate('Headerless')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default HomeScreen;
