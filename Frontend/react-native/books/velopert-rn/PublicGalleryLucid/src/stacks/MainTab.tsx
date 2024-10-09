import { useContext } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { UserContext } from '../contexts/UserContext';

type MainTabProps = {};

const MainTab = ({}: MainTabProps) => {
  const { user } = useContext(UserContext);

  return (
    <View style={styles.container}>
      {user?.photoURL && (
        <Image
          source={{ uri: user.photoURL }}
          style={{ width: 128, height: 128, marginBottom: 16 }}
          resizeMode="cover"
        />
      )}
      <Text>Hello, {user?.displayName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainTab;
