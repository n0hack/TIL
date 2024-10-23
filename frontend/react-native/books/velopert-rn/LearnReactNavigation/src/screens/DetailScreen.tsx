import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../App';

type DetailScreenProps = NativeStackScreenProps<RootStackParamList, 'Detail'> & {};

const DetailScreen = ({ route }: DetailScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>id: {route.params.id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 48,
  },
});

export default DetailScreen;
