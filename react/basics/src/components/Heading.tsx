import { ReactNode } from "react";

const Heading = (props: { children: ReactNode }) => {
  const { children } = props;

  return (
    <h1 className="text-3xl font-bold text-center text-gray-800">{children}</h1>
  );
};

export default Heading;
