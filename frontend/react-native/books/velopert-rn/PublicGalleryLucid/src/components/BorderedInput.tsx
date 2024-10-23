import { forwardRef } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

type BorderedInputProps = TextInputProps & {
  hasMarginBottom?: boolean;
};

const BorderedInput = forwardRef<TextInput, BorderedInputProps>(
  ({ hasMarginBottom, ...rest }, ref) => {
    return (
      <TextInput
        style={[styles.input, hasMarginBottom && styles.margin]}
        ref={ref}
        {...rest}
      />
    );
  }
);

const styles = StyleSheet.create({
  input: {
    borderColor: '#bdbdbd',
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 4,
    height: 48,
    backgroundColor: 'white',
  },
  margin: {
    marginBottom: 16,
  },
});

export { BorderedInput };
