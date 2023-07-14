import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

type SchemaValidationProps = {};

type FormValues = {
  firstName: string;
  age: number;
};

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().required().positive().integer(),
  })
  .required();

const SchemaValidation = ({}: SchemaValidationProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<FormValues>({ mode: 'onSubmit', resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    clearErrors('age');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName')} />
      <p>{errors.firstName?.message}</p>

      <input {...register('age')} />
      <p>{errors.age?.message}</p>

      <input type="submit" />
    </form>
  );
};

export default SchemaValidation;
