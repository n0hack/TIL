import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WriteHeader } from '../components/WriteHeader';
import { WriteEditor } from '../components/WriteEditor';
import { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LogContext } from '../contexts/LogContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './RootStack';

type WriteScreenProps = {};

const WriteScreen = ({}: WriteScreenProps) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { onCreate } = useContext(LogContext);

  const onSave = () => {
    onCreate({ title, body, date: new Date().toISOString() });
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.avoidingView} behavior={Platform.select({ ios: 'padding' })}>
        <WriteHeader onSave={onSave} />
        <WriteEditor title={title} body={body} onChangeTitle={setTitle} onChangeBody={setBody} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoidingView: {
    flex: 1,
  },
});

export default WriteScreen;
