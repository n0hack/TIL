import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type UploadModeModalProps = {
  visible: boolean;
  onClose: () => void;
  onLaunchCamera: () => void;
  onLaunchImageLibrary: () => void;
};

const UploadModeModal = ({
  visible,
  onClose,
  onLaunchCamera,
  onLaunchImageLibrary,
}: UploadModeModalProps) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable style={styles.background} onPress={onClose}>
        <View style={styles.whiteBox}>
          <Pressable
            style={styles.actionButton}
            android_ripple={{ color: '#eee' }}
            onPress={onLaunchCamera}
          >
            <Icon
              name="camera-alt"
              color="#757575"
              size={24}
              style={styles.icon}
            />
            <Text style={styles.actionText}>카메라로 촬영하기</Text>
          </Pressable>
          <Pressable
            style={styles.actionButton}
            android_ripple={{ color: '#eee' }}
            onPress={onLaunchImageLibrary}
          >
            <Icon name="photo" color="#757575" size={24} style={styles.icon} />
            <Text style={styles.actionText}>사진 선택하기</Text>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#rgba(0,0,0,0.6)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteBox: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 4,
    elevation: 2,
  },
  actionButton: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 16,
  },
  actionText: {
    fontSize: 16,
  },
});

export { UploadModeModal };
