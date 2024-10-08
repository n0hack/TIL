import { Alert, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WriteHeader } from '../components/WriteHeader';
import { WriteEditor } from '../components/WriteEditor';
import { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LogContext } from '../contexts/LogContext';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './RootStack';

type WriteScreenProps = NativeStackScreenProps<RootStackParamList, 'Write'> & {};

const WriteScreen = ({ route }: WriteScreenProps) => {
  const log = route.params?.log;

  const [title, setTitle] = useState(log?.title ?? '');
  const [body, setBody] = useState(log?.body ?? '');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [date, setDate] = useState(log ? new Date(log.date) : new Date());

  const { onCreate, onModify, onRemove } = useContext(LogContext);

  const onSave = () => {
    if (log) {
      onModify({ id: log.id, date: date.toISOString(), title, body });
    } else {
      onCreate({ title, body, date: date.toISOString() });
    }

    navigation.pop();
  };

  const onAskRemove = () => {
    Alert.alert(
      '삭제',
      '정말로 삭제하시겠어요?',
      [
        { text: '취소', style: 'cancel' },
        {
          text: '삭제',
          onPress: () => {
            log && onRemove(log.id);
            navigation.pop();
          },
        },
      ],
      { cancelable: true },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.avoidingView} behavior={Platform.select({ ios: 'padding' })}>
        <WriteHeader onSave={onSave} onAskRemove={onAskRemove} isEditing={!!log} date={date} onChangeDate={setDate} />
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
