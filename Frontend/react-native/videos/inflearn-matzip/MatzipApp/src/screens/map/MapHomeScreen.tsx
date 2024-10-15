import { StyleSheet, Text, View } from 'react-native';
import useAuth from '@/hooks/queries/useAuth';
import { CustomButton } from '@/components/CustomButton';

type MapHomeScreenProps = {};

const MapHomeScreen = ({}: MapHomeScreenProps) => {
  const { logoutMutation } = useAuth();

  return (
    <View style={styles.container}>
      <Text>MapHomeScreenzz</Text>
      <CustomButton label="로그아웃" onPress={() => logoutMutation.mutate(null)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default MapHomeScreen;
