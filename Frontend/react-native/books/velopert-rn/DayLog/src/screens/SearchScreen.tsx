import { StyleSheet, Text, View } from 'react-native';

type SearchScreenProps = {};

const SearchScreen = ({}: SearchScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>SearchScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SearchScreen;
