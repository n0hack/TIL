import { colors } from '@/constants';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';

type HeaderButtonProps = PressableProps & {
  labelText?: string;
  icon?: React.ReactNode;
  hasError?: boolean;
};

const HeaderButton = ({ labelText, icon, hasError = false, ...rest }: HeaderButtonProps) => {
  return (
    <Pressable style={styles.container} {...rest} disabled={hasError}>
      {!labelText && icon}
      {labelText && !icon && <Text style={[styles.text, hasError && styles.hasError]}>{labelText}</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.PINK_700,
  },
  hasError: {
    color: colors.GRAY_200,
  },
});

export { HeaderButton };
