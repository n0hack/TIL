import { useRef } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

type WriteEditorProps = {
  title: string;
  body: string;
  onChangeTitle: (title: string) => void;
  onChangeBody: (body: string) => void;
};

const WriteEditor = ({ body, onChangeBody, onChangeTitle, title }: WriteEditorProps) => {
  const bodyRef = useRef<TextInput>(null);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.titleInput}
        placeholder="제목을 입력하세요"
        returnKeyType="next"
        onChangeText={onChangeTitle}
        value={title}
        onSubmitEditing={() => {
          bodyRef.current?.focus();
        }}
      />
      <TextInput
        ref={bodyRef}
        style={styles.bodyInput}
        placeholder="당신의 오늘을 기록해보세요"
        multiline
        textAlignVertical="top"
        onChangeText={onChangeBody}
        value={body}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titleInput: {
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 16,
    color: '#263238',
    fontWeight: 'bold',
  },
  bodyInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 0,
    color: '#263238',
  },
});

export { WriteEditor };
