import type { HTMLAttributes } from 'react';

interface IProps extends HTMLAttributes<HTMLSpanElement> {
  color: string;
}

const CircleColor = ({ color, ...rest }: IProps) => {
  return (
    <span
      className={'w-5 h-5 rounded-full block'}
      style={{ backgroundColor: color }}
      {...rest}
    ></span>
  );
};

export default CircleColor;
