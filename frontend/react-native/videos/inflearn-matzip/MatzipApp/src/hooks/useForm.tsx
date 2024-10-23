import { useEffect, useState } from 'react';

type UseFormProps<T> = {
  initialValue: T;
  validate: (values: T) => Record<keyof T, string>;
};

export const useForm = <T,>({ initialValue, validate }: UseFormProps<T>) => {
  const [values, setValues] = useState(initialValue);
  const [touched, setTouched] = useState<Record<keyof T, boolean>>(
    {} as Record<keyof T, boolean>,
  );
  const [errors, setErrors] = useState<Record<keyof T, string>>(
    {} as Record<keyof T, string>,
  );

  const handleChangeText = (key: keyof T) => (text: string) => {
    setValues({ ...values, [key]: text });
  };

  const handleBlur = (key: keyof T) => {
    setTouched({ ...touched, [key]: true });
  };

  const getTextInputProps = (key: keyof T) => {
    const value = values[key];
    const onChangeText = handleChangeText(key);
    const onBlur = () => handleBlur(key);

    return {
      value,
      onChangeText,
      onBlur,
    };
  };

  useEffect(() => {
    const newErrors = validate(values);
    setErrors(newErrors);
  }, [validate, values]);

  return {
    values,
    errors,
    touched,
    getTextInputProps,
  };
};
