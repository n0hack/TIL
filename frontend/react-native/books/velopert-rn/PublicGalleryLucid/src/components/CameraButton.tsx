import { useState } from 'react';
import {
  ActionSheetIOS,
  Platform,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { UploadModeModal } from './UploadModeModal';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
  OptionsCommon,
} from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../stacks/RootStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type CameraButtonProps = {};

const TABBAR_HEIGHT = 49;

const imagePickerOption: OptionsCommon = {
  mediaType: 'photo',
  maxWidth: 768,
  maxHeight: 768,
  includeBase64: Platform.OS === 'android',
};

const CameraButton = ({}: CameraButtonProps) => {
  const insets = useSafeAreaInsets();
  const [modalVisible, setModalVisible] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const bottom = Platform.select({
    android: TABBAR_HEIGHT / 2,
    ios: TABBAR_HEIGHT / 2 + insets.bottom - 4,
  });

  const onPickImage = (res: ImagePickerResponse) => {
    if (res.didCancel || !res) {
      return;
    }
    setModalVisible(false);
    navigation.push('Upload', { res });
  };

  const onLaunchCamera = () => {
    launchCamera(imagePickerOption, onPickImage);
  };

  const onLaunchImageLibrary = () => {
    launchImageLibrary(imagePickerOption, onPickImage);
  };

  const onPress = () => {
    if (Platform.OS === 'android') {
      setModalVisible(true);
      return;
    }

    ActionSheetIOS.showActionSheetWithOptions(
      {
        title: '사진 업로드',
        options: ['카메라로 촬영하기', '사진 선택하기', '취소'],
        cancelButtonIndex: 2,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          onLaunchCamera();
        } else if (buttonIndex === 1) {
          onLaunchImageLibrary();
        }
      }
    );
  };

  return (
    <>
      <View style={[styles.container, { bottom }]}>
        <Pressable
          android_ripple={{ color: '#ffffff' }}
          style={styles.circle}
          onPress={onPress}
        >
          <Icon name="camera-alt" color="white" size={24} />
        </Pressable>
      </View>
      <UploadModeModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onLaunchCamera={onLaunchCamera}
        onLaunchImageLibrary={onLaunchImageLibrary}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 5,
    borderRadius: 27,
    height: 54,
    width: 54,
    backgroundColor: '#6200ee',
    position: 'absolute',
    left: '50%',
    transform: [
      {
        translateX: -27,
      },
    ],
    ...Platform.select({
      ios: {
        shadowColor: '#4d4d4d',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
        overflow: 'hidden',
      },
    }),
  },
  circle: {
    backgroundColor: '#6200ee',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 27,
    height: 54,
    width: 54,
  },
});

export { CameraButton };
