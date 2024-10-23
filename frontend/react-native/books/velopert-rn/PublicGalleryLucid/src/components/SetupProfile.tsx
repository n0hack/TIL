import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useContext, useState } from 'react';
import {
  ActivityIndicator,
  Platform,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import { signOut } from '../lib/auth';
import { createUser } from '../lib/users';
import { BorderedInput } from './BorderedInput';
import CustomButton from './CustomButton';
import { RootStackParamList } from '../stacks/RootStack';
import {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import { UserContext } from '../contexts/UserContext';
import storage from '@react-native-firebase/storage';
import { Avatar } from './Avatar';

type SetupProfileProps = {};

const SetupProfile = ({}: SetupProfileProps) => {
  const [displayName, setDisplayName] = useState('');
  const [response, setResponse] = useState<ImagePickerResponse>();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const { setUser } = useContext(UserContext);
  const { params } = useRoute<RouteProp<RootStackParamList, 'Welcome'>>();
  const { uid } = params || {};

  const onSubmit = async () => {
    setLoading(true);

    let photoURL: string | null = null;

    if (response) {
      const asset = response.assets?.[0];
      const extenstion = asset?.fileName?.split('.').pop();
      const refrerence = storage().ref(`/profile/${uid}.${extenstion}`);

      if (Platform.OS === 'android') {
        await refrerence.putString(asset?.base64!, 'base64', {
          contentType: asset?.type,
        });
      } else {
        await refrerence.putFile(asset?.uri!);
      }

      photoURL = response ? await refrerence.getDownloadURL() : null;
    }

    const user = {
      id: uid,
      displayName,
      photoURL,
    };
    createUser(user);
    setUser(user);
    setLoading(false);
  };

  const onCancel = () => {
    signOut();
    navigation.goBack();
  };

  const onSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxHeight: 512,
        maxWidth: 512,
        includeBase64: Platform.OS === 'android',
      },
      (res) => {
        if (res.didCancel) {
          return;
        }
        setResponse(res);
      }
    );
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onSelectImage}>
        <Avatar
          source={response ? { uri: response.assets?.[0].uri } : undefined}
          size={128}
        />
      </Pressable>
      <View style={styles.form}>
        <BorderedInput
          placeholder="닉네임"
          value={displayName}
          onChangeText={setDisplayName}
          onSubmitEditing={onSubmit}
          returnKeyType="next"
        />
        {loading ? (
          <ActivityIndicator size={32} color="#6200ee" style={styles.spinner} />
        ) : (
          <View style={styles.buttons}>
            <CustomButton title="다음" onPress={onSubmit} hasMarginBottom />
            <CustomButton title="취소" onPress={onCancel} theme="secondary" />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 24,
    paddingHorizontal: 16,
    width: '100%',
  },
  form: {
    marginTop: 16,
    width: '100%',
  },
  buttons: {
    marginTop: 48,
  },
  spinner: {
    marginTop: 48,
  },
});

export { SetupProfile };
