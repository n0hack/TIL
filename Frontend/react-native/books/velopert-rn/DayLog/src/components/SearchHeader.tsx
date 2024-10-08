import { useContext } from 'react';
import { Pressable, StyleSheet, TextInput, useWindowDimensions, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SearchContext } from '../contexts/SearchContext';

type SearchHeaderProps = {};

const SearchHeader = ({}: SearchHeaderProps) => {
  const { width } = useWindowDimensions();
  const { keyword, onChangeText } = useContext(SearchContext);

  return (
    <View style={[styles.container, { width: width - 32 }]}>
      <TextInput
        style={styles.input}
        placeholder="검색어를 입력하세요"
        autoFocus
        value={keyword}
        onChangeText={onChangeText}
      />
      <Pressable style={({ pressed }) => [styles.button, pressed && { opacity: 0.5 }]}>
        <Icon name="cancel" size={20} color="#9e9e9e" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  button: {
    marginLeft: 8,
  },
});

export default SearchHeader;
