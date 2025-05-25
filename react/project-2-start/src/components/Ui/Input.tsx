import type { InputHTMLAttributes } from 'react';
interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...rest }: IProps) => {
  return (
    <input
      {...rest}
      className="rounded-md border border-gray-300 p-3 shadow-md focus:border-indigo-500
        focus:ring-1 focus:ring-indigo-500 focus:outline-none text-md"
    />
  );
};

export default Input;
