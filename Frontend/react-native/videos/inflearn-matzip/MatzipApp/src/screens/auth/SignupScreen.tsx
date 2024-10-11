import { StyleSheet, Text, View } from 'react-native';

type SignupScreenProps = {};

const SignupScreen = ({}: SignupScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>SignupScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SignupScreen;
