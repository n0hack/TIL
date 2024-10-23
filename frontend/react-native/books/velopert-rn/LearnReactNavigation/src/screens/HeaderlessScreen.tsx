import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../App';
import { SafeAreaView } from 'react-native-safe-area-context';

type HeaderlessScreenProps = NativeStackScreenProps<RootStackParamList, 'Headerless'> & {};

const HeaderlessScreen = ({ navigation }: HeaderlessScreenProps) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Header가 없네?</Text>
        <Button title="뒤로가기" onPress={() => navigation.pop()} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default HeaderlessScreen;
