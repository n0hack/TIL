import { Dimensions, Pressable, PressableProps, StyleSheet, Text, View } from 'react-native';
import { colors } from '@/constants';

interface CustomButtonProps extends PressableProps {
  label: string;
  variant?: 'filled' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  inValid?: boolean;
}

const deviceHeight = Dimensions.get('screen').height;

const CustomButton = ({ label, variant = 'filled', size = 'large', inValid = false, ...rest }: CustomButtonProps) => {
  return (
    <Pressable
      disabled={inValid}
      style={({ pressed }) => [
        styles.container,

        pressed ? styles[`${variant}Pressed`] : styles[variant],
        inValid && styles.inValid,
      ]}
      {...rest}
    >
      <View style={styles[size]}>
        <Text style={[styles.text, styles[`${variant}Text`]]}>{label}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  inValid: {
    opacity: 0.5,
  },
  filled: {
    backgroundColor: colors.PINK_700,
  },
  outlined: {
    borderColor: colors.PINK_700,
    borderWidth: 1,
  },
  filledPressed: {
    backgroundColor: colors.PINK_500,
  },
  outlinedPressed: {
    borderColor: colors.PINK_700,
    borderWidth: 1,
    opacity: 0.5,
  },
  large: {
    width: '100%',
    paddingVertical: deviceHeight > 700 ? 15 : 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  medium: {
    width: '50%',
    paddingVertical: deviceHeight > 700 ? 12 : 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  small: {},
  text: {
    fontSize: 16,
    fontWeight: '700',
  },
  filledText: {
    color: colors.WHITE,
  },
  outlinedText: {
    color: colors.PINK_700,
  },
});

export { CustomButton };
