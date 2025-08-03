interface IProps extends React.HTMLAttributes<HTMLSpanElement> {
  color: string;
}

const CircleColor = ({ color, ...rest }: IProps) => {
  return (
    <span
      className={'w-5 h-5 rounded-full block cursor-pointer'}
      style={{ backgroundColor: color }}
      {...rest}
    ></span>
  );
};

export default CircleColor;
