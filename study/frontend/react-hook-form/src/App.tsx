import { forwardRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Path, SubmitHandler, UseFormRegister, useForm } from 'react-hook-form';
import SchemaValidation from './tutorials/SchemaValidation';
import './tutorials/yup';

interface IFormValues {
  'First Name': string;
  Age: number;
}

type InputProps = {
  label: keyof IFormValues;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <>
      <label>{props.label}</label>
      <input {...props.register(props.label, { required: props.required })} />
    </>
  );
});

const Select = forwardRef<HTMLSelectElement, { label: string } & ReturnType<UseFormRegister<IFormValues>>>(
  ({ label, onBlur, name, onChange }, ref) => {
    return (
      <>
        <label>{label}</label>
        <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </>
    );
  }
);

function App() {
  return <SchemaValidation />;
}

export default App;
