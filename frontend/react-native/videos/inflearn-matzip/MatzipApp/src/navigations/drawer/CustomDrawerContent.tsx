import { colors } from '@/constants';
import useAuth from '@/hooks/queries/useAuth';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const { logoutMutation } = useAuth();
  const { getProfileQuery } = useAuth();
  const { email, nickname, imageUri, kakaoImageUri } = getProfileQuery.data || {};

  const handleLogout = () => {
    logoutMutation.mutate(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <DrawerContentScrollView {...props} scrollEnabled={false} contentContainerStyle={styles.contentContainer}>
        <View style={styles.userInfoContainer}>
          <View style={styles.userImageContainer}>
            {imageUri === null && kakaoImageUri === null && (
              <Image source={require('@/assets/user-default.png')} style={styles.userImage} />
            )}
            {imageUri === null && !!kakaoImageUri && <Image source={{ uri: kakaoImageUri }} style={styles.userImage} />}
            {imageUri !== null && <Image source={{ uri: imageUri }} style={styles.userImage} />}
          </View>
          <Text style={styles.nameText}>{nickname ?? email}</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Pressable style={{ alignItems: 'flex-end', padding: 10 }} onPress={handleLogout}>
        <Text>로그아웃</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  userInfoContainer: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 30,
    marginHorizontal: 15,
  },
  userImageContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
  },
  userImage: {
    width: '100%',
    height: '100%',
    borderRadius: 35,
  },
  nameText: {
    color: colors.BLACK,
  },
});

export { CustomDrawerContent };
