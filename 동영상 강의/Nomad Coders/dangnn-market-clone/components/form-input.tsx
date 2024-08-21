import { ComponentPropsWithoutRef } from 'react';

type FormInputProps = ComponentPropsWithoutRef<'input'> & {
  errors: string[];
};

export const FormInput = ({ type, placeholder, required, errors }: FormInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <input
        className="px-3 bg-transparent rounded-md w-full h-10 focus:outline-none ring-1 focus:ring-2 ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400 transition"
        type={type}
        placeholder={placeholder}
        required={required}
      />
      {errors.map((error, index) => (
        <span key={index} className="text-red-500 font-medium">
          {error}
        </span>
      ))}
    </div>
  );
};
