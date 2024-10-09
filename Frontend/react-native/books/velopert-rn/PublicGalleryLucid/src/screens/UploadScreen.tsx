import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import {
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import { RootStackParamList } from '../stacks/RootStack';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IconRightButton } from '../components/IconRightButton';
import storage from '@react-native-firebase/storage';
import { v4 } from 'uuid';
import { createPost } from '../lib/posts';
import { UserContext } from '../contexts/UserContext';

type UploadScreenProps = {};

const UploadScreen = ({}: UploadScreenProps) => {
  const route = useRoute<RouteProp<RootStackParamList, 'Upload'>>();
  const { res } = route.params;
  const { width } = useWindowDimensions();
  const animation = useRef(new Animated.Value(width)).current;
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [description, setDescription] = useState('');
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Upload'>>();
  const { user } = useContext(UserContext);

  const onSubmit = useCallback(async () => {
    if (!user) {
      return;
    }

    navigation.pop();
    const asset = res.assets?.[0];

    const extension = asset?.fileName?.split('.').pop();
    const reference = storage().ref(`/photo/${user?.id}/${v4()}.${extension}`);

    if (Platform.OS === 'android') {
      await reference.putString(asset?.base64!, 'base64', {
        contentType: asset?.type,
      });
    } else {
      await reference.putFile(asset?.uri!);
    }
    const photoURL = await reference.getDownloadURL();
    await createPost({ user, photoURL, description });
  }, [description, navigation, res.assets, user]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <IconRightButton onPress={onSubmit} name="send" />,
    });
  }, [navigation, onSubmit]);

  useEffect(() => {
    const didShow = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardOpen(true);
    });
    const didHide = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardOpen(false);
    });

    return () => {
      didShow.remove();
      didHide.remove();
    };
  }, []);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isKeyboardOpen ? 0 : width,
      useNativeDriver: false,
      duration: 150,
      delay: 100,
    }).start();
  }, [animation, isKeyboardOpen, width]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.select({ ios: 'height' })}
      style={styles.container}
      keyboardVerticalOffset={Platform.select({ ios: 180 })}
    >
      <View style={styles.container}>
        <Animated.Image
          source={{ uri: res.assets?.[0].uri }}
          style={[styles.image, { height: animation }]}
          resizeMode="cover"
        />
        <TextInput
          style={styles.input}
          multiline
          textAlignVertical="top"
          placeholder="이 사진에 대한 설명을 입력하세요..."
          value={description}
          onChangeText={setDescription}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flex: 1,
    fontSize: 16,
  },
});

export default UploadScreen;
