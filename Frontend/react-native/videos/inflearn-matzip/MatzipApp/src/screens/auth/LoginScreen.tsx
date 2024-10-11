import { StyleSheet, Text, View } from 'react-native';

type LoginScreenProps = {};

const LoginScreen = ({}: LoginScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default LoginScreen;
