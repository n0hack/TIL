import { StyleSheet, Text, View } from 'react-native';

type MyProfileScreenProps = {};

const MyProfileScreen = ({}: MyProfileScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>MyProfileScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default MyProfileScreen;
