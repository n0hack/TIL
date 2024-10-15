import { Dimensions, Pressable, StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { colors } from '@/constants';
import { forwardRef, useRef } from 'react';
import { mergeRefs } from '@/utils';

interface InputFieldProps extends TextInputProps {
  disabled?: boolean;
  error?: string;
  touched?: boolean;
}

const deviceHeight = Dimensions.get('screen').height;

const InputField = forwardRef<TextInput, InputFieldProps>(({ disabled = false, error, touched, ...rest }, ref) => {
  const innerRef = useRef<TextInput>(null);

  const handlePressInput = () => {
    innerRef.current?.focus();
  };

  return (
    <Pressable onPress={handlePressInput}>
      <View style={[styles.container, disabled && styles.disabled, touched && !!error && styles.inputError]}>
        <TextInput
          ref={ref ? mergeRefs(innerRef, ref) : innerRef}
          style={[styles.input, disabled && styles.disabled]}
          editable={!disabled}
          autoCapitalize="none"
          spellCheck={false}
          autoCorrect={false}
          placeholderTextColor={colors.GRAY_500}
          {...rest}
        />
        {touched && !!error && <Text style={styles.error}>{error}</Text>}
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.GRAY_200,
    padding: deviceHeight > 700 ? 15 : 10,
  },
  input: {
    fontSize: 16,
    color: colors.BLACK,
    padding: 0,
  },
  disabled: {
    backgroundColor: colors.GRAY_200,
    color: colors.GRAY_700,
  },
  inputError: {
    borderWidth: 1,
    borderColor: colors.RED_300,
  },
  error: {
    color: colors.RED_500,
    fontSize: 12,
    paddingTop: 5,
  },
});

export { InputField };
