import { ComponentPropsWithoutRef } from 'react';

type FormButtonProps = ComponentPropsWithoutRef<'button'> & {
  loading: boolean;
  text: string;
};

export const FormButton = ({ loading, text }: FormButtonProps) => {
  return (
    <button
      className="primary-btn h-10 disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed"
      disabled={loading}
    >
      {loading ? '로딩 중...' : text}
    </button>
  );
};
