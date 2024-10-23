import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../screens/RootStack';
import { TransparentCircleButton } from './TransparentCircleButton';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useReducer } from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';

type WriteHeaderProps = {
  onSave: () => void;
  onAskRemove: () => void;
  isEditing: boolean;
  date: Date;
  onChangeDate: (date: Date) => void;
};

type State = {
  visible: boolean;
  mode?: 'date' | 'time';
};

type actionType = {
  type: 'open' | 'close';
  mode?: 'date' | 'time';
};

function reducer(state: State, action: actionType): State {
  switch (action.type) {
    case 'open':
      return {
        mode: action.mode,
        visible: true,
      };
    case 'close':
      return {
        ...state,
        visible: false,
      };
    default:
      throw new Error('Unhandled action type');
  }
}

const WriteHeader = ({ onSave, isEditing, onAskRemove, date, onChangeDate }: WriteHeaderProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [state, dispatch] = useReducer(reducer, { visible: false, mode: 'date' });

  const open = (mode: actionType['mode']) => dispatch({ mode, type: 'open' });
  const close = () => dispatch({ type: 'close' });

  const onConfirm = (selectedDate: Date) => {
    close();
    onChangeDate(selectedDate);
  };

  const onGoBack = () => {
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <TransparentCircleButton name="arrow-back" color="rgb(66, 66, 66)" onPress={onGoBack} />
      <View style={styles.buttons}>
        {isEditing && (
          <TransparentCircleButton name="delete-forever" color="#ef5350" hasMarginRight onPress={onAskRemove} />
        )}
        <TransparentCircleButton name="check" color="#009688" onPress={onSave} />
      </View>
      <View style={styles.center}>
        <Pressable onPress={() => open('date')}>
          <Text>{format(new Date(date), 'PPP', { locale: ko })}</Text>
        </Pressable>
        <View style={styles.separator} />
        <Pressable onPress={() => open('time')}>
          <Text>{format(new Date(date), 'p', { locale: ko })}</Text>
        </Pressable>
      </View>
      <DateTimePicker isVisible={state.visible} mode={state.mode} onConfirm={onConfirm} onCancel={close} date={date} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
    flexDirection: 'row',
  },
  separator: {
    width: 8,
  },
});

export { WriteHeader };
