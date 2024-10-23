import { StyleSheet, Text, View } from 'react-native';

type MessageType = 'NOT_FOUND' | 'EMPTY_KEYWORD';

const messages: Record<MessageType, string> = {
  EMPTY_KEYWORD: '검색어를 입력하세요.',
  NOT_FOUND: '검색 결과가 없습니다.',
};

type EmptySearchResultProps = {
  type: MessageType;
};

const EmptySearchResult = ({ type }: EmptySearchResultProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{messages[type]}</Text>
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
    color: '#9e9e9e',
    fontSize: 16,
  },
});

export default EmptySearchResult;
